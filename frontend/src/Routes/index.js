import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { Tooltip } from 'bootstrap'

import publicRoutes from "./public.js"
import errorRoutes from "./error.js"
import authRoutes from "./auth.js"
import adminRoutes from "./admin.js"

const appRoutes = [
    ...publicRoutes,
    ...errorRoutes,
    ...authRoutes,
    ...adminRoutes
]

function RouteChanged() {

    if(document.getElementById("loader")){
        let element = document.getElementById("loader")
        element.classList.add("loading")
    }

    const location = useLocation();
    useEffect(() => {
        setTimeout(function(){

            if(document.getElementById("loader")){
                let element = document.getElementById("loader")
                element.classList.remove("loading")
            }

            let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            tooltipTriggerList.map(function (tooltipTriggerEl) {  
                return new Tooltip(tooltipTriggerEl)
            })

            const tooltip = document.querySelector('.tooltip')
            if (tooltip !== null) document.body.removeChild(tooltip)


        }, 1000)
    }, [location]); 
    return (<></>)
}

class Index extends React.Component{
    render(){
        return (
            <Router>
                <RouteChanged/>
                <Routes>
                    <Route key={uuidv4()}  path="*" element={<Navigate replace to="/error/404" />} />
                    <Route key={uuidv4()}  path="/" element={<Navigate replace to="/home" />} />
                    {appRoutes.map((route) => (
                        <Route key={uuidv4()} 
                            exact={true}
                            path={ route.path } 
                            title={route.title} 
                            element={<route.component title={route.title} />}
                        />
                    ))}
                </Routes>
            </Router>
        )
    }

}

export default Index;