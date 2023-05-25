import React, { useState, useRef } from "react";
import "../../Css/Main.css";
import {Link, useNavigate} from "react-router-dom";
import ContentInq from "./ContentInq";

function InquiryDetail() {
    const [answering, setAnswering] = useState(false);
    const [inqAns, setInqAns] = useState(ContentInq[0].Answer); 
    const ansRef = useRef();

    let history = useNavigate();
    const handleDelete = (id) => {
        let index = ContentInq.map(function(e) {
            return e.id
        }).indexOf(id);

        ContentInq.splice(index, 1);
        history('/faq');
    };
    const onClick = () =>{
        if (answering === true) {
            const text = ansRef.current.value;
            setInqAns(text);
            setAnswering(false);
            ContentInq[0].Answered = "처리됨"
            ContentInq[0].Answer = text;
        } else setAnswering(true);

    }

    return (
        <div id="main" className="wrapper">
            <div className="container inqcont" style={{position:"relative"}}>
                <h3>{ContentInq[0].Title}</h3>
                <em>{ContentInq[0].Date}</em>
                <button type="button" className="button" style={{position:"absolute", top: "1em", right:"1em"}}>
                    <Link to='/faq'>돌아가기</Link>
                </button>
                <hr/>
                <div className="col-8 col-12-large">{ContentInq[0].Content}</div>
                <hr/>
                <button type="button" className="button">
                    <Link to='/post/update'>수정</Link>
                </button>
                &nbsp;
                <button type="button" className="button" onClick={(e) => handleDelete(e)}>삭제</button>
                &nbsp;
            </div>
            <div className="container inqcont" style={{position:"relative"}}>
                <div>
                    <h6>{ContentInq[0].Date}</h6>
                    {!answering ?
                        inqAns
                    :   <textarea className="content" rows="2" placeholder={inqAns} ref={ansRef} />}
                    <button type="button" className="button" onClick={onClick} style={{position:"absolute", right: "1em", top:"0.5em"}}>답변 등록</button>
                    
                </div>
            </div>
        </div>
    );
}

export default InquiryDetail;