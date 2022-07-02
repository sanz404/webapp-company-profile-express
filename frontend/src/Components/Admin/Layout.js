import React from "react";
import AdminNavigation from "./Navigation"
import AdminSidebar from "./Sidebar"


class AdminLayout extends React.Component {

    setTitle(){
        let APP_NAME = process.env.REACT_APP_TITLE
        let APP_TITLE = this.props.title || "Default Title"
        document.title = APP_NAME+" | "+APP_TITLE
    }

    componentDidMount(){
        this.setTitle();
    }

    componentDidUpdate(){
        this.setTitle();
    }

    render(){
        return (
            <div id="page-admin">
                 <div className="sb-nav-fixed" id="admin-container">
                    <AdminNavigation/>
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_nav">
                            <AdminSidebar/>
                        </div>
                        <div id="layoutSidenav_content">
                            <main>
                                <div className="container-fluid px-4">
                                    {this.props.children}
                                </div>
                            </main>
                            <footer className="py-4 bg-light mt-auto">
                                <div className="container-fluid px-4">
                                    <div className="d-flex align-items-center justify-content-between small">
                                        <div className="text-muted">Copyright &copy; {process.env.REACT_APP_TITLE} {new Date().getFullYear()}</div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }

}

export default AdminLayout