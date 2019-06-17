<<<<<<< HEAD

import ajax from "./ajax";
// const BASE = 'http://localhost:3001'
const BASE = ''

// 1. 登陆

export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')

// 添加用户
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')





=======
//包含n个接口请求函数的模块
//根据接口文档编写
//调用自定义ajax请求函数请求
//每个函数的返回值都是Promise对象

import ajax from "./ajax";
const BASE = ''

//1.登录
// export function reqLogin(username,password){
//     ajax(BASE+ '/login',{username,password},'POST')
// }
export const reqLogin = (username,password) => ajax(BASE+ '/login',{username,password},'POST')

//添加用户
export const reqAddUser = (user) => ajax(BASE+'/manage/user/add',user,'POST')


//测试
reqLogin('admin','admin').then(result =>{
    console.log('result',result)
})
>>>>>>> 0c58405daccc6877f7ca9220bd1ced0c9bbb63d1
