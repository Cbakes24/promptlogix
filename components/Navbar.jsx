'use client'

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders} from "next-auth/react"

const Navbar = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            <Image
                src="/assets/images/logo.svg"
                alt="Promptlogix Logo"
                width={30}
                height={30}
                className="oobect-contain"
            />
            <p className="logo_text">Promptlogix</p>
        </Link>
        {/* Mobile Navigation*/}
        <div className="sm:flex hidden">

        </div>
    </nav>
  )
}

export default Navbar
