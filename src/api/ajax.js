// 发送任何Ajsx请求的函数模块
//封装Ajsx

import axios from 'axios'


export default function ajax(url,data={},method="GET"){

    return new Promise((resolve,reject)=>{
        let promise
      //1.执行异步Ajax请求
        //发GET请求
    if(method === 'GET'){

        promise = axios.get(url,{
             params:data  //指定query参数
         })
         
      }else{
        //发post请求
       promise = axios.post(url,data)
      }
      promise.then(
            //2.如果成功，调用res
          response =>{
              resolve(response.data)
            },
    //3.如果失败，不调用rej
      error =>{
          alert('请求出错'+error.message)
      }

      )

    })
   
}


