import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CreateAccountButton from "./components/Buttons/CreateAccount/CreateAccountButton";
import LoginButtonLanding from "./components/Buttons/LoginButtonLanding/LoginButtonLanding";
import { LogInPage } from "./pages/LogIn/LoginPage";

import { RegisterPage } from "./pages/Register/RegisterPage";

function App() {
  return (
    <>
      <LoginButtonLanding></LoginButtonLanding>
      <CreateAccountButton></CreateAccountButton>
      {/* <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes> */}
    </>
  );
}

export default App;
