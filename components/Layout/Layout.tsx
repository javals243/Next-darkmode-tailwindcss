import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "../ThemeContext/ThemeContext";

const Layout = ({ children }: any) => {
  return (
    <>
      <ThemeProvider>
        {children}
        <ToastContainer autoClose={3000} />
      </ThemeProvider>
    </>
  );
};

export default Layout;
