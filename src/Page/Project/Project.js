import React, { useState, useRef } from "react";
import "../../Css/Main.css";
import { Link } from "react-router-dom";
import Content from "./../Content";
import Magnifier from "../../images/magnifier.png";

function Project() {
    const [category, setCategory] = useState("all");
    const [query, setQuery] = useState("");
    const [list, setList] = useState([]);
    const [searching,setSearching] = useState(false);

    const searchRef = useRef();

    const onSearch = (e) => {
        setSearching(true);
         if (category === "title") {
            const filteredList = Content.filter((Content)=>{
                return Content.Title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            })
            setList(filteredList);
        } if (category === "content" || category === "all") {
            const filteredList = Content.filter((Content)=>{
                return Content.Content.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            })
            setList(filteredList);
        }
    }

    return (
        <div id="main" className="wrapper style1">
            <div id="content" className="container">
                <div className="row" style={{justifyContent: "space-between"}}>
                    <h2 className="title"> Project </h2>
                    <button type="button" className="button" style={{marginTop:"2em"}}>
                        <Link to='../post/save'>글쓰기</Link>
                    </button>
                </div>
                <div className="row" style={{justifyContent: "right", marginBottom: "1em"}}>
                    <div style={{display:"inline-flex"}}>
                        <select id="category" className="form-control" style={{width:'140px', height: '40px'}} required onChange={(e) => {setCategory(e.target.value); searchRef.current.focus(); }} >
                            <option value="all">-----</option>
                            <option value="title">Title</option>
                            <option value="content">Contents</option>
                        </select>
                        <input type="text" style={{height:'40px'}} required onChange={(e)=> setQuery(e.target.value)} 
                        onKeyUp={(e)=>{if(e.key === "Enter") onSearch();}} ref={searchRef} />
                        <img id="search" alt="search" src={Magnifier} onClick={onSearch} style={{cursor: "pointer"}}/>
                    </div>
                </div>
                <table className="table-wrapper">
                    <thead className="align-center">
                    <tr>
                        <td>No.</td>
                        <td>Category</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Date(최종 수정일)</td>
                    </tr>
                    </thead>
                    <tbody id="tbody">
                    { 
                        !searching ?
                            Content && Content.length > 0
                            ?
                                Content.map((item)=>{
                                    return(
                                        <tr className="align-center">
                                            <td>{item.id}</td>
                                            <td>{item.Category}</td>
                                            <td>
                                                <Link to='/post'>{item.Title}</Link>
                                            </td>
                                            <td>{item.Author}</td>
                                            <td>{item.Date}</td>
                                        </tr>
                                    );
                                })
                            :
                                <tr className="align-center">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr> 
                        :
                        list && list.length > 0
                            ?
                                list.map((item)=>{
                                    return(
                                        <tr className="align-center">
                                            <td>{item.id}</td>
                                            <td>{item.Category}</td>
                                            <td>
                                                <Link to='/post'>{item.Title}</Link>
                                            </td>
                                            <td>{item.Author}</td>
                                            <td>{item.Date}</td>
                                        </tr>
                                    );
                                })
                            :
                                <td className="align-center"> </td>
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Project;