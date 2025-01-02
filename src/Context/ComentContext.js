import { createContext } from "react";

export const ComentContext = createContext();

export const ComentProvider = ({ children }) => {
  return <ComentContext.Provider>
    {children}
  </ComentContext.Provider>;
};
