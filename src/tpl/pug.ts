export default `
doctype html
html
  head
    meta(charset="utf-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    title koa-trailer
    link(href="https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css", rel="stylesheet")
    script(src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js")
    script(src="https://cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js")
  body
    .container
      .row
        .col-md-8
          h1 Hi #{you}
          p this is #{me}
        .col-md-4
          p 测试pug
`;
