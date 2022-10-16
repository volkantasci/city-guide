import React,{useEffect,useState} from 'react'
import "../../styles/Categories.css";
import { useParams, useNavigate } from 'react-router-dom';

export default function Activity({data}) {
    let { category } = useParams();
    const navigate = useNavigate();
    const [galleries,setGalleries] = useState([]);

    useEffect( () => {
        if(data.galleries){
            setGalleries(data.galleries);
        }
    },[data])

  return (
    <div className='activity'>
            <div className='activity-header'>
                {data.name}
            </div>
            <div className='activity-location'>
                {data.address.address}
            </div>
            <div className='activity-photo'>
                {/* <img src={ require("../../assets/images/safari.png") } alt={"photo"} /> */}
                <img src={ galleries.length > 0 ? galleries[0].image : null } alt={"photo"} />
            </div>
            <div className='activity-buttons'>
            
                    <div className='reservation' onClick={() => {

                        navigate("/payment");
                    }}>

                    {category === "Museums" ? "Buy Ticket" : "Reservation"}
              
                    </div>
               
                <div className='go-location'>
                    How Can I go?
                </div>
            </div>
        </div>
  )
}
