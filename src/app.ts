import * as koa from 'koa';
import * as views from 'koa-views';
import { resolve } from 'path';

const app = new koa();

app.use(views(resolve(__dirname, '../views'), { extension: 'pug' }));

app.use(async (ctx: koa.Context, next) => {
  await ctx.render('index', {
    you: '张三111',
    me: '李四111',
  });
});

export default app;
