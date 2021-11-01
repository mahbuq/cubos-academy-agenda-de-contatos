import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function ProtectedRoutes({ children }) {
   const auth = useAuth();
   return <Route render={() => (auth.token ? children : <Redirect to="/login" />)} />;
}
