import React from 'react'
import login from './loginStyle.css'

function Login(){
    return(
        <div className="main">
            <div className="sub-main">
                <div>
                    <h1>ACCOUNT LOG IN</h1>
                 <div>
                    <div className="first-input">
                        <input type="text" id="Email" placeholder='Email' className='Email'></input>
                    </div>
                    <div className="second-input">
                       <div>
                        <input type="text" id="Password" placeholder='Password' className='Password'></input>
                       </div>
                    </div>
                    <div className="login-button">
                       <button>Login</button>
                    </div>
                 </div>
                 
                  <p className="link">
                    <a href='#'>Forgot Password?</a> Or <a href='./Signup'>SIGN UP</a>
                  </p>

                </div>
            </div>
        </div>
        
    )
}

export default Login;