import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/fontawesome.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import RegisterPage from "./pages1/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgetPassword from "./pages/ForgetPasswordPage";
// import DashboardPage from "./pages1/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                {/* <Route path="/register" element={<RegisterPage/>} /> */}
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/forget" element={<ForgetPassword/>} />

                {/* <Route path="/dashboard" element={<DashboardPage/>} /> */}
                <Route path="/" element={<h1>Home</h1>} />
            </Routes>
        
        
        </BrowserRouter>

        
    </div>
  );
}

export default App;
