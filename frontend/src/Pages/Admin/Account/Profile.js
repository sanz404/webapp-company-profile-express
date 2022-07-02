import React from "react";
import AdminLayout from "../../../Components/Admin/Layout";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'

class AdminProfile extends React.Component{

    source
    constructor(props) {
        super(props)
        this.state = {
            username:"",
            email:"",
            phone:"",
            address1:"",
            address2:"",
            city:"",
            stateSelected:"ID",
            stateOptions: [
                 {
                    name: "Indonesia",
                    id: "ID"
                },
                {
                    name: "Malaysia",
                    id: "ML"
                },
                {
                    name: "Singapore",
                    id: "SG"
                },
                {
                    name: "Vietnam",
                    id: "VT"
                },
                {
                    name: "Thailand",
                    id: "TH"
                }
            ],
            zip_code:""
        }
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
                                <label  className="col-sm-2 col-form-label">Username <span className="text-danger">*</span></label>
                                <div className="col-sm-10">
                                    <input type="text" defaultValue={this.state.username} className="form-control" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Email <span className="text-danger">*</span></label>
                                <div className="col-sm-10">
                                    <input type="email" defaultValue={this.state.email} className="form-control" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Phone Number </label>
                                <div className="col-sm-10">
                                    <input type="text" defaultValue={this.state.phone} className="form-control" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Address 1</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" rows="2"></textarea>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Address 2</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" rows="2"></textarea>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">State</label>
                                <div className="col-sm-10">
                                    <select className="form-control" defaultValue={this.state.stateSelected}>
                                        <option value=""  disabled>Choose State...</option>
                                        {this.state.stateOptions.map(function(item, i){
                                            return <option key={uuidv4()} value={item.id}>{ item.name }</option>
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label  className="col-sm-2 col-form-label">Zip Code</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" />
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

export default AdminProfile