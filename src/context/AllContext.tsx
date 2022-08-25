import { NavigateProps, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useContext } from "react";


interface IAllProvider {
  children: ReactNode;
}

interface Tech{
  id: string;
  title: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUser {
  name: string;
  email: string;
  contact: string;
  course_module: string;
  password: string;
  id: string;
  techs: Tech[]
  confirmPassword: string;
  bio: string;
  
}
export interface IUserLogin{
  email: string;
  password: string;
  }

interface IDataLogin{
  user: IUser;
  token: string;
  }

interface IAllContext {
  users: IUser;
  setUsers: (value:IUser)=>void;
  onSubmitLogin: (data: IUserLogin)=>void;
  onSubmitRegister: (data:IUser)=>void;
  // navigate: (value: NavigateProps)=>void
}

export const AllContext = createContext<IAllContext>({} as IAllContext);

function AllProvider({ children }: IAllProvider) {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser>({} as IUser);
  // const [yes, setYes] = useState([false]);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          const { data } = await api.get("/profile");

          setUsers(data);
        } catch (error) {
          console.error(error);
        }
       
      }
    }
    loadUser();
  }, []);

  const onSubmitLogin = (data:IUserLogin) => {
    api
      .post<IDataLogin>("/sessions", data)
      .then((response) => {
        const { user, token } = response.data;

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        setUsers(user);
        console.log(response);
        localStorage.setItem("@TOKEN", token);
        localStorage.setItem("@USERID", JSON.stringify(user.id));
        toast.success("login efetuado com sucesso");
        navigate("/dashboard", { replace: true });
      })
      .catch((_) => toast.error("Ops, Algo deu errado"));
  };

  const onSubmitRegister = (data:IUser) => {
    api
      .post("/users", data)
      .then((response) => {
        console.log(`Register`, response);
        toast.success("Cadastro efetuado com sucesso");
        navigate("/login");
      })
      .catch((_) => toast.error("Ops, Algo deu errado"));
  };

  return (
    <AllContext.Provider
      value={{
        users,
        setUsers,
        onSubmitLogin,
        onSubmitRegister,
        
       
      }}
    >
      {children}
    </AllContext.Provider>
  );
}
export default AllProvider;

export const useAuth = () => useContext(AllContext);
