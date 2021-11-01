import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function messageError(message) {
   toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
      closeOnClick: true,
      pauseOnHover: false,
   });
}

function messageSuccess(message) {
   toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
      closeOnClick: true,
      pauseOnHover: false,
   });
}

export default { messageError, messageSuccess };
