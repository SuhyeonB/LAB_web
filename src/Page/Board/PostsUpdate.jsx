import React,{useEffect, useState} from "react";
import "../../style/Main.css";
import {Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function PostsUpdate() {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state;

    const[category, setCategory] = useState("");
    const[title, setTitle] = useState("");
    const[writer, setWriter] = useState("");
    const[content, setContent] = useState("");
    
    useEffect(() => {
        const getPost = async () => {
            await axios.get(`http://localhost:8080/api/board/posts/${id.pId}`)
                .then((result) => {
                    setCategory(result.data.category); setTitle(result.data.title);
                    setWriter(result.data.writer); setContent(result.data.content);
                })
        }
        getPost();
        
    },[id]);

    const onUpdate = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8080/api/board/posts/${id.pId}`,
         {
            category: category,
            title: title,
            content: content,
            //createdAt: new Date()   // 얘만 수정되면 될 듯
         })
            .then(()=>{
                alert('게시글이 수정되었습니다.');
                navigate('/board');
            })
        ;
    }
    const customUploadAdapter = (loader) => {
        return {
            upload(){
                return new Promise((resolve, reject) => {
                    const data = new FormData();
                    loader.file.then((file)=> {
                        data.append("name", file.name);
                        data.append("file", file);

                        axios.post('http://localhost:8080/images', data)
                        .then((res) => {
                            resolve({
                                default: `http://localhost:8080/images/${res.data.filename}`
                            });
                        })
                        .catch ((err) => reject(err))
                    })
                })
            }
        }
    }
    function uploadPlugin(editor){
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return customUploadAdapter(loader);
        }
    }
    return(
        <div id="main" className="wrapper style1">
            <div className="container">
                <h2 className="title"> 게시글 수정 </h2>
                <hr/>

                <form className="row gtr-uniform gtr-50">
                    <div className="col-4 col-12-xsmall">
                        <label htmlFor="category">카테고리</label>
                        <select id="category" className="form-control" required onChange={() => {}} value={category}>
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
                        <input type="text" className="form-control" id="author" value={writer} required readOnly/>
                    </div>
                    <div className="form-group col-12 col-12-large">
                        <CKEditor editor={ ClassicEditor } data={content}
                            config={{ 
                                extraPlugins: [uploadPlugin],
                            }}
                            onChange={ ( event, editor ) => {  setContent(editor.getData()) } }
                        />
                    </div>
                </form>
                <button type="button" className="button primary" id="btn-save" onClick={(e) => {onUpdate(e)}}>글 등록</button>
                &nbsp;
                <button type="button" className="button">
                    <Link to='/post'>취소</Link>
                </button>
            </div>
        </div>
    );
}

export default PostsUpdate;