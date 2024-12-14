"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { updatePayment } from '../actions/useractions'


const username = ({ params }) => {
  const { data: session } = useSession()

  const [donerForm, setDonerForm] = useState({ name: "", amount: "", message: "" })



  const handelDoner = () => {

    updatePayment(donerForm,params.username)
    setDonerForm({ name: "", amount: "", message: "" })
  }


  

  if (session) {

  if(session.user.url==params.username){

    return (




      <div className="h-[100vh] dark:bg-gray-700 bg-gray-200 pt-28 flex justify-center items-center flex-col">



        <span className="flex">

          <div className="max-w-lg h-[80vh]  bg-white dark:bg-gray-900  overflow-hidden shadow-lg">
            <div className=" px-4 pb-6">
              <div className="text-center my-4">
                <img
                  className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                  src={session.user.image}
                  alt=""
                />
                <div className="py-2">
                  <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                    {session.user.name.toUpperCase()}
                  </h3>


                  <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                    <svg
                      className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                    >
                      <path
                        className=""
                        d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                      />
                    </svg>
                    OK Nagar,India
                  </div>
                </div>
              </div>

              <p className="text-white">{session.user.tagline.toUpperCase()}</p>


            </div>

            <div className="flex flex-col lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

              {session.user.donerArr.map((user, index) => {
                return <div key={index} className="p-2 w-full" >
                 
                    
                    <span className="title-font font-medium text-white">
                      Received ₹{user.amount} Oreo By {user.name} With A Message
                      "{user.message}"

                    </span>
                 
                </div>
              })}


            </div>

          </div>

          <div className="max-w-lg h-[80vh]  bg-white dark:bg-gray-900 overflow-hidden shadow-lg">
            <div className="border-b px-4 pb-6 flex justify-center flex-col">
              <div className="text-center my-4">

                <div className="py-2">
                  <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                    Support Your Creator
                  </h3>


                  <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">

                    Get Me A Oreo
                  </div>
                </div>
              </div>

              <label htmlFor="name" className="leading-7 text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full  bg-opacity-50 mb-3 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-graywhite1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={donerForm.name} onChange={(e) => {
                  setDonerForm({ ...donerForm, [e.target.name]: e.target.value })

                }}
              />


              <label htmlFor="message" className="leading-7 text-sm text-white">
                Message
              </label>
              <input
                type="text"
                id="message"
                name="message"
                className="w-full  bg-opacity-50 mb-3 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-graywhite1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={donerForm.message} onChange={(e) => {
                  setDonerForm({ ...donerForm, [e.target.name]: e.target.value })

                }}
              />

              <label htmlFor="amount" className="leading-7 text-sm text-white">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="w-full  bg-opacity-50 mb-3 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-graywhite1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={donerForm.amount} onChange={(e) => {
                  setDonerForm({ ...donerForm, [e.target.name]: e.target.value })

                }}
              />



              <div className="flex gap-2 px-2">
                <button className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2" onClick={handelDoner}>
                  Give Oreo 🍪
                </button>

              </div>
            </div>
            <div className="px-4 py-4">
              <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                <svg
                  className="h-6 w-6 text-gray-600 dark:text-gray-400"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path
                    className=""
                    d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                  />
                </svg>
                <span>
                  <strong className="text-black dark:text-white">800k</strong> Oreo Recieved

                </span>
              </div>



            </div>

          </div>


        </span>


      </div>



    )

  }



    

  }

  

  return (
    <div className="h-screen dark:bg-gray-700 bg-gray-200 pt-36">

      

      <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-4 pb-6">
          <div className="text-center my-4">
            <img
              className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
              src=""
              alt=""
            />
            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                Not Found
              </h3>
              <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                <svg
                  className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path
                    className=""
                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  />
                </svg>
                --
              </div>
            </div>
          </div>
          <div className="flex gap-2 px-2">
            <button className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
              Give Chai ☕
            </button>



          </div>
        </div>
        <div className="px-4 py-4">
          <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
            <svg
              className="h-6 w-6 text-gray-600 dark:text-gray-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <path
                className=""
                d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
              />
            </svg>
            <span>
              <strong className="text-black dark:text-white">0</strong> Followers

            </span>
          </div>
          <div className="flex">

          </div>
        </div>
      </div>

    </div>
  )

}

export default username
