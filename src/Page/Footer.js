import React from "react";
import "../Css/Main.css";

function Footer() {
    return (
        <div id="footer">
            <ul className="icons">
                <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a>
                </li>
                <li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a>
                </li>
                <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a>
                </li>
                <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon solid alt fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Untitled. All rights reserved.</li>
                <li>Design: <a href="/">DB LAB</a></li>
            </ul>
        </div>
    );
}

export default Footer;