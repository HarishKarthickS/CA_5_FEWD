import React from "react";
import {Route, Routes} from "react-router-dom"
import RegistrationForm from "./Components/Registration-form";
import Home from "./Components/Home";
import Books from "./Components/Books";

const AllRoutes=()=>{
    return (
        <>
        <Routes>
            {/* Defining route path for home and the registration form*/}
            <Route path="/" element={<Home />}></Route>
            <Route path="/form" element={<RegistrationForm />}></Route>
            <Route path="/books" element={<Books />}></Route>
        </Routes>

        </>
    )
}

export default AllRoutes;