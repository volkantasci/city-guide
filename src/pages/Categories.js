import React, { useEffect,useState } from 'react'
import Header from '../components/Categories/Header'
import { useParams,useLocation,useNavigate } from 'react-router-dom';
import Subcategories from '../components/Categories/Subcategories';
import Activities from '../components/Categories/Activities';
import Navigation from '../components/Navigation';
import { getToken } from '../Auth/Token';
import { MainContext,useContext } from '../Context';

export default function Categories() {
    const navigate  =useNavigate();
    let { category,subcategory } = useParams();

    const {selectedSubCategory,setSelectedSubCategory} = useContext(MainContext);
    const [subCategoryData, setSubCategoryData] = useState([]);
    const [categoryId, setCategoryId] = useState(null);

    const getSubcategoryData = async (token) => {
        const categoryResponse = await fetch('https://api.ctyguide.com/default/topcategorylist',{
          method: "GET",
          mode: "cors",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${token}`
          }
      });
      const categoryData = await categoryResponse.json();
      console.log("Category Data:",categoryData);
      console.log("filtered",categoryData.filter((categoryData) => categoryData.name === category)[0].id)
      setCategoryId(categoryData.filter((categoryData) => categoryData.name === category)[0].id);

      const response = await fetch('https://api.ctyguide.com/default/subcategorylist',{
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();
        data.reverse();
        setSubCategoryData(data);
    }
    // var slideCounter = 1;
    // const slideEffect = () => {
    //   setTimeout(()=>{
    //     document.getElementById("subcategory").style.left = `${slideCounter}px`;
    //     console.log("scroll animation: ",slideCounter);
    //     slideCounter = slideCounter + 1;
    //     if(slideCounter < 30){
    //       slideEffect();
    //     }
    //   },900);
    // }

    // useEffect(() => {
    //   slideEffect();
    // },[]);


    useEffect(() => {
      const filteredData = subCategoryData.filter((item) => {
        return item.top_category === categoryId;
      });
      if(filteredData.length > 0){
        if(selectedSubCategory === null){
          setSelectedSubCategory(filteredData[0]["id"]);
          console.log("Selected SubCategory ID:",filteredData[0]["id"]);
        }
        
      }
    },[subCategoryData]);



    useEffect(() => {
        const getTokenAndSubcategoryData = async () => {
          const token = await getToken();
          if(token){
            await getSubcategoryData(token);
            
          }else{
            navigate("/login");
          }
        }
        getTokenAndSubcategoryData();
    },[]);

  return (
    <div className='categories-container'>
        <Header showAlcohol={category === "Restourant" ? true : false} categoryName={category} />
        {category === "History" || category === "Nature" || category === "Museums" ? null : (
            <Subcategories  selected={selectedSubCategory} subCategoryData={subCategoryData.filter((item) => {
              return item.top_category === categoryId;
            })} setSelected={setSelectedSubCategory} />
        ) }
       
        <Activities subCategoryId={selectedSubCategory} noSubCategory={category === "History" || category === "Nature" || category === "Museums" ? true : false} />
        <Navigation />

    </div>
  )
}
