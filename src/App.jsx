import './App.css'
import { useState } from "react"
import { github, peerlist, twitter, linkedIn } from "./index"


function App() {
 
  const icon_small = 1;

 

  return (
    <div className="w-screen h-screen bg-custom bg-cover bg-center bg-fixed bg-no-repeat   ">
      {/* main container */}
      <div className='w-full h-full  m-auto flex flex-col gap-5 items-center  '>
        {/* profile*/}
        <div className={` w-40 h-40 sm:mt-14 mt-32 bg-profile bg-cover bg-no-repeat rounded-full bg-center`} />

        {/* <div className='px-3 py-1 text-xl rounded-full'>mohdtabishkhan001@gmail.com</div> */}

        <div className="text-3xl p-2 text-center flex flex-col gap-4">
          <div className='font-light mt-12'> Hello,</div>
          <div className='font-light'> I am <span className='text-accent font-bold'>Mohd Tabish Khan</span>
          </div>
          <div className=' font-light sm:text-3xl text-2xl sm:m-0'> In pursuit to become a <br /><span className='font-bold'>web developer</span> and a <span className='font-bold'>designer</span></div>
        </div>


        {/* links */}
        <div className="text-xl mt-36 sm:mt-10 font-light tracking-wide"> Socials here:- </div>
        <div className='flex gap-6'>
          <a className={`bg-green-400 sm:h-${icon_small} sm:w-${icon_small} h-16 w-16 rounded-full opacity-60 hover:opacity-100`} href="https://peerlist.io/tabish" target="_blank" >
            <img className="w-full h-full rounded-full" src={peerlist} alt="" />
          </a>

          <a className={`h-16 w-16 rounded-full opacity-90 hover:opacity-100`} href="https://github.com/m-tabish" target="_blank" >
            <img className="w-full h-full rounded-full" src={github} alt="" />
          </a>

          <a className='bg-black h-16 w-16 rounded-full opacity-60 hover:opacity-100' href="https://twitter.com/papayafruit123" target="_blank" >
            <img className="w-full h-full rounded-full" src={twitter} alt="" />
          </a>

          <a className='bg-blue-400  h-16 w-16 rounded-full opacity-60 hover:opacity-100' href="https://www.linkedin.com/in/m-tabishk/" target="_blank" >
            <img className="w-full h-full rounded-full" src={linkedIn} alt="" />
          </a>

        </div>
      </div>
    </div>
  )
}

export default App
