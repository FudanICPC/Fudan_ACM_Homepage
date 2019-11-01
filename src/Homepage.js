import React, { Component } from 'react'
import { Steps } from 'antd'
import { Link } from 'react-router-dom'
import { Divider, List, Card, Typography } from 'antd'

const { Title, Text } = Typography
const { Step } = Steps

class YearDiv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0 // 默认显示最新的一年
    }
  }
  render() {
    let current = this.state.current
    return (
      <div style={{ maxWidth: '1000px', margin: 'auto', marginTop: '10px' }}>
        <Steps current={current} progressDot style={{ overflowX: 'auto', paddingTop: '10px' }}>
          <Step title='2019' onClick={() => this.setState({ current: 0 })}
            description='World Final@Porto; Person@Xuanyu Wang, Mingjian Wu, Weiwei Sun, Minghong Gao' />
          <Step title='2018' onClick={() => this.setState({ current: 1 })}
            description='World Final@Peking; Person@Dongjian Tang, Zhihao Ma, Weiwei Sun, Xi Gao' />
          <Step title='2017' onClick={() => this.setState({ current: 2 })}
            description='World Final@Rapid City; Person@Dongjian Tang, Zhihao Ma, Weiwei Sun, Xi Gao' />
          <Step title='2016' onClick={() => this.setState({ current: 3 })}
            description='World Final@Phuket; Person@Ziyang Chen, Jinyue Su, Weiwei Sun, Haoming Xing' />
          <Step title='2015' onClick={() => this.setState({ current: 4 })}
            description='World Final@Marrakesh; Person@Haoming Xing, Yanming Liu, Weiwei Sun, Yue Yang' />
          <Step title='2014' onClick={() => this.setState({ current: 5 })}
            description='World Final@Екатеринбу́рг; Person@Ziyang Chen, Lu Liu, Weiwei Sun, Qilin Dong' />
          <Step title={<Link to={location => ({ ...location, pathname: '/announcement' })}>see more</Link>} />
        </Steps>
        <div style={{ marginTop: 20, marginLeft: 'auto', marginRight: 'auto', width: '80%' }}>
          <img src={`source/final${2019 - current}.jpg`} alt={`final${2019 - current}`} style={{
            width: '100%',
            height: 'auto'
          }} />
        </div>
      </div>
    )
  }
}

const sponsor = [
  {
    name: 'google',
    image: '/source/google.png'
  },
  {
    name: 'uisee',
    image: '/source/uisee.png'
  },
  {
    name: 'bytedance',
    image: '/source/bytedance.jpg'
  },
  {
    name: 'tencent',
    image: '/source/tencent.jpg'
  },
]

export default class extends Component {
  render() {
    console.log('欢迎来到Fudan ACM-ICPC队主页。Create by lzmhhh123，https://github.com/lzmhhh123')
    console.log('Update by ztx97，https://github.com/zhangtianxiang')
    return (
      <div>
        <Divider><Title level={1} className='essay__title__h1'>复旦大学ICPC</Title></Divider>
        <div style={{ textAlign: 'center' }}>
          <Text className='essay__text'>欢迎光临复旦大学ACM-ICPC队官方主页<br />
            复旦大学ACM-ICPC队是一支有优良传统和光辉历史的竞赛队伍<br />
            未来，复旦大学ACM-ICPC队将再接再厉，为学校赢得更多的荣誉</Text>
        </div>
        <Divider><Title level={1} className='essay__title__h2'>我们的历程</Title></Divider>
        <YearDiv />
        <div className='footer'>
          <p>感谢以下赞助（排名不分先后）</p>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
            dataSource={sponsor}
            renderItem={item => (
              <List.Item style={{ height: '100px' }}>
                <div className='sponsor'>
                  <Card
                    style={{ width: '80%', height: '100%', backgroundColor: 'rgba(0,0,0,0)', margin: 'auto', position: 'absolute', left: '0', right: '0', top: '0', bottom: '0' }}
                    bordered={false}
                    cover={
                      <div style={{ height: '100px', lineHeight: '100px' }}>
                        <img alt={item.name} src={item.image} style={{ maxWidth: '100%', maxHeight: '100px' }} />
                      </div>
                    }
                  />
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}
