import {REFRESH_TOKEN_TIMEOUT,ACCESS_TOKEN_TIMEOUT}  from './ENV';
import './App.css';
import { useState, useContext, useEffect } from 'react';
import { Route, Routes, useNavigate,useLocation } from 'react-router-dom';
import { MainContext } from "./Context";
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import Login from './pages/Login';
import Logout from './pages/Logout';
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
import SelectCardToPayment from './pages/SelectCardToPayment';
import Payment from './pages/Payment';
import Welcome from './pages/Welcome';
import Maps from './pages/Maps';
import ActivityPage from './pages/ActivityPage';
import ActivityDetails from './pages/ActivityDetails';


function App() {
  const location = useLocation();
  const [error,setError] = useState(null);
  const [categoryId,setCategoryId] = useState(0);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [welcomeVideo, setWelcomeVideo] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [addCardComponentActive, setAddCardComponentActive] = useState(false);
  const [editDeleteData, setEditDeleteData] = useState(false);
  const navigate = useNavigate();
  const ContextData = {
    error,
    setError,
    categoryId,
    setCategoryId,
    selectedSubCategory,
    setSelectedSubCategory,
    paymentMethod,
    setPaymentMethod,
    addCardComponentActive,
    setAddCardComponentActive,
    editDeleteData,
    setEditDeleteData
  };

 
  // const whenBrowserClosed = () => {
  //   window.addEventListener("beforeunload", (ev) => 
  //     {  
  //         localStorage.removeItem("welcomeState");
  //     });
  // }


  // const whenBrowserOpened = () => {
  //   if(localStorage.getItem("welcomeState") === null){
  //     localStorage.setItem("welcomeState",true);
  //     navigate("/welcome");
  //   }
  // }

  useEffect(() => {
    // whenBrowserOpened();
    // whenBrowserClosed();
    
  },[]);

  return (
    <MainContext.Provider value={ContextData}>
      <Routes>
        <Route path="/welcome" element={<Welcome />}/>
        <Route path="/home" element={<HomePage />}/>

        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signup/business" element={<BusinessSignUp />}/>
        <Route path="/signup/user" element={<UserSignUp />}/>
        <Route path="/verify/email" element={<EmailVerification />}/>
        <Route path="/verify/entercode" element={<EnterCode />}/>

        <Route path="/maps" element={<Maps />}/>

        <Route path="/" element={<Welcome />}/>
        <Route path="/categories/:category" element={<Categories />}/>
        <Route path="/activity" element={<ActivityPage />}/>
        <Route path="/activity-details/:menuorhistory" element={<ActivityDetails />}/>
        <Route path="/user/profile" element={<UserProfile />}/>
        <Route path="/user/wallet" element={<Wallet />}/>
        <Route path="/user/savecard" element={<SaveCard />}/>
        <Route path="/select-card" element={<SelectCardToPayment />}/>
        <Route path="/payment" element={<Payment />}/>
        <Route path="/test" element={<Test />}/>



        <Route path="/logout" element={<Logout />}/>

        


      </Routes>
    </MainContext.Provider>
  );
}

export default App;
