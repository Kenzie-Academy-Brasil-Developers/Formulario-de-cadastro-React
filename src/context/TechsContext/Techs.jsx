import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { createContext, useEffect, useState } from "react";
import { useAuth } from "../AllContext";

export const techsContext = createContext([]);

function TechsProvider({ children }) {
  const { users } = useAuth();
  const navigate = useNavigate();
  const [isTechs, setIsTechs] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onSubmitTech = (data) => {
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

  async function removeTech(tech_id) {
    try {
      await api.delete(`/users/techs/${tech_id}`);
       
      const newTechs = isTechs.filter((elem)=>( elem.id !== tech_id ))
      
      
      setIsTechs(newTechs);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <techsContext.Provider
      value={{
        users,
        navigate,
        onSubmitTech,
        isTechs,
        setIsTechs,
        isOpenModal,
        setIsOpenModal,
        removeTech,
      }}
    >
      {children}
    </techsContext.Provider>
  );
}
export default TechsProvider;
