import fetch, { FormData } from "node-fetch";
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

 export async function sliceUserList() {
    const userList = await getUserList().then((res) => {
        return res.datas.studentList.map(({id}) => {
          return id
        })
      });
      console.log('学生人数：', userList.length);
      
    
      let pageSize = 1;
      let pageNum = 20000;
      let startIndex = 0;
    
      let pageList = userList.slice(startIndex, startIndex+pageSize*pageNum)
      return pageList
    }