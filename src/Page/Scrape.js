import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../Css/Main.css";

function Scrape() {
    const [list, setList] = useState(
        [{no: 1, category: "Frontend", title: "프론트엔드개발자 모집"},]
    );
    const onRemove = no => {
        if(window.confirm("스크랩된 글을 삭제합니까?")) {
            const nextList = list.filter(lis => lis.no !== no);
            setList(nextList);
            alert("삭제되었습니다.");
        }
        else {}
    };

    const listContent = list.map((lis)=>
        <tr className="align-center">
            <td>{lis.no}</td>
            <td>{lis.category}</td>
            <td>
                <Link to='/post'>{lis.title}</Link>
            </td>
            <td>
                <button type="button" className="button" onClick={()=>onRemove(lis.no)}>삭제</button>
            </td>
        </tr>
    );

    return (
        <div id="main" className="wrapper style1">
            <table className="table-wrapper">
                <thead className="align-center">
                <tr>
                    <td>No.</td>
                    <td>Category</td>
                    <td>Title</td>
                    <td></td>
                </tr>
                </thead>
                <tbody id="tbody">
                {listContent}
                </tbody>
            </table>
        </div>
    );
}

export default Scrape;