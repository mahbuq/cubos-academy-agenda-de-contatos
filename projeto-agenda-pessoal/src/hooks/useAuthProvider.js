import { useState } from "react";

export default function useAuthProvider() {
   const [token, setToken] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   return {
      token,
      setToken,
      name,
      setName,
      email,
      setEmail,
      password,
      setPassword,
   };
}
