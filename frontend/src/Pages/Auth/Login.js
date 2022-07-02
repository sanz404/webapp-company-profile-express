import React from "react";
import PublicLayout from "../../Components/Public/Layout";
import { Link } from 'react-router-dom'

class AuthLogin extends React.Component{

    source
    constructor(props) {
        super(props)
        this.state = {
            showPassword: false,
            credential:"",
            password:""
        }
        this.toggleShow = this.toggleShow.bind(this)
    }

    toggleShow() {
        this.setState(
            {showPassword : !this.state.showPassword}
        );
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

                                            <div className="mb-3">
                                                <label htmlFor="credential" className="form-label">Username Or Email<span className="text-danger">*</span></label>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-user-plus"></i>
                                                    </span>
                                                    <input type="text" defaultValue={this.state.credential} className="form-control is-invalid"/>
                                                    <small className="invalid-feedback">
                                                        Invalid feed back
                                                    </small>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
                                                <div className="input-group mb-3">
                                                    { this.state.showPassword ? 
                                                        <>
                                                            <span className="input-group-text button-password" onClick={this.toggleShow}>
                                                                <i className="fas fa-eye"></i>
                                                            </span>
                                                            <input type="text" defaultValue={this.state.password} className="form-control is-invalid"></input>
                                                        </> 
                                                        : 
                                                        <>
                                                            <span className="input-group-text button-password" onClick={this.toggleShow}>
                                                                <i className="fas fa-eye-slash"></i>
                                                            </span>
                                                            <input type="password" defaultValue={this.state.password} className="form-control is-invalid"></input>
                                                        </> 
                                                    }
                                                    <small className="invalid-feedback">
                                                        Invalid feed back
                                                    </small>
                                                </div>
                                            </div>

                                            <div className="mb-3 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                            </div>
                                            <button type="submit" className="btn btn-success w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Sign In">
                                                <i className="fas fa-sign-in"></i>&nbsp;Sign In
                                            </button>

                                        </form>
                                        <div className="text-center">
                                            <Link to="/email/forgot" className="nav-link">Forgot Password ?</Link>
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

export default AuthLogin