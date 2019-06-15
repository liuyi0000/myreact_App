import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './login.less'
import logo from './images/logo.png'
class Login extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('发登录ajax请求')
            }
        })
        // const username =this.props.form.getFieldValue('username')
        // const password =this.props.form.getFieldValue('password')

    }
    validatatePwd = (rule, value, callback) => {
        value = value.trim()
        if (!value) {
            callback('必须输入密码')
        } else if (value.length < 4) {
            callback('密码长度不能小于4位')
        } else if (value.length > 12) {
            callback('密码长度不能大于12位')
        } else if (! /^[a-zA-Z0-9_]+$/.test(value)) {
            callback('密码必须是英文,数字下划线')
        } else {
            callback()
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="logo" />
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {
                                getFieldDecorator('username', {
                                    initialValue: '',
                                    rules: [
                                        { required: true, message: '请输入用户名!' },
                                        { min: 4, message: '用户名不能小于4位!' },
                                        { min: 4, message: '用户名不能大于12位!' },
                                        { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须英文!' },
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />
                                )
                            }

                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [
                                        { validator: this.validatatePwd }
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )
                            }

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登 录
          </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
const WrapperLogin = Form.create()(Login)
export default WrapperLogin