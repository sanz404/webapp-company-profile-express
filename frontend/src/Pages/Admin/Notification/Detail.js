import React from "react";
import AdminLayout from "../../../Components/Admin/Layout";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'

class AdminContactDetail extends React.Component{

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
                    <li className="breadcrumb-item"><Link to="/admin/notification/list">{this.props.title}</Link></li>
                    <li className="breadcrumb-item active">Detail</li>
                </ol>
                <form autoComplete="off">
                    <div className="card mb-4">
                        <div className="card-header bg-info text-white">
                            <h6><i className="fas fa-search"></i>&nbsp;Detail of {this.props.title}</h6>
                        </div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Created Date </label>
                                <div className="col-sm-10">
                                    <input type="text" readOnly className="form-control-plaintext" value="XXX" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Subject </label>
                                <div className="col-sm-10">
                                    <input type="text" readOnly className="form-control-plaintext" value="XXX" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Sort Message </label>
                                <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" value="XXX" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Full Message</label>
                                <div className="col-sm-10">
                                    <input type="text" readOnly className="form-control-plaintext" value="XXX" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Status </label>
                                <div className="col-sm-10">
                                    <input type="text" readOnly className="form-control-plaintext" value="XXX" />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer clearfix">
                            <div className="float-start">
                                <Link to="/admin/notification/list" data-bs-toggle="tooltip" data-bs-placement="top" title="Back To List" className="btn btn-secondary">
                                    <i className="fas fa-arrow-left"></i>&nbsp;Back To List   
                                </Link>
                                &nbsp;
                            </div>
                            <div className="float-end"></div>
                        </div>
                    </div>
                </form>
            </AdminLayout>
        )
    }

}

export default AdminContactDetail