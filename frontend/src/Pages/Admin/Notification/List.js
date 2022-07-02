import React from 'react';
import AdminLayout from "../../../Components/Admin/Layout";
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import SweetAlert2 from 'react-sweetalert2';


class AdminContactList extends React.Component{

    source
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            swal: {},
            showModal: false,
            swalOptions:{
                title: 'Basic Usage',
                text: 'Hello World',
                icon: "error"
            }
        }
        this.handleButton = this.handleButton.bind(this)
    }

    componentDidMount(){
        let i
        let items = [] 
        for(i = 1; i <= 100; i++){
            items.push("Item "+i)
        }
        this.setState({ items: items })
    }

    handleButton(e){
        let app = this
        this.setState({ showModal: false})   
        setTimeout(function(){
            app.setState({ showModal: true})   
        }, 300)
    }

    
    render(){
        let rows = this.state.items
        let app = this
        return (
            <AdminLayout  title={this.props.title}>
                <h1 className="mt-4">{this.props.title}</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item"><Link to="/">{process.env.REACT_APP_TITLE}</Link></li>
                    <li className="breadcrumb-item"><Link to="/">Account</Link></li>
                    <li className="breadcrumb-item active">{this.props.title}</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-header bg-info text-white">
                        <h6><i className="fas fa-table"></i>&nbsp;List {this.props.title}</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Created At</th>
                                        <th>Subject</th>
                                        <th>Sort Message</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-center">Action</th>
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
                                                <td className="text-center">
                                                    { parseInt(i) % 2 === 0 ?  <span className="badge bg-success">Read</span> :  <span className="badge bg-danger">Unread</span> }
                                                </td>
                                                <td className="text-center">
                                                    <Link to={ "/admin/notification/detail/"+uuidv4() } data-bs-toggle="tooltip" data-bs-placement="top" title="View" className="btn btn-sm btn-primary">
                                                        <i className="fas fa-search"></i>
                                                    </Link>
                                                    &nbsp;
                                                    <button onClick={(e) => app.handleButton(e)}  data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="btn btn-sm btn-danger">
                                                        <i className="fas fa-trash"></i>   
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    <SweetAlert2 
                                        show={this.state.showModal}
                                        {...this.state.swalOptions}
                                    />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </AdminLayout>
        )
    }

}

export default AdminContactList