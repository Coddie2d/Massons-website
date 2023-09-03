import React from "react";
import '../styles/Footer.scss'
import '../styles/index.scss'

export default function Footer(){
    return (
        <footer className="footer container">
            <nav className="footer__links">
                <a href="https://discord.gg/massons" className="footer_link link nav_link">discord</a>
                <a href="https://twitter.com/SolanaMSSN" className="footer_link link nav_link">twitter</a>
                <a href="https://massons.gitbook.io/massons/" className="footer_link link nav_link">docs</a>

            </nav>
        </footer>
    )
}