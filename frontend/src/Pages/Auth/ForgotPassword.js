import React from "react";
import PublicLayout from "../../Components/Public/Layout";
import { Link } from 'react-router-dom'

class AuthForgotPassword extends React.Component{

    source
    constructor(props) {
        super(props)
        this.state = {
            email:""
        }
    }

    render(){
        return (
            <PublicLayout footer="auth" title={this.props.title}>
                    <section className="py-5">
                        <div className="container px-5">
                            <div className="row gx-5 d-flex justify-content-center">
                                <div className="col-md-4 mt-4">

                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        <button type="button" className="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>

                                    <div className="card mb-5 mb-xl-0">
                                        <div className="card-header bg-info text-white text-center">
                                            <i className="fas fa-edit"></i>&nbsp;Please fill in the form below
                                        </div>
                                        <div className="card-body p-3">

                                            <form autoComplete="off">
                                                <div className="alert alert-primary">
                                                    We can help reset your password using email address associated with your account.
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">Email Address<span className="text-danger">*</span></label>
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-text">
                                                            <i className="fas fa-envelope"></i>
                                                        </span>
                                                        <input type="email" defaultValue={this.state.email} className="form-control is-invalid"/>
                                                        <small className="invalid-feedback">
                                                            Invalid feed back
                                                        </small>
                                                    </div>
                                                </div>
                                                
                                                <button type="submit" className="btn btn-success w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Send Password Reset Link">
                                                    <i className="fas fa-envelope"></i>&nbsp;Send Password Reset Link
                                                </button>

                                            </form>
                                            <div className="text-center">
                                                <Link to="/login" className="nav-link">Change your mind ? Sign In</Link>
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

export default AuthForgotPassword