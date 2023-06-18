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
import MyEvents from "./pages/MyEvents";
import EventDetail from "./pages/EventDetail";
import EventBook from "./pages/EventBook";
import EventCancel from "./pages/EventCancel";
import ArtistProfile from "./pages/ArtistProfile";
import Live from "./pages/Live";
import Home from "./pages/Home";
import ArtistSlider from "./pages/ArtistSlider";

import ArtistsSearchresult from "./pages/ArtistsSearchresult";
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
          <Route path="/Home" element={<Home/>} />

          <Route path="/ArtistProfile" element={<ArtistProfile/>} />
          <Route path="/ArtistsSearchresult" element={<ArtistsSearchresult/>} />
          <Route path="/Live" element={<Live/>} />

          <Route path="/EventBook" element={<EventBook/>} />
          <Route path="/EventDetail" element={<EventDetail/>} />
          <Route path="/EventCancel" element={<EventCancel/>} />
          <Route path="/MyEvents" element={<MyEvents/>} />
          <Route path="/Support" element={<Support/>} />
          <Route path="/profilepage" element={<ProfilePage/>} />
          <Route path="/" element={<Homepage/>} />
          <Route path="/ArtistSlider" element={<ArtistSlider/>} />

          
        </Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
