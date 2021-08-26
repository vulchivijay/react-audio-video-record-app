import React, {useState, useMemo,  createContext} from "react";
import { auth } from "./../config/firebase";
export const UserContext = createContext({user: null})

export default function Provider (props) {
  const [user, setuser] = useState(null);

  useMemo(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email }  = user;
        setuser({
          displayName,
          email
        });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  )
}