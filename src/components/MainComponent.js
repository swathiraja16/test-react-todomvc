import React, { Component } from 'react';
import Header from './HeaderComponent';
import Todo from './TodoComponent';

class Main extends Component{
    
    render(){
        return(
            <div>
                <Header />
                <div className = "container">
                <Todo />
                </div>
            </div> 
        );
    }
}
export default Main;
