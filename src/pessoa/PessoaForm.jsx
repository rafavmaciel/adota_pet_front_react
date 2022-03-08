import React from "react";
import { Formik, Field, Form, FormikConfig, FormikValues } from "formik";
import PessoaSchema from "./PessoaSchema";
import { useState } from "react";

export default (props) => {
    return (
        <div className="container margin-20 ">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    nome: "",
                    celular: "",
                    cpf: "",
                }}
                validationSchema={PessoaSchema}
                onSubmit={props.handleSubmit}
                render={({ values, errors, status, touched, isSubmitting }) => (
                    <Form>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        className="form-control"
                                    />
                                    {errors.email && touched.email ? (
                                        <div className="text-danger">
                                            {errors.email}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field
                                    name="password"
                                    type="password"
                                    className="form-control"
                                />
                                {errors.password && touched.password ? (
                                    <div className="text-danger">
                                        {errors.password}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="nome">Nome</label>
                                    <Field
                                        name="nome"
                                        type="text"
                                        className="form-control"
                                    />{" "}
                                    {errors.nome && touched.nome ? (
                                        <div className="text-danger">
                                            {errors.nome}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="celular">Celular</label>
                                    <Field
                                        name="celular"
                                        type="text"
                                        className="form-control"
                                    />
                                    {errors.celular && touched.celular ? (
                                        <div className="text-danger">
                                            {errors.celular}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label htmlFor="cpf">CPF</label>
                                    <Field
                                        name="cpf"
                                        type="text"
                                        className="form-control"
                                    />
                                    {errors.cpf && touched.cpf ? (
                                        <div className="text-danger">
                                            {errors.cpf}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        {/* <div className="form-group p-2">
                            <label htmlFor="nome">Nome</label>
                            <Field
                                name="nome"
                                type="text"
                                className="form-control"
                            />
                            {errors.nome && touched.nome && (
                                <div className="text-danger">{errors.nome}</div>
                            )}{" "}
                        </div>
                        <div className="form-group p-2">
                            <label htmlFor="celular">Celular</label>
                            <Field
                                name="celular"
                                type="text"
                                className="form-control"
                            />
                            {errors.celular && touched.celular && (
                                <div className="text-danger">
                                    {errors.celular}
                                </div>
                            )}{" "}
                        </div>
                        <div className="form-group p-2">
                            <label htmlFor="cpf">CPF</label>
                            <Field
                                name="cpf"
                                type="text"
                                className="form-control"
                            />
                            {errors.cpf && touched.cpf && (
                                <div className="text-danger">{errors.cpf}</div>
                            )}{" "}
                        </div> */}
                        <button type="submit" className="btn btn-primary">
                            Salvar
                        </button>
                    </Form>
                )}
            />
        </div>
    );
};
