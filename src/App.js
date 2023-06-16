import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/variable.css';
import './assets/css/fontawesome.min.css';

import LoginPage from "./pages/LoginPage";
import ForgetPassword from "./pages/ForgetPasswordPage";
import Verification from "./pages/Verification";
import Register from "./pages/Register";

import Homepage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import GoandFreenow from "./pages/GoandFreenow";
import About from "./pages/About";
import TermsandConditions from "./pages/Termsandconditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Support from "./pages/Support";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/register" element={<RegisterPage/>} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/Register" element={<Register />} />

          <Route path="/Profile" element={<Profile />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/GoandFreenow" element={<GoandFreenow />} />
          <Route path="/About" element={<About />} />
          <Route path="/TermsandConditions" element={<TermsandConditions />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />



          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/Support" element={<Support/>} />
          <Route path="/profilepage" element={<ProfilePage/>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
