import React,{useEffect, useState} from 'react'
import { getCookie, setCookie, removeCookie } from "../Auth/CookieManagement";
import {REFRESH_TOKEN_TIMEOUT,ACCESS_TOKEN_TIMEOUT}  from "../ENV";
import {Link} from "react-router-dom";
import {getToken} from "../Auth/Token";


export default function Categories() {
    const [categories,setCategories] = useState([]);
    
    const getCategoryData = async (token) => {
        const response = await fetch("https://cityguide-api-zl7pd.ondigitalocean.app/default/topcategorylist",{
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
    <div className='categories-container'>
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
