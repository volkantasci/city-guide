import { getCookie, setCookie, removeCookie } from "./CookieManagement"
import {REFRESH_TOKEN_TIMEOUT,ACCESS_TOKEN_TIMEOUT}  from "../ENV";
import { useNavigate } from "react-router-dom";
import {MainContext, useContext} from "../../Context.js";

const getTokensByCredentials = async (username, password) => {
    const {accessToken,setAccessToken} = useContext(MainContext);
    const response = await fetch("https://cityguide-api-zl7pd.ondigitalocean.app/api/token/",{
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
        setCookie("accessToken", data.access);
        setCookie("refreshToken", data.refresh);
        localStorage.setItem("accessTokenExpireTime",Math.ceil(new Date().getTime()/1000) + REFRESH_TOKEN_TIMEOUT);
        localStorage.setItem("refreshTokenExpireTime", Math.ceil(new Date().getTime()/1000) + ACCESS_TOKEN_TIMEOUT);
    }
    return data.access;
}

const getAccessTokenByRefreshToken = async () => {
    const refreshToken = getCookie("refreshToken");
    if (refreshToken) {
        const refreshTokenExpireTime = localStorage.getItem("refreshTokenExpireTime");
        if(refreshTokenExpireTime){
            if (Math.ceil(new Date().getTime()/1000) < refreshTokenExpireTime) {
                const response = await fetch("https://cityguide-api-zl7pd.ondigitalocean.app/api/token/refresh/",{
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        "refresh": getCookie("refreshToken")
                    })
                });
                if(response.ok){
                    const data = await response.json();
                    setCookie("accessToken",data["access"]);
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
    }
    else {
        return null;
    }
}

const getToken = async () => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
        const accessTokenExpireTime = localStorage.getItem("accessTokenExpireTime");
        if(accessTokenExpireTime){
            if(Math.ceil(new Date().getTime()/1000) > accessTokenExpireTime){
                removeCookie("accessToken");
                return await getAccessTokenByRefreshToken();
            }
            else{
                return accessToken;
            }
        }
        else{
            removeCookie("accessToken");
            return await getAccessTokenByRefreshToken();  
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