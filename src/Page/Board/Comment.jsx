import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import CommentItem from './CommentItem';

const Comment = (pId) => {
    let ref = 0;
    const [comment, setComment] = useState('');
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            
            await axios.get(`http://localhost:8080/api/board/${pId}`)
            .then( result => {
                setCommentList(result.data);
            })
        }
        getComments();
    },[pId]);

    const onChange = useCallback(e => {
        setComment(e.target.value);
    },[]);

    const onSubmit = useCallback(e => {
        e.preventDefault();
        if (comment === null) {
            alert("댓글 내용이 없습니다.");
            return;
        }
        axios.post(`http://localhost:8080/api/board/${pId}`, {
            writer: 'temp',
            comment,
            postNum: pId,
            ref: ref+1, ord: 0, dep: 0
        })
        setComment('');

        console.log(commentList);
    },[comment, commentList, pId, ref]);

    return (
        <div className='container commentbox'>
            <hr/>
            <h4> COMMENTS </h4>
            <form className='cmtxt' onSubmit={onSubmit}>
                <textarea className="content" rows="2" placeholder="댓글을 입력하세요" onChange={onChange} value={comment} />
                <button className="button submit">확인</button>
            </form>
            <div className="col-8 col-12-large">
                {commentList.map(comment => {
                    return <CommentItem comment={comment} pId={pId} key={comment.id}/>
                })}
            </div>
        </div>
    );
};

export default Comment;