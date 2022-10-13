import { getCookie, setCookie, removeCookie } from "./CookieManagement"
import {REFRESH_TOKEN_TIMEOUT,ACCESS_TOKEN_TIMEOUT}  from "../ENV";
import { useNavigate } from "react-router-dom";

const getTokensByCredentials = async (username, password) => {
    const response = await fetch("https://api.ctyguide.com/api/token/",{
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    });
    const data = await response.json();
    if(response.status === 200){
        localStorage.setItem("accessToken",data.access);
        localStorage.setItem("refreshToken",data.refresh);
        localStorage.setItem("accessTokenExpireTime",Math.ceil(new Date().getTime()/1000) + REFRESH_TOKEN_TIMEOUT);
        localStorage.setItem("refreshTokenExpireTime", Math.ceil(new Date().getTime()/1000) + ACCESS_TOKEN_TIMEOUT);
    }
    return data.access;
}

const getAccessTokenByRefreshToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
        const refreshTokenExpireTime = localStorage.getItem("refreshTokenExpireTime");
        if (Math.ceil(new Date().getTime()/1000) < refreshTokenExpireTime) {
            const response = await fetch("https://api.ctyguide.com/api/token/refresh/",{
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "refresh": localStorage.getItem("refreshToken")
                })
            });
            if(response.status === 200){
                const data = await response.json();
                localStorage.removeItem("accessToken");
                localStorage.setItem("accessToken",data["access"]);
                localStorage.setItem("accessTokenExpireTime",Math.ceil(new Date().getTime()/1000) + REFRESH_TOKEN_TIMEOUT);
                const access = data["access"];
                return access;
            }
            else{
                return null;
            }
        }
        else{
            return null;
        }
    }
    else {
        return null;
    }
}

const getToken = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
            const accessTokenExpireTime = localStorage.getItem("accessTokenExpireTime");
            if(Math.ceil(new Date().getTime()/1000) > accessTokenExpireTime){
                return await getAccessTokenByRefreshToken();
            }
            else{
                return accessToken;
            }
    } 
    else {
        return null;
    }
}


export {
    getToken,
    getAccessTokenByRefreshToken,
    getTokensByCredentials
}