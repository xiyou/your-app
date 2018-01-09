import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bpp from './App';
import registerServiceWorker from './registerServiceWorker';

// console.log(App);

//render函数发生了什么很重要
ReactDOM.render(
    <Bpp title="Bpp组件属性传递给Cpp组件" />,
    document.getElementById('root')
);

registerServiceWorker();


