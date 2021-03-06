/**
 * 本文件用于配置markdown文件的目录信息
 * 维护一个字典，键为文件名(不包含后缀！)
 * 对于文件'测试.md'的示例如下
 * '测试': {
 *     title:       '高大爷WF捧杯', // 主标题，必填
 *     postTime:    '2019-10-31', // 发布时间，必填，格式YYYY-MM-DD HH:MM:SS 默认按照发表时间倒序排序，时间部分选填
 *     description: '在2020年的ICPC世界总决赛上，高大爷队强势取得冠军', // 简介，选填，尽量控制在200字内，可截取新闻的第一段
 *     image:       '/source/acm.png' // 图片，选填，public之内的路径，应该以/开头！
 *     isTop:       false // 是否置顶，选填，默认false，置顶将会复制一份放在页面顶端
 *     isHide:      false // 是否隐藏，选填，默认false，隐藏后通过路径输入仍可访问！如果需要删除应该将文件删除！
 * }
 */

////////////////////////////////////////
//          使用者编辑以下内容
////////////////////////////////////////
const contents = {
  '计算机科学技术学院成功举办2019年复旦大学程序设计竞赛': {
    title: '计算机科学技术学院成功举办2019年复旦大学程序设计竞赛',
    postTime: '2019-12-10',
    description: '2019 年 12 月 7 日星期六，2019 年复旦大学程序设计竞赛在复旦大学邯郸校区成功举行。本次比赛由我校计算机科学技术学院主办，复旦大学程序设计竞赛队承办。',
    image: '/source/fdu-cpc-2019.jpg'
  },
  '2020年复旦大学程序设计竞赛': {
    title: '2020年复旦大学程序设计竞赛',
    postTime: '2020-11-06',
    description: '为了激发复旦大学学生对程序设计的兴趣，培养大学生的实践与创新能力，提高复旦大学程序设计竞赛活动的总体水平，推动复旦大学人才教育和电子信息能力培养的发展，特举办2020年复旦大学程序设计竞赛。',
    image: '/source/acm.png',
    isTop: 'True'
  },
}
////////////////////////////////////////

/**
 * 按照文件名称无法直接被访问，需要转为webpack中的id
 * 所以需要一个文件名到id的映射，这个映射即为require.context
 * 直接fetch id即可得到真正的md内容
 * 文件名的格式是 ./XXX.md 所以用一个函数包起来
 */
const mdContext = require.context('./', false, /\.md$/)
const mdFiles = fileName => mdContext('./' + fileName + '.md')

export { contents, mdFiles }