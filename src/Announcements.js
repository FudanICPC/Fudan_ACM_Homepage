import React, { Component } from 'react'
import { List, Typography } from 'antd'
import { contents } from './announcementData'

const { Title } = Typography

/**
 * 按照contents制作通知列表
 */

export default class extends Component {
  constructor(props) {
    super(props)
    let top_announce = []
    let announce = []
    for (const key in contents) {
      const e = contents[key]
      if (e.isHide) {
        continue
      }
      if (!e.title) {
        console.log(key, 'need title')
        continue
      }
      if (!e.postTime) {
        console.log(key, 'need postTime')
        continue
      }
      e.postTimeDate = new Date(e.postTime)
      if (e.postTimeDate.toString() === 'Invalid Date') {
        console.log(key, 'invalid postTime, format YYYY-MM-DD or YYYY-MM-DD hh:mm:ss')
        continue
      }
      e.link = '/announcement/' + key
      announce.push(e)
      if (e.isTop) {
        top_announce.push(e)
      }
    }
    top_announce.sort((e1, e2) => e2.postTimeDate - e1.postTimeDate)
    announce = announce.sort((e1, e2) => e2.postTimeDate - e1.postTimeDate) //* 注意应该返回正负数和0
    this.state = {
      top_announce: top_announce,
      announce: announce
    }
  }
  render() {
    const { top_announce, announce } = this.state
    return (
      <div className='main__container'>
        <div className='main__content'>
          {top_announce.length > 0 &&
            <List
              className='sub__content'
              itemLayout='vertical'
              size='small'
              bordered={true}
              header={<Title className='essay__title__h2' level={2}> 置顶 </Title>}
              dataSource={top_announce}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  extra={item.image &&
                    <img style={{ maxWidth: 250 }} alt='announcement' src={item.image} />
                  }
                >
                  <List.Item.Meta
                    title={<a href={item.link}>{item.title}</a>}
                    description={item.postTime}
                  />
                  {item.description}
                </List.Item>
              )}
            />
          }
          <List
            className='sub__content'
            itemLayout='vertical'
            size='small'
            bordered={true}
            header={<Title className='essay__title__h2' level={2}> 最新 </Title>}
            pagination={{ pageSize: 5, position: 'bottom' }}
            dataSource={announce}
            renderItem={item => (
              <List.Item
                extra={item.image &&
                  <img style={{ maxWidth: 250 }} alt='announcement' src={item.image} />
                }
              >
                <List.Item.Meta
                  title={<a href={item.link}>{item.title}</a>}
                  description={item.postTime}
                />
                {item.description}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}