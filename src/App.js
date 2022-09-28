import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Categories from './pages/Categories';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BusinessSignUp from './pages/BusinessSignUp';
import UserSignUp from './pages/UserSignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/categories/:category" element={<Categories />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/signup/business" element={<BusinessSignUp />}/>
      <Route path="/signup/user" element={<UserSignUp />}/>
    </Routes>
  );
}

export default App;
