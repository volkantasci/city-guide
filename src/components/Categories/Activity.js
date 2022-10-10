import React from 'react'
import "../../styles/Categories.css";
import { useParams } from 'react-router-dom';

export default function Activity({data}) {
    let { category } = useParams();
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
                <img src={ data.gallery.length > 0 ? data.gallery[0].image : null } alt={"photo"} />
            </div>
            <div className='activity-buttons'>
                {category === "Museum" ? (
                    <div className='reservation'>
                        Buy Ticket
                    </div>
                ) : (
                    <div className='reservation'>
                    Reservation
                    </div>
                )}
                
                <div className='go-location'>
                    How Can I go?
                </div>
            </div>
        </div>
  )
}
