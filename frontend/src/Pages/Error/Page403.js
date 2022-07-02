import React from "react";
import { Link } from 'react-router-dom'
import PublicLayout from "../../Components/Public/Layout";


class Page403 extends React.Component {

    source
    constructor(props) {
        super(props)
        this.state = {
            title: "403 Forbidden",
            info1:"Oops! This page Could Not Be Found!",
            info2:"You don't have permission to access on this server."
        }
    }

    render() {
        return (
            <PublicLayout footer="error" title={this.props.title}>
                <section className="py-5" id="page-error">
                    <div className="error-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="error-text">
                                        <h1 className="error">{this.state.title}</h1>
                                        <div className="im-sheep">
                                            <div className="top">
                                                <div className="body"></div>
                                                <div className="head">
                                                    <div className="im-eye one"></div>
                                                    <div className="im-eye two"></div>
                                                    <div className="im-ear one"></div>
                                                    <div className="im-ear two"></div>
                                                </div>
                                            </div>
                                            <div className="im-legs">
                                                <div className="im-leg"></div>
                                                <div className="im-leg"></div>
                                                <div className="im-leg"></div>
                                                <div className="im-leg"></div>
                                            </div>
                                        </div>
                                        <h4>{this.state.info1}</h4>
                                        <p>{this.state.info2}</p>
                                        <Link to="/" className="btn btn-info btn-round text-white">Go to homepage</Link>
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

export default Page403