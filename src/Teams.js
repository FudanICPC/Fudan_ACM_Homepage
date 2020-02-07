import React, { Component } from 'react'
import { Anchor, Layout, Table, Typography } from 'antd'
import teamAll from './teamData'

const { Link } = Anchor
const { Title } = Typography

const split_render = function (text) { // 从文本中识别|用于换行
  let br = <br />
  if (text) {
    let items = text.toString().split('|')
    let result = items[0]
    for (let i = 1; i < items.length; i++) {
      result = <span>{result}{br}{items[i]}</span>
    }
    return <div>{result}</div>
  } else {
    return null
  }
}

const colums = [
  {
    title: 'Team',
    dataIndex: 'teamNumber',
    key: 'teamNumber',
    fixed: 'left',
    width: 70,
  },
  {
    title: 'Members',
    dataIndex: 'members',
    key: 'members',
    width: 200,
    render: split_render,
  },
  {
    title: 'GroupName',
    dataIndex: 'groupName',
    key: 'groupName',
    width: 200,
    render: split_render,
  },
  {
    title: 'Awards',
    dataIndex: 'awards',
    key: 'awards',
    width: 400,
    render: split_render,
  },
  { // 用于占位
    title: '',
    dataIndex: 'empty',
    key: 'empty',
  }
]

export default class extends Component {
  render() {
    return (
      <div className='main__container'>
        <div className='main__content'>
          <Layout>
            <Layout.Sider width = '100' breakpoint='lg' collapsedWidth='0' trigger={null} style={{ backgroundColor: '#ececec' }}>
              <Anchor affix={false}>
                {
                  teamAll.map((teamYear, idx) => {
                    return <Link href={'#' + teamYear.year.toString()} key={idx} title={teamYear.year.toString() + '赛季'} />
                  })
                }
              </Anchor>
            </Layout.Sider>
            <Layout.Content style={{ padding: 20 }}>
              {
                teamAll.map(teamYear => {
                  return (
                    <div id={teamYear.year} key={teamYear.year}>
                      <Title className='essay__title__h2' level={2}>{teamYear.year.toString() + '赛季'}</Title>
                      <Table columns={colums} dataSource={teamYear.teams} scroll={{ x: 150, y: 700 }} pagination={false} />
                    </div>
                  )
                })
              }
            </Layout.Content>
          </Layout>
        </div>
      </div>
    )
  }
}
