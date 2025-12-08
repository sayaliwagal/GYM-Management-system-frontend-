import React from "react";

const Login = () => {
  return (
    <div className="w-1/3 h-fit p-10 mt-20 ml-20 bg-slate-400/30 backdrop-opacity-20 rounded-2xl">
      <div className="font-sans text-white text-center text-3xl">Login</div>
      <input
        type="text"
        className="w-full my-5 p-2 rounded-lg bg-gray-300"
        placeholder="Enter UserName"
      />
      <input
        type="password"
        className="w-full my-5 p-2 rounded-lg bg-gray-300"
        placeholder="Enter Password"
      />
      <div className="p-2 w-80 border-2 border-slate-700 bg-slate-700 hover:bg-slate-800 mx-auto rounded-lg text-white font-semibold text-lg text-center cursor-pointer">
        Login
      </div>
    </div>
  );
};

export default Login;
