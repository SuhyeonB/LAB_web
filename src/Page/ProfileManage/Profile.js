import React, {useState} from "react";
import "../../Css/Main.css";
import ex from '../../images/ex.jpg';
import {Link} from "react-router-dom";
import Scrape from "../Scrape";

function Profile() {
    const [visible, setVisible] = useState(false);
    const users = [{id: 1, name: "정도현", nickName: "DAVE", interest: "Frontend", birthDate: "2002-07-10", tellNum: "010-2637-4085", email: "20211503@daegin.ac.kr", passwd: "dv1234"}];

    return (
        <div id="main" className="wrapper style1">
            <div className="container">
                <h2 className="title">User Profile</h2>
                <hr/>
                <div className="row" style={{paddingBottom: "7%"}}>
                    <div className="col-4 col-12-medium" style={{textAlign: 'center'}}>
                        <img style={{borderRadius: "80%", objectFit: "cover", width: "300px", height: "300px"}} src={ex}/>
                        <br/>
                        
                        <br/>
                        <button type="button" className="button">
                            <Link to='/profile/confirmuser'>개인정보수정</Link>
                        </button>
                    </div>
                    <div className="col-8 col-12-large">
                        <div className="col-8 col-12-small" style={{display: "flex"}}>
                            <h2>{users[0].name}</h2>
                            <ul style={{color: '#e44c65'}}>{users[0].nickName}</ul>
                        </div>
                        <div className="col-8 col-12-small" style={{display: "flex"}}>
                            <div className="col-8 col-12-small">
                                <p>관심분야&nbsp;</p>
                                <p>이메일&nbsp;</p>
                                <p>연락처&nbsp;</p>
                                <button type="button" className="button" onClick={()=>{setVisible(!visible)}}>
                                    {visible ? "숨기기" : "스크랩"}
                                </button>
                            </div>
                            <div className="col-8 col-12-small" style={{color: '#e44c65'}}>
                                <p>&nbsp;{users[0].interest}</p>
                                <p>&nbsp;{users[0].email}</p>
                                <p>&nbsp;{users[0].tellNum}</p>
                            </div>
                        </div>
                        {visible && <Scrape/>}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Profile;