import React,{useState,useEffect} from 'react'
import "../../styles/Categories.css";
import Activity from './Activity';
import { getToken } from '../../Auth/Token';

export default function Activities({subCategoryId,noSubCategory}) {
  const [subcategory, setSubcategory] = useState(subCategoryId);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [companyData, setCompanyData] = useState([]);


  const getActivities = async (token,subCategoryId) => {
    const response = await fetch('https://api.ctyguide.com/company/companies',{
      method: "GET",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    setCompanyData(data);
  }

  
  useEffect(() => {
    console.log("Subcategory Data:",subCategoryData);
  },[subCategoryData]);

  useEffect(() => {
    const getTokenAndActivities = async (catID) => {
      const token = await getToken();
      await getActivities(token,catID);
    }
    getTokenAndActivities(subCategoryId);
  },[subCategoryId]);

  useEffect(() => {
    const subData = companyData.filter((item) => {
      return item.sub_category == subCategoryId;
    });
    setSubCategoryData(subData);
    console.log("Subcategory Datta:",subData);
    console.log("company Data",companyData.map((item) => item.sub_category));
  },[companyData]);


  return (
    <div className='activities-container' style={{"marginTop": noSubCategory ? "-150px" : ""}}>
      {subCategoryData.length > 0 ? (
        subCategoryData.map((item,index) => {
          return (
            <Activity data={item} key={index} />
          )
        })
      ):(
        <div className='no-activity'>No Activity</div>
      ) }
  

      
    </div>
  )
}
