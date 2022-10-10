import React from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import SearchBar from '../components/SearchBar'
import Weather from '../components/Weather'

export default function () {

  return (
    <div className='homepage-container'>
        <Header />
        <Weather />
        <SearchBar />
        <Categories />
        <Navigation />
    </div>
  )
}
