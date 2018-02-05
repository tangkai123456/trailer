const puppeteer = require('puppeteer');

const url = 'https://movie.douban.com/tag/#/?sort=T&range=0,10&tags=';

const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

interface Movie {
  doubanId: string;
  img: string;
  title: string;
  rate: string;
}

const visitPage = async () => {
  const startDate = new Date();
  const time = () => {
    return Number(new Date()) - Number(startDate);
  };
  console.log('start visit page');
  console.log(time());

  // 声明一个浏览器
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    dumpio: false,
  });
  // 打开页面
  const page = await browser.newPage();
  console.log('open the brower');
  console.log(time());
  // 打开url
  await page.goto(url, {
    waitUntil: 'networkidle2',
  });

  await sleep(3000);
  console.log('finish load page');
  console.log(time());

  // 点击加载更多按钮
  await page.waitForSelector('.more');

  for (let i = 0; i < 10; i += 1) {
    // 重复点击加载更多按钮
    await sleep(3000);
    await page.click('.more');
    console.log('click more');
  }
  await sleep(3000);

  // 在浏览器中运行以下代码
  const result = await page.evaluate((): Movie[] => {
    const { $ } = window as any;
    const items = $('.list-wp a');
    const links: Movie[] = [];
    console.log('length: ' + items.length);
    if (items.length >= 1) {
      items.each((index: number, item: JQuery) => {
        const it = $(item);
        const doubanId = it.find('.cover-wp').data('id');
        const img = it.find('img').attr('src');
        const title = it.find('.title').text();
        const rate = it.find('.rate').text();
        links.push({
          doubanId,
          img,
          title,
          rate,
        });
      });
    }
    return links;
  });

  console.log(result);
  console.log(time());
};

visitPage();
