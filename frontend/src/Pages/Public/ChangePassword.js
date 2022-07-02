import React from "react";
import PublicLayout from "../../Components/Public/Layout";

class PublicChangePassword extends React.Component{

    source
    constructor(props) {
        super(props)
        this.state = {
            showPassword: false,
            showPasswordConfirm: false,
            showOldPassword: false,
            password_old: "",
            password:"",
            passwordConfirmation:"",
        }
        this.toggleShowPassword = this.toggleShowPassword.bind(this)
        this.toggleShowPasswordConfirm = this.toggleShowPasswordConfirm.bind(this)
        this.toggleShowPasswordOld = this.toggleShowPasswordOld.bind(this)
    }

    toggleShowPasswordOld() {
        this.setState(
            {showOldPassword : !this.state.showOldPassword}
        );
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
                                                <label htmlFor="password" className="form-label">Current Password<span className="text-danger">*</span></label>
                                                <div className="input-group mb-3">
                                                    { this.state.showOldPassword ? 
                                                        <>
                                                            <span className="input-group-text button-password" onClick={this.toggleShowPasswordOld}>
                                                                <i className="fas fa-eye"></i>
                                                            </span>
                                                            <input type="text" defaultValue={this.state.password_old} className="form-control is-invalid"></input>
                                                        </> 
                                                        : 
                                                        <>
                                                            <span className="input-group-text button-password" onClick={this.toggleShowPasswordOld}>
                                                                <i className="fas fa-eye-slash"></i>
                                                            </span>
                                                            <input type="password" defaultValue={this.state.password_old} className="form-control is-invalid"></input>
                                                        </> 
                                                    }
                                                    <small className="invalid-feedback">
                                                        Invalid feed back
                                                    </small>
                                                </div>
                                            </div>

                                          

                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">New Password<span className="text-danger">*</span></label>
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
                                                <label htmlFor="passwordConfirmation" className="form-label">New Password Confirmation<span className="text-danger">*</span></label>
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

                                            
                                            <button type="submit" className="btn btn-success w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Change My Password">
                                                <i className="fas fa-refresh"></i>&nbsp;Change Password
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


export default PublicChangePassword