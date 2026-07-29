import React, { useState } from "react";
import UserContext from "./userContext";

const UserContextProvided = ({children}) => {
  console.log(children);
  const [user, setUser] = useState(null);
  return(
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvided;