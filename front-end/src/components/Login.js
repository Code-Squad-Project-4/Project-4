import React, { Component } from 'react'
import Background from '../pics/background-login.jpg'



const loginStyle={
    width:"100%",
    height:"100vh",
    backgroundImage: `url(${Background})`,  
    backgroundSize:"cover",
    backgroundPosition:"center",
    
}

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          password:'',
        };}
    emailHandler=(e)=>{
        this.setState({email:e.target.value})
    }
    passHandler=(e)=>{
        this.setState({password:e.target.value})
    }
    onLogin=()=>{
        this.props.onLogin(this.state.email,this.state.password);
        this.setState({password:""})
        this.setState({email:""})
    }
    
    render() {
        return (
            <div>
                <div style={loginStyle} className="container">
                    <div className="card">
                        <h1>Login</h1>
                        <input type="text" placeholder="Email" onChange={this.emailHandler}></input>
                        <h4>{this.props.onErr()?(<span>Incorrect Email or password...</span>):(<span></span>)}</h4>
                        <input type="password" placeholder="Password" onChange={this.passHandler}></input>
                        <button onClick={this.onLogin}>Login</button>
                        <h5>You don't have account? <span >Register now</span></h5>
                    </div>
                </div>
            </div>
        )
    }
}    

