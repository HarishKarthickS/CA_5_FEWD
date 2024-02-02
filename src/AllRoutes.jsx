import React from "react";
import {Route, Routes} from "react-router-dom"
import Form from "./Components/Registration-form";
// import About from "./Component/About";
import Home from "./Components/Home";

const AllRoutes=()=>{
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
             <Route path="/form" element={<Form />}></Route>
            {/*<Route path="/about" element={<About />}></Route> */}
        </Routes>

        </>
    )
}

export default AllRoutes;