import React, { Component } from 'react'
import axios from 'axios'
import { Form, Input, Select, Button, Typography } from 'antd'
import 'antd/dist/antd.css'
import './css/index.css'

var debounce = require('debounce')

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
        this.handleSubmit = debounce(this.handleSubmit, 5000)
    }

    onReset = () => {
        this.formRef.current.resetFields();
    }

    onFinish = (values) => {
        this.handleSubmit(values)
    }

    handleSubmit = values => {
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
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
        })
    }

    render() {
      return (
        <div className='main__container'>
            <div className='main__content'>
                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
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
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" >
                            提交
                        </Button>
                        <Button type="button" onClick="this.onReset" >
                            重置
                        </Button>

                    </Form.Item>
                </Form>
            </div>
        </div>
      );
    }
}