"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUser, fetchUser } from '../actions/useractions'


const dashboard = () => {


  const { data: session } = useSession()

  //state variables
  const [donerArr, setDonerArr] = useState([])
  const [total, setTotal] = useState(0)
  const [creatorform, setCreatorform] = useState({ name: "", email: "", tagline: "", rozarpayID: "", rozerSecrat: "" })


  //event handlers

  const handelCreate = () => {
    if (creatorform.name == "" || creatorform.tagline == "" || creatorform.rozarpayID == "" || creatorform.rozerSecrat == "") {


      toast("fill all the fields");
      
    } else {

      updateUser({
        name: creatorform.name,
        email: session.user.email,
        tagline: creatorform.tagline,
        rozarpayID: creatorform.rozarpayID,
        rozarpaySecrat: creatorform.rozerSecrat,
        donerArr: [],
        urlName: creatorform.name.toLowerCase().replace(/\s+/g, ''),

      })
      setCreatorform({ name: "", email: "", tagline: "", rozarpayID: "", rozerSecrat: "" })



    }

  }




  if (session) {

    useEffect(() => {


      setDonerArr(session.user.donerArr)

    }, [session])

    if (session.user.name == "") {

      return <>



        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition="Bounce"
        />
        {/* Same as */}
        <ToastContainer />

        <section className="text-gray-400 bg-gray-900 body-font h-[130vh]  flex items-center justify-center">
          <section className="text-gray-600 body-font  pt-24">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                  Create Profile
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-indigo-500">
                  Please enter your name,emal and message for your supporters.
                </p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 text-sm text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-graywhite1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={creatorform.name} onChange={(e) => { setCreatorform({ ...creatorform, [e.target.name]: e.target.value }) }}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 text-sm text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-graywhite1 px-3 leading-8 transition-colors duration-200 ease-in-out" defaultValue={session.user.email}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-white"
                      >
                        Tag Line
                      </label>
                      <textarea
                        id="message"
                        name="tagline"
                        className="w-full   bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        value={creatorform.tagline} onChange={(e) => { setCreatorform({ ...creatorform, [e.target.name]: e.target.value }) }}
                      />
                      <label htmlFor="name" className="leading-7 text-sm text-white">
                        Rozer Pay ID

                      </label>
                      <input
                        type="text"
                        id="name"
                        name="rozarpayID"
                        className="w-full   bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-graywhite1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={creatorform.rozarpayID} onChange={(e) => { setCreatorform({ ...creatorform, [e.target.name]: e.target.value }) }}
                      />

                      <label htmlFor="name" className="leading-7 text-sm text-white">
                        Rozer Pay Secrat
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="rozerSecrat"
                        className="w-full   bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-graywhite1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={creatorform.rozerSecrat} onChange={(e) => { setCreatorform({ ...creatorform, [e.target.name]: e.target.value }) }}
                      />

                    </div>

                  </div>


                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handelCreate}>
                      Create
                    </button>
                  </div>
                  <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <a className="text-indigo-500">getmeaoreo@gmail.com</a>
                    <p className="leading-normal my-5">
                      oreopur
                      <br />
                      oreo city, chai 000000
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </section>


      </>
    }

    return <>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />

      <div className="container h-[100vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">


        <section className="text-gray-400 bg-gray-900 body-font h-[100vh]">



          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col pt-32">


            <img src={session.user.image} alt="" className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0" />

            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-white text-lg title-font font-medium mb-2">
                {session.user.name.toUpperCase()}
              </h2>
              <p className="leading-relaxed text-base">
                {session.user.email}
              </p>

            </div>



          </div>
          <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5  mx-auto">
              <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                  {session.user.tagline.toUpperCase()}
                </h1>
                <button onClick={() => {
                  toast("copied to clipboard");
                  navigator.clipboard.writeText(`http://localhost:3000/${session.user.name.toLowerCase().replace(/\s+/g, '')}`);


                }} className="flex-shrink-0 text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-10 sm:mt-0">
                  copy link
                </button>
              </div>


              <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-5 mx-auto">

                  <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

                    {donerArr.map((user, index) => {

                      return <div key={index} className="p-2 sm:w-1/2 w-full" >

                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                            <path d="M22 4L12 14.01l-3-3" />
                          </svg>
                          <span className="title-font font-medium text-white">
                            received ₹{user.amount} oreo by {user.name} with a message
                            "{user.message}"

                          </span>
                        </div>
                      </div>



                    })}


                  </div>
                  <p className="flex mx-auto mt-16 text-white  py-2 px-8 focus:outline-none  rounded text-3xl font-bold w-[50vh]">
                    Total :- ₹{total} oreo
                  </p>
                </div>
              </section>
            </div>
          </section>



        </section>


      </div>

      {/* {console.log(session)}
      <button className='pt-16' onClick={() => signOut()}>Sign out</button> */}
    </>
  }

  redirect("/login")


}

export default dashboard
