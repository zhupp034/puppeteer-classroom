// const { fork } = require('child_process');
import {fork} from 'child_process';
import {sliceUserList} from './utils.mjs';
import {cpus} from 'os';
// const { cpus } = require('os');
const numWorkers = cpus().length;
console.log({numWorkers});




function runChild(pageList) {
 

  
  const child = fork('./ws-client.mjs');
  child.on('message', (msg) => {
    console.log('Received message from child:', msg);
  });
  
  child.send({pageList});
}

async function run() {
  let pageList = await sliceUserList()
  let pageSize = 500
  
  
  // let pageNum = Math.ceil(pageList.length/pageSize)
  let pageNum = 40
  for (let index = 0; index < pageNum; index++) {
    let startIndex = index*pageSize
    let endIndex = index*pageSize+pageSize
    const list = pageList.slice(startIndex, endIndex)
    runChild(list)
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 10000);
    })
    
  }
  

}

run()

