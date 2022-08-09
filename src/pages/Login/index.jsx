import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast} from "react-toastify";


export default function Login({setUsers}) {
  
  const navigate = useNavigate()

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

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    api.post("/sessions", data)
    .then((response)=>{
      const {user, token} = response.data
      setUsers(user) 
      console.log(response)
      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERID", JSON.stringify(user.id));
      toast.success("login efetuado com sucesso")
      navigate("/dashboard")
    })
    .catch((_)=>(toast.error("Ops, Algo deu errado")))
    
  }
  
 
 
  return (
    <div className="kenzie">
        <span>Kenzie Hub</span>
      <div className="container">
        <h3>Login</h3>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="email">Email</label>
          <input
          type="text"
          id="email" 
          className="input"
          placeholder="Endereço de Email" {...register("email")} />
          {errors.email?.message}
          <label htmlFor="password">Senha</label>
          <input
          type="password"
          id="password"
            className="input"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password?.message}
          
          <button 
          className="btnEntrar" type="submit">
            Entrar
          </button>
                   
          <h4>Já possui uma conta?</h4>
          <button 
            onClick={()=> navigate("/register")}
          
          className="btnCadastro" type="submit">
            Cadastre-se
          </button>
        </form>
      </div>
    </div>
  );
}
