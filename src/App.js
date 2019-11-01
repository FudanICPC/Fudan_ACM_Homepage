import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import About from './About'
import Teams from './Teams'
import Announcements from './Announcements'
import Announcement from './Announcement'
import Layout from './Layout'
import Homepage from './Homepage'

export default class extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Homepage />
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
