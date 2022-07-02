import React from "react"
import PublicNavbar from "../../Components/Public/Navbar"
import PublicFooter from "../../Components/Public/Footer"

class PublicLayout extends React.Component {

    setTitle(){
        let APP_NAME = process.env.REACT_APP_TITLE
        let APP_TITLE = this.props.title || "Default Title"
        document.title = APP_NAME+" | "+APP_TITLE
    }

    componentDidMount(){
        this.setTitle();
    }

    componentDidUpdate(){
        this.setTitle();
    }


    render() {
        return (
            <React.Fragment>
                <div id="public-page">
                    <main className="flex-shrink-0">
                        <PublicNavbar/>
                        {this.props.children}
                    </main>
                    { this.props.footer === 'public' ? <PublicFooter/> : <></> }
                    { this.props.footer === 'auth' ? <div className="fixed-bottom"><PublicFooter/></div> : <></> }
                </div>
            </React.Fragment>
        );
    }

}

export default PublicLayout;