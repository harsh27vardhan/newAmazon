import amazonLogo from '../assets/amazonlogo.svg';
import locationlogo from '../assets/location-pin-svgrepo-com (1).svg';
import searchlogo from '../assets/search-svgrepo-com.svg';
import CartIcon from '../assets/cart.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

export default function Header() {    
    const cartSize = useSelector((state) => state.cart.cartSize);
    return (
        <div className="bg-[#131921] flex items-center justify-between fixed top-0 right-0 left-0 z-[1000] p-2">
            {/* logo */}
            <Link to={"/"}><img src={amazonLogo} alt="amazon logo" className="h-[4vh] w-[8vw] text-white" /></Link>

            {/* address */}
            <address className="flex flex-col">
                <p className="text-white pl-5 text-xs ">Deliver to XYZ 123456</p>
                <div className="flex text-white text-[10px] gap-1">
                    <img src={locationlogo} alt="Location Logo" className="h-[2vh] my-auto" />
                    <h2 className='cursor-pointer'>Update Location</h2>
                </div>
            </address>

            {/* search bar and filter */}
            <div className="flex ml-8">
                <select className="p-1 rounded-l-lg bg-[#e6e6e6] border-none max-w-auto w-auto">
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="home">Home</option>
                    <option value="grocery">Grocery</option>
                </select>
                <form action="" className="flex">
                    <input 
                        type="text" 
                        placeholder="Search Amazon.in" 
                        className="h-[5.4vh] w-[40vw] pl-1"
                    />
                    <button className="h-[5.4vh] bg-[#f3a847] rounded-r-md border-none">
                        <img src={searchlogo} alt="Search Icon" className="h-[5vh]" />
                    </button>
                </form>
            </div>

            {/* Language */}
            <select className="bg-[#131921] text-white font-bold border-none">
                <option value="EN">EN</option>
                <option value="HI">HI</option>
            </select>

            {/* Account Menu */}
            <div className="flex flex-col justify-center items-start gap-[2px] text-white">
                <span className="text-[12px] font-normal px-1">Hello, Sign in</span>
                <select className="bg-[#131921] text-[14px] font-bold bg-transparent p-0 m-0 text-white">
                    <option value="account" className='bg-[#131921]'>Account & Lists</option>
                    <option value="orders" className='bg-[#131921]'>Orders</option>
                    <option value="prime" className='bg-[#131921]'>Try Prime</option>
                </select>
            </div>

            {/* Return and Order */}
            <button className="flex flex-col bg-[#131921] border-none text-white gap-0 text-sm">
                Return <span className="font-bold text-sm">& Orders</span>
            </button> 

            {/* Cart */}
            <Link to={'/cart'} className="flex items-end text-white relative" >
                <div className="flex gap-1 items-center" >
                    <img src={CartIcon} alt="Cart Icon" className="w-9" />
                    <span className="absolute top-0 left-4 text-[16px] font-bold text-[#f08806] bg-[#131921] ">{cartSize}</span>
                </div>
                <span className="text-[14px] font-bold py-1">Cart</span>
            </Link>
        </div>  
    );
}
