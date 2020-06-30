import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Join from './Join'
import About from './About'
import Teams from './Teams'
import Announcements from './Announcements'
import Announcement from './Announcement'
import Layout from './Layout'
import Homepage from './Homepage'

export default class extends Component {
  constructor(props) {
    super(props);
      this.state = {childrenMsg: ''};
  }

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/send'></Route>
            <Route path='/join'>
              <Join parent={this}/>
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/teams'>
              <Teams />
            </Route>
            <Route exact path='/announcement'>
              <Announcements />
            </Route>
            <Route path='/announcement/:announcementId'>
              <Announcement />
            </Route>
            <Redirect to='/' />
          </Switch>
        </Layout>
      </Router>
    )
  }
}
