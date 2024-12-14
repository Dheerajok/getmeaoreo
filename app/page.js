"use client"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
   <>
   
   <div className=" md:h-[230vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] lg:w-[100%]">

  
    <div className="intro flex justify-center items-center h-[101vh] md:pt-[5%] flex-col gap-1 border-b-2">
    <h1 className="font-bold text-4xl md:text-6xl text-white">Buy Me A Oreo</h1>
    <p className="text-white text-lg md:text-2xl mt-1 md:mt-5 w-[90%] md:w-[50%] justify-center items-center text-center">Buy me oreo helps creators receive friendly support from fans by sponsoring creator a oreo.</p><p className="text-white text-xl mt-1 w-[90%] md:w-[50%] text-center">
    No integration, paid instantly & 100% commission free. <Link href="/login" className="underline text-purple-700">Try us?</Link></p>

    <span className="p-5">
    <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link href="/login">Start Here</Link></button>

    <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><Link href="/about">Read More</Link></button>

    </span>
    </div>

    
    <div className="intro flex justify-center items-center h-[110vh] md:h-[50vh] flex-col gap-1 border-b-2">
    <h1 className="font-bold text-2xl md:text-3xl text-white ">Your fans can buy you a oreo</h1>

    <div className="container w-full flex justify-center items-center flex-col lg:flex-row">

      
    <span className="flex justify-center flex-col items-center m-9">

    <img src="/man.gif" alt="man" width={100} height={100} className="rounded-full"/>
      
    

      <p className="text-white text-xl mt-5 w-[70%] justify-center items-center text-center font-bold">Fund Yourself</p><p className="text-white text-xl mt-1 w-[100%] text-center">
    Your Fans are Ready to Help You</p></span>

    <span className="flex justify-center flex-col items-center m-9">
      
      <img src="/dollar.gif" alt="man" width={100} height={100} className="rounded-full"/>

      <p className="text-white text-xl mt-5 w-[70%] justify-center items-center text-center font-bold">Fund Yourself</p><p className="text-white text-xl mt-1 w-[100%] text-center">
    Your Fans are Ready to Help You</p></span>

    <span className="flex justify-center flex-col items-center m-9">
      
    <img src="/group.gif" alt="man" width={100} height={100} className="rounded-full"/>

      <p className="text-white text-xl mt-5 w-[70%] justify-center items-center text-center font-bold">Fund Yourself</p><p className="text-white text-xl mt-1 w-[100%] text-center">
    Your Fans are Ready to Help You</p></span>


    </div>
    
    


    </div>

    
    <div className="intro flex justify-center items-center  p-10 md:h-[70vh] pt-[5%] flex-col gap-1">
    <h1 className="font-bold text-2xl md:text-3xl text-white">Learn More About Us</h1>
    <p className="text-white text-2xl mt-5 w-[90%] justify-center items-center text-justify md:text-center  hidden md:flex">At Get Me A oreo, we are dedicated to supporting developers, creators, and influencers by connecting them with their supporters. Our platform enables individuals to fund their projects and ideas, providing a space where creativity and innovation can thrive.</p>

    <p className="text-white text-2xl mt-5 w-[80%] justify-center items-center text-justify md:text-center hidden md:flex">Our mission is to empower talented individuals by facilitating financial support, allowing them to focus on what they do best – creating. Whether you're a developer coding the next big app, a content creator making engaging videos, or an influencer sharing your passion, Get Me A oreo is here to help you achieve your goals.

</p>
    
    <p className="text-white text-xl mt-5 w-[100%] md:w-[70%] items-center text-justify md:text-center">
    We believe in the power of community and the impact of collective support. By providing a platform for patrons to contribute, we aim to transform dreams into reality and foster a culture of creativity and innovation. <Link href="/login" className="underline text-purple-700">Try us?</Link></p>

  
    </div>

   </div>

   </>
  );
}
