import Menu from '../assets/menu.svg'
import SideBar from '../sidebar/sidebar.jsx'
import { useState } from 'react';

export default function Filterbar() {
  const [currState, setCurrState] = useState(false);  

    const toggleSidebar = () => {
        setCurrState(!currState);
    };
  return (
    <div className="filtercontainer absolute top-[6%] h-auto w-[100%] bg-[#232F3E]">
        <div className='border h-auto w-auto flex text-white justify-between px-1 size-3 items-center text-[15px] cursor-pointer pt-3'>
            <button onClick={toggleSidebar} className='text-xs flex p-3 gap-0 text-white bg-[#232F3E] items-center cursor-pointer'><img src={Menu} alt="" /><b>All</b></button>
            {name.map((ele,index)=>{
                return (
                    <div key={index}>
                      {ele}
                    </div>
                );
            })}
        </div>
        {currState && <SideBar currState={currState} setCurrState={setCurrState} />}
    </div>
  )
}

const name = [
    "Fresh",
    "MX Player",
    "Sell",
    "Best Sellers",
    "Today's Deals",
    "Mobiles",
    "Electronics",
    "Home & Kitchen",
    "Customer Service",
    "Prime",
    "Amazon Pay",
    "New Releases",
    "Fashion",
    "Car & Motorbike",
    "Computers"
];

