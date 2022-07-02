import React from "react";
import AdminLayout from "../../Components/Admin/Layout";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'
import BarChart from "../../Components/Chart/BarChart"
import PieChart from "../../Components/Chart/PieChart"

class AdminDashboard extends React.Component{

    source
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        }
    }

    componentDidMount(){
        let i
        let items = [] 
        for(i = 1; i <= 100; i++){
            items.push("Item "+i)
        }
        this.setState({ items: items })
    }

    render(){
        let rows = this.state.items
        return (
            <AdminLayout  title={this.props.title}>
                <h1 className="mt-4">{this.props.title}</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><Link to="/">{process.env.REACT_APP_TITLE}</Link></li>
                    <li className="breadcrumb-item active">{this.props.title}</li>
                </ol>

                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-primary text-white mb-4">
                            <div className="card-body">Primary Card</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View Details</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-warning text-white mb-4">
                            <div className="card-body">Warning Card</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View Details</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-success text-white mb-4">
                            <div className="card-body">Success Card</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View Details</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-danger text-white mb-4">
                            <div className="card-body">Danger Card</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View Details</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6">
                        <div className="card mb-4">
                            <div className="card-header bg-info text-white">
                                <i className="fas fa-chart-pie me-1"></i>
                                Pie Chart Example
                            </div>
                            <div className="card-body"><PieChart/></div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card mb-4">
                            <div className="card-header bg-info text-white">
                                <i className="fas fa-chart-bar me-1"></i>
                                Bar Chart Example
                            </div>
                            <div className="card-body"><BarChart/></div>
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header bg-info text-white">
                        <i className="fas fa-table me-1"></i>
                        DataTable Example
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Website</th>
                                        <th className="text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map(function(item, i){
                                        return (
                                            <tr key={uuidv4()}>
                                                <td>{ parseInt(i) + 1 }</td>
                                                <td>{item}</td>
                                                <td>{item}</td>
                                                <td>{item}</td>
                                                <td>{item}</td>
                                                <td className="text-center">
                                                    { parseInt(i) % 2 === 0 ?  <span className="badge bg-success">Paid</span> :  <span className="badge bg-danger">Unpaid</span> }
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>  
                        </div>
                    </div>
                </div>


            </AdminLayout>
        )
    }

}



export default AdminDashboard