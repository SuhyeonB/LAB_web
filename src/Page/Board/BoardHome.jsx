import React, { useEffect, useState } from 'react';
import '../../style/Main.css'
import '../../style/Board.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination';

function BoardHome() {
    const none = 
        <tr>
            <td colSpan='5' style={{textAlign: 'center'}}>
            작성된 글이 없습니다.
            </td>
        </tr>
    ;
    const [tableBody, setTableBody] = useState(none);
    const [postList, setPostList] = useState([]);
    const [condition, setCondition] = useState('all');
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const perPage = 10;

    useEffect(() => {
        const getPosts = async () => {
            await axios.get('http://localhost:8080/api/board/posts')
                .then((result) => {setPostList(result.data)});
        }
        getPosts();
    },[]);
    
    useEffect(() => {
        if (postList) {
            const tb = postList.map((post, index)=>{
                return(
                    <tr className='align-center' key={post._id}>
                        <td>{index+1}</td>
                        <td>{post.category}</td>
                        <td style={{textAlign:"left"}}>
                            <Link to={`/posts/${post._id}`}> {post.title} </Link>
                        </td>
                        <td>{post.writer}</td>
                        <td>{post.createdAt.substr(0,10)}</td>
                    </tr>
                );
            })
            setTableBody(tb.reverse());
        }

    },[postList]);

    const onSearch = (e) => {
        e.preventDefault();
        let filteredList = [];
        if (condition === "title") { 
            filteredList = postList.filter((post)=>{
                return post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            })
        } else if (condition === "content") {
            filteredList = postList.filter((post)=>{
                return post.content.includes(query);
            })
        } else if (condition === "writer") {
            filteredList = postList.filter(post => {
                return post.writer.toLocaleLowerCase().includes(query.toLocaleLowerCase());
            })
        }
        if (filteredList.length === 0) return setTableBody(none);
        return setPostList(filteredList);
        /*
        if (category === "all") {   // OR 조건으로 수정
            const filteredList = postList.filter((post) => {
                const filtered1 = post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
                const filtered2 = post.content.toLocaleLowerCase().includes(query.toLocaleLowerCase());
                return filtered1 + filtered2;
            })
            return setPostList(filteredList);
        }*/
    }

    return (
        <div id='main' className='wrapper'>
            <div id='content' className='container'>
                <h2> BOARD </h2>
                <hr/>
                
                <div className='row aln-middle aln-space'>
                    <div className='searchBox'>
                        <select id="category" required onChange={(e)=>{ setCondition(e.target.value) }} >
                            <option value="all">-----</option>
                            <option value="title"> title </option>
                            <option value="content"> content </option>
                            <option value="writer"> writer </option>
                        </select>
                        <input type="text" required onChange={(e) => setQuery(e.target.value)}/>
                        <button className='search' onClick={e=>onSearch(e)}>
                            <i className='fas fa-search fa-2x mag'/>
                        </button>
                    </div>
                        <Link to='../post/save' className='button'>글쓰기</Link>
                </div>

                <table className='table-wrapper'>
                    <thead className='align-center'>
                    <tr>
                        <th style={{width: "5vw"}}>NO.</th>
                        <th style={{width: "10vw"}}>CATEGORY</th>
                        <th style={{width: "30vw"}}>TITLE</th>
                        <th style={{width: "10vw"}}>AUTHOR</th>
                        <th style={{width: "10vw"}}>DATE</th>
                    </tr>
                    </thead>
                    <tbody>
                        { Array.from(tableBody).slice( ((page-1)*perPage), ((page-1)*perPage+perPage) ) }
                    </tbody>
                </table>
                <Pagination
                    totalPosts={postList.length}
                    perPage={perPage}
                    page={page} setPage={setPage}/>
            </div>            
        </div>
    );
}

export default BoardHome;