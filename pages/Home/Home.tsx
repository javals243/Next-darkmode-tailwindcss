import React from "react";
import { showToastMessage } from "../../components/ToastMessage/ToastMessage";

export const Home = () => {
  const notify = () => showToastMessage("votre toast custom ", "success");
  return (
    <div className="flex justify-center items-center flex-col w-full h-[100vh] ">
      <h1 className=" flex justify-center items-center text-3xl font-bold py-5">
        Starter NextJs TailwindCss
      </h1>
      <button
        className=" flex justify-center items-center bg-blue-500 px-10 py-3 rounded"
        onClick={notify}
      >
        Toast
      </button>
    </div>
  );
};

export default Home;
