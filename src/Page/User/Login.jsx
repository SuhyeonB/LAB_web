// import { GoogleLogin } from '@react-oauth/google';
// import { GoogleOAuthProvider } from '@react-oauth/google';

import React from 'react';
import "../../style/User.css"

const Login = () => {

    return (
        <div id="main" className="wrapper style1">
            <div className="signBox">
                <div className='loginBox'>
                    <h3 style={{fontWeight:"800"}}>SIGN IN</h3>
                    <input type="email" placeholder='email'/>
                    <input type='password'placeholder='password'/>
                    <br/>
                    <button type="button" className='button' style={{marginBottom:"0"}}>LOG IN</button>
                    <a href='/findidpwd' style={{textAlign:"right"}}>아이디/비밀번호 찾기 &gt;</a>
                    <hr/>
                    <a href = 'http://localhost:8080/login/google'>
                        <button type='button' className='button'>Continue with Google</button>
                    </a>
                    <button type='button' className='button'>Continue with Github</button>
                    <button type='button' className='button'>Continue with KakaoTalk</button>                    
                </div>
            </div>
        </div>
    );
};

export default Login;