import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SetAvatar from "./components/SetAvatar";
// import VerifyOTP from "./pages/VerifyOTP"; // Make sure the casing matches the actual file name


export default function App() {
  // asyncfunction  callMe(){
  //   await funcA()
  //   funcB()
  // }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        {/* <Route path="/verify-otp" element={<VerifyOTP />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}


// async function funcA(){
//   //wait for 5 minutes
// }
// async function funcB(){
//   //wait for 15 minutes
// }