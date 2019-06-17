<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './api'
=======

import React from 'react'
import ReactDOM from 'react-dom'
import'./api'
>>>>>>> 0c58405daccc6877f7ca9220bd1ced0c9bbb63d1

import App from './App' // 自定义的模块引入必须以.开头
import memoryUtils from './utils/memoryUtils';

const user= JSON.parse(localStorage.getItem('USER-KEY') || '{}')
memoryUtils.user = user

ReactDOM.render( < App /> , document.getElementById('root'))