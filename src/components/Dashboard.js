import React, {Component} from 'react';
import './dashboard.css'

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            studentData : [],
            StID : '',
            StName : '',
            StEmail : '',
            StClass : '',
            StYear : '',
            StCity : '',
            StCountry : ''
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addStudent = ()=>{
        this.setState({
            studentData : [...this.state.studentData, {
                StID : this.state.StID,
                StName : this.state.StName,
                StEmail : this.state.StEmail,
                StClass : this.state.StClass,
                StYear : this.state.StYear,
                StCity : this.state.StCity,
                StCountry : this.state.StCountry
            }]
        }, ()=>{
            window.localStorage.setItem("saved_studentData", JSON.stringify(this.state.studentData));
            this.setState({
                StID : '',
                StName : '',
                StEmail : '',
                StClass : '',
                StYear : '',
                StCity : '',
                StCountry : ''
            })
        })
    }
    
    render(){
        return(
            <React.Fragment>
            <div className="box reg" style={{width:"auto"}}>
                <h3>Student Data</h3><br/>
                <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Class</th>
                    <th>Year</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    JSON.parse(window.localStorage.getItem("saved_studentData")) ? 
                    JSON.parse(window.localStorage.getItem("saved_studentData")).map((student, index)=>{
                        return (
                            <tr key={index}>
                                <td>{student.StID}</td>
                                <td>{student.StName}</td>
                                <td>{student.StEmail}</td>
                                <td>{student.StClass}</td>
                                <td>{student.StYear}</td>
                                <td>{student.StCity}</td>
                                <td>{student.StCountry}</td>
                                <td><button>Edit</button> <button>Delete</button></td>
                            </tr>
                        );
                    }) : <tr align="center" colspan="8">No Data Found</tr>
                }
                </tbody>
                </table>
            </div>
            <br/>
            <div className="box reg">
                <h3>Add/Edit Entries</h3><br/>
                <fieldset>
                <legend>Information</legend>
                    <input type="text" name="StID" className="email inputinline" placeholder="Enter Studen ID" onChange={this.handleChange} value={this.state.StID}/>
                    <input type="text" name="StName" className="email inputinline"  placeholder="Enter Full Name" onChange={this.handleChange} value={this.state.StName}/>
                </fieldset>
                <br/>
                <fieldset>
                <legend>Enrollment Details</legend>
                    <input type="text" name="StEmail" className="email inputinline" placeholder="Enter E-mail" onChange={this.handleChange} value={this.state.StEmail}/>
                    <input type="text" name="StClass" className="email inputinline"  placeholder="Enter Class" onChange={this.handleChange} value={this.state.StClass}/>
                    <input type="text" name="StYear" className="email inputinline"  placeholder="Enter Enrollment Year" onChange={this.handleChange} value={this.state.StYear}/>
                </fieldset>
                <br/>
                <fieldset>
                <legend>Location Details</legend>
                    <input type="text" name="StCity" className="email inputinline" placeholder="Enter City" onChange={this.handleChange} value={this.state.StCity}/>
                    <input type="text" name="StCountry" className="email inputinline"  placeholder="Enter Country" onChange={this.handleChange} value={this.state.StCountry}/>
                </fieldset>
                <br/>
                <a href="#" onClick={this.addStudent}><div className="btn" style={{float:"right"}}>Add Student</div></a>
            </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;