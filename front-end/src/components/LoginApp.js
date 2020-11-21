import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Register } from '../components/Register';
import { Login } from '../components/Login';

// Class component
export default class LoginApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn:false,
      loginErr:false,
      emailErr:false,
      compErr:false,
      userErr:false,
      token:'',
    };
  
  }

 handleRegister=(email,password,company_name,adress,user_name,phone,role)=>{
    axios.post(`http://localhost:5000/register/${role}`,{      
      email,
      password,
      company_name,
      adress,
      user_name,
      phone
    })
      .then((response)=>{
        console.log(email,password,company_name,adress,user_name,phone,role)
        if(response.data==="Email is used.."){
          this.setState({emailErr:true})
        }else if(response.data==="User name is used.."){
          this.setState({userErr:true})
        }else if(response.data==="Company name is used.."){
          this.setState({compErr:true})
        }else if(response.data==="Your account has been successfully created."){
          console.log("account registered")
          this.setState({emailErr:false})
          this.setState({userErr:false})
          this.setState({compErr:false})
        }
      })
 };

 handleLogin=(email,password)=>{
    axios.post('http://localhost:5000/login',{
      email,
      password:password 
       })
      .then((response)=>{
        if(response.data==="Invalid Email or password.."){
          this.setState({loginErr:true});
          console.log(this.state.isLoggedIn)
          
        }else{
          this.setState({isLoggedIn:true});
          this.setState({loginErr:false})
          this.setState({token:response.data});
          console.log(this.state.isLoggedIn);
          console.log(this.state.token)
        }
      })
      .catch((err)=>{throw err})

 }

 handleErr=()=>{
   console.log("ee")
   return this.state.loginErr
 }
 handleEmailErr=()=>{
   console.log(this.state.emailErr)
   return this.state.emailErr
 }
 handleCompErr=()=>{
   return this.state.compErr
 }
 handleUserErr=()=>{
   return this.state.userErr
 }
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/register/seller'>
            <Register
            onRegister={this.handleRegister}
            onUserErr={this.handleUserErr} 
            onCompErr={this.handleCompErr}
            onEmailErr={this.handleEmailErr}
             />
          </Route>
          <Route exact path='/login'>
            <Login
             onLogin={this.handleLogin}
             onErr={this.handleErr}
             />
          </Route>
          
        </div>
      </Router>
    
    );
  }
}


