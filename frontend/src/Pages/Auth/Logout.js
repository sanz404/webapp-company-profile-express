import React from "react";
import PublicLayout from "../../Components/Public/Layout";
import { Link } from 'react-router-dom'

class AuthLogout extends React.Component{

    source
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <PublicLayout footer="auth" title={this.props.title}>
                 <section className="py-5">
                    <div className="container px-5">
                        <div className="row gx-5 d-flex justify-content-center">
                            <div className="col-md-5 mt-4">
                                <div className="card mb-5 mb-xl-0">
                                    <div className="card-body p-3 text-center">
                                        <div className="alert alert-success">
                                            <p><i className="fa fa-check-circle"></i>&nbsp;You have been successfully logged out. Thank you</p>
                                        </div>
                                        <div className="text-center">
                                            <Link to="/home" className="btn w-100 btn-info text-white" data-bs-toggle="tooltip" data-bs-placement="top" title="Click here to continue">Click here to continue...</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </PublicLayout>
        )
    }

}

export default AuthLogout