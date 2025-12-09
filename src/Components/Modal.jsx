import React from "react";
import ClearIcon from '@mui/icons-material/Clear';

const Modal = () => {
  return (
    <div className="w-full h-[100vh] fixed bg-black/50 backdrop-opacity-10 text-black top-0 left-0 flex justify-center">
      <div className="w-1/2  bg-white rounded-lg h-fit mt-32">
        <div className="flex justify-between p-5">
          <div className="text-4xl font-semibold"> Forgot Password</div>
          <div><ClearIcon sx={{fontSize: "32px"}} /></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
