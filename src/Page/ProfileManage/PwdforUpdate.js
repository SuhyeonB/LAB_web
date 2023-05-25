import React, {useRef} from "react";
import "../../Css/Main.css";
import {useNavigate} from "react-router-dom";
import User from "../../Page/Users"

function PwdforUpdate(props) {
    let navigate = useNavigate()
    
    const pwdRef = useRef();

    const PwdConfirm = () => {
        if (pwdRef.current.value === User[0].passwd) 
            navigate('../profile/update')
        else alert("WROND PASSWORD\n Try again or click Forgot password to reset it.")
    }

    return (
        <div id="main" className="wrapper style1">
            <div className="container">
                <h2 className="title">User Profile Update</h2>
                <hr/>
                <div className="align-center">
                    <h3>비밀번호 확인</h3>
                    <input type="password" id="password" ref={pwdRef} style={{width: "30vw", margin: "auto"}}/>
                    <br/>
                    <button type="button" className="button" style={{width: "30vw"}} onClick={PwdConfirm}>ENTER</button>

                    <div style={{width: "30vw", margin: "auto", textAlign: "left", marginTop : "10px"}}>
                        <a href="#;">Forgot Password</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PwdforUpdate;