import React, { Component } from 'react'
import { Layout, Anchor, Divider, Typography } from 'antd'

const { Link } = Anchor
const { Title, Paragraph } = Typography

export default class extends Component {
  render() {
    return (
      <div className='main__container'>
        <div className='main__content'>
          <Layout style={{ backgroundColor: '#ececec' }}>
            <Layout.Sider breakpoint='lg' collapsedWidth='0' trigger={null} style={{ backgroundColor: '#ececec' }}>
              <Anchor affix={false}>
                <Link href='#pc' title='大学生程序设计竞赛'>
                  <Link href='#icpc' title='ICPC竞赛' />
                  <Link href='#ccpc' title='CCPC竞赛' />
                </Link>
                <Link href='#fdupct' title='复旦大学程序设计竞赛队' />
              </Anchor>
            </Layout.Sider>
            <Layout.Content className='sub__content'>
              <Title className='essay__title__h1' level={1} id='pc'>大学生程序设计竞赛</Title>
              <Paragraph className='essay__text'>
                大学生程序设计竞赛是一项旨在锻炼展示大学生逻辑思维能力、创新能力、团队精神和在压力下编写程序、分析和解决问题能力的年度竞赛。由三人组成的团队代表他们的大学参赛，致力于解决最现实的问题，培养合作能力、创新能力以及承受压力的能力。通过训练和比赛，队员互相竞争，提高自己的水平。
                </Paragraph>
              <Paragraph className='essay__text'>
                大学生程序设计竞赛以团队的形式代表各学校参赛，每队由三名队员组成。
                </Paragraph>
              <Paragraph className='essay__text'>
                比赛期间，每队使用1台电脑需要在5个小时内使用Java、C、C++、Kotlin或Python等编程语言（不同赛区有着不同可选语言）编写程序解决8到13个问题。程序完成之后提交裁判运行，运行的结果会判定为“AC（正确）/WA（错误）/TLE（超时）/MLE（超出内存限制）/RE（运行错误）/PE（格式错误）”中的一种并及时通知参赛队。每队在正确完成一题后，组织者将在其位置上升起一只代表该题颜色的气球。
                </Paragraph>
              <Paragraph className='essay__text'>
                最后的获胜者为正确解答题目最多且总用时最少的队伍。每道试题用时将从竞赛开始到试题解答被判定为正确为止，其间每一次提交运行结果被判错误的话将被加罚20分钟时间，未正确解答的试题不记时。例如：A、B两队都正确完成两道题目，其中A队提交这两题的时间分别是比赛开始后1:00和2:45，B队为1:20和2:00，但B队有一题提交了2次。这样A队的总用时为1:00+2:45=3:45而B队为1:20+2:00+0:20=3:40，所以B队以总用时少而获胜。
                </Paragraph>
              <Paragraph className='essay__text'>
                与其它计算机程序竞赛（例如国际信息学奥林匹克，IOI）相比，大学生程序设计竞赛的特点在于其为三人团队作战且题量大，每队需要5小时内完成8道题目，甚至更多。除此之外，一支队伍有三名队员却只有一台电脑，使得时间显得更为紧张。因此除了扎实的编程能力，良好的团队协作和心理素质同样是获胜的关键。
                </Paragraph>
              <Title className='essay__title__h2' level={2} id='icpc'>ICPC竞赛</Title>
              <Paragraph className='essay__text'>
                国际大学生程序设计竞赛（International Collegiate Programming Contest，ICPC）是世界各大学之间一年一度的多层次竞争性编程竞赛。经过30多年的发展，ICPC已经发展成为最具影响力的大学生计算机竞赛。赛事之前仅由IBM公司赞助，2017年新增JetBrains公司赞助，2018年起，国际计算机学会（ACM）不再赞助ICPC。
                </Paragraph>
              <Paragraph className='essay__text'>
                竞赛的历史可以上溯到1970年，当时在美国德克萨斯A&M大学举办了首届比赛。当时的主办方是the Alpha Chapter of the UPE Computer Science Honor Society。作为一种全新的发现和培养计算机科学顶尖学生的方式，竞赛很快得到美国和加拿大各大学的积极响应。1977年，在ACM计算机科学会议期间举办了首次总决赛，并演变成为当前的一年一届的多国参与的国际性比赛。迄今已经举办了35届。
                </Paragraph>
              <Paragraph className='essay__text'>
                最初几届比赛的参赛队伍主要来自美国和加拿大，后来逐渐发展成为一项世界范围内的竞赛。特别是自1997年IBM开始赞助赛事之后，赛事规模增长迅速。1997年，总共有来自560所大学的840支队伍参加比赛。而到了2004年，这一数字迅速增加到840所大学的4109支队伍并以每年10-20%的速度在增长。
                </Paragraph>
              <Paragraph className='essay__text'>
                1980年代，ICPC的总部改设在位于美国德克萨斯州的贝勒大学。
                </Paragraph>
              <Paragraph className='essay__text'>
                在赛事的早期，冠军多为美国和加拿大的大学获得。而进入1990年代后期以来， 俄罗斯和其它一些东欧国家的大学连夺数次冠军。来自中国大陆的上海交通大学代表队则在2002年美国夏威夷的第26届、2005年上海的第29届以及2010年哈尔滨的第34届全球总决赛上三次获得冠军。这也是当前为止亚洲大学在该竞赛上获取的最好成绩。赛事的竞争格局已经由最初的北美大学一枝独秀演变成当前的亚欧对抗的局面。
                </Paragraph>
              <Paragraph className='essay__text'>
                赛事由各大洲区域预赛（regional）和全球总决赛（worldfinal）两个主要阶段组成。根据各赛区规则，每站前若干名的学校自动获得参加全球总决赛的资格。决赛安排在每年的3-4月举行，而区域预赛一般安排在上一年的9-12月举行。一个大学可以有多支队伍参加区域预赛，但只能有一支队伍参加全球总决赛。
                </Paragraph>
              <Paragraph className='essay__text'>
                全球总决赛第一名将获得奖杯一座。另外，成绩靠前的参赛队伍也将获得金、银和铜牌，而解题数在中等以下的队伍会得到确认但不会进行排名。
                </Paragraph>
              <Title className='essay__title__h2' level={2} id='ccpc'>CCPC竞赛</Title>
              <Paragraph className='essay__text'>
                中国大学生程序设计竞赛（China Collegiate Programming Contest， CCPC）是由教育部高等学校计算机类专业教学指导委员会主办的面向全国高校大学生的年度学科竞赛。CCPC得到了诸多企业的支持，2015年欢乐互娱赞助，2016年金山赞助，2017年旷视科技和吉比特赞助，2018年旷视科技为总赞助，腾讯、快手、字节跳动为金牌赞助。CCPC将进一步深化与相关企业的合作。
                </Paragraph>
              <Paragraph className='essay__text'>
                CCPC借鉴了ICPC的规则与组织模式。CCPC以规范和完善中国大学生程序设计竞赛赛事体系为已任，开展具有中国特色的大学生程序设计竞赛，把竞赛融入中国高校人才培养体系，规范办赛，高水平办赛，维护赛事的公平公正，促进高校教学改革，丰富高校人才培养内涵。
                </Paragraph>
              <Paragraph className='essay__text'>
                首届CCPC于2015年10月在南阳理工学院举办，共有来自136所大学的245支队伍参赛。从2016年第二届CCPC开始，每年春季组织若干场省赛和地区赛、一场女生专场赛，秋季组织一场网络选拔赛、三场全国分站赛和一场总决赛，通过网络选拔赛确定分站赛晋级名额，由三场分站赛确定总决赛晋级名额。
                </Paragraph>
              <Paragraph className='essay__text'>
                中国大学生程序设计竞赛首届全国总决赛于2015年10月17-18日在南阳理工学院举行，北京大学、清华大学、复旦大学、上海交通大学、浙江大学、哈尔滨工业大学、中山大学等130多所高校240多支队伍参加了比赛，国内所有在程序设计全球总决赛中获得金银铜奖的学校都派出最强队伍参加了这场比赛。
                </Paragraph>
              <Divider />
              <Title className='essay__title__h1' level={1} id='fdupct'>复旦大学程序设计竞赛队</Title>
              <Paragraph className='essay__text'>
                复旦大学程序设计竞赛队是一支有优良传统和光辉历史的竞赛队伍，它满载着光辉与荣誉，洋溢着活力与热情。在过去的几年里，竞赛队的队员曾代表我校多次参加国际大学生程序设计竞赛和国际大学生程序设计竞赛亚洲区域赛，屡获佳绩，曾两次获得世界大学生程序设计竞赛银牌，多次铜牌，亚洲区域预选赛金牌数不胜数。在过去的三年中，队员们再创佳绩，一队次获得ICPC世界总决赛第八名（银牌），一队次获得ICPC世界总决赛第十二名（铜牌），一队次获得ICPC亚洲区域赛香港赛区冠军，多队次获亚洲区预赛赛区金牌和CCPC总决赛金牌。未来，复旦大学程序设计竞赛队将再接再厉，为学校赢得更多的荣誉！
                </Paragraph>
            </Layout.Content>
          </Layout>
        </div>
      </div>
    )
  }
}
