import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { createContext,  useEffect,  useState } from "react";
import { useContext } from "react";



export const allContext = createContext([]);



function AllProvider({children}){
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  const [yes, setYes] = useState([false]);
  
  useEffect(()=>{
    async function loadUser(){
      const token = localStorage.getItem("@TOKEN");
     
      if(token){
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
  
          const {data} = await api.get("/profile");
          
          setUsers(data);
        } catch (error) {
          console.error(error);
        }
        
      }
    }
    loadUser();
  },[])

  const onSubmitLogin = (data) => {
    api.post("/sessions", data)
    .then((response)=>{
      const {user, token} = response.data

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUsers(user) 
      console.log(response)
      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USERID", JSON.stringify(user.id));
      toast.success("login efetuado com sucesso");
      navigate("/dashboard", {replace:true});
    })
    .catch((_)=>(toast.error("Ops, Algo deu errado")))
    
  }

  const onSubmitRegister = (data) => {
    
    api.post("/users", data)
      .then((response)=>{
        console.log(`Register`, response)
        toast.success("Cadastro efetuado com sucesso")
        navigate("/login")

      })
      .catch((_)=>(toast.error("Ops, Algo deu errado")))

  }

  

  
    
      return(
        <allContext.Provider value={{users, setUsers, onSubmitLogin, navigate, onSubmitRegister, yes, setYes}}>
            {children}
        </allContext.Provider>
      )
    
}
export default AllProvider;

export const useAuth = ()=> useContext(allContext)