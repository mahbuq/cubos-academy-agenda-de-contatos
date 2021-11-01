import { useContext } from "react";
import { AuthContext } from "../contexts/AuthenticationContext";

export default function useAuth() {
   return useContext(AuthContext);
}
