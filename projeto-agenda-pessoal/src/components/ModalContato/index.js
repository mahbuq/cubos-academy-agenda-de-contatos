import "./styles.css";
import useContacts from "../../hooks/useContacts";

import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import closeBtn from "../../assets/close.svg";

export default function ModalContato({ create, editContact }) {
   const {
      setOpenModal,
      name,
      setName,
      email,
      setEmail,
      phone,
      setPhone,
      editing,
      setEditing,
   } = useContacts();

   function handleCancel() {
      if (editing) {
         setEditing("");
      }

      setName("");
      setEmail("");
      setPhone("");
      setOpenModal(false);
   }

   return (
      <div className="modal">
         <div className="modal__ctn">
            <img
               src={closeBtn}
               alt="Fechar modal"
               className="close"
               onClick={() => handleCancel()}
            />
            <h1 className="modal__title">{`${editing ? "Editar" : "Novo"}`} Contato</h1>
            <div className="modal__inputs">
               <CustomInput
                  label="Nome"
                  type="text"
                  value={name}
                  action={(e) => setName(e.target.value)}
               />
               <CustomInput
                  label="E-mail"
                  type="text"
                  value={email}
                  action={(e) => setEmail(e.target.value)}
               />
               <CustomInput
                  label="Telefone"
                  type="text"
                  value={phone}
                  action={(e) => setPhone(e.target.value)}
                  placeholder="(00)12345-6789"
               />
            </div>
            <div className="modal__btn">
               <CustomButton
                  size="364"
                  color="rgba(4, 196, 92, 1)"
                  action={() => (editing ? editContact() : create())}>
                  {`${editing ? "SALVAR" : "ADICIONAR"}`}
               </CustomButton>
               <CustomButton size="364" color="rgba(251, 6, 21, 0.65)" action={handleCancel}>
                  {`${editing ? "CANCELAR" : "LIMPAR"}`}
               </CustomButton>
            </div>
         </div>
      </div>
   );
}
