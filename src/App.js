import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/variable.css';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/fontawesome.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import ForgetPassword from "./pages/ForgetPasswordPage";
import Verification from "./pages/Verification";
import Register from "./pages/Register";

// import DashboardPage from "./pages1/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/register" element={<RegisterPage/>} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/Verification" element={<Verification />} />
          <Route path="/Register" element={<Register />} />

          {/* <Route path="/dashboard" element={<DashboardPage/>} /> */}
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
