    import React from "react";
import { Link } from 'react-router-dom'

class AdminNavigation extends React.Component {

    source
    constructor(props) {
        super(props)
        this.state = {}
        this.toggleSideBar = this.toggleSideBar.bind(this)
    }

    toggleSideBar(){
        let element = document.getElementById("admin-container");
        if(element){    
            element.classList.toggle("sb-sidenav-toggled");
            localStorage.setItem('sb|sidebar-toggle', element.classList.contains('sb-sidenav-toggled'));
        }
    }

    render(){
        return (
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-info">
                <Link to="/" className="navbar-brand ps-3">{process.env.REACT_APP_TITLE}</Link>
                <button onClick={this.toggleSideBar} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle"><i className="fas fa-bars"></i></button>
                <ul className="navbar-nav ms-auto me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-bell fa-fw"></i><sup><span className="badge rounded-pill bg-warning">{Math.floor(Math.random() * 100)}</span></sup>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end p-3 notification-dropdown">
                            <Link to={ "/admin/notification/detail/"+Math.floor(Math.random() * 100) } className="text-notification">
                                <div className="clearfix">
                                    <div className="float-start">
                                        <strong><small>Lorem Ipsum</small></strong>
                                    </div>
                                    <div className="float-end">
                                        <strong><small>1 days ago</small></strong>
                                    </div>
                                </div>
                                <p className="text-justify mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Link>
                            <hr className="dropdown-divider" />
                            <Link to={ "/admin/notification/detail/"+Math.floor(Math.random() * 100) } className="text-notification">
                                <div className="clearfix">
                                    <div className="float-start">
                                        <strong><small>Lorem Ipsum</small></strong>
                                    </div>
                                    <div className="float-end">
                                        <strong><small>1 days ago</small></strong>
                                    </div>
                                </div>
                                <p className="text-justify mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Link>
                            <hr className="dropdown-divider" />
                            <Link to={ "/admin/notification/detail/"+Math.floor(Math.random() * 100) } className="text-notification">
                                <div className="clearfix">
                                    <div className="float-start">
                                        <strong><small>Lorem Ipsum</small></strong>
                                    </div>
                                    <div className="float-end">
                                        <strong><small>1 days ago</small></strong>
                                    </div>
                                </div>
                                <p className="text-justify mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Link>
                            <hr className="dropdown-divider" />
                            <Link to="/admin/notification/list" className="btn btn-sm btn-warning text-white w-100">See All Notifiaction</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle">
                            <i className="fas fa-user-plus fa-fw"></i>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li>
                                <Link to="/" className="dropdown-item">
                                    <i className="fas fa-home"></i>&nbsp;Back to Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/account/profile" className="dropdown-item">
                                    <i className="fas fa-user"></i>&nbsp;Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/account/password" className="dropdown-item">
                                    <i className="fas fa-lock"></i>&nbsp;Password
                                </Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <Link to="/logout" className="dropdown-item">
                                    <i className="fas fa-sign-out"></i>&nbsp;Log Out
                                </Link>
                            </li>
                        </ul>
                    </li>  
                </ul>
            </nav>
        )
    }

}

export default AdminNavigation  