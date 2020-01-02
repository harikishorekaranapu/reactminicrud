import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './login.css';

class Login extends Component {
    constructor(){
        super();
        this.state={
            email : '',
            password : '',
            isSuccess : false
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    signIn = ()=>{
        var userExistAt =  JSON.parse(window.localStorage.getItem("saved_registeredUsers")).map(el => el.email).indexOf(this.state.email);
        if(userExistAt !== -1){
            var userPass = JSON.parse(window.localStorage.getItem("saved_registeredUsers"))[userExistAt].password;
            if(userPass === this.state.password){
                this.setState({
                    isSuccess : true
                })
            } else {
                alert("Please Enter Correct Password");
            }
        } else {
            alert("Email Not Registered, please Sign-Up");
        }
    }

    render() {
        if(this.state.isSuccess){
            window.sessionStorage.setItem("saved_loggedinUserEmail", JSON.stringify(this.state.email));
            window.sessionStorage.setItem("saved_loggedinUserPassword", JSON.stringify(this.state.password));
            return <Redirect to="/Dashboard"/>
        }
        return (
            <React.Fragment>
                <div className="box">
                    <h2 style={{color: "#f35145"}}>REACT CRUD</h2><hr/>
                    <h3>Login</h3>
                    <input type="text" name="email" className="email" placeholder="Enter E-mail" onChange={this.handleChange}/>
                    <input type="text" name="password" className="email" placeholder="Enter Password" onChange={this.handleChange}/>
                    <a href="#" onClick={this.signIn}><div className="btn">Sign In</div></a>
                    <Link to="/Register"><div id="btn2">Sign Up</div></Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;