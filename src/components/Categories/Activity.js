import React from 'react'
import "../../styles/Categories.css";

export default function Activity() {
  return (
    <div className='activity'>
            <div className='activity-header'>
                ATV SAFARI
            </div>
            <div className='activity-location'>
                Kemerburgaz/Istanbul
            </div>
            <div className='activity-photo'>
                <img src={ require("../../assets/images/safari.png") } alt={"photo"} />
            </div>
            <div className='activity-buttons'>
                <div className='reservation'>
                    Reservation
                </div>
                <div className='go-location'>
                    How Can I go?
                </div>
            </div>
        </div>
  )
}
