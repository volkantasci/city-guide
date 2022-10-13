import React,{useState,useEffect} from 'react'
import "../styles/SelectCardToPayment.css";
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import CreditCard from '../components/Payment/CreditCard';
import FillCard from '../components/Payment/FillCard';
import { MainContext,useContext } from '../Context';

export default function SelectCardToPayment() {
    const navigate = useNavigate();
    const [creditCardColor, setCreditCardColor] = useState(true);
    const {addCardComponentActive, setAddCardComponentActive} =  useContext(MainContext);
    const {editDeleteData, setEditDeleteData} = useContext(MainContext);
    
    const visibleAddCardComponent = () => {
        setAddCardComponentActive(!addCardComponentActive);
        setEditDeleteData(true);
    }
  return (
    <div className='payment-container'>
        <div className='payment-background'>
        </div>
        <div className='payment-title'>
            Payment Method
        </div>
        <div className='payment-back-button' onClick={() => {
            navigate(-1);
        }}>
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1667 7.83331H4.33008L8.56508 2.74664C8.76311 2.50839 8.85838 2.20123 8.82994 1.89273C8.8015 1.58423 8.65167 1.29967 8.41341 1.10164C8.17516 0.903614 7.868 0.808342 7.5595 0.836785C7.25101 0.865228 6.96644 1.01506 6.76841 1.25331L0.935081 8.25331C0.895836 8.30899 0.860741 8.36748 0.830081 8.42831C0.830081 8.48664 0.830082 8.52164 0.748415 8.57998C0.695534 8.71375 0.667846 8.85614 0.666748 8.99998C0.667846 9.14381 0.695534 9.28621 0.748415 9.41998C0.748415 9.47831 0.748415 9.51331 0.830081 9.57164C0.860741 9.63247 0.895836 9.69096 0.935081 9.74664L6.76841 16.7466C6.87811 16.8783 7.01547 16.9842 7.17074 17.0568C7.326 17.1294 7.49535 17.1669 7.66675 17.1666C7.93934 17.1672 8.20352 17.0722 8.41341 16.8983C8.53155 16.8004 8.6292 16.6801 8.70078 16.5443C8.77236 16.4086 8.81645 16.2601 8.83054 16.1073C8.84463 15.9545 8.82843 15.8004 8.78288 15.6538C8.73733 15.5073 8.66332 15.3712 8.56508 15.2533L4.33008 10.1666H18.1667C18.4762 10.1666 18.7729 10.0437 18.9917 9.82493C19.2105 9.60614 19.3334 9.3094 19.3334 8.99998C19.3334 8.69056 19.2105 8.39381 18.9917 8.17502C18.7729 7.95623 18.4762 7.83331 18.1667 7.83331Z" fill="white"/>
            </svg>
        </div>
        
        
        <div className='payment-cards-container select-card-payment-container'>
        <div className='select-card-total-price'>
            Total Price: $ 70.00
        </div>
            <div className='show-ccs payment-cards'>
                <div className='show-ccs-header'>
                    <div className='credit-card-left'>
                        <svg width="195" height="21" viewBox="0 0 195 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 6.75C16.5 6.55109 16.579 6.36032 16.7197 6.21967C16.8603 6.07902 17.0511 6 17.25 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75V8.25C21 8.44891 20.921 8.63968 20.7803 8.78033C20.6397 8.92098 20.4489 9 20.25 9H17.25C17.0511 9 16.8603 8.92098 16.7197 8.78033C16.579 8.63968 16.5 8.44891 16.5 8.25V6.75Z" fill="black"/>
                            <path d="M3 1.5C2.20435 1.5 1.44129 1.81607 0.87868 2.37868C0.316071 2.94129 0 3.70435 0 4.5L0 16.5C0 17.2956 0.316071 18.0587 0.87868 18.6213C1.44129 19.1839 2.20435 19.5 3 19.5H21C21.7956 19.5 22.5587 19.1839 23.1213 18.6213C23.6839 18.0587 24 17.2956 24 16.5V4.5C24 3.70435 23.6839 2.94129 23.1213 2.37868C22.5587 1.81607 21.7956 1.5 21 1.5H3ZM22.5 4.5V12H1.5V4.5C1.5 4.10218 1.65804 3.72064 1.93934 3.43934C2.22064 3.15804 2.60218 3 3 3H21C21.3978 3 21.7794 3.15804 22.0607 3.43934C22.342 3.72064 22.5 4.10218 22.5 4.5ZM21 18H3C2.60218 18 2.22064 17.842 1.93934 17.5607C1.65804 17.2794 1.5 16.8978 1.5 16.5V15H22.5V16.5C22.5 16.8978 22.342 17.2794 22.0607 17.5607C21.7794 17.842 21.3978 18 21 18Z" fill="black"/>
                            <path d="M34.666 10.718C34.666 9.494 34.948 8.396 35.512 7.424C36.088 6.452 36.862 5.696 37.834 5.156C38.818 4.604 39.892 4.328 41.056 4.328C42.388 4.328 43.57 4.658 44.602 5.318C45.646 5.966 46.402 6.89 46.87 8.09H44.404C44.08 7.43 43.63 6.938 43.054 6.614C42.478 6.29 41.812 6.128 41.056 6.128C40.228 6.128 39.49 6.314 38.842 6.686C38.194 7.058 37.684 7.592 37.312 8.288C36.952 8.984 36.772 9.794 36.772 10.718C36.772 11.642 36.952 12.452 37.312 13.148C37.684 13.844 38.194 14.384 38.842 14.768C39.49 15.14 40.228 15.326 41.056 15.326C41.812 15.326 42.478 15.164 43.054 14.84C43.63 14.516 44.08 14.024 44.404 13.364H46.87C46.402 14.564 45.646 15.488 44.602 16.136C43.57 16.784 42.388 17.108 41.056 17.108C39.88 17.108 38.806 16.838 37.834 16.298C36.862 15.746 36.088 14.984 35.512 14.012C34.948 13.04 34.666 11.942 34.666 10.718ZM51.3239 8.522C51.6239 8.018 52.0199 7.628 52.5119 7.352C53.0159 7.064 53.6099 6.92 54.2939 6.92V9.044H53.7719C52.9679 9.044 52.3559 9.248 51.9359 9.656C51.5279 10.064 51.3239 10.772 51.3239 11.78V17H49.2719V7.082H51.3239V8.522ZM65.2701 11.798C65.2701 12.17 65.2461 12.506 65.1981 12.806H57.6201C57.6801 13.598 57.9741 14.234 58.5021 14.714C59.0301 15.194 59.6781 15.434 60.4461 15.434C61.5501 15.434 62.3301 14.972 62.7861 14.048H65.0001C64.7001 14.96 64.1541 15.71 63.3621 16.298C62.5821 16.874 61.6101 17.162 60.4461 17.162C59.4981 17.162 58.6461 16.952 57.8901 16.532C57.1461 16.1 56.5581 15.5 56.1261 14.732C55.7061 13.952 55.4961 13.052 55.4961 12.032C55.4961 11.012 55.7001 10.118 56.1081 9.35C56.5281 8.57 57.1101 7.97 57.8541 7.55C58.6101 7.13 59.4741 6.92 60.4461 6.92C61.3821 6.92 62.2161 7.124 62.9481 7.532C63.6801 7.94 64.2501 8.516 64.6581 9.26C65.0661 9.992 65.2701 10.838 65.2701 11.798ZM63.1281 11.15C63.1161 10.394 62.8461 9.788 62.3181 9.332C61.7901 8.876 61.1361 8.648 60.3561 8.648C59.6481 8.648 59.0421 8.876 58.5381 9.332C58.0341 9.776 57.7341 10.382 57.6381 11.15H63.1281ZM66.6055 11.996C66.6055 11 66.8095 10.118 67.2175 9.35C67.6375 8.582 68.2015 7.988 68.9095 7.568C69.6295 7.136 70.4275 6.92 71.3035 6.92C71.9515 6.92 72.5875 7.064 73.2115 7.352C73.8475 7.628 74.3515 8 74.7235 8.468V3.68H76.7935V17H74.7235V15.506C74.3875 15.986 73.9195 16.382 73.3195 16.694C72.7315 17.006 72.0535 17.162 71.2855 17.162C70.4215 17.162 69.6295 16.946 68.9095 16.514C68.2015 16.07 67.6375 15.458 67.2175 14.678C66.8095 13.886 66.6055 12.992 66.6055 11.996ZM74.7235 12.032C74.7235 11.348 74.5795 10.754 74.2915 10.25C74.0155 9.746 73.6495 9.362 73.1935 9.098C72.7375 8.834 72.2455 8.702 71.7175 8.702C71.1895 8.702 70.6975 8.834 70.2415 9.098C69.7855 9.35 69.4135 9.728 69.1255 10.232C68.8495 10.724 68.7115 11.312 68.7115 11.996C68.7115 12.68 68.8495 13.28 69.1255 13.796C69.4135 14.312 69.7855 14.708 70.2415 14.984C70.7095 15.248 71.2015 15.38 71.7175 15.38C72.2455 15.38 72.7375 15.248 73.1935 14.984C73.6495 14.72 74.0155 14.336 74.2915 13.832C74.5795 13.316 74.7235 12.716 74.7235 12.032ZM80.5327 5.768C80.1607 5.768 79.8487 5.642 79.5967 5.39C79.3447 5.138 79.2187 4.826 79.2187 4.454C79.2187 4.082 79.3447 3.77 79.5967 3.518C79.8487 3.266 80.1607 3.14 80.5327 3.14C80.8927 3.14 81.1987 3.266 81.4507 3.518C81.7027 3.77 81.8287 4.082 81.8287 4.454C81.8287 4.826 81.7027 5.138 81.4507 5.39C81.1987 5.642 80.8927 5.768 80.5327 5.768ZM81.5407 7.082V17H79.4887V7.082H81.5407ZM86.6288 8.756V14.246C86.6288 14.618 86.7128 14.888 86.8808 15.056C87.0608 15.212 87.3608 15.29 87.7808 15.29H89.0408V17H87.4208C86.4968 17 85.7888 16.784 85.2968 16.352C84.8048 15.92 84.5588 15.218 84.5588 14.246V8.756H83.3888V7.082H84.5588V4.616H86.6288V7.082H89.0408V8.756H86.6288ZM97.592 0.00799882L92.696 20.15H90.68L95.558 0.00799882H97.592ZM104.264 4.49C105.596 4.49 106.76 4.748 107.756 5.264C108.764 5.768 109.538 6.5 110.078 7.46C110.63 8.408 110.906 9.518 110.906 10.79C110.906 12.062 110.63 13.166 110.078 14.102C109.538 15.038 108.764 15.758 107.756 16.262C106.76 16.754 105.596 17 104.264 17H100.178V4.49H104.264ZM104.264 15.326C105.728 15.326 106.85 14.93 107.63 14.138C108.41 13.346 108.8 12.23 108.8 10.79C108.8 9.338 108.41 8.204 107.63 7.388C106.85 6.572 105.728 6.164 104.264 6.164H102.23V15.326H104.264ZM122.03 11.798C122.03 12.17 122.006 12.506 121.958 12.806H114.38C114.44 13.598 114.734 14.234 115.262 14.714C115.79 15.194 116.438 15.434 117.206 15.434C118.31 15.434 119.09 14.972 119.546 14.048H121.76C121.46 14.96 120.914 15.71 120.122 16.298C119.342 16.874 118.37 17.162 117.206 17.162C116.258 17.162 115.406 16.952 114.65 16.532C113.906 16.1 113.318 15.5 112.886 14.732C112.466 13.952 112.256 13.052 112.256 12.032C112.256 11.012 112.46 10.118 112.868 9.35C113.288 8.57 113.87 7.97 114.614 7.55C115.37 7.13 116.234 6.92 117.206 6.92C118.142 6.92 118.976 7.124 119.708 7.532C120.44 7.94 121.01 8.516 121.418 9.26C121.826 9.992 122.03 10.838 122.03 11.798ZM119.888 11.15C119.876 10.394 119.606 9.788 119.078 9.332C118.55 8.876 117.896 8.648 117.116 8.648C116.408 8.648 115.802 8.876 115.298 9.332C114.794 9.776 114.494 10.382 114.398 11.15H119.888ZM126.101 8.558C126.449 8.078 126.923 7.688 127.523 7.388C128.135 7.076 128.813 6.92 129.557 6.92C130.433 6.92 131.225 7.13 131.933 7.55C132.641 7.97 133.199 8.57 133.607 9.35C134.015 10.118 134.219 11 134.219 11.996C134.219 12.992 134.015 13.886 133.607 14.678C133.199 15.458 132.635 16.07 131.915 16.514C131.207 16.946 130.421 17.162 129.557 17.162C128.789 17.162 128.105 17.012 127.505 16.712C126.917 16.412 126.449 16.028 126.101 15.56V17H124.049V3.68H126.101V8.558ZM132.131 11.996C132.131 11.312 131.987 10.724 131.699 10.232C131.423 9.728 131.051 9.35 130.583 9.098C130.127 8.834 129.635 8.702 129.107 8.702C128.591 8.702 128.099 8.834 127.631 9.098C127.175 9.362 126.803 9.746 126.515 10.25C126.239 10.754 126.101 11.348 126.101 12.032C126.101 12.716 126.239 13.316 126.515 13.832C126.803 14.336 127.175 14.72 127.631 14.984C128.099 15.248 128.591 15.38 129.107 15.38C129.635 15.38 130.127 15.248 130.583 14.984C131.051 14.708 131.423 14.312 131.699 13.796C131.987 13.28 132.131 12.68 132.131 11.996ZM137.292 5.768C136.92 5.768 136.608 5.642 136.356 5.39C136.104 5.138 135.978 4.826 135.978 4.454C135.978 4.082 136.104 3.77 136.356 3.518C136.608 3.266 136.92 3.14 137.292 3.14C137.652 3.14 137.958 3.266 138.21 3.518C138.462 3.77 138.588 4.082 138.588 4.454C138.588 4.826 138.462 5.138 138.21 5.39C137.958 5.642 137.652 5.768 137.292 5.768ZM138.3 7.082V17H136.248V7.082H138.3ZM143.389 8.756V14.246C143.389 14.618 143.473 14.888 143.641 15.056C143.821 15.212 144.121 15.29 144.541 15.29H145.801V17H144.181C143.257 17 142.549 16.784 142.057 16.352C141.565 15.92 141.319 15.218 141.319 14.246V8.756H140.149V7.082H141.319V4.616H143.389V7.082H145.801V8.756H143.389ZM151.684 10.718C151.684 9.494 151.966 8.396 152.53 7.424C153.106 6.452 153.88 5.696 154.852 5.156C155.836 4.604 156.91 4.328 158.074 4.328C159.406 4.328 160.588 4.658 161.62 5.318C162.664 5.966 163.42 6.89 163.888 8.09H161.422C161.098 7.43 160.648 6.938 160.072 6.614C159.496 6.29 158.83 6.128 158.074 6.128C157.246 6.128 156.508 6.314 155.86 6.686C155.212 7.058 154.702 7.592 154.33 8.288C153.97 8.984 153.79 9.794 153.79 10.718C153.79 11.642 153.97 12.452 154.33 13.148C154.702 13.844 155.212 14.384 155.86 14.768C156.508 15.14 157.246 15.326 158.074 15.326C158.83 15.326 159.496 15.164 160.072 14.84C160.648 14.516 161.098 14.024 161.422 13.364H163.888C163.42 14.564 162.664 15.488 161.62 16.136C160.588 16.784 159.406 17.108 158.074 17.108C156.898 17.108 155.824 16.838 154.852 16.298C153.88 15.746 153.106 14.984 152.53 14.012C151.966 13.04 151.684 11.942 151.684 10.718ZM165.605 11.996C165.605 11 165.809 10.118 166.217 9.35C166.637 8.582 167.201 7.988 167.909 7.568C168.629 7.136 169.421 6.92 170.285 6.92C171.065 6.92 171.743 7.076 172.319 7.388C172.907 7.688 173.375 8.066 173.723 8.522V7.082H175.793V17H173.723V15.524C173.375 15.992 172.901 16.382 172.301 16.694C171.701 17.006 171.017 17.162 170.249 17.162C169.397 17.162 168.617 16.946 167.909 16.514C167.201 16.07 166.637 15.458 166.217 14.678C165.809 13.886 165.605 12.992 165.605 11.996ZM173.723 12.032C173.723 11.348 173.579 10.754 173.291 10.25C173.015 9.746 172.649 9.362 172.193 9.098C171.737 8.834 171.245 8.702 170.717 8.702C170.189 8.702 169.697 8.834 169.241 9.098C168.785 9.35 168.413 9.728 168.125 10.232C167.849 10.724 167.711 11.312 167.711 11.996C167.711 12.68 167.849 13.28 168.125 13.796C168.413 14.312 168.785 14.708 169.241 14.984C169.709 15.248 170.201 15.38 170.717 15.38C171.245 15.38 171.737 15.248 172.193 14.984C172.649 14.72 173.015 14.336 173.291 13.832C173.579 13.316 173.723 12.716 173.723 12.032ZM180.541 8.522C180.841 8.018 181.237 7.628 181.729 7.352C182.233 7.064 182.827 6.92 183.511 6.92V9.044H182.989C182.185 9.044 181.573 9.248 181.153 9.656C180.745 10.064 180.541 10.772 180.541 11.78V17H178.489V7.082H180.541V8.522ZM184.713 11.996C184.713 11 184.917 10.118 185.325 9.35C185.745 8.582 186.309 7.988 187.017 7.568C187.737 7.136 188.535 6.92 189.411 6.92C190.059 6.92 190.695 7.064 191.319 7.352C191.955 7.628 192.459 8 192.831 8.468V3.68H194.901V17H192.831V15.506C192.495 15.986 192.027 16.382 191.427 16.694C190.839 17.006 190.161 17.162 189.393 17.162C188.529 17.162 187.737 16.946 187.017 16.514C186.309 16.07 185.745 15.458 185.325 14.678C184.917 13.886 184.713 12.992 184.713 11.996ZM192.831 12.032C192.831 11.348 192.687 10.754 192.399 10.25C192.123 9.746 191.757 9.362 191.301 9.098C190.845 8.834 190.353 8.702 189.825 8.702C189.297 8.702 188.805 8.834 188.349 9.098C187.893 9.35 187.521 9.728 187.233 10.232C186.957 10.724 186.819 11.312 186.819 11.996C186.819 12.68 186.957 13.28 187.233 13.796C187.521 14.312 187.893 14.708 188.349 14.984C188.817 15.248 189.309 15.38 189.825 15.38C190.353 15.38 190.845 15.248 191.301 14.984C191.757 14.72 192.123 14.336 192.399 13.832C192.687 13.316 192.831 12.716 192.831 12.032Z" fill="#2C2E39"/>
                        </svg>
                    </div>
                    <div className='credit-card-right'>
                        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9.5L9 1.5L17 9.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    
                </div>
                <CreditCard />
                <CreditCard />
            </div>
        </div>
       
        <div className='add-credit-card' onClick={() => {
            setEditDeleteData(false);
            setAddCardComponentActive(!addCardComponentActive)}
            }>
            <div className='add-card-left'>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.20156 2 1.5 6.70156 1.5 12.5C1.5 18.2984 6.20156 23 12 23C17.7984 23 22.5 18.2984 22.5 12.5C22.5 6.70156 17.7984 2 12 2ZM16.5 13.0625C16.5 13.1656 16.4156 13.25 16.3125 13.25H12.75V16.8125C12.75 16.9156 12.6656 17 12.5625 17H11.4375C11.3344 17 11.25 16.9156 11.25 16.8125V13.25H7.6875C7.58437 13.25 7.5 13.1656 7.5 13.0625V11.9375C7.5 11.8344 7.58437 11.75 7.6875 11.75H11.25V8.1875C11.25 8.08437 11.3344 8 11.4375 8H12.5625C12.6656 8 12.75 8.08437 12.75 8.1875V11.75H16.3125C16.4156 11.75 16.5 11.8344 16.5 11.9375V13.0625Z" fill="url(#paint0_linear_635_731)"/>
                    <defs>
                    <linearGradient id="paint0_linear_635_731" x1="12" y1="23" x2="12" y2="36.7909" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B3124C" stop-opacity="0.67"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.18"/>
                    </linearGradient>
                    </defs>
                </svg>

                <div>
                    Add Card
                </div>
            </div>
            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1.5L9 9.5L1 1.5" stroke="#2C2E39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

        <div style={{"display" : addCardComponentActive ? null : "none" }}>
            <FillCard  classData={"select-card-add-credit-card"} editDelete={editDeleteData}  />
        </div>
       
        <div className='payment-devam'>
            Seç
        </div>
        
        <Navigation />


    </div>
  )
}