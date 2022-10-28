import React from 'react'
import "../styles/ActivityDetails.css"
import Navigation from "../components/Navigation"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleMap, Polygon, useJsApiLoader } from "@react-google-maps/api";

export default function ActivityDetails() {
  const navigate = useNavigate();
  const [detailType, setDetailType] = useState("tarihce");
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
});

const defaultMapOptions = {
    fullscreenControl: false,
  };


  // custom css for activity details
  const customCss = {
    "tarihce" : {
      "width": "100vw",
      "height": "450px",
      "padding": "20px"
    },
    "menu": {
      "width": "100vw",
      "height": "450px",
      "padding": "20px",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "flex-start",
      "alignItems": "center",
      "gap": "30px",
      "backgroundColor": "#fff"
    },
    "calisma": {
      "width": "100vw",
      "height": "450px",
      "padding": "20px",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "flex-start",
      "alignItems": "center",
      "gap": "30px",
      "backgroundColor": "#fff"
    },
    "adres": {
      "width": "100vw",
      "height": "450px",
      "padding": "20px",
      "display": "flex",
      "flexDirection": "column",
      "justifyContent": "flex-start",
      "alignItems": "center",
      "gap": "30px",
      "backgroundColor": "#fff"
    },
  }

  useEffect(() => {
    console.log(detailType);
  }, [detailType])


  return (
    <div className='activity-details-container'>
      <div className='activity-details-back-button' onClick={()=>{
          navigate(-1);
      }}>
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.1665 7.83337H4.32984L8.56484 2.7467C8.76287 2.50845 8.85814 2.20129 8.82969 1.89279C8.80125 1.5843 8.65142 1.29973 8.41317 1.1017C8.17492 0.903675 7.86776 0.808403 7.55926 0.836846C7.25076 0.865289 6.9662 1.01512 6.76817 1.25337L0.934837 8.25337C0.895591 8.30905 0.860496 8.36754 0.829837 8.42837C0.829837 8.4867 0.829837 8.5217 0.748171 8.58004C0.69529 8.71381 0.667602 8.8562 0.666504 9.00004C0.667602 9.14388 0.69529 9.28627 0.748171 9.42004C0.748171 9.47837 0.74817 9.51337 0.829837 9.5717C0.860496 9.63253 0.895591 9.69103 0.934837 9.7467L6.76817 16.7467C6.87786 16.8784 7.01523 16.9843 7.17049 17.0569C7.32576 17.1295 7.49511 17.167 7.6665 17.1667C7.9391 17.1672 8.20327 17.0723 8.41317 16.8984C8.53131 16.8004 8.62896 16.6801 8.70053 16.5444C8.77211 16.4087 8.81621 16.2601 8.8303 16.1073C8.84439 15.9545 8.82819 15.8004 8.78264 15.6539C8.73709 15.5074 8.66307 15.3713 8.56484 15.2534L4.32984 10.1667H18.1665C18.4759 10.1667 18.7727 10.0438 18.9915 9.825C19.2103 9.6062 19.3332 9.30946 19.3332 9.00004C19.3332 8.69062 19.2103 8.39387 18.9915 8.17508C18.7727 7.95629 18.4759 7.83337 18.1665 7.83337Z" fill="white"/>
        </svg>
      </div>

        <div className='activity-details-header'>
          <svg width="178" height="59" viewBox="0 0 178 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 34.76C7.7 34.76 5.22 33.88 3.26 32.12C1.38 30.36 0.44 28.14 0.44 25.46C0.44 22.7 1.16 19.96 2.6 17.24C4.04 14.52 5.92 12.08 8.24 9.92C9.4 8.84 10.66 7.86 12.02 6.98C13.38 6.06 14.84 5.26 16.4 4.58C18.04 3.82 19.64 3.28 21.2 2.96C22.8 2.6 24.3 2.42 25.7 2.42C28.26 2.42 30.38 2.92 32.06 3.92C32.98 1.76 33.86 0.679999 34.7 0.679999C36.06 0.679999 36.74 0.939999 36.74 1.46C35.78 2.7 35 3.7 34.4 4.46C33.8 5.22 33.4 5.76 33.2 6.08C30.84 9.28 29.66 11.62 29.66 13.1L29.9 14C29.9 14.08 29.86 14.12 29.78 14.12C29.3 14.12 29.06 13.6 29.06 12.56C29.06 10.76 29.86 8.24 31.46 5C30.22 3.88 28.48 3.32 26.24 3.32C22.8 3.32 19.3 4.42 15.74 6.62C12.18 8.78 9.2 11.54 6.8 14.9C5.6 16.54 4.72 18.14 4.16 19.7C3.64 21.22 3.38 22.68 3.38 24.08C3.38 25.84 3.78 27.42 4.58 28.82C5.38 30.22 6.48 31.3 7.88 32.06C9.28 32.86 10.86 33.26 12.62 33.26C15.42 33.26 18.08 32.7 20.6 31.58C23.16 30.42 25.56 28.66 27.8 26.3C28.36 25.74 28.76 25.46 29 25.46C29.16 25.46 29.24 25.58 29.24 25.82C29.24 26.18 29.06 26.56 28.7 26.96C26.58 29.36 23.8 31.26 20.36 32.66C16.88 34.06 13.66 34.76 10.7 34.76ZM38.7017 11.06C37.8217 11.06 37.1017 10.82 36.5417 10.34C37.3017 9.82 38.1017 9.14 38.9417 8.3C39.8217 7.46 40.7217 6.46 41.6417 5.3C41.7217 5.3 41.7617 5.4 41.7617 5.6L41.4617 7.34C41.2617 8.58 40.9017 9.52 40.3817 10.16C39.8617 10.76 39.3017 11.06 38.7017 11.06ZM32.9417 32.9C31.4217 32.9 30.6617 31.8 30.6617 29.6C30.6617 26.28 31.8617 21.9 34.2617 16.46C34.2617 16.3 34.3617 16 34.5617 15.56C34.8017 15.12 34.9817 14.84 35.1017 14.72C35.3817 14.44 35.7617 14.3 36.2417 14.3C37.6417 14.3 38.4017 14.58 38.5217 15.14C37.8817 16.18 37.2617 17.38 36.6617 18.74C36.1017 20.1 35.5417 21.6 34.9817 23.24C34.3817 25 33.9417 26.46 33.6617 27.62C33.4217 28.74 33.3017 29.64 33.3017 30.32C33.3017 31.32 33.5617 31.82 34.0817 31.82C34.4417 31.82 34.9017 31.6 35.4617 31.16C35.9017 30.8 36.2017 30.54 36.3617 30.38C36.5617 30.22 36.7417 30.08 36.9017 29.96C37.0617 29.96 37.1417 30.04 37.1417 30.2C37.1417 30.64 36.5617 31.2 35.4017 31.88C34.2417 32.56 33.4217 32.9 32.9417 32.9ZM41.9595 33.14C40.1995 33.14 39.3195 32.2 39.3195 30.32C39.3195 28.64 39.8795 26.44 40.9995 23.72C41.4395 22.68 41.8795 21.64 42.3195 20.6C42.7595 19.56 43.2595 18.38 43.8195 17.06C42.4595 16.54 41.7795 15.76 41.7795 14.72C41.7795 14.4 41.8595 14.18 42.0195 14.06C42.6195 14.34 43.5395 14.54 44.7795 14.66C46.0995 11.7 46.7595 9.82 46.7595 9.02C46.7595 8.14 46.5995 7.7 46.2795 7.7L45.0795 8C44.9595 8 44.8995 7.94 44.8995 7.82C44.8995 7.5 45.1395 7.26 45.6195 7.1C46.0995 6.9 46.4595 6.8 46.6995 6.8C48.4595 6.8 49.3395 7.8 49.3395 9.8C49.3395 10.96 48.9795 12.48 48.2595 14.36C48.4195 14.52 49.1395 14.6 50.4195 14.6C51.7395 14.6 52.7395 14.46 53.4195 14.18C54.0595 13.86 54.5195 13.7 54.7995 13.7C54.9195 13.7 54.9795 13.74 54.9795 13.82C54.9795 13.94 54.8795 14.1 54.6795 14.3C53.8395 15.02 52.8395 15.64 51.6795 16.16C50.5595 16.68 49.2595 17.04 47.7795 17.24H47.5995C47.5595 17.24 47.4995 17.26 47.4195 17.3C47.3395 17.3 47.1795 17.34 46.9395 17.42C43.2995 24.66 41.4795 29.26 41.4795 31.22C41.4795 31.86 41.7195 32.18 42.1995 32.18L43.8795 31.82L43.9395 31.88C43.9395 32.72 43.2795 33.14 41.9595 33.14ZM44.187 58.76C41.547 58.76 40.227 57.46 40.227 54.86C40.227 51.74 42.487 47.64 47.007 42.56C51.727 37.24 56.867 33 62.427 29.84C62.467 29.84 62.487 29.86 62.487 29.9C62.487 30.1 62.267 30.44 61.827 30.92C48.307 42.16 41.547 50.28 41.547 55.28C41.547 57.2 42.307 58.16 43.827 58.16C46.467 58.16 49.607 55.64 53.247 50.6C55.167 47.96 56.907 45.22 58.467 42.38C60.027 39.54 61.427 36.58 62.667 33.5C63.987 30.3 64.967 27.48 65.607 25.04C66.287 22.6 66.627 20.4 66.627 18.44C66.627 17.04 66.387 16.08 65.907 15.56C60.587 21.12 56.867 25.8 54.747 29.6C54.107 31.28 53.507 32.12 52.947 32.12C51.747 32.12 51.147 31.76 51.147 31.04C51.147 30.8 51.347 30.1 51.747 28.94C52.187 27.74 52.787 26.08 53.547 23.96L55.227 19.34C55.827 17.7 56.127 16.1 56.127 14.54V14.3C56.127 13.82 56.067 13.56 55.947 13.52C55.867 13.44 55.607 13.4 55.167 13.4C54.767 13.4 54.567 13.3 54.567 13.1C54.567 12.74 54.887 12.56 55.527 12.56C58.087 12.56 59.367 13.52 59.367 15.44C59.367 16.36 58.167 19.76 55.767 25.64C57.127 23.72 59.147 21.34 61.827 18.5C64.547 15.62 66.227 14.18 66.867 14.18C66.867 14.5 66.707 14.82 66.387 15.14C68.187 15.3 69.147 15.7 69.267 16.34C69.347 16.86 69.407 17.34 69.447 17.78C69.487 18.22 69.507 18.6 69.507 18.92C69.507 22.76 68.187 27.84 65.547 34.16C62.627 41.04 59.087 46.86 54.927 51.62C50.767 56.38 47.187 58.76 44.187 58.76ZM96.1808 44.96C95.4608 44.96 95.1008 44.78 95.1008 44.42C95.1008 44.26 95.3608 44.1 95.8808 43.94C96.8008 43.62 97.5008 43.34 97.9808 43.1C98.5008 42.86 98.8408 42.7 99.0008 42.62C100.601 41.22 102.221 39.12 103.861 36.32C105.501 33.56 107.141 30.12 108.781 26C103.261 31.84 97.5608 34.76 91.6808 34.76C88.4808 34.76 85.9408 33.9 84.0608 32.18C82.1808 30.42 81.2408 28.18 81.2408 25.46C81.2408 24.02 81.4208 22.6 81.7808 21.2C82.1808 19.8 82.7008 18.5 83.3408 17.3C84.7808 14.62 86.6408 12.18 88.9208 9.98C91.2408 7.78 93.9608 5.98 97.0808 4.58C98.8008 3.78 100.461 3.22 102.061 2.9C103.701 2.58 105.201 2.42 106.561 2.42C107.721 2.42 108.781 2.52 109.741 2.72C110.741 2.92 111.601 3.18 112.321 3.5L113.401 1.64C114.041 0.759999 114.841 0.32 115.801 0.32C116.721 0.32 117.181 0.52 117.181 0.92C117.181 0.999999 116.721 1.5 115.801 2.42C115.281 2.94 114.901 3.32 114.661 3.56C114.461 3.76 114.201 4.02 113.881 4.34C114.401 4.66 114.841 5.02 115.201 5.42C115.601 5.78 115.801 6 115.801 6.08C115.801 6.12 115.521 6.46 114.961 7.1C114.441 7.74 113.921 8.4 113.401 9.08C111.961 10.92 111.221 12.1 111.181 12.62L111.361 12.8C111.361 13 111.261 13.1 111.061 13.1C110.461 13.1 110.161 12.5 110.161 11.3C110.161 9.02 110.721 6.74 111.841 4.46C110.361 3.7 108.721 3.32 106.921 3.32C103.321 3.32 99.6808 4.46 96.0008 6.74C92.4008 8.94 89.4008 11.72 87.0008 15.08C85.8008 16.8 84.9208 18.44 84.3608 20C83.8008 21.56 83.5208 23.04 83.5208 24.44C83.5208 27 84.3808 29.12 86.1008 30.8C87.8608 32.48 90.2208 33.32 93.1808 33.32C97.9008 33.32 103.021 30.18 108.541 23.9C109.061 23.34 109.481 22.86 109.801 22.46C110.161 22.02 110.421 21.66 110.581 21.38L111.181 19.64C108.021 20.28 105.441 20.76 103.441 21.08C101.481 21.36 100.101 21.5 99.3008 21.5C98.8208 21.5 98.3808 21.26 97.9808 20.78C97.5808 20.3 97.3808 19.68 97.3808 18.92C97.3808 18.76 97.4608 18.68 97.6208 18.68L101.161 19.04C105.721 19.04 109.201 18.92 111.601 18.68C111.841 17.88 112.161 17.48 112.561 17.48C112.761 17.48 113.001 17.56 113.281 17.72C113.561 17.84 113.901 18.02 114.301 18.26L116.101 17.96C116.421 17.96 116.581 18.08 116.581 18.32C116.581 18.52 115.921 18.74 114.601 18.98C111.721 26.26 108.501 32.4 104.941 37.4C101.421 42.44 98.5008 44.96 96.1808 44.96ZM111.181 10.82C111.501 10.42 111.921 9.84 112.441 9.08C112.961 8.28 113.601 7.3 114.361 6.14L113.701 5.54C112.421 7.58 111.581 9.34 111.181 10.82ZM132.148 32.78C130.988 32.78 130.068 32.24 129.388 31.16C129.108 30.6 128.868 30.02 128.668 29.42C128.508 28.78 128.428 28.04 128.428 27.2C128.428 26.4 128.508 25.48 128.668 24.44C128.868 23.4 129.108 22.22 129.388 20.9C127.828 23.46 126.528 25.54 125.488 27.14C124.448 28.7 123.648 29.82 123.088 30.5C122.088 31.82 121.068 32.48 120.028 32.48C119.028 32.48 118.188 32.12 117.508 31.4C116.868 30.64 116.548 29.82 116.548 28.94C116.548 27.3 117.428 24.54 119.188 20.66C120.948 16.7 121.828 14.68 121.828 14.6L121.288 13.52C121.288 13.4 121.428 13.34 121.708 13.34C122.068 13.34 122.728 13.54 123.688 13.94C124.688 14.34 125.188 14.68 125.188 14.96C124.988 15.36 124.608 16.12 124.048 17.24C123.528 18.32 122.808 19.78 121.888 21.62C120.128 25.34 119.248 27.8 119.248 29C119.248 30.24 119.508 30.86 120.028 30.86C120.668 30.86 121.588 30.14 122.788 28.7C123.428 27.9 124.028 27.1 124.588 26.3C125.148 25.5 125.728 24.62 126.328 23.66L131.368 15.5C131.968 14.54 132.608 14.06 133.288 14.06C134.648 14.06 135.368 14.32 135.448 14.84C135.368 14.76 135.268 14.88 135.148 15.2C134.028 17.24 133.008 19.7 132.088 22.58C131.208 25.38 130.768 27.26 130.768 28.22C130.768 30.66 131.208 31.88 132.088 31.88C132.368 31.88 132.948 31.5 133.827 30.74C133.908 30.74 133.948 30.9 133.948 31.22C133.948 32.26 133.348 32.78 132.148 32.78ZM143.76 11.06C142.88 11.06 142.16 10.82 141.6 10.34C142.36 9.82 143.16 9.14 144 8.3C144.88 7.46 145.78 6.46 146.7 5.3C146.78 5.3 146.82 5.4 146.82 5.6L146.52 7.34C146.32 8.58 145.96 9.52 145.44 10.16C144.92 10.76 144.36 11.06 143.76 11.06ZM138 32.9C136.48 32.9 135.72 31.8 135.72 29.6C135.72 26.28 136.92 21.9 139.32 16.46C139.32 16.3 139.42 16 139.62 15.56C139.86 15.12 140.04 14.84 140.16 14.72C140.44 14.44 140.82 14.3 141.3 14.3C142.7 14.3 143.46 14.58 143.58 15.14C142.94 16.18 142.32 17.38 141.72 18.74C141.16 20.1 140.6 21.6 140.04 23.24C139.44 25 139 26.46 138.72 27.62C138.48 28.74 138.36 29.64 138.36 30.32C138.36 31.32 138.62 31.82 139.14 31.82C139.5 31.82 139.96 31.6 140.52 31.16C140.96 30.8 141.26 30.54 141.42 30.38C141.62 30.22 141.8 30.08 141.96 29.96C142.12 29.96 142.2 30.04 142.2 30.2C142.2 30.64 141.62 31.2 140.46 31.88C139.3 32.56 138.48 32.9 138 32.9ZM157.471 34.22C155.671 34.22 154.771 32.78 154.771 29.9C154.771 28.18 155.411 25.12 156.691 20.72C155.851 22.36 155.031 23.84 154.231 25.16C153.471 26.44 152.651 27.66 151.771 28.82C149.971 31.18 148.431 32.36 147.151 32.36C146.351 32.36 145.531 31.86 144.691 30.86C143.891 29.86 143.491 28.96 143.491 28.16C143.491 25.64 144.831 22.62 147.511 19.1C150.231 15.5 152.651 13.7 154.771 13.7C155.371 13.7 155.991 13.88 156.631 14.24C157.351 14.56 157.711 14.94 157.711 15.38C157.711 15.7 157.531 15.86 157.171 15.86L155.971 15.2C154.611 15.2 152.511 17.22 149.671 21.26C146.871 25.26 145.471 28.08 145.471 29.72C145.471 30.32 145.611 30.62 145.891 30.62C146.291 30.62 147.011 30.18 148.051 29.3C149.091 28.42 150.491 26.96 152.251 24.92C154.051 22.84 155.871 20.48 157.711 17.84C158.191 16.76 158.711 15.52 159.271 14.12C159.871 12.68 160.591 10.96 161.431 8.96C161.471 8.88 161.611 8.52 161.851 7.88C162.131 7.24 162.431 6.52 162.751 5.72C163.111 4.92 163.411 4.22 163.651 3.62C163.891 3.02 164.011 2.7 164.011 2.66C164.011 2.02 163.611 1.7 162.811 1.7L160.771 2.12C160.491 2.12 160.351 2 160.351 1.76C160.351 1.12 161.251 0.799998 163.051 0.799998C165.811 0.799998 167.191 1.74 167.191 3.62C167.191 4.22 165.951 7.06 163.471 12.14C162.151 14.74 161.191 16.68 160.591 17.96C160.031 19.2 159.731 19.86 159.691 19.94C157.571 24.62 156.511 28.34 156.511 31.1C156.511 32.74 156.911 33.56 157.711 33.56L159.511 32.9L159.691 32.96C159.691 33.24 159.391 33.52 158.791 33.8C158.231 34.08 157.791 34.22 157.471 34.22ZM166.632 32.66C163.232 32.66 161.532 31.08 161.532 27.92C161.532 25.48 162.732 22.52 165.132 19.04C167.612 15.56 169.972 13.82 172.212 13.82C173.172 13.82 174.012 14.14 174.732 14.78C175.492 15.38 175.872 16.12 175.872 17C175.872 18.48 174.932 19.98 173.052 21.5C171.212 22.98 169.392 23.72 167.592 23.72C167.232 23.72 167.052 23.64 167.052 23.48L167.232 23.18C171.832 21.74 174.132 19.38 174.132 16.1C174.132 15.62 173.972 15.38 173.652 15.38C173.212 15.38 172.412 15.84 171.252 16.76C170.252 17.56 169.312 18.48 168.432 19.52C167.592 20.56 166.832 21.64 166.152 22.76C164.712 25.2 163.992 27.24 163.992 28.88C163.992 30.48 164.612 31.28 165.852 31.28C167.292 31.28 168.872 30.54 170.592 29.06C171.152 28.54 171.752 27.96 172.392 27.32C173.032 26.64 173.732 25.9 174.492 25.1C175.972 23.5 176.752 22.7 176.832 22.7C177.072 22.7 177.192 22.8 177.192 23C177.192 23.16 177.152 23.32 177.072 23.48C172.872 29.6 169.392 32.66 166.632 32.66Z" fill="white"/>
          </svg>
        </div>

        <div className='activity-details-main-container'>
          <div className='activity-details-image-section'>
              <img src={ require("../assets/images/activityPhoto.png") } alt='activity-details-image' />
              <div className='activity-details-title-location-section'>
                <div className='activity-details-title-location-section-title'>
                  <div>
                        MARMARA BALIK
                  </div>
                  <div>
                    Karaköy/İstanbul
                  </div>
                </div>
                <div className='activity-details-title-location-section-like'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#F8F8F8"/>
                    <path d="M27.6602 11.99C25.0202 10.19 21.7602 11.03 20.0002 13.09C18.2402 11.03 14.9802 10.18 12.3402 11.99C10.9402 12.95 10.0602 14.57 10.0002 16.28C9.86021 20.16 13.3002 23.27 18.5502 28.04L18.6502 28.13C19.4102 28.82 20.5802 28.82 21.3402 28.12L21.4502 28.02C26.7002 23.26 30.1302 20.15 30.0002 16.27C29.9402 14.57 29.0602 12.95 27.6602 11.99ZM20.1002 26.55L20.0002 26.65L19.9002 26.55C15.1402 22.24 12.0002 19.39 12.0002 16.5C12.0002 14.5 13.5002 13 15.5002 13C17.0402 13 18.5402 13.99 19.0702 15.36H20.9402C21.4602 13.99 22.9602 13 24.5002 13C26.5002 13 28.0002 14.5 28.0002 16.5C28.0002 19.39 24.8602 22.24 20.1002 26.55Z" fill="#757575"/>
                    </svg>

                </div>

              </div>
          </div>
          <div className='activity-details-slide-navigator'>
              <div className='activity-details-page-navigation-items' onClick={()=>{
                setDetailType("tarihce");
              }}>
                Tarihçesi
              </div>
              <div className='activity-details-page-navigation-items' onClick={()=>{
                setDetailType("menu");
              }}>
                Menü
              </div>
              <div className='activity-details-page-navigation-items' onClick={()=>{
                setDetailType("calisma");
              }}>
                Çalışma saatleri
              </div>
              <div className='activity-details-page-navigation-items' onClick={()=>{
                setDetailType("adres");
              }}>
                Adres Tarifi
              </div>
          </div>
         {detailType == "tarihce" && (
           <div className='activity-details-page-navigation-body' style={customCss[detailType]} >
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
           </div>
         )}
         {detailType == "menu" && (
           <div className='activity-details-page-navigation-body' style={customCss[detailType]} >
              <div className='activity-details-page-menu-item'>
                <div className='activity-details-page-menu-item-title'>
                  Ara Yemekler
                </div>
                <div className='activity-page-details-menu-item-content-container'>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  
                </div>
                
                
              </div>
              <div className='activity-details-page-menu-item'>
                <div className='activity-details-page-menu-item-title'>
                  Ara Yemekler
                </div>
                <div className='activity-page-details-menu-item-content-container'>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  
                </div>
                
                
              </div>
              <div className='activity-details-page-menu-item'>
                <div className='activity-details-page-menu-item-title'>
                  Ara Yemekler
                </div>
                <div className='activity-page-details-menu-item-content-container'>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  <div className='activity-page-details-menu-item-content'>
                      <img src={ require("../assets/images/food.png")}  alt="image" />
                      <span>Sulu Yemek</span>
                  </div>
                  
                </div>
                
                
              </div>
             
           </div>
         )}
          {detailType == "calisma" && (
            <div className='activity-details-page-navigation-body' style={customCss[detailType]} >
              <div className='activity-details-page-week-days'>
                <div className='activity-details-page-week-days-header'>
                  <div className='activity-details-page-week-days-header-items'>
                      Hafta İçi
                  </div>
                  <div className='activity-details-page-week-days-header-items'>
                      Sabah
                  </div>
                  <div className='activity-details-page-week-days-header-items'>
                      Akşam
                  </div>
                  
                </div>
                <div className='activity-details-page-week-days-body'>
                  <div className='activity-details-page-week-days-days'>
                    
                      <div>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#EEEEEE"/>
                        </svg>
                        <span>
                        Pazartesi:
                        </span>
                      </div>
                      <div>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#EEEEEE"/>
                        </svg>
                        <span>
                        Salı:
                        </span>
                      </div>
                      <div>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#EEEEEE"/>
                        </svg>
                        <span>
                        Çarşamba:
                        </span>
                      </div>
                      <div>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#EEEEEE"/>
                        </svg>
                        <span>
                        Perşembe:
                        </span>
                      </div>
                      <div>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#EEEEEE"/>
                        </svg>
                        <span>
                        Cuma:
                        </span>
                      </div>
                  </div>
                  <div className='activity-details-page-week-days-morning'>
                      <div>
                          08:00
                      </div>
                      <div>
                          08:00
                      </div>
                      <div>
                          08:00
                      </div>
                      <div>
                          08:00
                      </div>
                      <div>
                          08:00
                      </div>
                  </div>
                  <div className='activity-details-page-week-days-evening'>
                      <div>
                        22:00
                      </div>
                      <div>
                        22:00
                      </div>
                      <div>
                        22:00
                      </div>
                      <div>
                        22:00
                      </div>
                      <div>
                        22:00
                      </div>
                      
                  </div>
                  
                </div>

              </div>
              <div className='activity-details-page-week-end-days'>
                <div className='activity-details-page-week-days-header'>
                  <div className='activity-details-page-week-days-header-items'>
                      Hafta Sonu
                  </div>
                  <div className='activity-details-page-week-days-header-items'>
                      Sabah
                  </div>
                  <div className='activity-details-page-week-days-header-items'>
                      Akşam
                  </div>
                  
                </div>
                <div className='activity-details-page-week-end-days-body'>
                  <div className='activity-details-page-week-days-days'>
                    
                     
                      <div>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#EEEEEE"/>
                        </svg>
                        <span>
                        Cumartesi:
                        </span>
                      </div>
                      <div>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#EEEEEE"/>
                        </svg>
                        <span>
                        Pazar:
                        </span>
                      </div>
                  </div>
                  <div className='activity-details-page-week-days-morning'>
                      <div>
                          08:00
                      </div>
                      <div>
                          08:00
                      </div>
                  </div>
                  <div className='activity-details-page-week-days-evening'>
                      <div>
                        22:00
                      </div>
                      <div>
                        22:00
                      </div>
                  </div>
                  
                </div>

              </div>
            </div>
          )}
          {detailType == "adres" && (
            <div className='activity-details-page-navigation-body' style={customCss[detailType]} >
                <div className='activity-details-page-address'>
                  <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.75 10.5C18.75 15.47 10 24.25 10 24.25C10 24.25 1.25 15.47 1.25 10.5C1.25 5.53 5.1675 1.75 10 1.75C14.8325 1.75 18.75 5.53 18.75 10.5Z" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 14.25C12.0711 14.25 13.75 12.5711 13.75 10.5C13.75 8.42893 12.0711 6.75 10 6.75C7.92893 6.75 6.25 8.42893 6.25 10.5C6.25 12.5711 7.92893 14.25 10 14.25Z" stroke="black" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                  <div>
                    Bostanci Mahallesi no:34 Arnavutköy caddesi 3545, İstanbul
                  </div>
                </div>

                <div className='activity-details-page-maps'>

                {isLoaded && (

                    <GoogleMap 
                    id="shapes-example"
                    mapContainerStyle={{"width" : "100%", "height" : "100vh"}}
                    zoom={15}
                    center={{lat: 41.011674460557494, lng: 28.983357368700265}}
                    options={defaultMapOptions}
                    />

                )}
                
                
                </div>

            </div>
          )}
        </div>
        <Navigation />
    </div>
  )
}
