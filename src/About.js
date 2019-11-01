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
                <Link href='#icpc' title='ICPC竞赛' />
                <Link href='#aboutus' title='校队介绍' />
              </Anchor>
            </Layout.Sider>
            <Layout.Content className='sub__content'>
              <div id='icpc'>
                <Title className='essay__title__h1' level={1}>ICPC竞赛</Title>
                <Paragraph className='essay__text'>
                  ACM国际大学生程序设计竞赛（ACM-ICPC或ICPC）是由美国计算机协会（ACM）主办的，一项旨在展示大学生创新能力、团队精神和在压力下编写程序、分析和解决问题能力的年度竞赛。经过近30多年的发展，ACM国际大学生程序设计竞赛已经发展成为最具影响力的大学生计算机竞赛。
                </Paragraph>
                <Title className='essay__title__h2' level={2}>历史</Title>
                <Paragraph className='essay__text'>
                  ACM-ICPC的历史可以上溯到1970年，首届比赛是在美国德克萨斯A&M大学举办的。当时比赛的主办方是the Alpha Chapter of the UPE Computer Science Honor Society。作为一种全新的发现和培养计算机科学顶尖学生的方式，竞赛很快得到美国和加拿大各大学的积极响应。1977年，在ACM计算机科学会议期间举办了首次总决赛，并演变成为目前的一年一届的国际性比赛，迄今为止已经成功地举办了33届。ACM-ICPC最初几届的参赛队伍主要来自美国和加拿大，后来逐渐发展成为一项世界范围内的竞赛。自从ICPC等到了IBM等大型 IT公司的赞助之后，规模开始增长迅速。1997年，总共有来自560所大学的840支队伍参加了比赛，而到了2004年，这一数字迅速增加到840所大学的4109支队伍，并正在以每年10-20%的速度持续增长。从上世纪八十年代开始，ACM将ICPC的总部设在位于美国德克萨斯州的贝勒大学。在大赛举办的早期，冠军多为美国或加拿大的大学获得。而进入上世纪九十年代后期以来， 俄罗斯和其它一些东欧国家的大学连夺数次冠军。来自中国大陆的上海交通大学代表队则在2002年美国夏威夷第26届和2005年上海举行的第29届全球总决赛上两夺冠军。这也是目前为止亚洲大学在该竞赛上取得的最好成绩。赛事的竞争格局已经由最初的北美大学一枝独秀演变成目前亚欧对抗的局面。
                </Paragraph>
                <Title className='essay__title__h2' level={2}>规则简介</Title>
                <Paragraph className='essay__text'>
                  ACM-ICPC以学校为单位的团体赛。每支学校的代表队可以由三名队员组成，每位队员必须是入校五年以内的在校学生，每人一生最多可以参加两次全球总决赛和四次分区预选赛。比赛时，每支队伍只能使用一台电脑在五个小时内编写程序解决八到十个问题。程序完成之后将会提交给赛场的裁判运行，运行的结果将及时通知参赛队伍。有趣的是，当一支队伍在正确完成一道问题后，组委会将在其位置上升起一只代表该题颜色的气球。最后的获胜者为正确解答题目最多且总用时最少的队伍。每道试题用时将从竞赛开始到试题解答被判定为正确为止，其间每一次提交运行结果被判错误的话将被加罚20分钟时间，未正确解答的试题不予算入记时。例如：A、B两队都完成了两道题目，其中A队提交解答的时间分别是比赛开始后1:00和2:45，B队为1:20和2:00，但B队有一题提交了2次。这样A队的总用时为1:00+2:45=3:45而B队为1:20+2:00+0:20=3:40，所以B队总用时少而优于A队。与其它计算机程序竞赛（例如国际信息学奥林匹克，IOI）相比，ACM-ICPC的特点在于题量大，另外，每支队伍有三名队员却只有一台电脑，使得上机时间更加紧张。因此除了扎实的专业水平，良好的团队协作和心理素质同样是获胜的关键。
                </Paragraph>
                <Title className='essay__title__h2' level={2}>分区预选赛和全球总决赛</Title>
                <Paragraph className='essay__text'>
                  每届ACM-ICPC由各大洲的分区预选赛和全球总决赛两个阶段组成。各分区预选赛的第一名自动获得参加全球总决赛的资格。总决赛一般安排在每年的三、四月份举行，而预选赛一般安排在前一年的九到十二月份举行。每个大学可以有多支队伍参加不同的预选赛，但最多只能有一支队伍代表这个学校参加总决赛。全球总决赛的冠军将获得一座奖杯。此外，成绩靠前的参赛队伍也将分别获得金牌、银牌或铜牌。
                </Paragraph>
              </div>
              <Divider />
              <div id='aboutus'>
                <Title className='essay__title__h1' level={1}>校队介绍</Title>
                <Paragraph className='essay__text'>
                  复旦大学ACM队是一支有优良传统和光辉历史的竞赛队伍，它满载着光辉与荣誉，洋溢着活力与热情。在过去的几年里，竞赛队的队员曾代表我校多次参加ACM国际大学生程序设计竞赛和ACM大学生程序设计竞赛亚洲区域赛，屡获佳绩，曾两次获得世界大学生程序设计竞赛银牌，多次铜牌，亚洲区域预选赛金牌数不胜数。在刚刚过去的两年中，队员们再创佳绩，一队次获得ACM-ICPC世界第八名（银牌），一队次获得ACM-ICPC世界第十二名（铜牌），一队次获得ACM-ICPC亚洲区香港赛区冠军，9队次获亚洲区预赛赛区金牌，两队次获CCPC（中国大学生程序设计竞赛）总决赛金牌，并有多队次在亚洲预选赛中获得二等奖等优异成绩。未来，复旦大学ACM队将再接再厉，为学校赢得更多的荣誉！
                </Paragraph>
              </div>
            </Layout.Content>
          </Layout>
        </div>
      </div>
    )
  }
}
