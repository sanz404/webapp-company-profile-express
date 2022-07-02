import React from "react";
import AdminLayout from "../../../Components/Admin/Layout";
import { Link } from 'react-router-dom'

class AdminContactCreate extends React.Component{

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
                    <li className="breadcrumb-item"><Link to="/">Reference</Link></li>
                    <li className="breadcrumb-item"><Link to="/admin/contact/list">{this.props.title}</Link></li>
                    <li className="breadcrumb-item active">Create</li>
                </ol>
                <form autoComplete="off">
                    <div className="card mb-4">
                        <div className="card-header bg-info text-white">
                            <h6><i className="fas fa-search"></i>&nbsp;Detail of {this.props.title}</h6>
                        </div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Name <span className="text-danger">*</span></label>
                                <div className="col-sm-10">
                                    <input type="text"  className="form-control" defaultValue={''} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Email <span className="text-danger">*</span></label>
                                <div className="col-sm-10">
                                    <input type="email"  className="form-control" defaultValue={''} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Phone</label>
                                <div className="col-sm-10">
                                    <input type="text"  className="form-control" defaultValue={''} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Website</label>
                                <div className="col-sm-10">
                                    <input type="text"  className="form-control" defaultValue={''} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Address</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" rows={5}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer clearfix">
                            <div className="float-start">
                                <Link to="/admin/contact/list" data-bs-toggle="tooltip" data-bs-placement="top" title="Back To List" className="btn btn-secondary">
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

export default AdminContactCreate