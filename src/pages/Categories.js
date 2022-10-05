import React, { useEffect,useState } from 'react'
import Header from '../components/Categories/Header'
import { useParams,useLocation } from 'react-router-dom';
import Subcategories from '../components/Categories/Subcategories';
import Activities from '../components/Categories/Activities';
import Navigation from '../components/Navigation';

export default function Categories() {
    
    const { category } = useParams();
    const [categoryData, setCategoryData] = useState(category);

    useEffect(() => {
        console.log(categoryData);
    },[categoryData])
  return (
    <div className='categories-container'>
        <Header />
        <Subcategories />
        <Activities />
        <Navigation />

    </div>
  )
}
