
// import './signin.css'
import Logo from '../assets/signinpagelogo.svg'

export default function Signin() {
  const validEmail=()=>{
    const email=document.getElementById('email').value;
    const text=document.querySelector('.errorMsg');
    const emailPattern = /^[A-Za-z0-9._%+-]+@explorin\.io$/;

    if (emailPattern.test(email)) {
      text.innerHTML=''
      return true;
    } else {
      text.innerHTML='Invlaid Email'
      text.style.visibility = 'visible';
      return false;
    }
  }
  return (
    <div className='main *:font-serif flex flex-col justify-center items-center'>
      <img src={Logo} alt="" className='h-[10dvh] w-[40dvh]'/>
      <div className='formContainer border-[1px] border-solid border-[silver] p-[20px] max-w-[330px] flex flex-col gap-5 rounded-xl '>
          <div className='text text-xl'>Sign in</div>
          <form className="login-details flex flex-col">
            <label ><b>Email</b> <br /><input type="email" id='email' className='h-[4dvh] w-[100%] border-2 border-solid border-[black] rounded-md p-2 focus:shadow-[0_0_5px_2px_rgb(126,225,225)]'/></label>
            <p className="errorMsg text-sm p-3 text-red-500 font-bold invisible"></p>
            <button className='align-center h-[4dvh] w-[100%] border-none rounded bg-[#F7CA00] ' onClick={(event) => { 
              event.preventDefault(); 
              validEmail();
            }}>Continue</button>
          </form>
          <div className='belowText text-[12px]'>By continuing, you agree to {'Amazon\'s'} <span><a href="" className='text-[rgb(56,142,175)]'>Conditions of Use</a></span> and <span><a href="" className='text-[rgb(56,142,175)]'>Privacy Notice</a></span>.</div>
          <div className="needhelp">
            <a href="#" className="all-[unset] text-[rgb(56,142,175)] cursor-pointer text-sm">
              Need help?
            </a>
          </div>

          <div className='line w-[100%] border border-[solid silver] ' ></div>
          <div className="footer flex flex-col gap-2">
            <p><b>Buying for work?</b></p>
            <a href="" className='lastline all-[unset] text-[rgb(56,142,175)] cursor-pointer text-sm '>Shop on Amazon Buisness</a>
          </div>
      </div>
      <div className="bottom flex flex-col justify-center items-center p-5 gap-2 w-[370px]">
        <hr />
        <h5>New to amazon?</h5>
        <button className='p-1 rounded-sm bg-white border border-solid border-[silver] w-[100%] text-black text-center'>Create New Account</button>
      </div>
    </div>
  )
}
