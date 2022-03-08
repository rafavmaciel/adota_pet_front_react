import * as Yup from "yup";

export default Yup.object().shape({
    email: Yup.string().email('email inválido').required("O email é obrigatório"),
    password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracters').max(20,'A senha deve ter no máximo 20 caracters' ).required("A senha  é obrigatório"),
    nome: Yup.string().min(4,' O nome deve conter pelo menos 4 caracteres').required("O nome é obrigatório"),
    celular: Yup.string().min(11, 'O numro do celular tem que ter 11 dígidos').max(11,'O numro do celular tem que ter 11 dígidos' ).required("O celular é obrigatório"),
    cpf: Yup.string().min(11, 'O numro do cpf tem que ter 11 dígidos').max(11,'O numro do cpf tem que ter 11 dígidos' ).required("O CPF é obrigatório"),
}); 
