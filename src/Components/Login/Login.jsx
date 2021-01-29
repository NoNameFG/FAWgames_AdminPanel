import React from 'react';
import './Login.css';
import { withRouter } from 'react-router-dom';
import api from './../../api/api.js';
import setAuthHeader from './../../Functions/setAuthHeader.js';

class Login extends React.Component{
  state = {
    password: ''
  }

  handleClick = async () => {
    try{
      const data = await api.admin.login(this.state);
      this.props.history.push('/admin_panel');
      setAuthHeader(data.headers.auth);
      window.localStorage.auth = data.headers.auth;
    } catch(error){
      console.log(error);
    }
  }

  handleChange = e => {
    this.setState({
      password: e.target.value
    })
  }

  render(){
    return(
      <div className="admin_login">
        <input type="password" onChange={this.handleChange}/>
        <button onClick={this.handleClick}>enter</button>
      </div>
    );
  }
}

export default withRouter(Login);
