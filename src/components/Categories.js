import React,{useEffect, useState} from 'react'
import { getCookie, setCookie, removeCookie } from "../Auth/CookieManagement";
import {REFRESH_TOKEN_TIMEOUT,ACCESS_TOKEN_TIMEOUT}  from "../ENV";


export default function Categories() {
    const [categories,setCategories] = useState([]);
    
    const getCategoryData = async () => {
        const response = await fetch("https://cityguide-api-zl7pd.ondigitalocean.app/default/topcategorylist",{
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0OTk1NDM1LCJpYXQiOjE2NjQ5OTUxMzUsImp0aSI6IjMxYjU3ZDIzNTczNzRkYTc4YTlmZmQzYTY5MjM2OGUwIiwidXNlcl9pZCI6MX0.77hIv6bksqvr_DK-BtU01T90T5f5Uvk0FoMQWtPTBb4`
            }
        });
        const data = await response.json();
        if(response.status === 200){
            setCategories(data);
        }
    }
    useEffect(() => {
        getCategoryData();
    },[]);

  return (
    <div className='categories-container'>
       <div className='categories'>
        {/* <div className='category'>
            <img className='category-image' src={ require("../assets/images/shopping.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/restourant.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/funs.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/nightlife.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/forrent.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/hairstyle.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/history.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/nature.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/museum.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/pray.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/clinic.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/emergency.png") } alt='category' />
        </div> */}

        {categories.map((category,index) => {
            return (
                <div className='category'>
                    <img className='category-image' src={category.image} alt='category' />
                </div>
            )
        })}
        
        

       </div>
    </div>
  )
}
