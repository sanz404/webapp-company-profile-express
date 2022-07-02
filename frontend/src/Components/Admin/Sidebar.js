import React from "react";
import { NavLink } from 'react-router-dom'

class AdminSidebar extends React.Component {

    render(){
        return (
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Main Menu</div>
                        <NavLink to="/admin/dashboard" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-tachometer"></i></div>
                            Dashboard
                        </NavLink>
                        <NavLink to="/admin/article/list" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-clipboard"></i></div>
                            Article
                        </NavLink>
                        <NavLink to="/admin/contact/list" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-child"></i></div>
                            Contact
                        </NavLink>
                        <NavLink to="/admin/message/list" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-envelope"></i></div>
                            Message
                        </NavLink>
                        <NavLink to="/admin/service/list" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-gift"></i></div>
                            Service
                        </NavLink>
                        <NavLink to="/admin/team/list" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-user-circle"></i></div>
                            Team
                        </NavLink>
                        <NavLink to="/admin/faq/list" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-share-alt-square"></i></div>
                            Faq
                        </NavLink>
                        <NavLink to="/admin/product/list" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-cubes"></i></div>
                            Product
                        </NavLink>
                        <NavLink to="/admin/portfolio/list" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-address-card"></i></div>
                            Portfolio
                        </NavLink>
                        <NavLink to="/admin/user/list" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
                            User
                        </NavLink>
                        <div className="sb-sidenav-menu-heading">Account Menu</div>
                        <NavLink to="/admin/notification/list" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-bell"></i></div>
                            Notification&nbsp;<span className="badge rounded-pill bg-warning">{Math.floor(Math.random() * 100)}</span>
                        </NavLink>
                        <NavLink to="/admin/account/profile" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-user"></i></div>
                            Profile
                        </NavLink>
                        <NavLink to="/admin/account/password" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-lock"></i></div>
                            Change Password
                        </NavLink>
                        <NavLink to="/logout" className={({ isActive }) => isActive? "active nav-link": 'nav-link'} >
                            <div className="sb-nav-link-icon"><i className="fas fa-sign-out"></i></div>
                            Log Out
                        </NavLink>
                    </div>
                </div>
            </nav>
        )
    }

}

export default AdminSidebar