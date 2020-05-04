import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
const NavBar = (props) => {
    setTimeout(() => {
        console.log("Navbar.3s" + props);
        //  props.history.push('/todos')
    }, 3000);
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <a className="brand-logo">Turtle's Time</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/todos">Todos</Link></li>
                    <li><Link to="/form">Form</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(NavBar)