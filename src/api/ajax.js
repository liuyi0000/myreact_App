import axios from 'axios'
/* 
 */
export default function ajax(url, data = {}, method = 'GET') {
    if (method === 'GET') {
        axios.get(url, {
            params: data //指定quey参数
        })

    } else {
        axios.post(url, data)
    }
}
async function login() {
    try {
        const response = await ajax('/login', { username: 'admin', password: 'admin' }, 'POST')
    } catch (error) {
        alert('请求错误：' + error.message)
    }
}
