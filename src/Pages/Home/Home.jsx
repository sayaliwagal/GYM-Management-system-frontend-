import React from "react";
import Login from "../../Components/Login";
import Signup from "../../Components/Signup";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="border-2 border-slate-800 bg-slate-800 text-white p-5 font-semibold text-xl">
        Welcome to GYM Management System
      </div>
      <div className="w-full flex justify-center bg-cover h-full bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-large-room-full-of-equipment-in-a-gym-image_2549099.jpg')]">
        <div className="w-full flex gap-32">
           <Login/>
           <Signup className="customSignup"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
