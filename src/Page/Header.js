import React from "react";
import {Link} from "react-router-dom";
import "../Css/Main.css";

function Header() {
    return (
        <div id="header">
            <h1 id="logo"><Link to='/'>DB LAB</Link></h1>
            <nav id="nav">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li>
                        <Link to='/members'>Member</Link>
                    </li>
                    <li>
                        <Link to='/project'>Projects</Link>
                    </li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li></li>
                    <a href="/logout" className="button active" role="button">Logout</a>
                    <Link to='/profile' id="circle-2" />
                </ul>
            </nav>
        </div>
    );
}

export default Header;