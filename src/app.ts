import * as koa from 'koa';
import * as pug from 'pug';
import tpl from './tpl';

const { ejs: ejsTpl, pug: pugTpl } = tpl;

const app = new koa();

app.use(async (ctx: koa.Context, next) => {
  ctx.body = pug.render(pugTpl, {
    you: '张三',
    me: '李四',
  });
});

export default app;
