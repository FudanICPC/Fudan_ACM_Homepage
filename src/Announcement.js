import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { withRouter } from 'react-router-dom'
import { mdFiles } from './announcementData'

/**
 * 展示markdown文件的具体内容
 */

class Announcement extends Component {
  constructor(props) {
    super(props)
    let announcementId = this.props.match.params.announcementId
    this.state = {
      announcementId: announcementId,
      markdown: ''
    }
  }
  UNSAFE_componentWillMount() {
    try {
      fetch(mdFiles(this.state.announcementId))
        .then(res => res.text())
        .then(text => this.setState({ markdown: text }))
    } catch (err) {
      if (err.code === 'MODULE_NOT_FOUND')
        this.setState({ markdown: '# 错误\n文章《' + this.state.announcementId + '》不存在\n' })
      else
        this.setState({ markdown: '# 错误\n未知错误\n' })
    }
  }
  render() {
    return (
      <div className='markdown'>
        <div className='main__container'>
          <div className='main__content'>
            <ReactMarkdown
              source={this.state.markdown}
              escapeHtml={false}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Announcement)