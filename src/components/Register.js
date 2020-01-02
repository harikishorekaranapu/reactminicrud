import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            registeredUsers : JSON.parse(window.localStorage.getItem("saved_registeredUsers")) || [],
            firstname : '',
            middlename : '',
            lastname : '',
            email : '',
            mobile : '',
            password : '',

            isRegComplete : false
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    createAccount = ()=>{
        this.setState({
            registeredUsers : [...this.state.registeredUsers, {
                uuid : this.state.registeredUsers.length,
                firstname : this.state.firstname,
                middlename : this.state.middlename,
                lastname : this.state.lastname,
                email : this.state.email,
                password : this.state.password
            }]
        }, ()=>{
            window.localStorage.setItem("saved_registeredUsers", JSON.stringify(this.state.registeredUsers));
            alert("User Registered Successfully. Redirecting to Login page...");
            this.setState({
                isRegComplete : true
            });
        })
    }
    
    render(){
        if(this.state.isRegComplete){
            return(
                <Redirect to="/Login"/>
            );
        }
        return(
            <div className="box reg">
                <h2 style={{color: "#f35145"}}>REACT CRUD</h2><hr/>
                <h3>Registration Form</h3><br/>
                <fieldset>
                <legend>Full Name</legend>
                    <input type="text" name="firstname" className="email inputinline" placeholder="Enter First Name" onChange={this.handleChange}/>
                    <input type="text" name="middlename" className="email inputinline"  placeholder="Enter Middle Name" onChange={this.handleChange}/>
                    <input type="text" name="lastname" className="email inputinline"  placeholder="Enter Last Name" onChange={this.handleChange}/>
                </fieldset>
                <br/>
                <fieldset>
                <legend>Contact Details</legend>
                    <input type="text" name="email" className="email inputinline" placeholder="Enter E-mail" onChange={this.handleChange}/>
                    <input type="text" name="mobile" className="email inputinline"  placeholder="Enter Mobile Number" onChange={this.handleChange}/>
                </fieldset>
                <br/>
                <fieldset>
                <legend>Password</legend>
                    <input type="text" name="password" className="email inputinline" placeholder="Enter Password" onChange={this.handleChange}/>
                    <input type="text" name="confirmpassword" className="email inputinline"  placeholder="Re-Enter Password" onChange={this.handleChange}/>
                </fieldset>
                <br/>
                <Link to="/Login"><div id="btn2">Login</div></Link>
                <a href="#" onClick={this.createAccount}><div className="btn" style={{float:"right"}}>Create Account</div></a>
            </div>
        );
    }
}

export default Register;