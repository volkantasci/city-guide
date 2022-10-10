import React from 'react'
import { useEffect } from 'react'
import { removeCookie } from '../Auth/CookieManagement'

export default function Logout() {
    useEffect(() => {
        removeCookie("accessToken");
        removeCookie("refreshToken");
        localStorage.removeItem("accessTokenExpireTime");
        localStorage.removeItem("refreshTokenExpireTime");
    }, [])
    
  return (
    <div>
    </div>
  )
}
