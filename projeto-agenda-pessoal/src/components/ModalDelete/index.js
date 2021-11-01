import "./styles.css";
import closeBtn from "../../assets/close.svg";
import CustomButton from "../CustomButton";
import useContacts from "../../hooks/useContacts";

export default function ModalDelete({ deleteContact }) {
   const { deleting, setDeleting } = useContacts();

   function handleCancel() {
      setDeleting("");
   }

   return (
      <div className="modal">
         <div className="delete__ctn">
            <img className="close" src={closeBtn} alt="Fechar modal." onClick={handleCancel} />
            <h1 className="modal__title">Confirma a exclusão?</h1>
            <p className="delete__text">Deseja excluir o contato, {deleting.name}?</p>
            <div className="delete__btn">
               <CustomButton size="364" color="rgba(4, 196, 92, 1)" action={deleteContact}>
                  EXCLUIR
               </CustomButton>
               <CustomButton size="364" color="rgba(251, 6, 21, 0.65)" action={handleCancel}>
                  CANCELAR
               </CustomButton>
            </div>
         </div>
      </div>
   );
}
