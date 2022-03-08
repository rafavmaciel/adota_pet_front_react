import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";

import Pessoa from "./pessoa/Pessoa";
import PetGetPessoa from "./pet/PetGetPessoa";

export default (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/pessoa/post" element={<Pessoa />} />
                <Route path="*" element={<Navigate to="/pessoa" />} />
                <Route path="/pet/:id" element={<PetGetPessoa />} />
            </Routes>
        </BrowserRouter>
    );
};
