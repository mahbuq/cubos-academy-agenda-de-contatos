import { createContext } from "react";
import useContactsProvider from "../../hooks/useContactsProvider";

export const ContactsContext = createContext();

export default function ContactsProvider(props) {
   const contacts = useContactsProvider();
   return (
      <ContactsContext.Provider value={contacts}>{props.children}</ContactsContext.Provider>
   );
}
