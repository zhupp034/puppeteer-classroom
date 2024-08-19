import puppeteer from "puppeteer";
import fetch, { FormData } from "node-fetch";
import { sliceUserList } from "./utils.mjs";
import { lessonInfo } from "./config.mjs";
const { lessonId, serverId } = lessonInfo;

async function openTab({ browser, page, pageList }) {
  let userIds = JSON.stringify(pageList);

  // await page.setDefaultNavigationTimeout(0)

  await page.goto(
    `http://dev.letao.cnstrong.cn:8000/#/puppeteer?lessonId=${lessonId}&userId=${userIds}&serverId=${serverId}`
  );
  // for (let index = 0; index < pageList.length; index++) {
  //   const page = await browser.newPage();
  //   let userIds = JSON.stringify([pageList[index]])
  //   console.log(index);

  //   // await page.setDefaultNavigationTimeout(0)

  //   await page.goto(`http://dev.letao.cnstrong.cn:8000/#/puppeteer?lessonId=${lessonId}&userId=${userIds}&serverId=${serverId}`);
  //   // await page.waitForNavigation({ waitUntil: 'networkidle0' });
  //   console.log(userIds);
  //   // await page.waitForNavigation({ waitUntil: 'networkidle0' });
  //   console.log(userIds);
  // }
}

const run = async () => {
  // Launch the browser and open a new blank page
  let pageList = await sliceUserList();

  let pageSize = 200;
  let pageNum = 10;
  for (let index = 0; index < pageNum; index++) {
    const browser = await puppeteer.launch({
      headless: false, // 以 无头模式（隐藏浏览器界面）运行浏览器
      timeout: 0,
      defaultViewport: null,
      args: [
        "--disable-plugins",
        "--blink-settings",
        "--disable-gpu", // GPU硬件加速
        "--disable-dev-shm-usage", // 创建临时文件共享内存
        "--disable-setuid-sandbox", // uid沙盒
        "--no-first-run", // 没有设置首页。在启动的时候，就会打开一个空白页面。
        "--no-sandbox", // 沙盒模式
        "--no-zygote",
        "--disable-extensions", // 禁用扩展
        // '--single-process', // 单进程运行
      ],
    });
    // const content = await browser.createBrowserContext()
    const page = await browser.newPage();
    await openTab({
      browser,
      page,
      pageList: pageList.slice(index * pageSize, index * pageSize + pageSize),
    });
    console.log(index);
  }
  console.log("启动完成");
};

run();
