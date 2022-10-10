import React,{useState} from 'react'
import "../../styles/Categories.css";
import Subcategory from './Subcategory';

export default function Subcategories({subCategoryData,selected}) {
    const [selectedSubCategory, setSelectedSubCategory] = useState(selected);
    const [subCategory, setSubCategory] = useState(subCategoryData);
   
    return (
    <div className='subcategories'>
      {subCategoryData.map((subcategory,index) => {      
        return (
          <Subcategory selected={subcategory.id === selected ? true : false} subcategory={subcategory} key={index} />
        )
      })}
    </div>
  )
}
