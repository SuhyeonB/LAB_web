import React, { useCallback, useState } from 'react';

const CommentItem = ({ comment, pId }) => {
    const [visible, setVisible] = useState(false);
    const [recomment, setRecomment] = useState('');

    const onChange = useCallback(e => {
        setRecomment(e.target.value);
    },[]);
    const onSubmit = useCallback(e => {
        console.log(recomment);
        console.log(pId);
        console.log(comment.ord);
        console.log(comment.dep);
        // comment의 ord와 dep에 접근 가능 > 이를 활용해 데이터 만들때 ord, dep값 넣으면 됨
        setRecomment('');

        e.preventDefault();
    },[pId, recomment, comment.ord, comment.dep]);

    return (
        <div>
        <div className='commentItem'>
            <div style={{marginLeft: `${1+comment.dep*2}em`}}>
                <div className='cwriter'>
                    {comment.writer}
                </div>
                <div className='comment'>
                    {comment.comment}
                </div>
                <div style={{display: "flex"}}>
                    <button type='button' className='rebutton' onClick={ (e) => {
                        e.preventDefault(); 
                        visible? setVisible(false) : setVisible(true);
                    }}>
                        COMMENT</button>
                    <i className='fas fa-regular fa-trash fa-sm' style={{marginLeft: "auto", marginRight: "1em"}}/>
                </div>
            </div>
        </div>
        {visible? 
            <div className='recomment'>
                <div style={{marginLeft: "1em"}}>
                    <form className='recmtxt' onSubmit={onSubmit}>
                        <textarea rows="1" placeholder="댓글을 입력하세요" onChange={onChange} value={recomment}/>
                        <button type='button' className="rebutton" onClick={onSubmit}>확인</button>
                        <button type='button' className="rebutton" onClick={(e) => {
                            e.preventDefault();
                            setVisible(false);
                            // textarea 비우기
                        }}>취소</button>
                    </form>
                </div>
            </div> : <></>}
        </div>        
    );
};

export default CommentItem;