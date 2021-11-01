import { createContext } from "react";
import useAuthProvider from "../../hooks/useAuthProvider";

export const AuthContext = createContext();

export default function AuthProvider(props) {
   const auth = useAuthProvider();
   return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>;
}
