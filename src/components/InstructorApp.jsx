import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginComponent from './LoginComponent';
import MenuComponent from './MenuComponent';
import ListEmployeeComponent from './ListEmployeeComponent';
import LogoutComponent from './LogoutComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import CreateEmployeeComponent from './CreateEmployeeComponent';
import ViewEmployeeComponent from './ViewEmployeeComponent';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';

class InstructorApp extends Component {
    render() {
        return (
            <>
                <Router>
                    <>
                        <MenuComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />               

                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                            <AuthenticatedRoute path="/employees" exact component={ListEmployeeComponent} />    
                          <AuthenticatedRoute path = "/add-employee/:id" component = {CreateEmployeeComponent}/>
                         <AuthenticatedRoute path = "/view-employee/:id" component = {ViewEmployeeComponent}/>
                         <AuthenticatedRoute path = "/update-employee/:id" component = {UpdateEmployeeComponent}/>
                        </Switch>
                    </>
                </Router>
            </>
        )
    }
}
 
export default InstructorApp