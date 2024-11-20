import {useState} from 'react';
import Cimg1 from '../assets/carousalimg/carousalImg1.png';
import Cimg2 from '../assets/carousalimg/carousalImg2.jpg';
import Cimg3 from '../assets/carousalimg/carousalImg3.jpg';
import Cimg4 from '../assets/carousalimg/carousalImg4.jpg';
import Cimg5 from '../assets/carousalimg/carousalImg5.jpg';
import Cimg6 from '../assets/carousalimg/carousalImg6.png';
import Cimg7 from '../assets/carousalimg/carousalImg7.jpg';
import Cimg8 from '../assets/carousalimg/carousalImg8.jpg';

const images=[Cimg1,Cimg2,Cimg3,Cimg4,Cimg5,Cimg6,Cimg7,Cimg8]
export default function Carousal() {
    let [index,setIndex]=useState(0);
    // let currImg=0;
    const prevPage=()=>{
        // currImg++;
        // currImg+=images.length;
        // currImg%=images.length;
        setIndex((index-1+images.length)%images.length);
        // changePage();
    }
    const nextPage=()=>{
        // currImg--;
        // currImg%=images.length;
        setIndex((index+1)%images.length);
        // changePage();
    }
    // const changePage=()=>{
    //     const imageElements = document.querySelectorAll('.cimg img');
    //     imageElements.forEach((ele, index) => {
    //         ele.style.transform = `translateX(${(index - currImg) * 100}%)`;
    //         ele.style.transition = 'transform 0.5s ease-in-out';
    //     });
    // }
  return (
    <div className='carousal-container h-[75%] w-[100%] absolute top-[95px] z-[-10]'>
        <div className="cimg flex h-[100%] w-[100%] ">
            <img src={images[index]} alt={`Slide ${index + 1}`} className='h-[100%] w-[100%] flex-shrink-0 '/>
            {/* {setInterval(nextPage, 500)} */}
            {/* {images.map((element, idx) => {
                return <img key={idx} src={element} alt={`Slide ${idx + 1}`} />
            })} */}
        </div>
        <div className="btn absolute top-[4%] w-[100%] h-[30%] flex justify-between text-6xl">
            <button onClick={prevPage} className='text-black p-7 cursor-pointer text-7xl'>{'<'}</button>
            <button onClick={nextPage} className='text-black p-7 cursor-pointer text-7xl'>{'>'}</button>
        </div>
    </div>
  );
}
