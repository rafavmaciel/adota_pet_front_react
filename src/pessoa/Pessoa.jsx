import React from "react";
import PessoaForm from "./PessoaForm";
import { useState } from "react";
import PageHeader from "../template/pageHeader";
import axios from "axios";



const URL = "https://localhost:3003/pessoa";
export default (props) => {
    function handleSubmit(values, actions) {
        const formData = values; 
        handleAdd(formData);
    }

    function handleAdd(data) {
        axios.post(URL, data).then((resp) => {
            if (resp.status === 201) {
                alert("Pessoa cadastrada com sucesso");
            }
        });
    }

    return (
        <div>
            <PageHeader name="Pessoa" small="Cadastro" />
            <PessoaForm handleSubmit={handleSubmit} />
        </div>
    );
};
