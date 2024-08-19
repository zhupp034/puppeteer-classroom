import WebSocket, { createWebSocketStream } from "ws";
import { lessonInfo } from "./config.mjs";
const { lessonId, serverId } = lessonInfo;

async function initSocket(userId) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(
      `wss://balanceclass.leke.cn/ws?serverId=${serverId}`
    );
    ws.on("error", console.error);
    ws.on("open", async function open() {
      const loginInfo = {
        platform: 2,
        cameraCount: 1,
        isStudent: true,
        roleId: 100,
        skipDecrypt: true,
        personType: 2,
        userId: Number(userId),
        isForced: true,
        // recordToken: token,
        username: "xxx",
        password: "aa111222",
        lessonId,
        v: 5,
        isDebug: true,
      };
      const login = { m: 0, p: loginInfo };
      ws.send(JSON.stringify(login));
      resolve(ws);
    });

    ws.on("message", function message(data) {
      if (data.includes("request")) {
        const alive = { alive: "request" };
        ws.send(JSON.stringify(alive));
        console.log("received: %s", data);
      }
    });
  });
}

// child.js
process.on("message", async (msg) => {
  // console.log('Received message from parent:', typeof msg);
  let { pageList, index } = msg;
  console.log({ pageList }, pageList.length);

  for (let index = 0; index < pageList.length; index++) {
    initSocket(pageList[index]);
  }
  process.send("子进程成功启动");
});
