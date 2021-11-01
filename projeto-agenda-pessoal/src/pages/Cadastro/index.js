import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import rightImage from "../../assets/direita.png";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import useRequests from "../../hooks/useRequests";

export default function Cadastro() {
   const { setName, setEmail, setPassword } = useAuth();
   const history = useHistory();
   const requests = useRequests();

   function handleCancel() {
      setName("");
      setEmail("");
      setPassword("");
      history.push("/login");
   }

   return (
      <div className="cadastro__page">
         <div className="left__cadastro">
            <div className="container__cadastro">
               <h1 className="h1__cadastro">Cadastre-se</h1>
               <div className="inputs__cadastro">
                  <CustomInput
                     label="Nome"
                     type="text"
                     action={(e) => setName(e.target.value)}
                  />
                  <CustomInput
                     label="E-mail"
                     type="text"
                     action={(e) => setEmail(e.target.value)}
                  />
                  <CustomInput
                     label="Senha"
                     type="password"
                     action={(e) => setPassword(e.target.value)}
                  />
               </div>
               <div className="btn__cadastro">
                  <CustomButton color="#04C45C" action={requests.register}>
                     CADASTRAR
                  </CustomButton>
                  <CustomButton color="rgba(251, 6, 21, 0.65)" action={handleCancel}>
                     CANCELAR
                  </CustomButton>
               </div>
               <p>
                  Já tem cadastro?{" "}
                  <Link to="/login" className="link">
                     Clique aqui!
                  </Link>
               </p>
            </div>
         </div>
         <div className="right__cadastro">
            <img src={rightImage} alt="Agenda de contatos." />
         </div>
      </div>
   );
}
