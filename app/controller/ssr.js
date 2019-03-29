'use strict';
const { Controller } = require('egg');

class SSRController extends Controller {
  async test(){
    const { ctx } = this;
    ctx.body = "hello world";
  }
  async post(){
    const { ctx, app } = this;
    const realPage = "/post";
    const queryParam = {title: ctx.params.id };
    const result = await app.clientApp.render(ctx.req,ctx.res,realPage, queryParam);
    return result;
  }
  async index(){
    const { ctx, app } = this;
    const handler = app.clientApp.getRequestHandler();
    const result = await handler(ctx.req, ctx.res, ctx.url);
    return result;
  }
}

module.exports = SSRController;