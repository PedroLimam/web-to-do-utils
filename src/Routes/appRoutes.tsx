import Login from "@/pages/Login/login";
import NewPassword from "@/pages/NewPassword/newPassword";
import Register from "@/pages/Register/register";
import { Route, Routes } from "react-router-dom";

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/change-password" element={<NewPassword/>} />
    </Routes>
  )
}
