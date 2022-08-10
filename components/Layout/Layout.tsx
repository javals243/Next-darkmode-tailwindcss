import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children }: any) => {
  return (
    <>
      {children}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Layout;
