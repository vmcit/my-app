import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../services/AuthenticationService';
import "bootstrap/dist/css/bootstrap.min.css";
 
class MenuComponent extends Component {
 
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
 
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand">Manage Employee</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/employees">Employees</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}
 
export default withRouter(MenuComponent)