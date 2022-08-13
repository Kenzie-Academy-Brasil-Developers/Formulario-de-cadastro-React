import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { createContext,  useState } from "react";



export const allContext = createContext([]);



function AllProvider({children}){
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  const [yes, setYes] = useState([false]);
  


  const onSubmitLogin = (data) => {
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

  const onSubmitRegister = (data) => {
    
    api.post("/users", data)
      .then((response)=>{
        // console.log(response)
        toast.success("Cadastro efetuado com sucesso")
        navigate("/login")

      })
      .catch((_)=>(toast.error("Ops, Algo deu errado")))

  }

  // function imputPassword() {

    
    
  // }

    
      return(
        <allContext.Provider value={{users, setUsers, onSubmitLogin, navigate, onSubmitRegister, yes, setYes}}>
            {children}
        </allContext.Provider>
      )
    
}
export default AllProvider;