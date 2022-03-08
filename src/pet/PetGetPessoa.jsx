import React from "react";
import { useState } from "react";
import PageHeader from "../template/pageHeader";
import axios from "axios";

const URL = "https://localhost:3003/pet";

export default (props) => {

    return (
        <div>
            <PageHeader name="Pet" small="Cadastro" />
        </div>
    )
};