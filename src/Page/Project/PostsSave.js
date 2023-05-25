import React,{useRef, useState} from "react";
import "../../Css/Main.css";
import {Link, useNavigate} from "react-router-dom";
//import ReactQuill from 'react-quill';
//import 'react-quill/dist/quill.snow.css';
import Content from "../Content"
import link from "../../images/link.png";

function PostsSave() {
    const[category, setCategory] = useState("");
    const[title, setTitle] = useState("");
    const[author, setAuthor] = useState("");
    const[content, setContent] = useState("");
    const[no, setNo] = useState(3);
    const[file, setFile] = useState();

    const uploadRef = useRef();
    const onClickUpload = () => { uploadRef.current.click(); };

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let curDate = new Date();
        const date = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월 ${curDate.getDate()}일`;

        let a = category, b = title, c = author, d = content, f = date; e = file;
        Content.push({id : no, Category: a, Title: b, Author: c, Content: d, Date: f, File: e});

        setNo(no + 1);

        history('/project');
    };

    return(
        <div id="main" className="wrapper style1">
            <div className="container">
                <h2 className="title"> 게시글 등록 </h2>
                <hr/>

                <form className="row gtr-uniform gtr-50">
                    <div className="col-4 col-12-xsmall">
                        <label htmlFor="category">카테고리</label>
                        <select id="category" className="form-control" required onChange={(e) => setCategory(e.target.value)}>
                            <option value="etc">- Category -</option>
                            <option value="Backend">Backend</option>
                            <option value="Cloud">Cloud</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Unity">Unity</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className="form-group col-12 col-12-large">
                        <label htmlFor="title">제목</label>
                        <input type="text" className="form-control" id="title" placeholder="제목을 입력하세요" required onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="form-group col-12 col-12-large">
                        <label htmlFor="author"> 작성자 </label>
                        <input type="text" className="form-control" id="author" placeholder="작성자를 입력하세요." required onChange={(e) => setAuthor(e.target.value)}/>
                    </div>
                    <div className="form-group col-12 col-12-large">
                        <div style={{display:"inline-flex"}}>
                            <label htmlFor="file"> 첨부파일 </label>
                            <img src={link} alt="link" style={{textAlign:"right", width:"25px", height:"25px", marginLeft:"1em"}} onClick={onClickUpload}/>
                        </div>
                        <input type="file" id="file" className="form-control" name="filename[]" multiple="multiple" ref={uploadRef} onChange={(e) => { setFile(e.target.files[0]) }
                        }  style={{display:"none"}}/>
                        <div type="text" className="fileupload" style={{padding: "1em"}} readOnly>
                        </div>
                    </div>
                    <div className="form-group col-12 col-12-large">
                        <label htmlFor="content"> 내용 </label>
                        <textarea className="form-control" id="content" rows="15" placeholder="내용을 입력하세요" required onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                </form>
                <button type="button" className="button primary" id="btn-save" onClick={(e) => handleSubmit(e)}>글 등록</button>
                &nbsp;
                <button type="button" className="button">
                    <Link to='/project'>취소</Link>
                </button>
            </div>
        </div>
    );
}

export default PostsSave;