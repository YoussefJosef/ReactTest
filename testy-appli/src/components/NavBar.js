import React from 'react'

const NavBar = () => {
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo">Turtle's Time</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/todos">Todos</a></li>
                    <li><a href="/form">Form</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar