import { useHistory } from "react-router";
import toast from "../helpers/toast";
import useAuth from "./useAuth";

export default function useRequests() {
   const auth = useAuth();
   const history = useHistory();

   async function login() {
      const body = {
         email: auth.email,
         senha: auth.password,
      };

      try {
         const response = await fetch("https://cubos-api-contacts.herokuapp.com/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         });

         const data = await response.json();
         if (!data.token) {
            throw new Error(data);
         }

         auth.setToken(data.token);
         auth.setEmail("");
         auth.setPassword("");

         toast.messageSuccess("Boas vindas");

         history.push("/");
      } catch (error) {
         toast.messageError(error.message);
      }
   }

   async function register() {
      try {
         if (!auth.name || !auth.email || !auth.password) {
            throw new Error("Todos os campos devem ser informados!");
         }

         const body = {
            nome: auth.name,
            email: auth.email,
            senha: auth.password,
         };

         const response = await fetch("https://cubos-api-contacts.herokuapp.com/usuarios", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         });

         const data = await response.json();
         if (!data.id) {
            throw new Error(data);
         }

         auth.setName("");
         auth.setEmail("");
         auth.setPassword("");

         toast.messageSuccess("Conta criada com sucesso!");

         history.push("/login");
      } catch (error) {
         toast.messageError(error.message);
      }
   }

   return {
      login,
      register,
   };
}
