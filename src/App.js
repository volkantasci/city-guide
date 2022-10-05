import {REFRESH_TOKEN_TIMEOUT,ACCESS_TOKEN_TIMEOUT}  from './ENV';
import './App.css';
import { useState, useContext, useEffect } from 'react';
import { Route, Routes, useNavigate,useLocation } from 'react-router-dom';
import { MainContext } from "./Context";
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BusinessSignUp from './pages/BusinessSignUp';
import UserSignUp from './pages/UserSignUp';
import EmailVerification from './pages/EmailVerification';
import Test from './pages/Test';
import EnterCode from './pages/EnterCode';
import UserProfile from './pages/UserProfile';
import Wallet from './pages/Wallet';
import SaveCard from './pages/SaveCard';
import {getCookie, setCookie, removeCookie} from "./Auth/CookieManagement";
import { getToken,getAccessTokenByRefreshToken } from "./Auth/Token";


function App() {
  const location = useLocation();
  const [error,setError] = useState(null);
  const navigate = useNavigate();
  const ContextData = {
    error,
    setError
  };

  useEffect(async () => {
    const token = await getToken();
      if(token !== undefined && token !== null){
        if(location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/email-verification" || location.pathname === "/enter-code"){
          navigate("/");
        }
      }
      else{
        if(location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/email-verification" && location.pathname !== "/enter-code"){
          navigate("/login");
        }
      }   
    
  },[]);

  return (
    <MainContext.Provider value={ContextData}>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/categories/:category" element={<Categories />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signup/business" element={<BusinessSignUp />}/>
        <Route path="/signup/user" element={<UserSignUp />}/>
        <Route path="/verify/email" element={<EmailVerification />}/>
        <Route path="/verify/entercode" element={<EnterCode />}/>
        <Route path="/user/profile" element={<UserProfile />}/>
        <Route path="/user/wallet" element={<Wallet />}/>
        <Route path="/user/savecard" element={<SaveCard />}/>
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
