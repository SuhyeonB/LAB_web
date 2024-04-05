import React,{ useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../style/Main.css";
import "../../style/Board.css";

const PostsSave = () => {
    const[category, setCategory] = useState("");
    const[title, setTitle] = useState("");
    const[writer, setWriter] = useState("");
    const[content, setContent] = useState("");
    // const[file, setFile] = useState();

    //const uploadRef = useRef();
    // const onClickUpload = () => { uploadRef.current.click(); };

    let history = useNavigate();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8080/api/board/posts', 
        {category, title, writer, content});
        history('/board');
    };

    return(
        <div id="main" className="wrapper style1">
            <div className="container">
                <h2 className="title"> 게시글 등록 </h2>
                <hr/>

                <form className="row gtr-uniform gtr-50">
                    <div className="col-4 col-12-xsmall">
                        <label htmlFor="category">카테고리</label>
                        <select id="category" className="form-control" required onChange={(e) => setCategory(e.target.value)}>
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
                        <input type="text" className="form-control" id="title" placeholder="제목을 입력하세요" required onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="form-group col-12 col-12-large">
                        <label htmlFor="author"> 작성자 </label>
                        <input type="text" className="form-control" id="author" placeholder="작성자를 입력하세요." required onChange={(e) => setWriter(e.target.value)}/>
                    </div>
                    <div className="form-group col-12 col-12-large">
                        <CKEditor editor={ ClassicEditor }
                            config={{ 
                                placeholder: "내용을 입력하세요", 
                                extraPlugins: [uploadPlugin],
                            }}
                            onChange={ ( event, editor ) => {  setContent(editor.getData()) } }
                        />
                    </div>
                </form>
                <button type="button" className="button primary" id="btn-save" onClick={(e) => handleSubmit(e)}>글 등록</button>
                &nbsp;
                <button type="button" className="button">
                    <Link to='/board'>취소</Link>
                </button>
            </div>
        </div>
    );
}

export default PostsSave;