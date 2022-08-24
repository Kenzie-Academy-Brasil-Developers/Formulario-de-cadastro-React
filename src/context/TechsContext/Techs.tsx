import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useAuth } from "../AllContext";

// ITech = representa retornp de tech (title, status, id)

interface ITechsProviderProps{
  children: ReactNode;
}

interface ITech {
  title: string;
  status: string;
  id: string;
}
export type ITechPreview = Omit<ITech, "id">;


interface ITechsContext {
  
  onSubmitTech: (data: ITechPreview)=> void;
  isTechs: ITech[];
  setIsTechs: (value:ITech[])=>void;
  isOpenModal: boolean;
  setIsOpenModal: (value:boolean)=>void;
  removeTech: (value:string)=>void;
}


export const TechsContext = createContext<ITechsContext>({} as ITechsContext);

function TechsProvider({ children }: ITechsProviderProps) {
  const { users } = useAuth();
  const navigate = useNavigate();
  const [isTechs, setIsTechs] = useState<ITech[]>([] as ITech[]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onSubmitTech = (data:ITechPreview) => {
    api
      .post("/users/techs", data)
      .then((response) => {
        const { data: tech } = response;
        setIsTechs([...isTechs, tech]);

        toast.success("Cadastro efetuado com sucesso");
        navigate("/dashboard");
      })
      .catch((_) => toast.error("Ops, Tecnologia não cadastrada"));
  };

  useEffect(() => {
    if (users.techs) {
      setIsTechs([...users.techs]);
    }
  }, [users.techs]);

  async function removeTech(tech_id:string) {
    try {
      await api.delete(`/users/techs/${tech_id}`);
       
      const newTechs = isTechs.filter((elem)=>( elem.id !== tech_id ))
      
      
      setIsTechs(newTechs);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <TechsContext.Provider
      value={{
        onSubmitTech,
        isTechs,
        setIsTechs,
        isOpenModal,
        setIsOpenModal,
        removeTech,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
}
export default TechsProvider;
