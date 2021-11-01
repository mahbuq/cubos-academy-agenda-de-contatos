import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

import AuthProvider from "./contexts/AuthenticationContext";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import ContactsProvider from "./contexts/ContactsContext";

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Router>
               <Switch>
                  <Route path="/login" component={Login} />
                  <Route path="/cadastro" component={Cadastro} />
                  <ProtectedRoutes>
                     <ContactsProvider>
                        <Route path="/" exact component={Home} />
                     </ContactsProvider>
                  </ProtectedRoutes>
               </Switch>
            </Router>
         </AuthProvider>
      </div>
   );
}

export default App;
