import React from "react";
import PublicLayout from "../../Components/Public/Layout";

class PublicPortfolioDetail extends React.Component {

    render() {
        return (
            <PublicLayout footer="public" title={this.props.title}>
                
                <section className="py-5">
                    <div className="container px-5 my-5">
                        <div className="text-center mb-5">
                            <h1 className="fw-bolder">Our Work</h1>
                            <p className="lead fw-normal text-muted mb-0">Company portfolio</p>
                        </div>
                        <div className="row gx-5">
                            <div className="col-lg-6">
                                <div className="position-relative mb-5">
                                    <img className="img-fluid rounded-3 mb-3" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..."></img>
                                    <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Project name</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative mb-5">
                                    <img className="img-fluid rounded-3 mb-3" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..."></img>
                                    <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Project name</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative mb-5 mb-lg-0">
                                    <img className="img-fluid rounded-3 mb-3" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..."></img>
                                    <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Project name</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative">
                                    <img className="img-fluid rounded-3 mb-3" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..."></img>
                                    <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">Project name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </PublicLayout>
        )
    }

}

export default PublicPortfolioDetail