'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  // async login() {
  //   const { ctx } = this;
  //   ctx.body = "hi,xiao lei"
  // }

}

module.exports = HomeController;
