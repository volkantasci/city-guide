import './App.css';
import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
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
  );
}

export default App;
