import React,{useEffect} from 'react'
import "../styles/Welcome.css";
import {useNavigate, useLocation} from "react-router-dom";
import { getToken } from '../Auth/Token';

export default function Welcome() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            if(location.pathname === "/welcome"){
            
                
                
            }
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
