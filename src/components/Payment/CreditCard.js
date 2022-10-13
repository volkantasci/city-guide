import React,{useState} from 'react'
import { MainContext,useContext } from '../../Context';

export default function CreditCard() {
    const {addCardComponentActive, setAddCardComponentActive} =  useContext(MainContext);
    const {editDeleteData,setEditDeleteData} = useContext(MainContext);
    const [color,setColor] = useState(false);

    const visibleAddCardComponent = () => {
        setAddCardComponentActive(!addCardComponentActive);
        setEditDeleteData(true);
    }
   
  return (
    <div className='cc' style={{"backgroundColor" : color ? "#FF7EAE" : null}} >
                <div className='cc-icon-name' onClick={() => {
        setColor(!color);
    }}> 
                    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_571_411)">
                        <path d="M10.2051 1.96753H17.767V15.555H10.2051V1.96753Z" fill="#FF5F00"/>
                        <path d="M10.6854 8.76136C10.6854 6.00069 11.9816 3.55202 13.9741 1.96757C12.5098 0.815295 10.6614 0.119141 8.64489 0.119141C3.8675 0.119141 0.00256348 3.98408 0.00256348 8.76136C0.00256348 13.5385 3.8675 17.4036 8.64478 17.4036C10.6613 17.4036 12.5097 16.7074 13.9741 15.555C11.9816 13.9947 10.6854 11.522 10.6854 8.76136Z" fill="#EB001B"/>
                        <path d="M27.9697 8.76136C27.9697 13.5385 24.1048 17.4036 19.3275 17.4036C17.311 17.4036 15.4625 16.7074 13.9982 15.555C16.0147 13.9707 17.287 11.522 17.287 8.76136C17.287 6.00069 15.9906 3.55202 13.9982 1.96757C15.4624 0.815295 17.311 0.119141 19.3275 0.119141C24.1048 0.119141 27.9698 4.00813 27.9698 8.76136H27.9697Z" fill="#F79E1B"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_571_411">
                        <rect width="28" height="21.7617" fill="white" transform="translate(0 0.119141)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <span className='cc-name'>Avis Bank</span>
                    <span className='cc-name'>****1234</span>
                    
                </div>
                <div className='grey-dot' onClick={() => {
                    visibleAddCardComponent();
                }} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z"/></svg>
                </div>
            </div>
  )
}
