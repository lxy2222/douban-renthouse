const axios = require ('axios')
function getHouseList (url) {
  return axios({
    method: 'GET',
    url: url
  })
}
module.exports = {
  getHouseList: getHouseList
}