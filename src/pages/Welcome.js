import React,{useEffect} from 'react'
import "../styles/Welcome.css";
import {useNavigate, useLocation} from "react-router-dom";
import { getToken } from '../Auth/Token';

export default function Welcome() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const getTokenAndNavigate = async () => {
            const token = await getToken();
            console.log("STARTER TOKEN:",token);
            if(token === null){
              if(location.pathname === "/" || location.pathname === "/welcome"){
                navigate("/login");
              }
            }
            else{
              navigate("/home");
            } 
          }
        setTimeout(() => {
              getTokenAndNavigate();
        }, 1800);
    },[]);

  return (
    <div className='welcome-video-container'>
        <div id="part1">

        </div>
        <div id="part2">

        </div>
        <div className='welcome-video'>
            <video id="video"   autoPlay muted>
                <source src={require("../assets/videos/welcome.MOV")} type="video/mp4" />
            </video>
        </div>
        
    </div>
  )
}
