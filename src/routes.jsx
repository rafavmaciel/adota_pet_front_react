import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Pessoa from "./pessoa/Pessoa";
//import About from "./about/about";

export default (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pessoa" element={<Pessoa />} />
                <Route path="*" element={<Navigate to="/pessoa" />} />
            </Routes>
        </BrowserRouter>
    );
};
