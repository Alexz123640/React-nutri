import { createContext, useState } from "react";
import { platos } from "../platos";

export const PlatosContext = createContext();

export const PlatosProvider = ({ children }) => {
  const [recetas, setRecetas] = useState(platos);

  return (
    <PlatosContext.Provider value={{ recetas, setRecetas }}>
      {children}
    </PlatosContext.Provider>
  );
};
