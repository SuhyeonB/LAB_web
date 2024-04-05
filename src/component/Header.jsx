import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Main.css";

function Header() {
    return (
        <div id="header">
            <h1 id="logo"><a href='https://ce.daejin.ac.kr/ce/index.do' rel="noreferrer" target="_blank">DAEJIN CE</a></h1>
            <nav id="nav">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li>
                        <Link to='/members'>Member</Link>
                    </li>
                    <li>
                        <Link to='/project'>Projects</Link>
                    </li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li>
                        <Link to='/board'>Board</Link>
                    </li>
                    <li></li>
                    <a href="/login" className="button active" role="button">LogIn</a>
                    <Link to='/profile' id="circle-2" />
                </ul>
            </nav>
        </div>
    );
}

export default Header;