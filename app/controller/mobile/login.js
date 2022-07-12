'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async add() {
    const { ctx } = this;

   console.log("query",ctx.query);

   const {username,password,phone } =ctx.request.body;

   await  ctx.model.Login.create({
    username,
    password,
    phone,
   })
    ctx.body = '添加成功';
  }


}

module.exports = HomeController;