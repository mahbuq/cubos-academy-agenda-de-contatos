import TableLine from "./TableLine";
import TableHead from "./TableHead";
import useContacts from "../../hooks/useContacts";

export default function Table() {
   const { contactsList } = useContacts();

   return (
      <table className="table">
         <tr>
            <TableHead />
         </tr>
         <tr className="table__body">
            {contactsList.map((c) => (
               <TableLine name={c.nome} email={c.email} phone={c.telefone} id={c.id} />
            ))}
         </tr>
      </table>
   );
}
