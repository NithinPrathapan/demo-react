import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  function adduser() {
    setUser("nithin ");
  }

  return (
    <UserContext.Provider value={adduser}>{children}</UserContext.Provider>
  );
};
