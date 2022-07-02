import React from "react";
import AdminLayout from "../../../Components/Admin/Layout";
import { Link } from 'react-router-dom'

class AdminPasswrod extends React.Component{

    source
    constructor(props) {
        super(props)
        this.state = {}
    }

    render(){
        return (
            <AdminLayout  title={this.props.title}>
                <h1 className="mt-4">{this.props.title}</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><Link to="/">{process.env.REACT_APP_TITLE}</Link></li>
                    <li className="breadcrumb-item"><Link to="/">Account</Link></li>
                    <li className="breadcrumb-item active">{this.props.title}</li>
                </ol>
                <form autoComplete="off">
                    <div className="card mb-4">
                        <div className="card-header bg-info text-white">
                            <h6><i className="fas fa-edit"></i>&nbsp;Please fill in the form below</h6>
                        </div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Current Password <span className="text-danger">*</span></label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">New Password <span className="text-danger">*</span></label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">New Password Confirmation <span className="text-danger">*</span></label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer clearfix">
                            <button type="submit" className="btn btn-success float-start" data-bs-toggle="tooltip" data-bs-placement="top" title="Save From"><i className="fa fa-save"></i>&nbsp;Save Change</button>
                            <button type="reset" className="btn btn-warning text-white float-end" data-bs-toggle="tooltip" data-bs-placement="top" title="Reset Form"><i className="fa fa-refresh"></i>&nbsp;Reset Form</button>
                        </div>
                    </div>
                </form>
            </AdminLayout>
        )
    }

}

export default AdminPasswrod