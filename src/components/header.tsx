"use client"
import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { IoMenu } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from './ui/button';

function Header() {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    
    <header className='w-full flex flex-col gap-[16px]'>

{/* top div */}
        <div className='w-full px-[30px] bg-headerColor h-[54px]  xsm:flex justify-between items-center hidden 
        border-b-[1px] border-[black]'>

            <div className='h-[30px] flex justify-center items-center gap-[16px] text-[14px] leading-[150%]'>
                <p>Phone Number: (021)99201201</p>
                <div className='w-[1px] h-[30px] bg-[#676767] '></div>
                <p>Email:education@governorsindh.com</p>
            </div>


            <div className='flex justify-center items-center gap-[12px] '>
            <FaFacebookF size={24} />
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
            </div>

        </div>


{/* bottom div */}
        <div className='w-full h-[72px] xsm:px-[64px] py-[15px] bg-headerColor flex justify-between items-center px-[24px]
        border-b-[1px] border-[black]'>

            <Image src={"/logo.png"} alt="logo" width={130} height={41} />

            <div className='flex justify-between items-center gap-[32px]  '>

                {showMenu == true ? (
                <ul className='flex flex-col gap-[10px] justify-center items-center text-[14px] absolute top-[60px] right-[40px] w-[35%] h-[27vh] p-[10px] bg-black text-white'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/testimonial">Testimonial</Link></li>
                </ul>
                ) :
                (
                <ul className='xsm:flex gap-[52px] justify-center items-center text-[16px] hidden'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/testimonial">Testimonial</Link></li>
                </ul>
                )}



                <div className='xsm:flex justify-center items-center gap-[16px] hidden'>
                    <Button variant={'transparentBtn'}>Login</Button>
                    <Button>Sign Up</Button>
                </div>

            </div>

            <IoMenu size={24} className='xsm:hidden' onClick={()=>{setShowMenu(!showMenu)}} />

        </div>

    </header>

    </>
  )
}

export default Header