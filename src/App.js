import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ForgotPswrd } from "./auth/ForgotPswrd";
import { LoginForm } from "./auth/LoginForm";
import { RegisterForm } from "./auth/RegisterForm";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/registration" element={<RegisterForm />}></Route>
          <Route path="/forgotpassword" element={<ForgotPswrd />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
