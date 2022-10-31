import React,{useState,useEffect, useContext} from 'react'
import "../../styles/Categories.css";
import Activity from './Activity';
import { getToken } from '../../Auth/Token';
import { MainContext } from '../../Context';

export default function Activities({subCategoryId,noSubCategory}) {
  const {alcoholEnabled,setAlcoholEnabled} = useContext(MainContext);
  const [subcategory, setSubcategory] = useState(subCategoryId);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [companyData, setCompanyData] = useState([]);


  const getActivities = async (token,subCategoryId) => {
    const response = await fetch('https://api.ctyguide.com/company/companies/',{
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
    <div className='activities-container' id="activities-container" style={{"marginTop": noSubCategory ? "-150px" : ""}}>
      {subCategoryData.length > 0 ? (
        subCategoryData.map((item,index) => {
          if(item.alcohol === alcoholEnabled){
            return (
              <Activity data={item} key={index} />
            )
          }
        })
      ):(
        <div className='no-activity'>No Activity</div>
      ) }
  

      
    </div>
  )
}
