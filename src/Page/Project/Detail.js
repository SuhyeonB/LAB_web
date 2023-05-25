import React, {useState, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import "../../Css/Main.css";
import styled from 'styled-components';
import Content from "../Content";
import Comments from "./Comments.js";
import TrashBin from "../../images/trash_bin.png";

const CmtxtArea = styled.div`
    border: 1px solid;
    position: relative;
    margin: 0 auto 1em auto;
`
const Textarea = styled.textarea`
    border: none;
    resize: none;
`

const Comment = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 0.5em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

const CommentN = styled.div`
    margin: 0 0.5em;
    display: block;
    font-weight: bold;
`

function Detail() {
    const idx = 0;
    const cont = Content[idx];

    const commentRef = useRef();
    const recmtRef = useRef();

    const [inputText, setInputText] = useState("");
    const [num, setNum] = useState(Comments.length);
    const [parent, setParent] = useState(-1);
    const [level, setLevel] = useState(0);
    const [isOpen, setIsOpen] = useState(false)

    const todayTimeFormal = () => {
        let now = new Date();
        let todayYear = now.getFullYear();
        let todayMonth = (now.getMonth() + 1) > 9 ? (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
        let todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
        let hours = now.getHours() > 9 ? now.getHours() : '0' + now.getHours();
        let minutes = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
        return todayYear + '-' + todayMonth + '-' + todayDate + ' ' + hours + ':' + minutes;
    };

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        setNum(Comment.length);
        setParent(-1); setLevel(0);
        const user = "정도현";
        let a = num, b = parent, c = level, d = inputText, f = todayTimeFormal();
        Comments.push({num:a, parent:b, level:c, writer: user, text: d, date:f})
        setInputText("");
        commentRef.current.value = "";
    };
    const onRemove = num => {
        if(window.confirm("정말 삭제합니까?")) {
            const nextList = Comments.filter(lis => lis.num !== num);
            Comments = nextList;
            alert("삭제되었습니다.");
        }
        else {}
    };

    const handleOpen = () => {
        if(isOpen) {
            setIsOpen(false); 
            recmtRef.current.classList.add('delRecomment')
        } else {
            setIsOpen(true);
            recmtRef.current.classList.remove('delRecomment')
        }
    }

    const onScrape = () => {
        if(window.confirm("위 글을 스크랩합니까?")) {
            alert("성공적으로 스크랩되었습니다.")
        }
        else{}
    }

    const listContent = Comments.map((lis)=>
    <div>
        <Comment className="content" style={{marginLeft:"{lis.step}0em"}}>
            <div style={{display: "inline"}}>
                <div id="circle-1" style={{margin: "1em"}}>
                    <Link to='/profile'>&nbsp;</Link>
                </div>
            </div>
            <div style={{display: "flexbox"}}>
                <CommentN>{lis.writer}</CommentN>
                <div>
                <div style={{whiteSpace:"pre-wrap", wordWrap:"break-word", marginRight:"4em"}}> {lis.text} </div>
                <div id="today-date">{lis.date}</div>
                <div id="comment" onClick={handleOpen}>답글달기 ▽</div>
                </div>
            </div>
            <img id='trash' alt="trash" src={TrashBin} onClick={()=>onRemove(lis.num)} style={{cursor: "pointer", position:"absolute", top:"1em", right:"1em"}}/>
        </Comment>
        <CmtxtArea ref={recmtRef} className="">
            <Textarea className="content" rows="1" placeholder="댓글을 입력하세요" ref={commentRef} onChange={onChange}/>
            <button className="button" onClick={onClick} style={{position:"absolute", bottom: "0", right:"0"}}>확인</button>
        </CmtxtArea>
    </div>
    );

    let history = useNavigate();
    const handleDelete = (id) => {
        let index = Content.map(function(e) {
            return e.id
        }).indexOf(id);

        Content.splice(index, 1);
        history('/project');
    };

    return(
        <div id="main" className="wrapper style">
            <div className="container">
                <h2>{cont.Title}</h2>
                <div className="col-8 col-12-large">
                    {cont.Author}
                </div>
                <hr/>
                <pre className="col-8 col-12-large">
                    {cont.Content}
                </pre>

                <hr/>
                <button type="button" className="button">
                    <Link to={{pathname:'/post/update', state: {num: 1},}}>수정</Link>
                </button>
                &nbsp;
                <button type="button" className="button" onClick={(e) => handleDelete(e)}>삭제</button>
                &nbsp;
                <button type="button" className="button" onClick={(e) => onScrape(e)}>스크랩</button>
                &nbsp;
                <button type="button" className="button">
                    <Link to='/project'>뒤로</Link>
                </button>
            </div>
            <br/>
            <div className="container">
                <h3> 댓글 </h3>
                    <CmtxtArea>
                        <Textarea className="content" rows="2" placeholder="댓글을 입력하세요" ref={commentRef} onChange={onChange}/>
                        <button className="button" onClick={onClick} style={{position:"absolute", bottom: "0", right:"0"}}>확인</button>
                    </CmtxtArea>
                    <div className="col-8 col-12-large">
                        {listContent}
                    </div>
            </div>
        </div>
    );
}

export default Detail;

/*
        <CmtxtArea ref={recmtRef} className="">
            <Textarea className="content" rows="1" placeholder="댓글을 입력하세요" ref={commentRef} onChange={onChange}/>
            <button className="button" onClick={onClick} style={{position:"absolute", bottom: "0", right:"0"}}>확인</button>
        </CmtxtArea>
*/