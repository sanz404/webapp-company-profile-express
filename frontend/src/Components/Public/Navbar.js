import React from "react";
import { Link, NavLink } from 'react-router-dom'
import { isAuth, isAdmin } from "../../Helpers/Auth"

class PublicNavbar extends React.Component{

    source
    constructor(props) {
        super(props)
        this.state = {
            authUser: false,
            authAdmin: false
        }
    }

    componentDidMount(){
        let auth = isAuth()
        let admin = isAdmin()
        this.setState({
            authUser: auth,
            authAdmin: admin
        })
    }

    render(){
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                    <div className="container px-5">
                        <Link to="/" className="navbar-brand">{process.env.REACT_APP_TITLE}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <NavLink to="/home" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                                        Home
                                    </NavLink>
                               </li>

                               <li className="nav-item">
                                    <NavLink to="/about" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                                        About Us
                                    </NavLink>
                               </li>

                               <li className="nav-item">
                                    <NavLink to="/contact" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                                        Contact
                                    </NavLink>
                               </li>

                               <li className="nav-item">
                                    <NavLink to="/faq" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                                        Faq
                                    </NavLink>
                               </li>

                               <li className="nav-item">
                                    <NavLink to="/pricing" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                                        Pricing
                                    </NavLink>
                               </li>

                               <li className="nav-item">
                                    <NavLink to="/blog" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                                        Blog
                                    </NavLink>
                               </li>

                               <li className="nav-item">
                                    <NavLink to="/portfolio" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                                        Portfolio
                                    </NavLink>
                               </li>


                               { this.state.authUser ? 
                                    <>
                                        <li className="nav-item dropdown">
                                            <Link to="/"  id="navbarDropdownBlog" role="button" data-bs-toggle="dropdown" aria-expanded="false"  className="nav-link dropdown-toggle">Account</Link>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                                { this.state.authAdmin ? <><li><Link to="/admin/dashboard" className="dropdown-item">Admin</Link></li></> : <></> }
                                                <li>
                                                    <Link to="/account/profile" className="dropdown-item">Profile</Link>
                                                </li>
                                                <li>
                                                    <Link to="/account/password" className="dropdown-item">Change Password</Link>
                                                </li>
                                                <li>
                                                    <Link to="/logout" className="dropdown-item">Log Out</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </> 
                                : 
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/login" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                                            Login
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/register" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                                            Register
                                        </NavLink>
                                    </li>
                                </> 
                               }

                               
                                                 
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }

}

export default PublicNavbar