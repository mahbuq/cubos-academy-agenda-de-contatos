import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import "./styles.css";

import exit from "../../assets/exit.svg";

import toast from "../../helpers/toast";
import useAuth from "../../hooks/useAuth";
import useContacts from "../../hooks/useContacts";
import useAuthRequests from "../../hooks/useAuthRequests";

import CustomButton from "../../components/CustomButton";
import ModalContato from "../../components/ModalContato";
import ModalDelete from "../../components/ModalDelete";
import Table from "../../components/Table";

export default function Home() {
   const { setToken } = useAuth();
   const history = useHistory();
   const contact = useContacts();
   const requests = useAuthRequests();

   useEffect(() => {
      requests.load();
   }, []);

   function handleSignOut() {
      setToken("");
      history.push("/login");
      toast.messageSuccess("Até logo!");
   }

   return (
      <div>
         <header>
            <h1 className="title">KONTACTS</h1>
            <img src={exit} alt="Sair" className="exit" onClick={handleSignOut} />
         </header>
         <main>
            <div>
               <CustomButton
                  size="237"
                  color="rgba(4, 196, 92, 1)"
                  action={() => contact.setOpenModal(true)}>
                  Adicionar
               </CustomButton>
               <Table />
            </div>
         </main>
         {contact.openModal && (
            <ModalContato create={requests.createContact} editContact={requests.editContact} />
         )}
         {contact.deleting && <ModalDelete deleteContact={requests.deleteContact} />}
      </div>
   );
}
