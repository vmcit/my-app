import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import "bootstrap/dist/css/bootstrap.min.css";

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            full_name: '',
            gender: '',
            birth_date: '',
            department_id: '',
            employee: {}
        }
        this.changeIdHandler = this.changeIdHandler.bind(this)
        this.changefullNameHandler = this.changefullNameHandler.bind(this)
        this.changeGenderHandler = this.changeGenderHandler.bind(this)
        this.changeDateBirthHandler = this.changeDateBirthHandler.bind(this)
        this.changeDeptIdHandler = this.changeDeptIdHandler.bind(this)
    }

  
    componentWillMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
             this.setState({employee: res.data});
             this.setState({id: res.data.id});
             this.setState({full_name: res.data.full_name});
             this.setState({gender: res.data.gender});
             this.setState({birth_date: res.data.birth_date});
             this.setState({department_id: res.data.department_id});
             
             
        }).catch((err) => {
        })
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {id: this.state.id, 
            full_name: this.state.full_name, gender: this.state.gender,birth_date: this.state.birth_date,department_id: this.state.department_id};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(this.state.department_id, this.state.id,employee).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeIdHandler= (event) => {
        this.setState({employee: event.target.value});
    }

    changefullNameHandler= (event) => {
        this.setState({full_name: event.target.value});
    }

    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }

    changeDateBirthHandler= (event) => {
        this.setState({birth_date: event.target.value});
    }

    changeDeptIdHandler= (event) => {
        this.setState({department_id: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
      
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                               
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>ID: </label>
                                            <input placeholder="id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler
                                                }
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Full Name: </label>
                                            <input placeholder="Full Name" name="fullname" className="form-control" 
                                                value={this.state.full_name} onChange={this.changefullNameHandler}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" name="gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changeGenderHandler}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Date of birth: </label>
                                            <input placeholder="Date of birth" name="dateofbirth" className="form-control" 
                                                value={this.state.birth_date} onChange={this.changeDateBirthHandler}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Department: </label>
                                            <input placeholder="Department" name="department" className="form-control" 
                                                value={this.state.department_id} onChange={this.changeDeptIdHandler}
                                                />
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
