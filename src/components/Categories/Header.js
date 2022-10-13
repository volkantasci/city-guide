import React from 'react'
import '../../styles/Categories.css'
import funs from  '../../assets/svgs/funs.svg'
import showMap from '../../assets/svgs/showMap.svg'
import { useNavigate, useParams } from 'react-router-dom'


export default function Header({showAlcohol,categoryName}) {
    const navigate = useNavigate();
    let { category } = useParams();
    const handleBackButton = () => {
        navigate("/");
    }
  return (
    <div className='category-header' style={{"height" : category === "History" || category === "Nature" || category === "Museums" ? "200px" : null}}>
        <div id="alchol-switch" style={{"display": showAlcohol === true ? "flex" : "none"}}>
            <div id="alcoholText">
                Alcohol
            </div>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round">
                </span>
            </label>
        </div>
        
        <svg onClick={() => {
                navigate("/");
            }} width="100%"  height="141" viewBox="0 0 428 141" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H428V115.591C428 115.591 298.5 141 208.5 141C106.971 141 0 115.591 0 115.591V0Z" fill="url(#paint0_linear_0_1)"/>
            <path 
             d="M133.7 73.76C130.7 73.76 128.22 72.88 126.26 71.12C124.38 69.36 123.44 67.14 123.44 64.46C123.44 61.7 124.16 58.96 125.6 56.24C127.04 53.52 128.92 51.08 131.24 48.92C132.4 47.84 133.66 46.86 135.02 45.98C136.38 45.06 137.84 44.26 139.4 43.58C141.04 42.82 142.64 42.28 144.2 41.96C145.8 41.6 147.3 41.42 148.7 41.42C151.26 41.42 153.38 41.92 155.06 42.92C155.98 40.76 156.86 39.68 157.7 39.68C159.06 39.68 159.74 39.94 159.74 40.46C158.78 41.7 158 42.7 157.4 43.46C156.8 44.22 156.4 44.76 156.2 45.08C153.84 48.28 152.66 50.62 152.66 52.1L152.9 53C152.9 53.08 152.86 53.12 152.78 53.12C152.3 53.12 152.06 52.6 152.06 51.56C152.06 49.76 152.86 47.24 154.46 44C153.22 42.88 151.48 42.32 149.24 42.32C145.8 42.32 142.3 43.42 138.74 45.62C135.18 47.78 132.2 50.54 129.8 53.9C128.6 55.54 127.72 57.14 127.16 58.7C126.64 60.22 126.38 61.68 126.38 63.08C126.38 64.84 126.78 66.42 127.58 67.82C128.38 69.22 129.48 70.3 130.88 71.06C132.28 71.86 133.86 72.26 135.62 72.26C138.42 72.26 141.08 71.7 143.6 70.58C146.16 69.42 148.56 67.66 150.8 65.3C151.36 64.74 151.76 64.46 152 64.46C152.16 64.46 152.24 64.58 152.24 64.82C152.24 65.18 152.06 65.56 151.7 65.96C149.58 68.36 146.8 70.26 143.36 71.66C139.88 73.06 136.66 73.76 133.7 73.76ZM161.702 50.06C160.822 50.06 160.102 49.82 159.542 49.34C160.302 48.82 161.102 48.14 161.942 47.3C162.822 46.46 163.722 45.46 164.642 44.3C164.722 44.3 164.762 44.4 164.762 44.6L164.462 46.34C164.262 47.58 163.902 48.52 163.382 49.16C162.862 49.76 162.302 50.06 161.702 50.06ZM155.942 71.9C154.422 71.9 153.662 70.8 153.662 68.6C153.662 65.28 154.862 60.9 157.262 55.46C157.262 55.3 157.362 55 157.562 54.56C157.802 54.12 157.982 53.84 158.102 53.72C158.382 53.44 158.762 53.3 159.242 53.3C160.642 53.3 161.402 53.58 161.522 54.14C160.882 55.18 160.262 56.38 159.662 57.74C159.102 59.1 158.542 60.6 157.982 62.24C157.382 64 156.942 65.46 156.662 66.62C156.422 67.74 156.302 68.64 156.302 69.32C156.302 70.32 156.562 70.82 157.082 70.82C157.442 70.82 157.902 70.6 158.462 70.16C158.902 69.8 159.202 69.54 159.362 69.38C159.562 69.22 159.742 69.08 159.902 68.96C160.062 68.96 160.142 69.04 160.142 69.2C160.142 69.64 159.562 70.2 158.402 70.88C157.242 71.56 156.422 71.9 155.942 71.9ZM164.96 72.14C163.2 72.14 162.32 71.2 162.32 69.32C162.32 67.64 162.88 65.44 164 62.72C164.44 61.68 164.88 60.64 165.32 59.6C165.76 58.56 166.26 57.38 166.82 56.06C165.46 55.54 164.78 54.76 164.78 53.72C164.78 53.4 164.86 53.18 165.02 53.06C165.62 53.34 166.54 53.54 167.78 53.66C169.1 50.7 169.76 48.82 169.76 48.02C169.76 47.14 169.6 46.7 169.28 46.7L168.08 47C167.96 47 167.9 46.94 167.9 46.82C167.9 46.5 168.14 46.26 168.62 46.1C169.1 45.9 169.46 45.8 169.7 45.8C171.46 45.8 172.34 46.8 172.34 48.8C172.34 49.96 171.98 51.48 171.26 53.36C171.42 53.52 172.14 53.6 173.42 53.6C174.74 53.6 175.74 53.46 176.42 53.18C177.06 52.86 177.52 52.7 177.8 52.7C177.92 52.7 177.98 52.74 177.98 52.82C177.98 52.94 177.88 53.1 177.68 53.3C176.84 54.02 175.84 54.64 174.68 55.16C173.56 55.68 172.26 56.04 170.78 56.24H170.6C170.56 56.24 170.5 56.26 170.42 56.3C170.34 56.3 170.18 56.34 169.94 56.42C166.3 63.66 164.48 68.26 164.48 70.22C164.48 70.86 164.72 71.18 165.2 71.18L166.88 70.82L166.94 70.88C166.94 71.72 166.28 72.14 164.96 72.14ZM167.187 97.76C164.547 97.76 163.227 96.46 163.227 93.86C163.227 90.74 165.487 86.64 170.007 81.56C174.727 76.24 179.867 72 185.427 68.84C185.467 68.84 185.487 68.86 185.487 68.9C185.487 69.1 185.267 69.44 184.827 69.92C171.307 81.16 164.547 89.28 164.547 94.28C164.547 96.2 165.307 97.16 166.827 97.16C169.467 97.16 172.607 94.64 176.247 89.6C178.167 86.96 179.907 84.22 181.467 81.38C183.027 78.54 184.427 75.58 185.667 72.5C186.987 69.3 187.967 66.48 188.607 64.04C189.287 61.6 189.627 59.4 189.627 57.44C189.627 56.04 189.387 55.08 188.907 54.56C183.587 60.12 179.867 64.8 177.747 68.6C177.107 70.28 176.507 71.12 175.947 71.12C174.747 71.12 174.147 70.76 174.147 70.04C174.147 69.8 174.347 69.1 174.747 67.94C175.187 66.74 175.787 65.08 176.547 62.96L178.227 58.34C178.827 56.7 179.127 55.1 179.127 53.54V53.3C179.127 52.82 179.067 52.56 178.947 52.52C178.867 52.44 178.607 52.4 178.167 52.4C177.767 52.4 177.567 52.3 177.567 52.1C177.567 51.74 177.887 51.56 178.527 51.56C181.087 51.56 182.367 52.52 182.367 54.44C182.367 55.36 181.167 58.76 178.767 64.64C180.127 62.72 182.147 60.34 184.827 57.5C187.547 54.62 189.227 53.18 189.867 53.18C189.867 53.5 189.707 53.82 189.387 54.14C191.187 54.3 192.147 54.7 192.267 55.34C192.347 55.86 192.407 56.34 192.447 56.78C192.487 57.22 192.507 57.6 192.507 57.92C192.507 61.76 191.187 66.84 188.547 73.16C185.627 80.04 182.087 85.86 177.927 90.62C173.767 95.38 170.187 97.76 167.187 97.76ZM219.181 83.96C218.461 83.96 218.101 83.78 218.101 83.42C218.101 83.26 218.361 83.1 218.881 82.94C219.801 82.62 220.501 82.34 220.981 82.1C221.501 81.86 221.841 81.7 222.001 81.62C223.601 80.22 225.221 78.12 226.861 75.32C228.501 72.56 230.141 69.12 231.781 65C226.261 70.84 220.561 73.76 214.681 73.76C211.481 73.76 208.941 72.9 207.061 71.18C205.181 69.42 204.241 67.18 204.241 64.46C204.241 63.02 204.421 61.6 204.781 60.2C205.181 58.8 205.701 57.5 206.341 56.3C207.781 53.62 209.641 51.18 211.921 48.98C214.241 46.78 216.961 44.98 220.081 43.58C221.801 42.78 223.461 42.22 225.061 41.9C226.701 41.58 228.201 41.42 229.561 41.42C230.721 41.42 231.781 41.52 232.741 41.72C233.741 41.92 234.601 42.18 235.321 42.5L236.401 40.64C237.041 39.76 237.841 39.32 238.801 39.32C239.721 39.32 240.181 39.52 240.181 39.92C240.181 40 239.721 40.5 238.801 41.42C238.281 41.94 237.901 42.32 237.661 42.56C237.461 42.76 237.201 43.02 236.881 43.34C237.401 43.66 237.841 44.02 238.201 44.42C238.601 44.78 238.801 45 238.801 45.08C238.801 45.12 238.521 45.46 237.961 46.1C237.441 46.74 236.921 47.4 236.401 48.08C234.961 49.92 234.221 51.1 234.181 51.62L234.361 51.8C234.361 52 234.261 52.1 234.061 52.1C233.461 52.1 233.161 51.5 233.161 50.3C233.161 48.02 233.721 45.74 234.841 43.46C233.361 42.7 231.721 42.32 229.921 42.32C226.321 42.32 222.681 43.46 219.001 45.74C215.401 47.94 212.401 50.72 210.001 54.08C208.801 55.8 207.921 57.44 207.361 59C206.801 60.56 206.521 62.04 206.521 63.44C206.521 66 207.381 68.12 209.101 69.8C210.861 71.48 213.221 72.32 216.181 72.32C220.901 72.32 226.021 69.18 231.541 62.9C232.061 62.34 232.481 61.86 232.801 61.46C233.161 61.02 233.421 60.66 233.581 60.38L234.181 58.64C231.021 59.28 228.441 59.76 226.441 60.08C224.481 60.36 223.101 60.5 222.301 60.5C221.821 60.5 221.381 60.26 220.981 59.78C220.581 59.3 220.381 58.68 220.381 57.92C220.381 57.76 220.461 57.68 220.621 57.68L224.161 58.04C228.721 58.04 232.201 57.92 234.601 57.68C234.841 56.88 235.161 56.48 235.561 56.48C235.761 56.48 236.001 56.56 236.281 56.72C236.561 56.84 236.901 57.02 237.301 57.26L239.101 56.96C239.421 56.96 239.581 57.08 239.581 57.32C239.581 57.52 238.921 57.74 237.601 57.98C234.721 65.26 231.501 71.4 227.941 76.4C224.421 81.44 221.501 83.96 219.181 83.96ZM234.181 49.82C234.501 49.42 234.921 48.84 235.441 48.08C235.961 47.28 236.601 46.3 237.361 45.14L236.701 44.54C235.421 46.58 234.581 48.34 234.181 49.82ZM255.148 71.78C253.988 71.78 253.068 71.24 252.388 70.16C252.108 69.6 251.868 69.02 251.668 68.42C251.508 67.78 251.428 67.04 251.428 66.2C251.428 65.4 251.508 64.48 251.668 63.44C251.868 62.4 252.108 61.22 252.388 59.9C250.828 62.46 249.528 64.54 248.488 66.14C247.448 67.7 246.648 68.82 246.088 69.5C245.088 70.82 244.068 71.48 243.028 71.48C242.028 71.48 241.188 71.12 240.508 70.4C239.868 69.64 239.548 68.82 239.548 67.94C239.548 66.3 240.428 63.54 242.188 59.66C243.948 55.7 244.828 53.68 244.828 53.6L244.288 52.52C244.288 52.4 244.428 52.34 244.708 52.34C245.068 52.34 245.728 52.54 246.688 52.94C247.688 53.34 248.188 53.68 248.188 53.96C247.988 54.36 247.608 55.12 247.048 56.24C246.528 57.32 245.808 58.78 244.888 60.62C243.128 64.34 242.248 66.8 242.248 68C242.248 69.24 242.508 69.86 243.028 69.86C243.668 69.86 244.588 69.14 245.788 67.7C246.428 66.9 247.028 66.1 247.588 65.3C248.148 64.5 248.728 63.62 249.328 62.66L254.368 54.5C254.968 53.54 255.608 53.06 256.288 53.06C257.648 53.06 258.368 53.32 258.448 53.84C258.368 53.76 258.268 53.88 258.148 54.2C257.028 56.24 256.008 58.7 255.088 61.58C254.208 64.38 253.768 66.26 253.768 67.22C253.768 69.66 254.208 70.88 255.088 70.88C255.368 70.88 255.948 70.5 256.827 69.74C256.908 69.74 256.948 69.9 256.948 70.22C256.948 71.26 256.348 71.78 255.148 71.78ZM266.76 50.06C265.88 50.06 265.16 49.82 264.6 49.34C265.36 48.82 266.16 48.14 267 47.3C267.88 46.46 268.78 45.46 269.7 44.3C269.78 44.3 269.82 44.4 269.82 44.6L269.52 46.34C269.32 47.58 268.96 48.52 268.44 49.16C267.92 49.76 267.36 50.06 266.76 50.06ZM261 71.9C259.48 71.9 258.72 70.8 258.72 68.6C258.72 65.28 259.92 60.9 262.32 55.46C262.32 55.3 262.42 55 262.62 54.56C262.86 54.12 263.04 53.84 263.16 53.72C263.44 53.44 263.82 53.3 264.3 53.3C265.7 53.3 266.46 53.58 266.58 54.14C265.94 55.18 265.32 56.38 264.72 57.74C264.16 59.1 263.6 60.6 263.04 62.24C262.44 64 262 65.46 261.72 66.62C261.48 67.74 261.36 68.64 261.36 69.32C261.36 70.32 261.62 70.82 262.14 70.82C262.5 70.82 262.96 70.6 263.52 70.16C263.96 69.8 264.26 69.54 264.42 69.38C264.62 69.22 264.8 69.08 264.96 68.96C265.12 68.96 265.2 69.04 265.2 69.2C265.2 69.64 264.62 70.2 263.46 70.88C262.3 71.56 261.48 71.9 261 71.9ZM280.471 73.22C278.671 73.22 277.771 71.78 277.771 68.9C277.771 67.18 278.411 64.12 279.691 59.72C278.851 61.36 278.031 62.84 277.231 64.16C276.471 65.44 275.651 66.66 274.771 67.82C272.971 70.18 271.431 71.36 270.151 71.36C269.351 71.36 268.531 70.86 267.691 69.86C266.891 68.86 266.491 67.96 266.491 67.16C266.491 64.64 267.831 61.62 270.511 58.1C273.231 54.5 275.651 52.7 277.771 52.7C278.371 52.7 278.991 52.88 279.631 53.24C280.351 53.56 280.711 53.94 280.711 54.38C280.711 54.7 280.531 54.86 280.171 54.86L278.971 54.2C277.611 54.2 275.511 56.22 272.671 60.26C269.871 64.26 268.471 67.08 268.471 68.72C268.471 69.32 268.611 69.62 268.891 69.62C269.291 69.62 270.011 69.18 271.051 68.3C272.091 67.42 273.491 65.96 275.251 63.92C277.051 61.84 278.871 59.48 280.711 56.84C281.191 55.76 281.711 54.52 282.271 53.12C282.871 51.68 283.591 49.96 284.431 47.96C284.471 47.88 284.611 47.52 284.851 46.88C285.131 46.24 285.431 45.52 285.751 44.72C286.111 43.92 286.411 43.22 286.651 42.62C286.891 42.02 287.011 41.7 287.011 41.66C287.011 41.02 286.611 40.7 285.811 40.7L283.771 41.12C283.491 41.12 283.351 41 283.351 40.76C283.351 40.12 284.251 39.8 286.051 39.8C288.811 39.8 290.191 40.74 290.191 42.62C290.191 43.22 288.951 46.06 286.471 51.14C285.151 53.74 284.191 55.68 283.591 56.96C283.031 58.2 282.731 58.86 282.691 58.94C280.571 63.62 279.511 67.34 279.511 70.1C279.511 71.74 279.911 72.56 280.711 72.56L282.511 71.9L282.691 71.96C282.691 72.24 282.391 72.52 281.791 72.8C281.231 73.08 280.791 73.22 280.471 73.22ZM289.632 71.66C286.232 71.66 284.532 70.08 284.532 66.92C284.532 64.48 285.732 61.52 288.132 58.04C290.612 54.56 292.972 52.82 295.212 52.82C296.172 52.82 297.012 53.14 297.732 53.78C298.492 54.38 298.872 55.12 298.872 56C298.872 57.48 297.932 58.98 296.052 60.5C294.212 61.98 292.392 62.72 290.592 62.72C290.232 62.72 290.052 62.64 290.052 62.48L290.232 62.18C294.832 60.74 297.132 58.38 297.132 55.1C297.132 54.62 296.972 54.38 296.652 54.38C296.212 54.38 295.412 54.84 294.252 55.76C293.252 56.56 292.312 57.48 291.432 58.52C290.592 59.56 289.832 60.64 289.152 61.76C287.712 64.2 286.992 66.24 286.992 67.88C286.992 69.48 287.612 70.28 288.852 70.28C290.292 70.28 291.872 69.54 293.592 68.06C294.152 67.54 294.752 66.96 295.392 66.32C296.032 65.64 296.732 64.9 297.492 64.1C298.972 62.5 299.752 61.7 299.832 61.7C300.072 61.7 300.192 61.8 300.192 62C300.192 62.16 300.152 62.32 300.072 62.48C295.872 68.6 292.392 71.66 289.632 71.66Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_0_1" x1="-164.008" y1="-16.6313" x2="-73.8649" y2="321.107" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EF1A6A"/>
            <stop offset="1" stopColor="#EF1A6A" stopOpacity="0"/>
            </linearGradient>
            </defs>
        </svg>
        <div className='back-button' onClick={handleBackButton}>
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1667 7.83331H4.33002L8.56502 2.74664C8.76305 2.50839 8.85832 2.20123 8.82988 1.89273C8.80143 1.58423 8.65161 1.29967 8.41335 1.10164C8.1751 0.903614 7.86794 0.808342 7.55944 0.836785C7.25095 0.865228 6.96638 1.01506 6.76835 1.25331L0.93502 8.25331C0.895774 8.30899 0.86068 8.36748 0.83002 8.42831C0.83002 8.48664 0.830021 8.52164 0.748354 8.57998C0.695473 8.71375 0.667785 8.85614 0.666687 8.99998C0.667785 9.14381 0.695473 9.28621 0.748354 9.41998C0.748354 9.47831 0.748354 9.51331 0.83002 9.57164C0.86068 9.63247 0.895774 9.69096 0.93502 9.74664L6.76835 16.7466C6.87805 16.8783 7.01541 16.9842 7.17067 17.0568C7.32594 17.1294 7.49529 17.1669 7.66669 17.1666C7.93928 17.1672 8.20346 17.0722 8.41335 16.8983C8.53149 16.8004 8.62914 16.6801 8.70072 16.5443C8.77229 16.4086 8.81639 16.2601 8.83048 16.1073C8.84457 15.9545 8.82837 15.8004 8.78282 15.6538C8.73727 15.5073 8.66326 15.3712 8.56502 15.2533L4.33002 10.1666H18.1667C18.4761 10.1666 18.7729 10.0437 18.9916 9.82493C19.2104 9.60614 19.3334 9.3094 19.3334 8.99998C19.3334 8.69056 19.2104 8.39381 18.9916 8.17502C18.7729 7.95623 18.4761 7.83331 18.1667 7.83331Z" fill="white"/>
            </svg>
        </div>
        <div className="category-name-title">
           <div>
                <span id="category-name-text">{categoryName}</span>
           </div>
        </div>

        <div className='show-maps'>
            <img src={showMap} alt={"showMap"} />
        </div>
    </div>
  )
}
