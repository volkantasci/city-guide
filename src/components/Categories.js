import React from 'react'

export default function Categories() {
  return (
    <div className='categories-container'>
       <div className='categories'>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/shopping.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/restourant.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/funs.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/nightlife.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/forrent.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/hairstyle.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/history.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/nature.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/museum.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/pray.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/clinic.png") } alt='category' />
        </div>
        <div className='category'>
            <img className='category-image' src={ require("../assets/images/emergency.png") } alt='category' />
        </div>
        

       </div>
    </div>
  )
}
