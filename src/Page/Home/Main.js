import React from "react";
import "../../Css/Main.css";
import ImgSliders from "./ImgSlider"
import Springlogo from "../../images/spring_logo.png";
import Unitylogo from "../../images/unity_logo.png";
import DBlogo from "../../images/db_logo.png";
import People from "../../images/people.png";

function Main() {
    return(
        <div>
            <div id="main" className="wrapper style ">
                <div className="container">
                    <div id="content">
                        <h2> DAEJIN UNIVERSITY  DATABASE LABORATORY</h2>
                        <div className="row">
                            <div className="col-6 col-12-medium">
                                <a href="#;" className="image fit"><img src="../images/pic02.jpg" alt=""/><br/></a>
                            </div>
                            <div className="col-6 col-12-medium">
                            </div>
                        </div>
                        <ImgSliders />

                        <div className="container" style={{paddingTop: "5%"}}>
                            <div className="row" style={{textAlign: "left", justifyContent: "space-between", width:"inherit"}}>
                                <div className="col-4 col-12-small containerbox" style={{position: "relative", overflow : "hidden"}}>
                                    <div style={{textAlign:"center", height: "350px"}}>
                                        <img src={Springlogo} style={{position: "absolute", width: "80%", opacity: "0.75", top: "2%", left: "10%"}} alt="spring"/>
                                    </div>
                                    <h2>Spring</h2>
                                    <br/> <br/>
                                    <p>백엔드의 주요 프레임워크로써, 스프링은 자바 엔터프라이즈 애플리케이션 개발에 사용되고 있습니다.
                                    동적인 웹 사이트를 개발하기 위한 여러 가지 서비스를 제공하고 있으며,
                                    한국에서는 공공기관의 웹 서비스 개발시 사용을 권장하는 전자정부 표준프레임워크의 기반 기술로서 사용되고 있습니다.
                                    </p>
                                </div>
                                <div className="col-4 col-12-small containerbox" style={{position: "relative", overflow : "hidden"}}>
                                <div style={{textAlign:"center", height: "350px"}}>
                                        <img src={Unitylogo} style={{position: "absolute", width: "80%", opacity: "0.85", top: "0", left: "10%"}} alt="unity"/>
                                    </div>
                                    <h2>Unity</h2>
                                    <br/> <br/>
                                    <p>게임 엔진 유니티를 활용한 2D, 3D 게임, VR 콘텐츠 개발</p>
                                </div>
                                <div className="col-4 col-12-small containerbox" style={{position: "relative", overflow : "hidden"}}>
                                    <div style={{textAlign:"center", height: "350px"}}>
                                        <img src={DBlogo} style={{position: "absolute", width: "80%", opacity: "0.75", top: "2%", left: "10%"}} alt="database"/>
                                    </div>
                                    <h2> Database를 활용한 모든 분야 </h2>
                                    <p>
                                        기존의 DB 랩실에서 다루던 분야가 아니더라도, 원한다면 데이터베이스를 활용한 다양한 응용 분야 중 원하는 주제로 프로젝트 및 세미나를 진행할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row" style={{border: "solid 1px rgba(255, 255, 255, 0.3", padding:"1em 0", width: "100%", margin:"0 0"}}>
                            <img src={People} alt="recruit" className="col-3 col-3-small"/>
                            <div>
                            <h3> Recruit 상시 모집</h3>
                            <ul className="col-12">
                                <li> 컴퓨터공학전공인 학우</li>
                                <li> 데이터베이스에 관심이 있는 학우</li>
                                <li> 주 1회 랩 세미나 참여가 가능한 학우</li>
                                <li> 개발에 흥미가 있고 같이 성실히 공부할 학우</li>
                                <li> 모집 기간 : ~ing </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;