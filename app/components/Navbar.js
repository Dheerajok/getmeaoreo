"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {

  const { data: session } = useSession()


  return (
    <header className="text-white body-font bg-black fixed w-full h-20 overflow-hidden">
      <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Get Me A Oreo</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-blue-600 ">Home</Link>
          {/* <Link href="/login" className="mr-5 hover:text-blue-600 ">Log Out</Link> */}
          <Link href="/about" className="mr-5 hover:text-blue-600 ">About</Link>
          <Link href="/contact" className="mr-5 hover:text-blue-600 ">Contact</Link>

{session?<><button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm 
      px-5 py-2.5 text-center me-2 mb-2 mt-2"><Link href="/dashboard">Dashboard</Link></button></>:""}
          

          {session ? <><button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:bg-red-600 font-medium rounded-lg text-sm 
      px-5 py-2.5 text-center me-2 mb-2 mt-2" onClick={() => signOut()}>Log out</button></> : <><button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm 
      px-5 py-2.5 text-center me-2 mb-2 mt-2"><Link href="/login">Login</Link></button></>}





        </nav>

      </div>
    </header>

  )
}

export default Navbar
