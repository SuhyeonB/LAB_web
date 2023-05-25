import React from "react";
import { Link } from "react-router-dom";
import "../../Css/Main.css";
import user from '../../images/cat.jpg';

function Profile2() {
    const users = [{id: 1, name: "정도현", nickName: "DAVE", interest: "Frontend", birthDate: "2002-07-10", tellNum: "010-2637-4085", email: "20211503@daegin.ac.kr", passwd: "dv1234"}];

    return (
        <div id="main" className="wrapper style1">
            <div className="container">
                <div className="row" style={{justifyContent: "space-between"}}>
                    <h2 className="title" style={{margin: "0"}}>User Profile</h2>
                    <button type="button" className="button" style={{alignSelf: "flex-end"}}>
                        <Link to='/members'>돌아가기</Link>
                    </button>
                </div>
                <hr/>
                <div className="row" style={{paddingBottom: "7%"}}>
                    <div className="col-4 col-12-medium" style={{textAlign: 'center'}}>
                        <img alt="user" style={{borderRadius: "80%", objectFit: "cover", width: "300px", height: "300px"}} src={user}/>
                    </div>
                    <div className="col-8 col-12-large" style={{paddingTop: "20px"}}>
                        <div className="col-8 col-12-small" style={{display: "flex"}}>
                            <h2>{users[0].name}</h2>
                            <ul style={{color: '#e44c65'}}>{users[0].nickName}</ul>
                        </div>
                        <div className="col-8 col-12-small" style={{display: "flex"}}>
                            <div className="col-8 col-12-small">
                                <p>관심분야&nbsp;</p>
                                <p>이메일&nbsp;</p>
                            </div>
                            <div className="col-8 col-12-small" style={{color: '#e44c65'}}>
                                <p>&nbsp;{users[0].interest}</p>
                                <p>&nbsp;{users[0].email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="container">
                <hr style={{border: "2px solid", marginBottom: "0"}}/>
                <hr style={{marginTop: "3px"}}/>
                <h2 className="title">Participated</h2>
                <hr/>
                <div className="row">
                    <div className="col-12 off-1-small" style={{border:"solid 1px"}}>
                        <h4>웹페이지 제작</h4>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Profile2;