import React from 'react'
import Navigation from '../components/Navigation';
import FillCard from '../components/Payment/FillCard';
import "../styles/SaveCard.css";

export default function SaveCard() {
  return (
    <div className='save-card-container'>
        <div className='save-card-header'>
            Add Card
        </div>
        <div className='save-card-back-button'>
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.1667 7.83337H4.33002L8.56502 2.7467C8.76305 2.50845 8.85832 2.20129 8.82988 1.89279C8.80143 1.5843 8.65161 1.29973 8.41335 1.1017C8.1751 0.903675 7.86794 0.808403 7.55944 0.836846C7.25095 0.865289 6.96638 1.01512 6.76835 1.25337L0.93502 8.25337C0.895774 8.30905 0.86068 8.36754 0.83002 8.42837C0.83002 8.4867 0.830021 8.5217 0.748354 8.58004C0.695473 8.71381 0.667785 8.8562 0.666687 9.00004C0.667785 9.14388 0.695473 9.28627 0.748354 9.42004C0.748354 9.47837 0.748354 9.51337 0.83002 9.5717C0.86068 9.63253 0.895774 9.69103 0.93502 9.7467L6.76835 16.7467C6.87805 16.8784 7.01541 16.9843 7.17067 17.0569C7.32594 17.1295 7.49529 17.167 7.66669 17.1667C7.93928 17.1672 8.20346 17.0723 8.41335 16.8984C8.53149 16.8004 8.62914 16.6801 8.70072 16.5444C8.77229 16.4087 8.81639 16.2601 8.83048 16.1073C8.84457 15.9545 8.82837 15.8004 8.78282 15.6539C8.73727 15.5074 8.66326 15.3713 8.56502 15.2534L4.33002 10.1667H18.1667C18.4761 10.1667 18.7729 10.0438 18.9916 9.825C19.2104 9.6062 19.3334 9.30946 19.3334 9.00004C19.3334 8.69062 19.2104 8.39387 18.9916 8.17508C18.7729 7.95629 18.4761 7.83337 18.1667 7.83337Z" fill="white"/>
            </svg>
        </div>
        <FillCard />
        
        <div className='save-this-card'>
            <input type='checkbox'/>
            <svg width="246" height="16" viewBox="0 0 246 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.256 11.598C3.60267 11.598 3.01467 11.486 2.492 11.262C1.96933 11.0287 1.55867 10.702 1.26 10.282C0.961333 9.862 0.812 9.372 0.812 8.812H2.52C2.55733 9.232 2.72067 9.57733 3.01 9.848C3.30867 10.1187 3.724 10.254 4.256 10.254C4.80667 10.254 5.236 10.1233 5.544 9.862C5.852 9.59133 6.006 9.246 6.006 8.826C6.006 8.49933 5.908 8.23333 5.712 8.028C5.52533 7.82267 5.28733 7.664 4.998 7.552C4.718 7.44 4.326 7.31867 3.822 7.188C3.18733 7.02 2.66933 6.852 2.268 6.684C1.876 6.50667 1.54 6.236 1.26 5.872C0.98 5.508 0.84 5.02267 0.84 4.416C0.84 3.856 0.98 3.366 1.26 2.946C1.54 2.526 1.932 2.204 2.436 1.98C2.94 1.756 3.52333 1.644 4.186 1.644C5.12867 1.644 5.89867 1.882 6.496 2.358C7.10267 2.82467 7.43867 3.46867 7.504 4.29H5.74C5.712 3.93533 5.544 3.632 5.236 3.38C4.928 3.128 4.522 3.002 4.018 3.002C3.56067 3.002 3.18733 3.11867 2.898 3.352C2.60867 3.58533 2.464 3.92133 2.464 4.36C2.464 4.65867 2.55267 4.906 2.73 5.102C2.91667 5.28867 3.15 5.438 3.43 5.55C3.71 5.662 4.09267 5.78333 4.578 5.914C5.222 6.09133 5.74467 6.26867 6.146 6.446C6.55667 6.62333 6.902 6.89867 7.182 7.272C7.47133 7.636 7.616 8.126 7.616 8.742C7.616 9.23667 7.48067 9.70333 7.21 10.142C6.94867 10.5807 6.56133 10.9353 6.048 11.206C5.544 11.4673 4.94667 11.598 4.256 11.598ZM8.96722 7.608C8.96722 6.83333 9.12589 6.14733 9.44322 5.55C9.76989 4.95267 10.2086 4.49067 10.7592 4.164C11.3192 3.828 11.9352 3.66 12.6072 3.66C13.2139 3.66 13.7412 3.78133 14.1892 4.024C14.6466 4.25733 15.0106 4.55133 15.2812 4.906V3.786H16.8912V11.5H15.2812V10.352C15.0106 10.716 14.6419 11.0193 14.1752 11.262C13.7086 11.5047 13.1766 11.626 12.5792 11.626C11.9166 11.626 11.3099 11.458 10.7592 11.122C10.2086 10.7767 9.76989 10.3007 9.44322 9.694C9.12589 9.078 8.96722 8.38267 8.96722 7.608ZM15.2812 7.636C15.2812 7.104 15.1692 6.642 14.9452 6.25C14.7306 5.858 14.4459 5.55933 14.0912 5.354C13.7366 5.14867 13.3539 5.046 12.9432 5.046C12.5326 5.046 12.1499 5.14867 11.7952 5.354C11.4406 5.55 11.1512 5.844 10.9272 6.236C10.7126 6.61867 10.6052 7.076 10.6052 7.608C10.6052 8.14 10.7126 8.60667 10.9272 9.008C11.1512 9.40933 11.4406 9.71733 11.7952 9.932C12.1592 10.1373 12.5419 10.24 12.9432 10.24C13.3539 10.24 13.7366 10.1373 14.0912 9.932C14.4459 9.72667 14.7306 9.428 14.9452 9.036C15.1692 8.63467 15.2812 8.168 15.2812 7.636ZM21.9695 10.072L24.1535 3.786H25.8475L22.9075 11.5H21.0035L18.0775 3.786H19.7855L21.9695 10.072ZM34.1239 7.454C34.1239 7.74333 34.1052 8.00467 34.0679 8.238H28.1739C28.2206 8.854 28.4492 9.34867 28.8599 9.722C29.2706 10.0953 29.7746 10.282 30.3719 10.282C31.2306 10.282 31.8372 9.92267 32.1919 9.204H33.9139C33.6806 9.91333 33.2559 10.4967 32.6399 10.954C32.0332 11.402 31.2772 11.626 30.3719 11.626C29.6346 11.626 28.9719 11.4627 28.3839 11.136C27.8052 10.8 27.3479 10.3333 27.0119 9.736C26.6852 9.12933 26.5219 8.42933 26.5219 7.636C26.5219 6.84267 26.6806 6.14733 26.9979 5.55C27.3246 4.94333 27.7772 4.47667 28.3559 4.15C28.9439 3.82333 29.6159 3.66 30.3719 3.66C31.0999 3.66 31.7486 3.81867 32.3179 4.136C32.8872 4.45333 33.3306 4.90133 33.6479 5.48C33.9652 6.04933 34.1239 6.70733 34.1239 7.454ZM32.4579 6.95C32.4486 6.362 32.2386 5.89067 31.8279 5.536C31.4172 5.18133 30.9086 5.004 30.3019 5.004C29.7512 5.004 29.2799 5.18133 28.8879 5.536C28.4959 5.88133 28.2626 6.35267 28.1879 6.95H32.4579ZM41.1933 5.088V9.358C41.1933 9.64733 41.2586 9.85733 41.3893 9.988C41.5293 10.1093 41.7626 10.17 42.0893 10.17H43.0693V11.5H41.8093C41.0906 11.5 40.5399 11.332 40.1573 10.996C39.7746 10.66 39.5833 10.114 39.5833 9.358V5.088H38.6733V3.786H39.5833V1.868H41.1933V3.786H43.0693V5.088H41.1933ZM48.5302 3.66C49.1182 3.66 49.6409 3.786 50.0982 4.038C50.5649 4.29 50.9289 4.66333 51.1902 5.158C51.4609 5.65267 51.5962 6.25 51.5962 6.95V11.5H50.0142V7.188C50.0142 6.49733 49.8416 5.97 49.4962 5.606C49.1509 5.23267 48.6796 5.046 48.0822 5.046C47.4849 5.046 47.0089 5.23267 46.6542 5.606C46.3089 5.97 46.1362 6.49733 46.1362 7.188V11.5H44.5402V1.14H46.1362V4.682C46.4069 4.35533 46.7476 4.10333 47.1582 3.926C47.5782 3.74867 48.0356 3.66 48.5302 3.66ZM54.444 2.764C54.1547 2.764 53.912 2.666 53.716 2.47C53.52 2.274 53.422 2.03133 53.422 1.742C53.422 1.45267 53.52 1.21 53.716 1.014C53.912 0.818 54.1547 0.719999 54.444 0.719999C54.724 0.719999 54.962 0.818 55.158 1.014C55.354 1.21 55.452 1.45267 55.452 1.742C55.452 2.03133 55.354 2.274 55.158 2.47C54.962 2.666 54.724 2.764 54.444 2.764ZM55.228 3.786V11.5H53.632V3.786H55.228ZM60.1234 11.626C59.5168 11.626 58.9708 11.5187 58.4854 11.304C58.0094 11.08 57.6314 10.7813 57.3514 10.408C57.0714 10.0253 56.9221 9.60067 56.9034 9.134H58.5554C58.5834 9.46067 58.7374 9.736 59.0174 9.96C59.3068 10.1747 59.6661 10.282 60.0954 10.282C60.5434 10.282 60.8888 10.198 61.1314 10.03C61.3834 9.85267 61.5094 9.62867 61.5094 9.358C61.5094 9.06867 61.3694 8.854 61.0894 8.714C60.8188 8.574 60.3848 8.42 59.7874 8.252C59.2088 8.09333 58.7374 7.93933 58.3734 7.79C58.0094 7.64067 57.6921 7.412 57.4214 7.104C57.1601 6.796 57.0294 6.39 57.0294 5.886C57.0294 5.47533 57.1508 5.102 57.3934 4.766C57.6361 4.42067 57.9814 4.15 58.4294 3.954C58.8868 3.758 59.4094 3.66 59.9974 3.66C60.8748 3.66 61.5794 3.884 62.1114 4.332C62.6528 4.77067 62.9421 5.37267 62.9794 6.138H61.3834C61.3554 5.79267 61.2154 5.51733 60.9634 5.312C60.7114 5.10667 60.3708 5.004 59.9414 5.004C59.5214 5.004 59.1994 5.08333 58.9754 5.242C58.7514 5.40067 58.6394 5.61067 58.6394 5.872C58.6394 6.07733 58.7141 6.25 58.8634 6.39C59.0128 6.53 59.1948 6.642 59.4094 6.726C59.6241 6.80067 59.9414 6.89867 60.3614 7.02C60.9214 7.16933 61.3788 7.32333 61.7334 7.482C62.0974 7.63133 62.4101 7.85533 62.6714 8.154C62.9328 8.45267 63.0681 8.84933 63.0774 9.344C63.0774 9.78267 62.9561 10.1747 62.7134 10.52C62.4708 10.8653 62.1254 11.136 61.6774 11.332C61.2388 11.528 60.7208 11.626 60.1234 11.626ZM67.9067 7.636C67.9067 6.84267 68.0653 6.14733 68.3827 5.55C68.7093 4.94333 69.1573 4.47667 69.7267 4.15C70.296 3.82333 70.9493 3.66 71.6867 3.66C72.62 3.66 73.39 3.884 73.9967 4.332C74.6127 4.77067 75.028 5.40067 75.2427 6.222H73.5207C73.3807 5.83933 73.1567 5.54067 72.8487 5.326C72.5407 5.11133 72.1533 5.004 71.6867 5.004C71.0333 5.004 70.5107 5.23733 70.1187 5.704C69.736 6.16133 69.5447 6.80533 69.5447 7.636C69.5447 8.46667 69.736 9.11533 70.1187 9.582C70.5107 10.0487 71.0333 10.282 71.6867 10.282C72.6107 10.282 73.222 9.876 73.5207 9.064H75.2427C75.0187 9.848 74.5987 10.4733 73.9827 10.94C73.3667 11.3973 72.6013 11.626 71.6867 11.626C70.9493 11.626 70.296 11.4627 69.7267 11.136C69.1573 10.8 68.7093 10.3333 68.3827 9.736C68.0653 9.12933 67.9067 8.42933 67.9067 7.636ZM76.3012 7.608C76.3012 6.83333 76.4599 6.14733 76.7772 5.55C77.1039 4.95267 77.5425 4.49067 78.0932 4.164C78.6532 3.828 79.2692 3.66 79.9412 3.66C80.5479 3.66 81.0752 3.78133 81.5232 4.024C81.9805 4.25733 82.3445 4.55133 82.6152 4.906V3.786H84.2252V11.5H82.6152V10.352C82.3445 10.716 81.9759 11.0193 81.5092 11.262C81.0425 11.5047 80.5105 11.626 79.9132 11.626C79.2505 11.626 78.6439 11.458 78.0932 11.122C77.5425 10.7767 77.1039 10.3007 76.7772 9.694C76.4599 9.078 76.3012 8.38267 76.3012 7.608ZM82.6152 7.636C82.6152 7.104 82.5032 6.642 82.2792 6.25C82.0645 5.858 81.7799 5.55933 81.4252 5.354C81.0705 5.14867 80.6879 5.046 80.2772 5.046C79.8665 5.046 79.4839 5.14867 79.1292 5.354C78.7745 5.55 78.4852 5.844 78.2612 6.236C78.0465 6.61867 77.9392 7.076 77.9392 7.608C77.9392 8.14 78.0465 8.60667 78.2612 9.008C78.4852 9.40933 78.7745 9.71733 79.1292 9.932C79.4932 10.1373 79.8759 10.24 80.2772 10.24C80.6879 10.24 81.0705 10.1373 81.4252 9.932C81.7799 9.72667 82.0645 9.428 82.2792 9.036C82.5032 8.63467 82.6152 8.168 82.6152 7.636ZM87.9175 4.906C88.1508 4.514 88.4588 4.21067 88.8415 3.996C89.2335 3.772 89.6955 3.66 90.2275 3.66V5.312H89.8215C89.1962 5.312 88.7202 5.47067 88.3935 5.788C88.0762 6.10533 87.9175 6.656 87.9175 7.44V11.5H86.3215V3.786H87.9175V4.906ZM91.1625 7.608C91.1625 6.83333 91.3212 6.14733 91.6385 5.55C91.9652 4.95267 92.4039 4.49067 92.9545 4.164C93.5145 3.828 94.1352 3.66 94.8165 3.66C95.3205 3.66 95.8152 3.772 96.3005 3.996C96.7952 4.21067 97.1872 4.5 97.4765 4.864V1.14H99.0865V11.5H97.4765V10.338C97.2152 10.7113 96.8512 11.0193 96.3845 11.262C95.9272 11.5047 95.3999 11.626 94.8025 11.626C94.1305 11.626 93.5145 11.458 92.9545 11.122C92.4039 10.7767 91.9652 10.3007 91.6385 9.694C91.3212 9.078 91.1625 8.38267 91.1625 7.608ZM97.4765 7.636C97.4765 7.104 97.3645 6.642 97.1405 6.25C96.9259 5.858 96.6412 5.55933 96.2865 5.354C95.9319 5.14867 95.5492 5.046 95.1385 5.046C94.7279 5.046 94.3452 5.14867 93.9905 5.354C93.6359 5.55 93.3465 5.844 93.1225 6.236C92.9079 6.61867 92.8005 7.076 92.8005 7.608C92.8005 8.14 92.9079 8.60667 93.1225 9.008C93.3465 9.40933 93.6359 9.71733 93.9905 9.932C94.3545 10.1373 94.7372 10.24 95.1385 10.24C95.5492 10.24 95.9319 10.1373 96.2865 9.932C96.6412 9.72667 96.9259 9.428 97.1405 9.036C97.3645 8.63467 97.4765 8.168 97.4765 7.636ZM108.054 5.088H106.626V11.5H105.016V5.088H104.106V3.786H105.016V3.24C105.016 2.35333 105.249 1.70933 105.716 1.308C106.192 0.897333 106.934 0.692 107.942 0.692V2.022C107.456 2.022 107.116 2.11533 106.92 2.302C106.724 2.47933 106.626 2.792 106.626 3.24V3.786H108.054V5.088ZM112.814 11.626C112.086 11.626 111.428 11.4627 110.84 11.136C110.252 10.8 109.79 10.3333 109.454 9.736C109.118 9.12933 108.95 8.42933 108.95 7.636C108.95 6.852 109.123 6.15667 109.468 5.55C109.813 4.94333 110.285 4.47667 110.882 4.15C111.479 3.82333 112.147 3.66 112.884 3.66C113.621 3.66 114.289 3.82333 114.886 4.15C115.483 4.47667 115.955 4.94333 116.3 5.55C116.645 6.15667 116.818 6.852 116.818 7.636C116.818 8.42 116.641 9.11533 116.286 9.722C115.931 10.3287 115.446 10.8 114.83 11.136C114.223 11.4627 113.551 11.626 112.814 11.626ZM112.814 10.24C113.225 10.24 113.607 10.142 113.962 9.946C114.326 9.75 114.62 9.456 114.844 9.064C115.068 8.672 115.18 8.196 115.18 7.636C115.18 7.076 115.073 6.60467 114.858 6.222C114.643 5.83 114.359 5.536 114.004 5.34C113.649 5.144 113.267 5.046 112.856 5.046C112.445 5.046 112.063 5.144 111.708 5.34C111.363 5.536 111.087 5.83 110.882 6.222C110.677 6.60467 110.574 7.076 110.574 7.636C110.574 8.46667 110.784 9.11067 111.204 9.568C111.633 10.016 112.17 10.24 112.814 10.24ZM119.992 4.906C120.225 4.514 120.533 4.21067 120.916 3.996C121.308 3.772 121.77 3.66 122.302 3.66V5.312H121.896C121.27 5.312 120.794 5.47067 120.468 5.788C120.15 6.10533 119.992 6.656 119.992 7.44V11.5H118.396V3.786H119.992V4.906ZM130.639 5.088H129.211V11.5H127.601V5.088H126.691V3.786H127.601V3.24C127.601 2.35333 127.835 1.70933 128.301 1.308C128.777 0.897333 129.519 0.692 130.527 0.692V2.022C130.042 2.022 129.701 2.11533 129.505 2.302C129.309 2.47933 129.211 2.792 129.211 3.24V3.786H130.639V5.088ZM131.522 7.608C131.522 6.83333 131.681 6.14733 131.998 5.55C132.325 4.95267 132.763 4.49067 133.314 4.164C133.874 3.828 134.49 3.66 135.162 3.66C135.769 3.66 136.296 3.78133 136.744 4.024C137.201 4.25733 137.565 4.55133 137.836 4.906V3.786H139.446V11.5H137.836V10.352C137.565 10.716 137.197 11.0193 136.73 11.262C136.263 11.5047 135.731 11.626 135.134 11.626C134.471 11.626 133.865 11.458 133.314 11.122C132.763 10.7767 132.325 10.3007 131.998 9.694C131.681 9.078 131.522 8.38267 131.522 7.608ZM137.836 7.636C137.836 7.104 137.724 6.642 137.5 6.25C137.285 5.858 137.001 5.55933 136.646 5.354C136.291 5.14867 135.909 5.046 135.498 5.046C135.087 5.046 134.705 5.14867 134.35 5.354C133.995 5.55 133.706 5.844 133.482 6.236C133.267 6.61867 133.16 7.076 133.16 7.608C133.16 8.14 133.267 8.60667 133.482 9.008C133.706 9.40933 133.995 9.71733 134.35 9.932C134.714 10.1373 135.097 10.24 135.498 10.24C135.909 10.24 136.291 10.1373 136.646 9.932C137.001 9.72667 137.285 9.428 137.5 9.036C137.724 8.63467 137.836 8.168 137.836 7.636ZM144.342 11.626C143.736 11.626 143.19 11.5187 142.704 11.304C142.228 11.08 141.85 10.7813 141.57 10.408C141.29 10.0253 141.141 9.60067 141.122 9.134H142.774C142.802 9.46067 142.956 9.736 143.236 9.96C143.526 10.1747 143.885 10.282 144.314 10.282C144.762 10.282 145.108 10.198 145.35 10.03C145.602 9.85267 145.728 9.62867 145.728 9.358C145.728 9.06867 145.588 8.854 145.308 8.714C145.038 8.574 144.604 8.42 144.006 8.252C143.428 8.09333 142.956 7.93933 142.592 7.79C142.228 7.64067 141.911 7.412 141.64 7.104C141.379 6.796 141.248 6.39 141.248 5.886C141.248 5.47533 141.37 5.102 141.612 4.766C141.855 4.42067 142.2 4.15 142.648 3.954C143.106 3.758 143.628 3.66 144.216 3.66C145.094 3.66 145.798 3.884 146.33 4.332C146.872 4.77067 147.161 5.37267 147.198 6.138H145.602C145.574 5.79267 145.434 5.51733 145.182 5.312C144.93 5.10667 144.59 5.004 144.16 5.004C143.74 5.004 143.418 5.08333 143.194 5.242C142.97 5.40067 142.858 5.61067 142.858 5.872C142.858 6.07733 142.933 6.25 143.082 6.39C143.232 6.53 143.414 6.642 143.628 6.726C143.843 6.80067 144.16 6.89867 144.58 7.02C145.14 7.16933 145.598 7.32333 145.952 7.482C146.316 7.63133 146.629 7.85533 146.89 8.154C147.152 8.45267 147.287 8.84933 147.296 9.344C147.296 9.78267 147.175 10.1747 146.932 10.52C146.69 10.8653 146.344 11.136 145.896 11.332C145.458 11.528 144.94 11.626 144.342 11.626ZM150.883 5.088V9.358C150.883 9.64733 150.948 9.85733 151.079 9.988C151.219 10.1093 151.452 10.17 151.779 10.17H152.759V11.5H151.499C150.78 11.5 150.229 11.332 149.847 10.996C149.464 10.66 149.273 10.114 149.273 9.358V5.088H148.363V3.786H149.273V1.868H150.883V3.786H152.759V5.088H150.883ZM161.3 7.454C161.3 7.74333 161.281 8.00467 161.244 8.238H155.35C155.396 8.854 155.625 9.34867 156.036 9.722C156.446 10.0953 156.95 10.282 157.548 10.282C158.406 10.282 159.013 9.92267 159.368 9.204H161.09C160.856 9.91333 160.432 10.4967 159.816 10.954C159.209 11.402 158.453 11.626 157.548 11.626C156.81 11.626 156.148 11.4627 155.56 11.136C154.981 10.8 154.524 10.3333 154.188 9.736C153.861 9.12933 153.698 8.42933 153.698 7.636C153.698 6.84267 153.856 6.14733 154.174 5.55C154.5 4.94333 154.953 4.47667 155.532 4.15C156.12 3.82333 156.792 3.66 157.548 3.66C158.276 3.66 158.924 3.81867 159.494 4.136C160.063 4.45333 160.506 4.90133 160.824 5.48C161.141 6.04933 161.3 6.70733 161.3 7.454ZM159.634 6.95C159.624 6.362 159.414 5.89067 159.004 5.536C158.593 5.18133 158.084 5.004 157.478 5.004C156.927 5.004 156.456 5.18133 156.064 5.536C155.672 5.88133 155.438 6.35267 155.364 6.95H159.634ZM164.466 4.906C164.7 4.514 165.008 4.21067 165.39 3.996C165.782 3.772 166.244 3.66 166.776 3.66V5.312H166.37C165.745 5.312 165.269 5.47067 164.942 5.788C164.625 6.10533 164.466 6.656 164.466 7.44V11.5H162.87V3.786H164.466V4.906ZM173.476 4.92C173.747 4.56533 174.115 4.26667 174.582 4.024C175.049 3.78133 175.576 3.66 176.164 3.66C176.836 3.66 177.447 3.828 177.998 4.164C178.558 4.49067 178.997 4.95267 179.314 5.55C179.631 6.14733 179.79 6.83333 179.79 7.608C179.79 8.38267 179.631 9.078 179.314 9.694C178.997 10.3007 178.558 10.7767 177.998 11.122C177.447 11.458 176.836 11.626 176.164 11.626C175.576 11.626 175.053 11.5093 174.596 11.276C174.139 11.0333 173.765 10.7347 173.476 10.38V15.168H171.88V3.786H173.476V4.92ZM178.166 7.608C178.166 7.076 178.054 6.61867 177.83 6.236C177.615 5.844 177.326 5.55 176.962 5.354C176.607 5.14867 176.225 5.046 175.814 5.046C175.413 5.046 175.03 5.14867 174.666 5.354C174.311 5.55933 174.022 5.858 173.798 6.25C173.583 6.642 173.476 7.104 173.476 7.636C173.476 8.168 173.583 8.63467 173.798 9.036C174.022 9.428 174.311 9.72667 174.666 9.932C175.03 10.1373 175.413 10.24 175.814 10.24C176.225 10.24 176.607 10.1373 176.962 9.932C177.326 9.71733 177.615 9.40933 177.83 9.008C178.054 8.60667 178.166 8.14 178.166 7.608ZM180.836 7.608C180.836 6.83333 180.995 6.14733 181.312 5.55C181.639 4.95267 182.078 4.49067 182.628 4.164C183.188 3.828 183.804 3.66 184.476 3.66C185.083 3.66 185.61 3.78133 186.058 4.024C186.516 4.25733 186.88 4.55133 187.15 4.906V3.786H188.76V11.5H187.15V10.352C186.88 10.716 186.511 11.0193 186.044 11.262C185.578 11.5047 185.046 11.626 184.448 11.626C183.786 11.626 183.179 11.458 182.628 11.122C182.078 10.7767 181.639 10.3007 181.312 9.694C180.995 9.078 180.836 8.38267 180.836 7.608ZM187.15 7.636C187.15 7.104 187.038 6.642 186.814 6.25C186.6 5.858 186.315 5.55933 185.96 5.354C185.606 5.14867 185.223 5.046 184.812 5.046C184.402 5.046 184.019 5.14867 183.664 5.354C183.31 5.55 183.02 5.844 182.796 6.236C182.582 6.61867 182.474 7.076 182.474 7.608C182.474 8.14 182.582 8.60667 182.796 9.008C183.02 9.40933 183.31 9.71733 183.664 9.932C184.028 10.1373 184.411 10.24 184.812 10.24C185.223 10.24 185.606 10.1373 185.96 9.932C186.315 9.72667 186.6 9.428 186.814 9.036C187.038 8.63467 187.15 8.168 187.15 7.636ZM197.801 3.786L193.069 15.126H191.417L192.985 11.374L189.947 3.786H191.725L193.895 9.666L196.149 3.786H197.801ZM208.343 3.66C208.95 3.66 209.491 3.786 209.967 4.038C210.452 4.29 210.83 4.66333 211.101 5.158C211.381 5.65267 211.521 6.25 211.521 6.95V11.5H209.939V7.188C209.939 6.49733 209.766 5.97 209.421 5.606C209.076 5.23267 208.604 5.046 208.007 5.046C207.41 5.046 206.934 5.23267 206.579 5.606C206.234 5.97 206.061 6.49733 206.061 7.188V11.5H204.479V7.188C204.479 6.49733 204.306 5.97 203.961 5.606C203.616 5.23267 203.144 5.046 202.547 5.046C201.95 5.046 201.474 5.23267 201.119 5.606C200.774 5.97 200.601 6.49733 200.601 7.188V11.5H199.005V3.786H200.601V4.668C200.862 4.35067 201.194 4.10333 201.595 3.926C201.996 3.74867 202.426 3.66 202.883 3.66C203.499 3.66 204.05 3.79067 204.535 4.052C205.02 4.31333 205.394 4.69133 205.655 5.186C205.888 4.71933 206.252 4.35067 206.747 4.08C207.242 3.8 207.774 3.66 208.343 3.66ZM220.622 7.454C220.622 7.74333 220.603 8.00467 220.566 8.238H214.672C214.719 8.854 214.947 9.34867 215.358 9.722C215.769 10.0953 216.273 10.282 216.87 10.282C217.729 10.282 218.335 9.92267 218.69 9.204H220.412C220.179 9.91333 219.754 10.4967 219.138 10.954C218.531 11.402 217.775 11.626 216.87 11.626C216.133 11.626 215.47 11.4627 214.882 11.136C214.303 10.8 213.846 10.3333 213.51 9.736C213.183 9.12933 213.02 8.42933 213.02 7.636C213.02 6.84267 213.179 6.14733 213.496 5.55C213.823 4.94333 214.275 4.47667 214.854 4.15C215.442 3.82333 216.114 3.66 216.87 3.66C217.598 3.66 218.247 3.81867 218.816 4.136C219.385 4.45333 219.829 4.90133 220.146 5.48C220.463 6.04933 220.622 6.70733 220.622 7.454ZM218.956 6.95C218.947 6.362 218.737 5.89067 218.326 5.536C217.915 5.18133 217.407 5.004 216.8 5.004C216.249 5.004 215.778 5.18133 215.386 5.536C214.994 5.88133 214.761 6.35267 214.686 6.95H218.956ZM226.085 3.66C226.691 3.66 227.233 3.786 227.709 4.038C228.194 4.29 228.572 4.66333 228.843 5.158C229.113 5.65267 229.249 6.25 229.249 6.95V11.5H227.667V7.188C227.667 6.49733 227.494 5.97 227.149 5.606C226.803 5.23267 226.332 5.046 225.735 5.046C225.137 5.046 224.661 5.23267 224.307 5.606C223.961 5.97 223.789 6.49733 223.789 7.188V11.5H222.193V3.786H223.789V4.668C224.05 4.35067 224.381 4.10333 224.783 3.926C225.193 3.74867 225.627 3.66 226.085 3.66ZM233.146 5.088V9.358C233.146 9.64733 233.212 9.85733 233.342 9.988C233.482 10.1093 233.716 10.17 234.042 10.17H235.022V11.5H233.762C233.044 11.5 232.493 11.332 232.11 10.996C231.728 10.66 231.536 10.114 231.536 9.358V5.088H230.626V3.786H231.536V1.868H233.146V3.786H235.022V5.088H233.146ZM239.293 11.626C238.687 11.626 238.141 11.5187 237.655 11.304C237.179 11.08 236.801 10.7813 236.521 10.408C236.241 10.0253 236.092 9.60067 236.073 9.134H237.725C237.753 9.46067 237.907 9.736 238.187 9.96C238.477 10.1747 238.836 10.282 239.265 10.282C239.713 10.282 240.059 10.198 240.301 10.03C240.553 9.85267 240.679 9.62867 240.679 9.358C240.679 9.06867 240.539 8.854 240.259 8.714C239.989 8.574 239.555 8.42 238.957 8.252C238.379 8.09333 237.907 7.93933 237.543 7.79C237.179 7.64067 236.862 7.412 236.591 7.104C236.33 6.796 236.199 6.39 236.199 5.886C236.199 5.47533 236.321 5.102 236.563 4.766C236.806 4.42067 237.151 4.15 237.599 3.954C238.057 3.758 238.579 3.66 239.167 3.66C240.045 3.66 240.749 3.884 241.281 4.332C241.823 4.77067 242.112 5.37267 242.149 6.138H240.553C240.525 5.79267 240.385 5.51733 240.133 5.312C239.881 5.10667 239.541 5.004 239.111 5.004C238.691 5.004 238.369 5.08333 238.145 5.242C237.921 5.40067 237.809 5.61067 237.809 5.872C237.809 6.07733 237.884 6.25 238.033 6.39C238.183 6.53 238.365 6.642 238.579 6.726C238.794 6.80067 239.111 6.89867 239.531 7.02C240.091 7.16933 240.549 7.32333 240.903 7.482C241.267 7.63133 241.58 7.85533 241.841 8.154C242.103 8.45267 242.238 8.84933 242.247 9.344C242.247 9.78267 242.126 10.1747 241.883 10.52C241.641 10.8653 241.295 11.136 240.847 11.332C240.409 11.528 239.891 11.626 239.293 11.626ZM244.616 11.598C244.327 11.598 244.084 11.5 243.888 11.304C243.692 11.108 243.594 10.8653 243.594 10.576C243.594 10.2867 243.692 10.044 243.888 9.848C244.084 9.652 244.327 9.554 244.616 9.554C244.896 9.554 245.134 9.652 245.33 9.848C245.526 10.044 245.624 10.2867 245.624 10.576C245.624 10.8653 245.526 11.108 245.33 11.304C245.134 11.5 244.896 11.598 244.616 11.598Z" fill="#7F7F7F"/>
            </svg>

        </div>
        <div className='submit add-card-save'>
           Kaydet
        </div>
        <Navigation />
    </div>
  )
}
