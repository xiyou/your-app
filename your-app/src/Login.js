import React, {Component} from 'react';
import './login.css'
function UserGreeting(props) {
  return (
    <h1>
      Welcome back!
    </h1>
  );
}

function GuestGreeting(props) {
  return (
     <h1>
        Please sign up.
     </h1>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />
  }else {
    return <GuestGreeting />
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLogStateClick = this.handleLogStateClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false}
  }

  handleLogStateClick () {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    });
   }

  render() {
    const { isLoggedIn } = this.state;
    console.log(isLoggedIn);
    return (
      <div className="Login">
        <Greeting isLoggedIn={ isLoggedIn }/>
        { isLoggedIn ? 
        <LoginButton onClick={this.handleLogStateClick}/> :
        <LogoutButton onClick={this.handleLogStateClick}/>}
      </div>
    );
  }
}

export default LoginControl;