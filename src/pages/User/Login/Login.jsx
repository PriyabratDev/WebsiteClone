import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoginModal from "../../../components/UserComponent/Login/LoginModal";

const Login = () => {
  const { isAuth } = useSelector((store) => store.login);

  useEffect(()=>{
    
  }, [isAuth]);

  if (isAuth) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <LoginModal />
    </>
  );
};

export default Login;
