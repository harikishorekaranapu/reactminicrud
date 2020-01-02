import React, {Component} from 'react';
import Dashboard from '../components/Dashboard';

import {Redirect} from 'react-router-dom';

class DashboardPage extends Component{
    constructor(){
        super();
        this.state={
            
        }
    }

    render(){
        if(JSON.parse(window.sessionStorage.getItem("saved_loggedinUserEmail"))){
            return(
                <React.Fragment>
                    <Dashboard/>
                </React.Fragment>
            );
        }
        else {
            return (
                <Redirect to='/Login'/>
            )
        }
    }
}

export default DashboardPage;