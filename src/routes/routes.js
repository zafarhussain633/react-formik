import React from 'react'
import { Routes, Route } from "react-router-dom"
import Formik from "../pages/Formik"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"

const PageRoutes = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/formik" element={<Formik />} />
                <Route  path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default PageRoutes;
