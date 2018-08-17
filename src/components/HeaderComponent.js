import React, {Component} from 'react';
import {Navbar} from 'reactstrap';

class Header extends Component {

    render(){
        return (
            <Navbar dark expand="md">
                <div className = "container">
                        <div className="container">
                            <div className="row row-header">
                                <div className="col-12">
                                    <h1>TODO LIST</h1>
                                    <p>Create notes and list, and check off your completed tasks.  </p>
                                </div>
                            </div>
                        </div>
                </div>
            </Navbar>
        );
    }
    
}

export default Header;