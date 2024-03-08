import LoadingPage from '@/pages/LoadingPage/loadingPage';
import { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("@/pages/Login/login"));
const NewPassword = lazy(() => import("@/pages/NewPassword/newPassword"));
const Register = lazy(() => import("@/pages/Register/register"));

export function AppRoutes(){
  return(
    <Suspense fallback={<LoadingPage/>}>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/change-password" element={<NewPassword/>} />
      </Routes>
    </Suspense>
  )
}
