import React from 'react'
import { useEffect } from 'react'
import { removeCookie } from '../Auth/CookieManagement'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessTokenExpireTime");
        localStorage.removeItem("refreshTokenExpireTime");
        navigate("/login");
    }, [])
    
  return (
    <div>
    </div>
  )
}
