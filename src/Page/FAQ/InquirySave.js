import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContentInq from './ContentInq';

function InquirySave() {
    const author = "DAVE";
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [no, setNo] = useState(1);

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let curDate = new Date();
        const date = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월 ${curDate.getDate()}일`;
        const answered = "처리중"
        
        let a = title, b = author, c = content, d = date, f = answered;
        ContentInq.push({id : no, Title: a, Author: b, Content: c, Date: d, Answered: f});

        setNo(no + 1);

        history('/faq');
    }
    return (
        <div id="main" className="wrapper style1">
            <div className="container">
                <h2 className="title"> 문의글 등록 </h2>
                <hr/>

                <form className="row gtr-uniform gtr-50">
                    <div className="form-group col-12 col-12-large">
                        <label htmlFor="title">제목</label>
                        <input type="text" className="form-control" id="title" placeholder="제목을 입력하세요" required onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="form-group col-12 col-12-large">
                        <label htmlFor="author"> 작성자 </label>
                        <input type="text" className="form-control" id="author" placeholder={author} value={author} readOnly/>
                    </div>
                    <div className="form-group col-12 col-12-large">
                        <label htmlFor="content"> 내용 </label>
                        <textarea className="form-control" id="content" rows="15" placeholder="내용을 입력하세요" required onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                </form>
                <button type="button" className="button primary" id="btn-save" onClick={(e) => handleSubmit(e)}>글 등록</button>
                &nbsp;
                <button type="button" className="button">
                    <Link to='/faq'>취소</Link>
                </button>
            </div>
        </div>
    );
}

export default InquirySave;