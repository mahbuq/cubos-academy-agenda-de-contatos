import { useState } from "react";

export default function useContactsProvider() {
   const [contactsList, setContactsList] = useState([]);
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [openDelete, setOpenDelete] = useState(false);
   const [openModal, setOpenModal] = useState(false);
   const [editing, setEditing] = useState("");
   const [deleting, setDeleting] = useState("");

   return {
      contactsList,
      setContactsList,
      name,
      setName,
      phone,
      setPhone,
      email,
      setEmail,
      openDelete,
      setOpenDelete,
      openModal,
      setOpenModal,
      editing,
      setEditing,
      deleting,
      setDeleting,
   };
}
