import React from "react";

const Signup = () => {
  return (
    <div className="customSignup w-1/3 h-[450px] overflow-y-auto p-10 mt-20 ml-20 bg-slate-400/30 backdrop-opacity-20 rounded-2xl">
      <div className="font-sans text-white text-center text-3xl">
        Register Your Gym
      </div>
      <input
        type="email"
        className="w-full my-5 p-2 rounded-lg bg-gray-300"
        placeholder="Enter Email"
      />
      <input
        type="text"
        className="w-full my-5 p-2 rounded-lg bg-gray-300"
        placeholder="Enter GYM Name"
      />
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
      <input
        type="file"
        className="w-1/4 text-center my-5 p-2 rounded-lg bg-gray-300"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGkZ6b3g6Qk_OTDYakHzBPaxE3x6YbD4xlA&s"
        alt="initail image"
        className="w-[250px] h-[200px] mb-3"
      />
      <div className="p-2 w-80 border-2 mb-4 border-slate-700 bg-slate-700 hover:bg-slate-800 mx-auto rounded-lg text-white font-semibold text-lg text-center cursor-pointer">
        Register
      </div>
      <div className="p-2 w-80 border-2 border-slate-700 bg-slate-700 hover:bg-slate-800 mx-auto rounded-lg text-white font-semibold text-lg text-center cursor-pointer">
        Forget Password
      </div>
    </div>
  );
};

export default Signup;
