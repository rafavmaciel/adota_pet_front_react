import React from "react";
export default (props) => {
    return (
        <div className="container margin-20 ">
            <form onSubmit={props.handleAdd} >
                <input
                    name="nomePessoa"
                    className="form-control"
                    placeholder="Adicione o nome "
                />
                <input
                    name="emailPessoa"
                    className="form-control"
                    placeholder="Adicione o email"
                />
                <button className="btn btn-primary" type="submit">Salvar</button>
            </form>
        </div>
    );
};
