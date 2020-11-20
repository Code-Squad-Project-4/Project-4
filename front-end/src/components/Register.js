import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Background from '../pics/background-login.jpg'




const registerStyle={
    width:"100%",
    height:"100vh",
    backgroundImage: `url(${Background})`,  
    backgroundSize:"cover",
    backgroundPosition:"center",
    
}

export class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email:'',
          password:'',
          user_name:'',
          company_name:'',
          adress:'',
          phone:'',
          role:'customer'
        };}
    emailHandler=(e)=>{
        this.setState({email:e.target.value})
    }
    passHandler=(e)=>{
        this.setState({password:e.target.value})
    }
   companyHandler=(e)=>{
        this.setState({company_name:e.target.value})
    }
    adressHandler=(e)=>{
        this.setState({adress:e.target.value})
    }
    userHandler=(e)=>{
        this.setState({user_name:e.target.value})
    }
    phoneHandler=(e)=>{
        this.setState({phone:e.target.value})
    }
    roleHandler=(e)=>{
        this.setState({role:'seller'});
        console.log(this.state.role,"alaa")
    }
    onRegister=()=>{
        this.props.onRegister(this.state.email,this.state.password,this.state.company_name,this.state.adress,this.state.user_name,this.state.phone,this.state.role);
        console.log(this.state.email)
        this.setState({password:""})
        this.setState({email:""})
    }
    render() {
        return (
            <div>
                <div style={registerStyle} className="container">
                    <div className="card">
                        <h1>Register</h1>
                        <input type="text" placeholder="User Name"onChange={this.userHandler}></input>
                        <h4>{this.props.onUserErr()?(<span>Username is already used...</span>):(<span></span>)}</h4>
                        <input type="text" placeholder="Company Name"onChange={this.companyHandler}></input>
                        <h4>{this.props.onCompErr()?(<span>Company name is already used...</span>):(<span></span>)}</h4>
                        <input type="text" placeholder="Email" onChange={this.emailHandler}></input>
                        <h4>{this.props.onEmailErr()?(<span>Email is already used...</span>):(<span></span>)}</h4>
                        <input type="password" placeholder="Password" onChange={this.passHandler}></input>
                        <input type="number" placeholder="Phone Number" onChange={this.phoneHandler}></input>
                        <input type="text" placeholder="Adress" onChange={this.adressHandler}></input>
                        
                        <div className="check">
                            <input type="checkbox" name="seller" onClick={this.roleHandler}></input>
                            <label > Register as a seller</label>
                        </div>
                        <button onClick={this.onRegister}>Register</button>
                        <h5>Already have account? <span>Login now </span></h5>

                    </div>
                </div>
            </div>
        )
    }
}


