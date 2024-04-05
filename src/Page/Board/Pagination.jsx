import React from 'react';
import '../../style/Board.css'
import '../../style/Main.css'

const Pagination = ({totalPosts, perPage,  page, setPage }) => {
    // totalPsts: 총 게시글 수, perPage: 페이지 당 게시글 수, page: 현재 페이지, setPage(): 페이지 상태 변경
    const numPages = Math.ceil(totalPosts / perPage);

    return (
        <nav className='pagination'>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                &lt;
            </button>
            {
                Array(numPages).fill().map((_, i) => {
                    return(
                        <button key={i + 1} onClick={()=>setPage(i+1)} aria-current={page === i+1 ? "page" : undefined}>
                        {i + 1}
                    </button>
                    )
                })
            }
            <button onClick={()=> setPage(page + 1)} disabled={page === numPages}>
                &gt;
            </button>
        </nav>
    );
};

export default Pagination;