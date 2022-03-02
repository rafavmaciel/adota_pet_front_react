import React from "react";
import PessoaForm from "./PessoaForm";

export default (props) => {
    function handleAdd (e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);

    }
    return (
        <div>
            <PessoaForm 
            handleAdd = {handleAdd} />
        </div>
    );
};
