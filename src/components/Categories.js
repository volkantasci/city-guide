import React,{useEffect, useState} from 'react'
import { getCookie, setCookie, removeCookie } from "../Auth/CookieManagement";
import {REFRESH_TOKEN_TIMEOUT,ACCESS_TOKEN_TIMEOUT}  from "../ENV";
import {Link} from "react-router-dom";
import {getToken} from "../Auth/Token";
import Subcategories from './Categories/Subcategories';


export default function Categories() {
    const [categories,setCategories] = useState([]);

    const getCategoryData = async (token) => {
        const response = await fetch("https://api.ctyguide.com/default/topcategorylist",{
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();
        if(response.status === 200){
            data.reverse();
            let swapData = data[7];
            data[7] = data[10];
            data[10] = swapData;
            setCategories(data);
        }
    }
    useEffect(() => {

        const getTokenAndCategoryData = async () => {
            const token = await getToken();

            await getCategoryData(token);
        }
        getTokenAndCategoryData();
    },[]);

  return (
    <div className='homepage-categories-container'>
       <div className='categories'>
        {categories.map((category,index) => {
            return (
                <div className='category' key={index}>
                    <Link to={`/categories/${category.name}`}>
                        <img className='category-image' src={category.image} alt='category' />
                        <div className='category-name'>
                            {category.name}
                        </div>
                    </Link>
                </div>
            )
        })}
       </div>
    </div>
  )
}
