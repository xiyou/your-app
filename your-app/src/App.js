import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    // console.log(this.__proto__ === App.prototype);
    // console.log(App.__proto__ === Component);
    // console.log(Component);
    // console.log(this.__proto__);

  }

  //生命周期
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.medition();
  }
  //生命钩子
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //使用this.setState()来更新组件局部状态
  tick() {
    this.setState({
      date: new Date()
    });
  }

  medition() {
    var con = document.querySelector('.App-intro');
    //  con.textContent = "冥想，心灵的地方";
    con.innerHTML = "冥想，活着";

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
           </p>
          <h2>  {this.state.date.toLocaleTimeString()} </h2>

        </main>
      </div>
    );
  }
}


class Cpp extends Component {
  constructor(props) {
    super(props);
    this.state = { count: true, isAdded: false };
  
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    // document.getElementById('Cpp').className = "Cpp";

    // if (!this.state.isAdded) {
    //   this.setState({
    //     isAdded: true
    //   })
    // }else {
    //   this.setState({
    //     isAdded: false
    //   })
    // }
   
    // this.state.isAdded ? this.setState({
    //   isAdded: false
    // }) : this.setState({
    //   isAdded: true
    // })
    
  
    this.setState(preState => {
      return {
        count: !preState.count,
        // isAdded: !preState.isAdded
      }
    })
  }

  componentDidMount() {
    this.setState((preState) => {
      return {
        isAdded: true
      }
    })
  }

  componentWillMount() {
     this.setState( preState => {
       return {
         isAdded: false
       }
     })
  }
  render() {
    
    let { isAdded } = this.state;
    return (
      <div onClick={this.handleClick} id="Cpp" className={isAdded ? 'Cpp' : 'Dpp'} >
        {this.props.title}
        <hr />
        {this.state.count ? '你过来呀' : '天也会颤抖啊'}
      </div>
    );
  }
}


function Bpp(props) {
  return (
    <div>
      <App />
      <div>组合组件</div>
      <Cpp title={props.title} />
    </div>
  );
}

export default Bpp;

