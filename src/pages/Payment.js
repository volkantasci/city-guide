import React from 'react'
import Navigation from '../components/Navigation'
import CreditCard from '../components/Payment/CreditCard'
import "../styles/Payment.css"
import { MainContext,useContext } from '../Context'
import {useNavigate} from 'react-router-dom'

//rgb(244, 16, 100);

export default function Payment() {
    const navigate = useNavigate();
    const {paymentMethod,setPaymentMethod} = useContext(MainContext); 


    const paymentWayCashClick = () => {
        if(paymentMethod === null || paymentMethod === "credit"){
            setPaymentMethod("cash");
        }
    }
    const paymentWayCreditClick = () => {
        if(paymentMethod === null || paymentMethod === "cash"){
            setPaymentMethod("credit");
        }
    }


  return (
    <div className='paymentPage-container'>
        <div className='paymentPage-header'>
            <div className='payment-back-button-div' onClick={()=>{
                navigate("/");
            }}>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1667 7.83331H4.33008L8.56508 2.74664C8.76311 2.50839 8.85838 2.20123 8.82994 1.89273C8.8015 1.58423 8.65167 1.29967 8.41341 1.10164C8.17516 0.903614 7.868 0.808342 7.5595 0.836785C7.25101 0.865228 6.96644 1.01506 6.76841 1.25331L0.935081 8.25331C0.895836 8.30899 0.860741 8.36748 0.830081 8.42831C0.830081 8.48664 0.830082 8.52164 0.748415 8.57998C0.695534 8.71375 0.667846 8.85614 0.666748 8.99998C0.667846 9.14381 0.695534 9.28621 0.748415 9.41998C0.748415 9.47831 0.748415 9.51331 0.830081 9.57164C0.860741 9.63247 0.895836 9.69096 0.935081 9.74664L6.76841 16.7466C6.87811 16.8783 7.01547 16.9842 7.17074 17.0568C7.326 17.1294 7.49535 17.1669 7.66675 17.1666C7.93934 17.1672 8.20352 17.0722 8.41341 16.8983C8.53155 16.8004 8.6292 16.6801 8.70078 16.5443C8.77236 16.4086 8.81645 16.2601 8.83054 16.1073C8.84463 15.9545 8.82843 15.8004 8.78288 15.6538C8.73733 15.5073 8.66332 15.3712 8.56508 15.2533L4.33008 10.1666H18.1667C18.4762 10.1666 18.7729 10.0437 18.9917 9.82493C19.2105 9.60614 19.3334 9.3094 19.3334 8.99998C19.3334 8.69056 19.2105 8.39381 18.9917 8.17502C18.7729 7.95623 18.4762 7.83331 18.1667 7.83331Z" fill="white"/>
                </svg>
            </div>
            <div className='paymentPage-header-text'>
                Payment Method
            </div>
        </div>
        <div className='paymentPage-iyzico'>
            <img src={ require("../assets/images/iyzico.png") }  alt="iyzico" />
        </div>
        <div className='paymentPage-total-price'>
            Total Price
        </div>
        <div className='paymentPage-price'>
            <svg style={{"marginRight" : "20px","display" : paymentMethod === "credit" ? "none" : "none"}} width="66" height="41" viewBox="0 0 66 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.056 18.9V20.316H7.72V18.9H17.056ZM20.4773 14.892C20.4773 13.868 20.7893 13.044 21.4133 12.42C22.0533 11.78 22.8613 11.46 23.8373 11.46C24.8293 11.46 25.6373 11.78 26.2613 12.42C26.9013 13.044 27.2213 13.868 27.2213 14.892C27.2213 15.932 26.9013 16.772 26.2613 17.412C25.6373 18.036 24.8293 18.348 23.8373 18.348C22.8613 18.348 22.0533 18.036 21.4133 17.412C20.7893 16.772 20.4773 15.932 20.4773 14.892ZM33.9173 11.7L24.0773 28.5H22.3733L32.2373 11.7H33.9173ZM23.8373 12.54C23.2293 12.54 22.7413 12.748 22.3733 13.164C22.0213 13.564 21.8453 14.14 21.8453 14.892C21.8453 15.644 22.0213 16.228 22.3733 16.644C22.7413 17.06 23.2293 17.268 23.8373 17.268C24.4453 17.268 24.9333 17.06 25.3013 16.644C25.6693 16.228 25.8533 15.644 25.8533 14.892C25.8533 14.156 25.6693 13.58 25.3013 13.164C24.9333 12.748 24.4453 12.54 23.8373 12.54ZM29.1173 25.308C29.1173 24.268 29.4293 23.436 30.0533 22.812C30.6933 22.172 31.5013 21.852 32.4773 21.852C33.4533 21.852 34.2533 22.172 34.8773 22.812C35.5173 23.436 35.8373 24.268 35.8373 25.308C35.8373 26.348 35.5173 27.188 34.8773 27.828C34.2533 28.452 33.4533 28.764 32.4773 28.764C31.5013 28.764 30.6933 28.452 30.0533 27.828C29.4293 27.188 29.1173 26.348 29.1173 25.308ZM32.4773 22.956C31.8693 22.956 31.3813 23.164 31.0133 23.58C30.6453 23.996 30.4613 24.572 30.4613 25.308C30.4613 26.044 30.6453 26.62 31.0133 27.036C31.3813 27.452 31.8693 27.66 32.4773 27.66C33.0853 27.66 33.5653 27.46 33.9173 27.06C34.2853 26.644 34.4693 26.06 34.4693 25.308C34.4693 24.556 34.2853 23.98 33.9173 23.58C33.5653 23.164 33.0853 22.956 32.4773 22.956ZM37.6034 12.804V11.292H41.6834V28.5H39.9794V12.804H37.6034ZM45.4272 19.74C45.4272 16.988 45.8512 14.852 46.6992 13.332C47.5472 11.812 49.0672 11.052 51.2592 11.052C53.4512 11.052 54.9712 11.812 55.8192 13.332C56.6672 14.852 57.0912 16.988 57.0912 19.74C57.0912 22.54 56.6672 24.708 55.8192 26.244C54.9712 27.78 53.4512 28.548 51.2592 28.548C49.0512 28.548 47.5232 27.78 46.6752 26.244C45.8432 24.708 45.4272 22.54 45.4272 19.74ZM55.4352 19.74C55.4352 18.252 55.3312 16.996 55.1232 15.972C54.9152 14.948 54.5072 14.124 53.8992 13.5C53.2912 12.876 52.4112 12.564 51.2592 12.564C50.1072 12.564 49.2272 12.876 48.6192 13.5C48.0112 14.124 47.6032 14.948 47.3952 15.972C47.1872 16.996 47.0832 18.252 47.0832 19.74C47.0832 21.276 47.1872 22.564 47.3952 23.604C47.6032 24.628 48.0112 25.452 48.6192 26.076C49.2272 26.7 50.1072 27.012 51.2592 27.012C52.4112 27.012 53.2912 26.7 53.8992 26.076C54.5072 25.452 54.9152 24.628 55.1232 23.604C55.3312 22.564 55.4352 21.276 55.4352 19.74Z" fill="#B3124C"/>
                <rect x="0.5" y="1" width="65" height="39" rx="14.5" stroke="#B3124C"/>
            </svg>

            {paymentMethod === "credit" ? (
                <div >
                 ₺ 70.00
                </div>
            ) : (
                <div >
               
                ₺ 70.00
                </div>
            )}
            
        </div>
        <div  style={{"display" : paymentMethod === "credit" ? "none" : "none"}}  className='paymentPage-payment-method payment-previous-price-container'>
            <div className='payment-previous-text'>
                Önceki Tutar:
            </div>
            <div className='payment-previous-price'>
                <del>
                ₺ 70.00
                </del>
                
            </div>
        </div>
       
        <div className='paymentPage-payment-method'>
            Payment Method
        </div>
        <div className='paymentPage-payment-ways'>
            <div className='paymentPage-way' onClick={paymentWayCashClick} style={{"backgroundColor": paymentMethod == "cash" ? "rgb(244, 16, 100)" : null }}>
                <div>
                    Cash
                </div>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.35303 11.9999L10.0589 15.7058L17.4707 7.76465" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="12" r="11.5" stroke="white"/>
                    </svg>
                </div>
            </div>
            <div className='paymentPage-way' onClick={paymentWayCreditClick} style={{"backgroundColor": paymentMethod == "credit" ? "rgb(244, 16, 100)" : null }}>
                <div>
                    Credit
                </div>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.35303 11.9999L10.0589 15.7058L17.4707 7.76465" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="12" r="11.5" stroke="white"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className='discount-alert-container'>
           <div className='payment-discount-icon'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#F8F8F8"/>
                    <g clip-path="url(#clip0_616_882)">
                    <path d="M24.5 16.25C24.5 16.0511 24.579 15.8603 24.7197 15.7197C24.8603 15.579 25.0511 15.5 25.25 15.5H28.25C28.4489 15.5 28.6397 15.579 28.7803 15.7197C28.921 15.8603 29 16.0511 29 16.25V17.75C29 17.9489 28.921 18.1397 28.7803 18.2803C28.6397 18.421 28.4489 18.5 28.25 18.5H25.25C25.0511 18.5 24.8603 18.421 24.7197 18.2803C24.579 18.1397 24.5 17.9489 24.5 17.75V16.25Z" fill="#CC6087"/>
                    <path d="M11 11C10.2044 11 9.44129 11.3161 8.87868 11.8787C8.31607 12.4413 8 13.2044 8 14V26C8 26.7956 8.31607 27.5587 8.87868 28.1213C9.44129 28.6839 10.2044 29 11 29H29C29.7956 29 30.5587 28.6839 31.1213 28.1213C31.6839 27.5587 32 26.7956 32 26V14C32 13.2044 31.6839 12.4413 31.1213 11.8787C30.5587 11.3161 29.7956 11 29 11H11ZM30.5 14V21.5H9.5V14C9.5 13.6022 9.65804 13.2206 9.93934 12.9393C10.2206 12.658 10.6022 12.5 11 12.5H29C29.3978 12.5 29.7794 12.658 30.0607 12.9393C30.342 13.2206 30.5 13.6022 30.5 14ZM29 27.5H11C10.6022 27.5 10.2206 27.342 9.93934 27.0607C9.65804 26.7794 9.5 26.3978 9.5 26V24.5H30.5V26C30.5 26.3978 30.342 26.7794 30.0607 27.0607C29.7794 27.342 29.3978 27.5 29 27.5Z" fill="#CC6087"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_616_882">
                    <rect width="24" height="24" fill="white" transform="translate(8 8)"/>
                    </clipPath>
                    </defs>
                </svg>
           </div>
            <div className='discount-alert-text'>
                Kredi kartı ile ödeme yaparak %10 a varan indirimlerden faydalanabilirsiniz.
            </div>
        </div>

        <div className='payment-continue-button' style={{"backgroundColor": paymentMethod !== null ? "rgb(244, 16, 100)" : null }} onClick={()=>{
            if(paymentMethod === "cash" ){
                // navigate("/payment/cash");
            }else if(paymentMethod === "credit"){
                navigate("/select-card");
            }
        }}>
            Continue
        </div>      

        <Navigation />
    </div>
  )
}
