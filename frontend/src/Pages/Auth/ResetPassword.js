import React from "react";
import PublicLayout from "../../Components/Public/Layout";
import { useParams } from "react-router-dom";



class AuthResetPassword extends React.Component{

    source
    constructor(props) {
        super(props)
        this.state = {
            showPassword: false,
            showPasswordConfirm: false,
            email:"",
            password:"",
            passwordConfirmation:"",
            token:""
        }
        this.toggleShowPassword = this.toggleShowPassword.bind(this)
        this.toggleShowPasswordConfirm = this.toggleShowPasswordConfirm.bind(this)
    }

    toggleShowPassword() {
        this.setState(
            {showPassword : !this.state.showPassword}
        );
    }

    toggleShowPasswordConfirm() {
        this.setState(
            {showPasswordConfirm : !this.state.showPasswordConfirm}
        );
    }

    componentDidMount(){
        this.setState({
            token: this.props.params.token
        })
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
                                            
                                            <input type="hidden" defaultValue={this.state.token} />

                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email<span className="text-danger">*</span></label>
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

                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password<span className="text-danger">*</span></label>
                                                <div className="input-group mb-3">
                                                    { this.state.showPassword ? 
                                                        <>
                                                            <span className="input-group-text button-password" onClick={this.toggleShowPassword}>
                                                                <i className="fas fa-eye"></i>
                                                            </span>
                                                            <input type="text" defaultValue={this.state.password} className="form-control is-invalid"></input>
                                                        </> 
                                                        : 
                                                        <>
                                                            <span className="input-group-text button-password" onClick={this.toggleShowPassword}>
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

                                            <div className="mb-3">
                                                <label htmlFor="passwordConfirmation" className="form-label">Password Confirmation<span className="text-danger">*</span></label>
                                                <div className="input-group mb-3">
                                                    { this.state.showPasswordConfirm ? 
                                                        <>
                                                            <span className="input-group-text button-password" onClick={this.toggleShowPasswordConfirm}>
                                                                <i className="fas fa-eye"></i>
                                                            </span>
                                                            <input type="text" defaultValue={this.state.passwordConfirmation} className="form-control is-invalid"></input>
                                                        </> 
                                                        : 
                                                        <>
                                                            <span className="input-group-text button-password" onClick={this.toggleShowPasswordConfirm}>
                                                                <i className="fas fa-eye-slash"></i>
                                                            </span>
                                                            <input type="password" defaultValue={this.state.passwordConfirmation} className="form-control is-invalid"></input>
                                                        </> 
                                                    }
                                                    <small className="invalid-feedback">
                                                        Invalid feed back
                                                    </small>
                                                </div>
                                            </div>

                                            
                                            <button type="submit" className="btn btn-success w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Reset Password">
                                                <i className="fas fa-refresh"></i>&nbsp;Reset Password
                                            </button>

                                        </form>

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

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

export default withParams(AuthResetPassword);