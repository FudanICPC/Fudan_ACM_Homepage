/**
 * 本文件用于维护teamData下的历年队伍信息及展示顺序
 * 队伍名和荣誉可以通过|换行
 */

////////////////////////////////////////
//          使用者编辑以下内容
////////////////////////////////////////
// 导入需要展示的队伍信息
import team2019 from './2019.js'
// 安排展示顺序
let teamAll = [team2019]
////////////////////////////////////////

teamAll.forEach(teamYear => {
  teamYear.teams.forEach((team, idx) => {
    team.key = idx
    team.teamNumber = idx
  })
})

export default teamAll