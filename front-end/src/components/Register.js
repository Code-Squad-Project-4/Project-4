import React, { Component } from 'react'
import Background from '../pics/background-login.jpg'



const registerStyle={
    width:"100%",
    height:"100vh",
    backgroundImage: `url(${Background})`,  
    backgroundSize:"cover",
    backgroundPosition:"center",
    
}

export class Register extends Component {
    render() {
        return (
            <div>
                <div style={registerStyle} className="container">
                    <div className="card">
                        <h1>Register</h1>
                        <input type="text" placeholder="User Name"></input>
                        <input type="text" placeholder="Company Name"></input>
                        <input type="text" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <input type="number" placeholder="Phone Number"></input>
                        <input type="text" placeholder="Adress"></input>
                        <button>Register</button>
                        <h5>Already have account? <span>Login now</span></h5>
                    </div>
                </div>
            </div>
        )
    }
}


