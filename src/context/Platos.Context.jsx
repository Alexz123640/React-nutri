import { createContext, useState } from "react";
import { useSelector } from "react-redux";


export const PlatosContext = createContext();
export const PlatosProvider = ({ children }) => {

  const platos = useSelector(store=>store.platos)
  const [recetas, setRecetas] = useState(platos);

  return (
    <PlatosContext.Provider value={{ recetas, setRecetas }}>
      {children}
    </PlatosContext.Provider>
  );
};
