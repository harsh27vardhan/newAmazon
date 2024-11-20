// import './sidebar.css'
import signIn from '../assets/sidebarimg/user.svg'  
import Cross from '../assets/sidebarimg/cross.svg'
import {Link} from "react-router-dom";

export default function Sidebar({ currState, setCurrState }) {
  const closeSidebar = () => {
    setCurrState(false); // Close the sidebar
  };
  return (
    <div className='sidebar-background flex absolute top-[-85%] h-[100dvh] w-[98.9dvw] bg-[rgba(0,0,0,0.8)] z-[2001] overflow-hidden h-[100%]' onClick={closeSidebar}>
      <Link className='signin font-sans font-bold text-xs w-[50dvh] flex bg-[#232F3E] text-white h-[7%] p-3 items-center cursor-pointer z-[1005]' to="/signin"><img src={signIn} alt="" className='h-[90%] w-[20%]'/>Hello, sign in</Link>
        <div className='sidebar absolute top-[5%] w-[50dvh] h-[100%] z-[1001] bg-white overflow-auto' onClick={(e) => e.stopPropagation()}>
            <div className="list flex flex-col p-[30px] gap-5">
              <p className='text-xl font-bold'>Trending</p>
              <ul className='flex flex-col gap-5'>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Best Sellers</a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>New Releases</a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Movers and Shakers</a>
                </li>
              </ul>
            </div>
            <div className="hr w-[100%] h-[1px] border border-[silver]"></div>
            <div className="list flex flex-col p-[30px] gap-5">
              <p className='text-xl font-bold'>Digital Content and Devices</p>
              <ul className='flex flex-col gap-5'>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Echo & Alexa <span>{'>'}</span></a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Fire TV <span>{'>'}</span></a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Kindles E-Reader & eBooks <span>{'>'}</span></a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Audible Audiobooks <span>{'>'}</span></a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Amazon Prime Video <span>{'>'}</span></a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Amazon Prime Music <span>{'>'}</span></a>
                </li>
              </ul>
            </div>
            <div className="hr w-[100%] h-[1px] border border-[silver]"></div>
            <div className="list flex flex-col p-[30px] gap-5">
              <p className='text-xl font-bold'>Shop by Category</p>
              <ul className='flex flex-col gap-5'>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Mobiles, Computers<span>{'>'}</span></a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>TV,Appliances,Electronics<span>{'>'}</span></a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Men's Fashion<span>{'>'}</span></a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Women's Fashion<span>{'>'}</span></a>
                </li>
              </ul>
            </div>
            <div className="hr w-[100%] h-[1px] border border-[silver]"></div>
            <div className="list flex flex-col p-[30px] gap-5">
              <p className='text-xl font-bold'>Programs & Features</p>
              <ul className='flex flex-col gap-5'>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Amazon Pay</a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Gift Cards & Mobile Recharges<span>{'>'}</span></a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Amazon Launchpad</a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Amazon Buisness</a>
                </li>
              </ul>
            </div>
            <div className="hr w-[100%] h-[1px] border border-[silver]"></div>
            <div className="list flex flex-col p-[30px] gap-5">
              <p className='text-xl font-bold'>Help & Settings</p>
              <ul className='flex flex-col gap-5'>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Your Account</a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Customer Service</a>
                </li>
                <li className='all-[unset] p-1 cursor-pointer text-xs'>
                  <a href="" className='all-[unset] flex justify-between'>Sign in</a>
                </li>
              </ul>
            </div>
        </div>
        <button className='cross all-[unset] h-[10%] w-[3%] z-[1001] absolute left-[25%] cursor-pointer' onClick={closeSidebar}><img src={Cross} alt="" className='h-[60%] w-[80%]'/></button>
    </div>
  )
}
