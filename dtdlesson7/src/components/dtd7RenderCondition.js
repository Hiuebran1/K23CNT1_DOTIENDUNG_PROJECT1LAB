import React, { Component } from 'react';
import dtd7LoginControl from './dtd7LoginControl';

class dtd7RenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    dtd7HandleLogin = (ev)=>{
        ev.preventDefault();
        this.setState({
            isLoggedIn:true
        })
    }
    // Hàm xử lý sự kiện logout
    dtd7HandleLogout = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:false
        })
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <dtd7LoginControl isLoggedIn={this.state.isLoggedIn} />

                {
                    this.state.isLoggedIn ? 
                        <button className='btn btn-danger' onClick={this.dtd7HandleLogout} >Logout</button> 
                        : <button className='btn btn-primary' onClick={this.dtd7HandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default dtd7RenderCondition;