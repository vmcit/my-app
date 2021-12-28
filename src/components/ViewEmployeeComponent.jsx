import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import "bootstrap/dist/css/bootstrap.min.css";

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
      
    }

    componentWillMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) => {
            console.log('res view ' + res.data);
            this.setState({employee: res.data});
        }).catch((err) => {
            console.log('aaa' + err)
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> ID: </label>
                            <div> { this.state.employee.id }</div>
                        </div>
                        <div className = "row">
                            <label> Full Name: </label>
                            <div> { this.state.employee?.full_name }</div>
                        </div>
                        <div className = "row">
                            <label> Gender: </label>
                            <div> { this.state.employee?.gender }</div>
                        </div>
                        <div className = "row">
                            <label> Date of birth: </label>
                            <div> { this.state.employee?.birth_date }</div>
                        </div>

                        <div className = "row">
                            <label> Department: </label>
                            <div> { this.state.employee?.department_id }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
