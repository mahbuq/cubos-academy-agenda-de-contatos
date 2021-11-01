import { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import leftImage from "../../assets/esquerda.png";
import useRequests from "../../hooks/useRequests";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import useAuth from "../../hooks/useAuth";

export default function Login() {
   const { email, setEmail, password, setPassword } = useAuth();
   const requests = useRequests();

   return (
      <div className="login__page">
         <div className="left__login">
            <img src={leftImage} alt="Pessoa segurando um Telefone." />
         </div>
         <div className="right__login">
            <div className="container__login">
               <h2 className="h2__login">Bem vindo</h2>
               <h1 className="h1__login">Faça o login com sua conta</h1>
               <div className="inputs_login">
                  <CustomInput
                     label="E-mail"
                     value={email}
                     action={(e) => setEmail(e.target.value)}
                     type="text"
                  />
                  <CustomInput
                     label="Senha"
                     value={password}
                     action={(e) => setPassword(e.target.value)}
                     type="password"
                  />
               </div>
               <div className="btn__login">
                  <CustomButton color="#04C45C" action={requests.login}>
                     LOGIN
                  </CustomButton>
               </div>
               <p>
                  Não tem cadastro?{" "}
                  <Link to="/cadastro" className="link">
                     Clique aqui!
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
}
