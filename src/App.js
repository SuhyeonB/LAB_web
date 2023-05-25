import React from "react";
import Main from "./Page/Home/Main";
import Header from "./Page/Header";
import Footer from "./Page/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Members from "./Page/Members";
import Project from "./Page/Project/Project"
import PostsSave from "./Page/Project/PostsSave";
import PostsUpdate from "./Page/Project/PostsUpdate";
import Detail from "./Page/Project/Detail";
import Profile from "./Page/ProfileManage/Profile";
import Profilem04 from "./Page/ProfileManage/Profile2";
import Faq from "./Page/FAQ/Faq";
import InquirySave from "./Page/FAQ/InquirySave";
import InquiryDetail from "./Page/FAQ/InquiryDetail";
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
            <Route path='/' element={<Main/>}/>
            <Route path='/members' element={<Members/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/post' element={<Detail/>}/>
            <Route path='/post/save' element={<PostsSave/>}/>
            <Route path='/post/update' element={<PostsUpdate/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/profilem04' element={<Profilem04/>}/>
            <Route path='/faq' element={<Faq />}/>
            <Route path='/faq/save' element={<InquirySave/>}/>
            <Route path="/faq/inqpost" element={<InquiryDetail/>}/>
            <Route path="/profile/confirmuser" element={<PwdforUpdate/>}/>
            <Route path="/profile/update" element={<ProfileUpdate/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;