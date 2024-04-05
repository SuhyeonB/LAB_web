import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Main from "./component/Main";
import Header from "./component/Header";
import Footer from "./component/Footer";

import Login from "./Page/User/Login";

import Members from "./Page/Members";
import Contact from "./Page/Contact/Contact";
import Board from "./Page/Board/BoardHome"
import PostPage from "./Page/Board/PostPage"
import PostsSave from "./Page/Board/PostsSave";
import PostsUpdate from "./Page/Board/PostsUpdate";
import Profile from "./Page/ProfileManage/Profile";
import Profile2 from "./Page/ProfileManage/Profile2";


//import Project from "./Page/Project";

import PwdforUpdate from "./Page/ProfileManage/PwdforUpdate";
import ProfileUpdate from "./Page/ProfileManage/ProfileUpdate";
import ScrollToTop from "./Page/ScrollToTop";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <ScrollToTop />
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path='/' element={<Main/>}/>
            <Route path='/members' element={<Members/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/board' element={<Board/>}/>
            <Route path='/post/save' element={<PostsSave/>}/>
            <Route path='/post/update' element={<PostsUpdate/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/profile/:profId' element={<Profile2/>}/>
            <Route path="/profile/confirmuser" element={<PwdforUpdate/>}/>
            <Route path="/profile/update" element={<ProfileUpdate/>}/>
            <Route path="/posts/:id" element={<PostPage/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;