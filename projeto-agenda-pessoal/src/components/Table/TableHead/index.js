export default function TableHead() {
   return (
      <div className="table__head">
         <th className="column_name">
            <span>Nome</span>
         </th>
         <th className="column_name">
            <span>E-mail</span>
         </th>
         <th className="column_name">
            <span>Telefone</span>
         </th>
         <div className="column_name" />
      </div>
   );
}
