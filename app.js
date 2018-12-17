const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const Router = require('koa-router')
const router = new Router()
const request = require('./request')
router.get('/house', async (ctx, next) => {
  let query = ctx.request.query
  let { q, field } = query
  let url = `https://www.douban.com/group/search?group=${field}&q=${q}`
  let result = await request.getHouseList(url)
  ctx.response.body = result
})
app.use(router.routes())
app.use(serve(__dirname + '/public'))
app.listen(3002, () => {
  console.log('listen on 3002')
})
