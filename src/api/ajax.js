import axios from 'axios'

 
export default function ajax(url, data = {}, method = 'GET') {
    return new Promise ((resolve,reject)=>{
        let promise
        if (method === 'GET') {
           
         promise =axios.get(url, {
                params: data //指定quey参数
            })
    
        } else {
             promise = axios.post(url, data)
        }

        promise.then(
            response =>{
                resolve(response.data)
            },
            error=>{
                alert('请求错误：' + error.message)
            }
        )
    })
    
}
// async function login() {
//    /*  try {
//         const response = await ajax('/login', { username: 'admin', password: 'admin' }, 'POST')
//     } catch (error) {
//         alert('请求错误：' + error.message)
//     } */
//     const resule = await ajax('/login',{
//         username:'admin',
//         password:'admin'
//     },'POST')
    
//     if (resule.status===0) {
        
//     } else {
        
//     }
// }
