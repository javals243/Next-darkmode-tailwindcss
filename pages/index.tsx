import type { NextPage } from "next";
import { toast } from "react-toastify";
import { showToastMessage } from "../components/ToastMessage/ToastMessage";
import Home from "./Home/Home";
import LoadingPage from "./LoadingPage/LoadingPage";
const App: NextPage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;
