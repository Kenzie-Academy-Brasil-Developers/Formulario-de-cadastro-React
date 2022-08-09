import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast} from "react-toastify";


export default function Register() {
  const navigate = useNavigate()
  
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^([A-Za-z]\s?){3,25}$/g, "Nome Inválido"),
    email: yup.string().required("Email obrigatório").email("Enail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Senha fora dos quesitos de validação"
      ),
      confirmPassword: yup
      .string().oneOf([yup.ref("password")], "Senha não confere" ),
    bio: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^([A-Za-z]\s?){3,100}$/g,
        "Ultrapassou a quantidade de caracteres"
      ),
    contact: yup
    .string()
    .required("Campo obrigatório")
    .matches("linkedin/in/nome" ,"Usar perfil linkedin=> linkedin/in/nome"
    ),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    
    api.post("/users", data)
      .then((response)=>{
        // console.log(response)
        toast.success("Cadastro efetuado com sucesso")
        navigate("/login")

      })
      .catch((_)=>(toast.error("Ops, Algo deu errado")))

  }
 

  return (
    <div className="kenzie">
        <div className="divHeader">
        <span className="spanKenzie">Kenzie Hub</span>
        <button 
        onClick={()=> navigate("/login")}
        className="btnVoltar">Voltar</button>
        </div>
    <div className="container">
      <h3>Crie sua conta</h3>
      <p>Rapido e grátis, vamos nessa</p>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <label htmlFor="name">Nome</label>
        <input 
        type="text"
        id="name"
        className="inputRegister"
        placeholder="Digite aqui seu nome" {...register("name")} />
        {errors.name?.message}
        <label htmlFor="email">Email</label>
        <input 
        type="email"
        id="email"
        className="inputRegister"
        placeholder="Digite aqui seu email" {...register("email")} />
        {errors.email?.message}
        <label htmlFor="password">Senha</label>
        <input
        type="password"
        id="password"
          className="inputRegister"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {errors.password?.message}
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
        type="password"
        id="confirmPassword"
          className="inputRegister"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message}
        <label htmlFor="bio">Bio</label>
        <input
        type="text"
        id="bio"
          className="inputRegister"
          placeholder="Fale sobre você"
          {...register("bio")}
        />

        <label htmlFor="contact">Contato</label>
        <input
        type="text"
        id="contact"
          className="inputRegister"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        {errors.contact?.message}
        <label>Selecionar Módulo</label>
        <select 
        className="inputRegister"
        {...register("course_module")}>
          <option value="">Selecione seu Módulo </option>
          <option value={"Primeiro módulo (Introdução ao Frontend)"}>
            1º Módulo
          </option>
          <option value={"Segundo módulo (Frontend Avançado)"}>
            2º Módulo
          </option>
          <option value={"Terceiro módulo (Introdução ao Backend)"}>
            3º Módulo
          </option>
          <option value={"Quarto módulo (Backend Avançado)"}>4º Módulo</option>
        </select>

        <button className="btnCadastro" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
    </div>
  );
}
