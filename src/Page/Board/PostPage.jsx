import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../../style/Board.css';
import HTMLReactParser from 'html-react-parser';

import Comment from './Comment';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [date, setDate] = useState('');

    let history = useNavigate();
    
    useEffect(() => {
        const getPost = async () => {
            await axios.get(`http://localhost:8080/api/board/posts/${id}`)
                .then((result) => {
                    setPost(result.data);
                    setDate(result.data.createdAt.substr(0,10));
                })
        }
        getPost();
    },[id, date, post.content]);
    // 삭제
    const onDelete = (e) => {
        if(window.confirm("정말로 삭제하시겠습니까?")) {
            e.preventDefault();
            alert("삭제되었습니다.")
            axios.delete(`http://localhost:8080/api/board/posts/${id}`);
            history('/board');
        }
    }
    // 스크랩

    return (
        <div id='main' className='wrapper style'>
            <div className='container posthead'>
                <div className='posttitle'>
                    <h3> {post.title} </h3>
                </div>
                <div className='postInfo'>
                    <dl className='writer'>
                        <dt> WRITER </dt>
                        <dd> {post.writer} </dd>
                    </dl>
                    <dl className='date'>
                        <dt> DATE </dt>
                        <dd> {date} </dd>
                    </dl>
                    <div className='icons'>
                        <i className='icon fa-light fa-bookmark fa-lg bookmark' />
                        <i className='fas fa-regular fa-heart fa-lg like'/>
                    </div>
                </div>
                <hr/>
            </div>
            <div className="container postbody">
                <div id='content' style={{whiteSpace: "pre-line", padding: "1em"}}>
                    {HTMLReactParser(post.content+"")}
                </div>
            </div>
            <div className='container'>
                <div className='buttonbox'>
                    <Link to={'/post/update'} className="button" state={{ pId : id }}>수정</Link>
                    <button type="button" className="button" onClick={(e) => onDelete(e)}>삭제</button>
                    <Link to='/board' className='button'>뒤로</Link>
                </div>
            </div>
            
            <Comment pid={id} /> 
        </div>
    );
};

export default PostPage;