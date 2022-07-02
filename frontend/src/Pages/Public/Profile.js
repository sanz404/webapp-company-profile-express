import React from "react";
import PublicLayout from "../../Components/Public/Layout";
import { v4 as uuidv4 } from 'uuid';

class PublicProfile extends React.Component{

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
            <PublicLayout footer="auth" title={this.props.title}>
                 <section className="py-5">
                    <div className="container px-5">
                        <div className="row gx-5 d-flex justify-content-center">
                            <div className="col-md-12 mt-4">
                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                    <button type="button" className="btn-close btn-sm" data-bs-dismiss="alert"
                                        aria-label="Close"></button>
                                </div>
                                <div className="card mb-5 mb-xl-0">
                                    <div className="card-header bg-info text-white">
                                        <i className="fas fa-edit"></i>&nbsp;Please fill in the form below
                                    </div>
                                    <div className="card-body p-3">
                                        <form className="row g-3" autoComplete="off">
                                            <div className="col-md-4">
                                                <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="inputEmail4" className="form-label">Email <span className="text-danger">*</span></label>
                                                <input type="email" className="form-control"/>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="address" className="form-label">Address</label>
                                                <textarea className="form-control" rows="2"></textarea>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                                <textarea className="form-control" rows="2"></textarea>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="inputCity" className="form-label">City</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="inputState" className="form-label">State</label>
                                                <select className="form-control" defaultValue={this.state.stateSelected}>
                                                    <option value=""  disabled>Choose State...</option>
                                                    {this.state.stateOptions.map(function(item, i){
                                                        return <option key={uuidv4()} value={item.id}>{ item.name }</option>
                                                    })}
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label htmlFor="inputZip" className="form-label">Zip</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-success w-25" data-bs-toggle="tooltip" data-bs-placement="top" title="Update My Profile"><i className="fa fa-save"></i>&nbsp;Update Profile</button>
                                                &nbsp;
                                                <button type="reset" className="btn btn-warning text-white w-25" data-bs-toggle="tooltip" data-bs-placement="top" title="Reset Form"><i className="fa fa-refresh"></i>&nbsp;Reset Form</button>
                                            </div>
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

export default PublicProfile