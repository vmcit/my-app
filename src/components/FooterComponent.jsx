import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">Manage Employee</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
