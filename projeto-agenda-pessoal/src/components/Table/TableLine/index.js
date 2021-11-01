import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import useContacts from "../../../hooks/useContacts";

export default function TableLine({ name, phone, email, id }) {
   const { setName, setPhone, setEmail, setEditing, setDeleting, setOpenModal } =
      useContacts();

   function handleEdit() {
      setName(name);
      setPhone(phone);
      setEmail(email);
      setEditing(id);
      setOpenModal(true);
   }

   function handleDelete() {
      setDeleting({ id, name });
   }

   return (
      <div className="table__line">
         <td className="item">
            <span>{name}</span>
         </td>
         <td className="item">
            <span>{email}</span>
         </td>
         <td className="item">
            <span>{phone}</span>
         </td>
         <td className="icons">
            <img src={editIcon} alt="Edit contact" onClick={handleEdit} />
            <img src={deleteIcon} alt="Delete contact" onClick={handleDelete} />
         </td>
      </div>
   );
}
