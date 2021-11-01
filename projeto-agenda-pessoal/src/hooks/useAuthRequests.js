import { useHistory } from "react-router";
import toast from "../helpers/toast";
import useAuth from "./useAuth";
import useContacts from "./useContacts";

export default function useAuthRequests() {
   const contact = useContacts();
   const { token } = useAuth();

   async function load() {
      try {
         const response = await fetch("https://cubos-api-contacts.herokuapp.com/contatos", {
            method: "GET",
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         const data = await response.json();
         if (!data) {
            throw new Error(data);
         }

         contact.setContactsList(data);
      } catch (error) {
         toast.messageError(error.message);
      }
   }

   async function createContact() {
      const body = {
         nome: contact.name,
         email: contact.email,
         telefone: contact.phone,
      };

      try {
         const response = await fetch("https://cubos-api-contacts.herokuapp.com/contatos", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
         });

         const data = await response.json();
         if (!data) {
            throw new Error(data);
         }

         contact.setName("");
         contact.setEmail("");
         contact.setPhone("");

         load();

         contact.setOpenModal(false);

         toast.messageSuccess("Contato criado com sucesso!");
      } catch (error) {
         toast.messageError(error.message);
      }
   }

   async function editContact() {
      const body = {
         nome: contact.name,
         email: contact.email,
         telefone: contact.phone,
      };

      const id = contact.editing;

      try {
         const response = await fetch(
            `https://cubos-api-contacts.herokuapp.com/contatos/${id}`,
            {
               method: "PUT",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
               },
               body: JSON.stringify(body),
            }
         );

         const data = await response.json();

         if (!data) {
            throw new Error(data);
         }

         contact.setEditing("");
         contact.setName("");
         contact.setEmail("");
         contact.setPhone("");
         contact.setOpenModal(false);

         load();

         toast.messageSuccess("Contato editado com sucesso!");
      } catch (error) {
         toast.messageError(error.message);
      }
   }

   async function deleteContact() {
      const id = contact.deleting.id;
      try {
         await fetch(`https://cubos-api-contacts.herokuapp.com/contatos/${id}`, {
            method: "DELETE",
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         load();

         contact.setDeleting("");

         toast.messageSuccess("Contato deletado com sucesso!");
      } catch (error) {
         toast.messageError(error.message);
      }
   }

   return {
      load,
      createContact,
      editContact,
      deleteContact,
   };
}
