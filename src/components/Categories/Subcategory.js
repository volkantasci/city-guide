import React from 'react'
import "../../styles/Categories.css";
import { MainContext,useContext } from '../../Context';

export default function Subcategory({subcategory,selected}) {
  const {setSelectedSubCategory} = useContext(MainContext);
  const changeSelectedSubCategory = () => {
    setSelectedSubCategory(subcategory.id);
  }
  return (
    <div className='subcategory-container' onClick={changeSelectedSubCategory}>
            <div>
                <img className='subcategory-image' src={subcategory.image} alt='subcategory' />
            </div>
            <div className='subcategory-name'>
                {subcategory.name}
            </div>
           {
            selected ? <div className='border-section'>
            </div> : null
           }
            
            
        </div>
  )
}
