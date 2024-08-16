import puppeteer from "puppeteer";
import fetch, { FormData } from "node-fetch";
// const fetch = require('node-fetch');

// console.log(a);
let lessonId = '5249738';
const serverId = 'ss_dev_0_20.211';

async function openTab({browser,page, pageList}) {
  
  let userIds = JSON.stringify(pageList) 
  
  // await page.setDefaultNavigationTimeout(0)
  
  await page.goto(`http://dev.letao.cnstrong.cn:8000/#/puppeteer?lessonId=${lessonId}&userId=${userIds}&serverId=${serverId}`);
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
async function getUserList() {
  const formData = new FormData()
  formData.append('data', JSON.stringify({"startIndex":0,"courseSingleId":5249737,"sysId":0,"endIndex":100000,"schoolId":6531}) )

  return fetch(
    "http://api.leke.cn/api/n/invoke.htm?ticket=VDBFOVBRPT07UFRzNVBqMDhPem81Ozg4&_m=getUserListByCourseSingleIdTest&_s=lesson&device=m",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}

const run = async () => {

  // let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MDcwNDYwIiwidXNlcl9pbmZvIjp7InVzZXJJZCI6NjA3MDQ2MCwidXNlcm5hbWUiOiLmnIvmnIswMDEiLCJsb2dpbk5hbWUiOiIzMDY3MzExIiwiZGV2aWNlVHlwZSI6MSwidGltZXN0YW1wIjoxNzIzNTM2NDE5NjQ3LCJwbGF0Zm9ybSI6N30sImlzcyI6ImFjY291bnQtc2VydmljZS10ZXN0MiIsImV4Y2x1c2l2ZSI6ZmFsc2UsImRldmljZSI6IjEwMCIsInV1aWQiOiI1ZDEzOTQ3YjA5OTA0MmFiYjIzYmZlNzQ0YTQ2ZmM3NCIsImlhdCI6MTcyMzUzNjQxOSwicGxhdGZvcm0iOiIwIn0.Bmv8oUoURWaSArPcUnROCfePvjQtK6KbEz1EULN08LPi9QLmM3t0PTnGjbiFdoLot5rNHzXncMpkRvp2VeWT2A'
  // Launch the browser and open a new blank page
  
  const userList = await getUserList().then((res) => {
    return res.datas.studentList.map(({id}) => {
      return id
    })
  });
  console.log('学生人数：', userList.length);
  

  let pageSize = 200;
  let pageNum = 10;
  let startIndex = 0;

  let pageList = userList.slice(startIndex, startIndex+pageSize*pageNum)
  
  
  for (let index = 0; index < pageNum; index++) {
    const browser = await puppeteer.launch({
      // headless: false, // 以 无头模式（隐藏浏览器界面）运行浏览器
      timeout: 0,
      defaultViewport: null,
      args: [
        '--disable-plugins',
        '--blink-settings',
        '--disable-gpu', // GPU硬件加速
        '--disable-dev-shm-usage', // 创建临时文件共享内存
        '--disable-setuid-sandbox', // uid沙盒
        '--no-first-run', // 没有设置首页。在启动的时候，就会打开一个空白页面。
        '--no-sandbox', // 沙盒模式
        '--no-zygote',
        '--disable-extensions', // 禁用扩展
        // '--single-process', // 单进程运行
      ],
    });
    // const content = await browser.createBrowserContext()
    const page = await browser.newPage();
    await openTab({browser,page, pageList: pageList.slice(index*pageSize, index*pageSize+pageSize)})
    console.log(index);
  }

  console.log('启动完成');
  

  
  
  // for (let index = 0; index < pageArr.length; index++) {
  //   const page = await browser.newPage();
  //   let userIds = JSON.stringify(pageArr[index]) 
  //   console.log(userIds);
    
  //   await page.setDefaultNavigationTimeout(0)
  //   await page.goto(`http://dev.letao.cnstrong.cn:8000/#/puppeteer?lessonId=${lessonId}&userId=${userIds}&serverId=${serverId}`);
  // }
  

}

run();
