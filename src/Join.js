import React, { Component } from 'react'
import axios from 'axios'
import { Form, Input, Select, Button, Typography } from 'antd'
import 'antd/dist/antd.css'
import './css/index.css'

const { Option } = Select
const { Title } = Typography

const layout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 10,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export default class extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props)
        this.state = {
            code: "",
            codeLength: 4,
            fontSizeMin: 25,
            fontSizeMax: 30,
            colorMin: 10,
            colorMax: 20,
            lineColorMin: 100,
            lineColorMax: 180,
            contentWidth: 90,
            contentHeight: 30,
        }
    }
   
    componentWillMount() {
      this.canvas = React.createRef()
    }
   
    componentDidMount() {
      this.drawPic()
    }
   
    randomNum = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min)
    };
   
    randomColor(min, max) {
      const r = this.randomNum(min, max)
      const g = this.randomNum(min, max)
      const b = this.randomNum(min, max)
      return `rgb(${r}, ${g}, ${b})`
    }
   
    drawText(captcha, txt, i) {
      captcha.fillStyle = this.randomColor(this.state.colorMin, this.state.colorMax)
      const fontSize = this.randomNum(this.state.fontSizeMin, this.state.fontSizeMax)
      captcha.font = `${fontSize}px SimHei`
      const offset = (this.state.contentWidth - 30) / (this.state.code.length - 1)
      let x = 10 + i * offset
      let y = this.randomNum(this.state.fontSizeMax, this.state.contentHeight - 5)
      const deg = this.randomNum(-10, 10)
      captcha.translate(x, y)
      captcha.rotate((deg * Math.PI) / 180)
      captcha.fillText(txt, 0, 0)
      captcha.rotate((-deg * Math.PI) / 180)
      captcha.translate(-x, -y)
    }
   
    drawLine(captcha) {
      for (let i = 0; i < 5; i++) {
        captcha.strokeStyle = this.randomColor(this.state.lineColorMin, this.state.lineColorMax)
        captcha.beginPath();
        captcha.moveTo(this.randomNum(0, this.state.contentWidth), this.randomNum(0, this.state.contentHeight))
        captcha.lineTo(this.randomNum(0, this.state.contentWidth), this.randomNum(0, this.state.contentHeight))
        captcha.stroke()
      }
    }
   
    drawDot(captcha) {
      for (let i = 0; i < 100; i++) {
        captcha.fillStyle = this.randomColor(0, 255)
        captcha.beginPath();
        captcha.arc(
          this.randomNum(0, this.state.contentWidth),
          this.randomNum(0, this.state.contentHeight),
          1, 0, 2 * Math.PI
        );
        captcha.fill()
      }
    }
   
    reloadPic = () => {
      this.drawPic();
    }

    drawPic() {
        let random = "";
        const str = "ABCDEFGHJKLMNPQRSTUVWXYZ";
        for (let i = 0; i < this.state.codeLength; i++)
            random += str[Math.floor(Math.random() * 24)]
        this.setState(
            {
                code: random, 
            },
            () => {
                const canvas = this.canvas.current
                const captcha = canvas.getContext("2d")
                captcha.textBaseline = "bottom"
                captcha.fillStyle = `rgb(250, 250, 250)`
                captcha.fillRect(0, 0, this.state.contentWidth, this.state.contentHeight)
                for (let i = 0; i < this.state.code.length; i++)
                    this.drawText(captcha, this.state.code[i], i)
                this.drawLine(captcha)
                this.drawDot(captcha)
            }
        )
    }

    onReset = () => {
        this.formRef.current.resetFields()
        this.reloadPic()
    }

    onFinish = (values) => {
        if (values.captchaCode.toLowerCase() === this.state.code.toLowerCase()) {
            axios.post('/send', { 
                data : values
            }
            ).then((response)=>{
                if (response.data.msg === 'success'){
                    alert('提交成功！\n我们将尽快通过acm@fudan.edu.cn联系您。\n如有任何问题或一周内未收到联系邮件，欢迎邮件联系我们！感谢您的投递:)')
                    this.onReset()
                } else if (response.data.msg === 'fail'){
                    alert('请重新提交。')
                }
            }).catch(function (error) {
                if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
                } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request)
                } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message)
                }
                console.log(error.config)
            })
            this.reloadPic()
        } else {
            this.reloadPic()
            this.formRef.current.resetFields(['captchaCode'])
        }
        console.log(values.captchaCode,' ', this.state.code)
    }

    onFinishFailed = (values) => {
        this.reloadPic()
    }

    render() {
      return (
        <div className='main__container'>
            <div className='main__content'>
                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish} onFinishFailed={this.onFinishFailed} >
                    <Title>复旦大学程序设计竞赛队报名</Title>
                    <small>如有任何问题，欢迎邮件acm@fudan.edu.cn联系我们！</small>
                    <br/><br/>
                    <Form.Item
                        name="username"
                        label="姓名"
                        rules={[
                            {
                                required: true, message: '请填写姓名',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="studentid"
                        label="学号"
                        rules={[
                            {
                                required: true, message: '请填写学号',
                            },
                        ]}
                    >
                        <Input placeholder="如新生暂无学号，请输入000" />
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        label="性别"
                        rules={[
                            {
                                required: true, message: '请选择性别',
                            },
                        ]}
                    >
                        <Select
                        >
                            <Option value="male">男</Option>
                            <Option value="female">女</Option>
                            <Option value="other">其他</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="highschool"
                        label="毕业高中"
                        rules={[
                            {
                                required: true, message: '请填写毕业高中',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="major"
                        label="专业"
                        rules={[
                            {
                                required: true, message: '请填写专业',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="experience"
                        label="竞赛或相关经历"
                    >
                        <Input.TextArea/>
                    </Form.Item>
                    <Form.Item
                        name="introduction"
                        label="个人介绍"
                        rules={[
                            {
                                required: true, message: '请填写个人介绍',
                            },
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        name="cellphone"
                        label="手机号"
                        rules={[
                            {
                                required: true, message: '请填写手机号',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="wechat"
                        label="微信"
                        rules={[
                            {
                                required: true, message: '请填写微信号',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="邮箱"
                        rules={[
                            {
                                required: true, message: '请填写邮箱',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="captchaCode"
                        label="验证码"
                        rules={[
                            {
                                required: true, message: '请输入验证码'
                            },
                        ]}
                    >
                        <Input 
                            suffix={<canvas onClick={this.reloadPic} ref={this.canvas} width="90" height="28" />}
                            placeholder="请输入验证码"
                        />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" >
                            提交
                        </Button>
                        <Button type="button" onClick={this.onReset} >
                            重置
                        </Button>

                    </Form.Item>
                </Form>
            </div>
        </div>
      );
    }
}