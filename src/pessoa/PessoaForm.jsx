import React from "react";
import { Formik, Field, Form , FormikConfig, FormikValues} from "formik";
import PessoaSchema from "./PessoaSchema";
import { useState } from "react";

export default (props) => {
    return (
        <div className="container margin-20 ">
            <FormikStepper
                initialValues={{
                    nome: "",
                    celular: "",
                    cpf: "",
                }}
                validationSchema={PessoaSchema}
                onSubmit={props.handleSubmit}
                render={({ values, errors, status, touched, isSubmitting }) => (
                    <Form>
                        <div className="form-group p-2">
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
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Salvar
                        </button>
                    </Form>
                )}
            />
        </div>
    );
};

export function FormikStepper({ children, ...props } ) {
    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const cutrrentChild = childrenArray[step];
    return (
        <Formik {...props}>
                <Form>
                    {cutrrentChild}
                </Form>
        
        </Formik>
    );
}
