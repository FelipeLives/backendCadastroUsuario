import "./Nav.css"
import React from "react"

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home">Início</i>
            </a>
            <a href="#/users">
                <i className="fa fa-users">Usuário</i>
            </a>
        </nav>
    </aside>