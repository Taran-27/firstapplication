import { render } from '@testing-library/react';
// import e from 'express';
import React, {Component} from 'react'
import signUp from './signUpStyle.css'
import Popup from './Popup'

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            showPopUp : false,
            text : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.togglePop = this.togglePop.bind(this);
    }
    handleChange(e){
        this.setState({
            text : e.target.value
        });
    }
    togglePop(){
        this.setState({
            showPopUp : !this.state.showPopup
        });
    }
    render(){
     return(
        <div className='head'>
          <div className='sub-head'>
            <div>
                <div>
                    <h1>
                        CREATE ACCOUNT
                    </h1>
                </div>
                <div className='all-inputs'>
                    <div className='first-inbox'>
                        <input type="text" id="FirstName" placeholder='First Name' onChange = {this.handleChange} value = {this.state.text}></input>
                    </div>
                    <div className='second-inbox'>
                        <input type='text' id='lastName' placeholder='Last Name'></input>
                    </div>
                    <div className='third-inbox'>
                        <input type='text' id='Email' placeholder='Email'></input>
                    </div>
                    <div className='last-inbox'>
                        <input type='text' id='Password' placeholder='Password'></input>
                    </div>
                </div>
                <div className='betsin'>
                    <button onClick = {this.togglePop}>SIGNUP</button>
                </div>
                {this.state.showPopUp?
                    <Popup text = "WELCOME!" closePopUp = {this.togglePop} value = {this.state.text}/>: null}
            </div>
          </div>
        </div>
        )
    }
    
}

export default Signup;