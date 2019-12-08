import React, { Component } from 'react'
import { Layout, Menu, Button, Drawer, Icon, BackTop } from 'antd'
import { withRouter } from 'react-router'

class RightMenu extends Component {
  constructor(props) {
    super(props)
    this.clickNav = this.clickNav.bind(this)
  }
  clickNav(item) {
    if (item.key === 'OpenJudge') {
      window.open('http://icpc.fudan.edu.cn')
    } else if (item.key === 'homepage') {
      this.props.history.push('/')
    } else {
      this.props.history.push(item.key)
    }
  }
  render() {
    return (
      <Menu
        mode={this.props.mode}
        onClick={this.clickNav}
        selectedKeys={[this.props.location.pathname]}
      >
        <Menu.Item key='/' className='menuItem'>首页</Menu.Item>
        <Menu.Item key='/announcement' className='menuItem'>通知公告</Menu.Item>
        <Menu.Item key='/teams' className='menuItem'>我们的队伍</Menu.Item>
        <Menu.Item key='/about' className='menuItem'>关于我们</Menu.Item>
        <Menu.Item key='OpenJudge' className='menuItem'>OpenJudge</Menu.Item>
      </Menu>
    );
  }
}

class Navbar extends Component {
  state = {
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }
  onClose = () => {
    this.setState({
      visible: false,
    })
  }
  onClick = () => {
    this.setState({
      visible: false,
    })
  }
  render() {
    return (
      <nav className='menu'>
        <a className='menu__logo' href='/' onClick={(e) => { e.preventDefault(); this.props.history.push('/') }}>
          <img src='/source/fudan.png' alt='fudan' height={32} width={32} style={{ marginTop: 16 }} />
          <img src='/source/acm.png' alt='acm' height={48} width={80} style={{ marginTop: 16, marginLeft: 10 }} />
        </a>
        <div className='menu__container'>
          <div className='menu_rigth'>
            <RightMenu history={this.props.history} location={this.props.location} mode='horizontal' />
          </div>
          <Button className='menu__mobile-button' type='primary' onClick={this.showDrawer}>
            <Icon type='align-right' />
          </Button>
          <Drawer
            title='复旦大学程序设计竞赛'
            placement='left'
            className='menu_drawer'
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            onClick={this.onClick}
          >
            <RightMenu history={this.props.history} location={this.props.location} mode='inline' />
          </Drawer>
        </div>
      </nav>
    );
  }
}

class AppLayout extends Component {
  render() {
    return (
      <Layout style={{ backgroundColor: 'white' }}>
        <Layout.Header className='main__header' style={{ padding: '0' }}>
          <Navbar history={this.props.history} location={this.props.location} />
          <BackTop />
        </Layout.Header>
        <Layout.Content>
          {this.props.children}
        </Layout.Content>
      </Layout>
    )
  }
}

export default withRouter(AppLayout)