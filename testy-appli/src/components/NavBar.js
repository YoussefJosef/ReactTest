import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
const NavBar = (props) => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo left">Turtle's Time</a>
                <ul className="right">
                    <li><Link to="/axiosHome">AxiosHome</Link></li>
                    <li><Link to="/reduxHome">ReduxHome</Link></li>
                    <li><Link to="/todos">Todos</Link></li>
                    <li><Link to="/form">Form</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(NavBar)