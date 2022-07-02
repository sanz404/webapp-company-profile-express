import React from "react";

class PublicHome extends React.Component {
    render(){
        return (
            <React.Fragment>
                <footer className="bg-info py-4 mt-auto">
                    <div className="container px-5">
                        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                            <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; {process.env.REACT_APP_TITLE} {new Date().getFullYear()}</div></div>
                            <div className="col-auto">
                                <a className="link-light small" href="#!">Privacy</a>
                                <span className="text-white mx-1">&middot;</span>
                                <a className="link-light small" href="#!">Terms</a>
                                <span className="text-white mx-1">&middot;</span>
                                <a className="link-light small" href="#!">Contact</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default PublicHome