import React,{useState} from "react";
import "../../Css/Main.css";
import {Link, useNavigate } from "react-router-dom";
import Content from "./../Content";

function PostsUpdate() {
    const idx = 0;
    const cont = Content[idx];
    const [category, setCategory] = useState(cont.Category);
    const[title, setTitle] = useState(cont.Title);
    const author = cont.Author;
    const[content, setContent] = useState(cont.Content);

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let curDate = new Date();
        const date = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월 ${curDate.getDate()}일`;

        let a = category, b = title, c = content, d = date;
        Content[idx].Category = a;
        Content[idx].Title = b;
        Content[idx].Content = c;
        Content[idx].Date = d;

        history('/project');
    };

    return(
        <div id="main" className="wrapper style1">
            <div className="container">
                <h2 className="title"> 게시글 수정 </h2>
                <hr/>

                <form className="row gtr-uniform gtr-50">
                    <div className="col-4 col-12-xsmall">
                        <label htmlFor="category">카테고리</label>
                        <select id="category" className="form-control" required onChange={(e) => setCategory(e.target.value)} value={category}>
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
                        <input type="text" className="form-control" id="title" value={title} required onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="form-group col-12 col-12-large">
                        <label htmlFor="author"> 작성자 </label>
                        <input type="text" className="form-control" id="author" value={author} required readOnly/>
                    </div>
                    <div className="form-group col-12 col-12-large">
                        <label htmlFor="content"> 내용 </label>
                        <textarea className="form-control" id="content" rows="15" value={content} required onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                </form>
                <button type="button" className="button primary" id="btn-save" onClick={(e) => handleSubmit(e)}>글 등록</button>
                &nbsp;
                <button type="button" className="button">
                    <Link to='/post'>취소</Link>
                </button>
            </div>
        </div>
    );
}

export default PostsUpdate;