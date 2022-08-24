import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AllContext, IUserLogin } from "../../context/AllContext";
import { ContainerLogin } from "./style";
import {FaRegEyeSlash} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const {onSubmitLogin} = useContext(AllContext) 
  

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Senha fora dos quesitos de validação"
      ),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<IUserLogin>({
    resolver: yupResolver(formSchema),
  });

  
  
 
 
  return (
    <ContainerLogin width={370}>
   
    <div className="kenzie">
        <span>Kenzie Hub</span>
      <div className="container">
        <h3>Login</h3>
        <form className="loginForm" onSubmit={handleSubmit(onSubmitLogin)}>
          <label htmlFor="email">Email</label>
          <input
          type="text"
          id="email" 
          className="loginInput"
          placeholder="Endereço de Email" {...register("email")} />
          {errors.email?.message}
          <label htmlFor="password">Senha</label>
          <div className="loginPassword">
          <div className="inputPassword">
          <input
          type="password"
          id="password"
            className="InputSenha"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password?.message}
          </div>
          <button className="abrirSenha"><FaRegEyeSlash /></button>
          </div>
          <button 
          className="btnEntrar" type="submit">
            Entrar
          </button>
          <div className="observ">         
          <h4>Ainda não possui uma conta?</h4>
          </div>
          <button 
            onClick={()=> navigate("/register")}
          
          className="btnCadastro" type="submit">
            Cadastre-se
          </button>
        </form>
      </div>
    </div>
    </ContainerLogin>
  );
}
