import React from 'react'
import { Button } from './ui/button'
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Input } from './ui/input';
import {footerData} from "@/components/constant/footer-headings"

function Footer() {
  return (
    <>
    
    <footer className='
    py-[48px] px-[24px] xsm:p-[80px] 
    flex 
    flex-col 
    gap-[48px] xsm:gap-[80px]
    text-center xsm:text-start
    '>


{/* top div 1 */}
        <div className='
        w-full 
        flex
        flex-col xsm:flex-row
        justify-between 
        items-center
        '>

            <div className='
            text-center xsm:text-left
            w-[287px] xsm:w-auto
            '>
                <h3 className='text-[18px] leading-[27px] font-semibold '>Subscribe to our newsletter</h3>

                <p className='
                text-[16px] 
                leading-[24px]
                mt-[16px] xsm:mt-[0px]
                '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>



            <div>
                <div className=' 
                flex 
                flex-col xsm:flex-row
                items-center 
                gap-[16px]
                mt-[24px]
                w-full xsm:w-auto
                '>

                    {/* <input className=' 
                    w-full xsm:w-[265px] 
                    h-[48px] 
                    border-[1px] 
                    rounded-[5px] 
                    p-[12px] 
                    gap-[8px] 
                    text-[16px]' type='text' placeholder='Enter your email' /> */}

                    <Input placeholder='Enter your email' className='
                    w-full xsm:w-[265px] 
                    h-[48px] 
                    border-[black]'/>

                    <Button variant="transparentBtn" className='
                    w-full xsm:w-[119px]
                    h-[48px]
                    py-[12px]
                    px-[24px]                    
                    ' >Subscribe</Button>
                </div>

                <p className="
                text-[12px] 
                leading-[18px] 
                mt-[16px]
                text-center xsm:text-left
                ">By subscribing you agree to with our Privacy Policy</p>

            </div>

        </div>



{/* footer main content div 2        */}

        <div className='
        w-full 
        flex 
        flex-col xsm:flex-row 
        text-center xsm:text-start
        gap-[32px] xsm:gap-[125px] 
        '>

            <div className='
            inline-block xsm:block
            m-auto xsm:m-0
            '>
                <Image src={"/logo.png"} alt="Logo" width={130} height={40} />
            </div>
 
             
            {footerData.map((item,index) => {return(
            <div key={index}>
                <h1 className='text-[16px] leading-[24px] font-semibold mb-[24px]'>{item.heading}</h1>

                <ul className='flex flex-col gap-[16px]'>
                    <li><Link href={"/"}>{item.link1}</Link></li>
                    <li><Link href={"/"}>{item.link2}</Link></li>
                    <li><Link href={"/"}>{item.link3}</Link></li>
                    <li><Link href={"/"}>{item.link4}</Link></li>
                    <li><Link href={"/"}>{item.link5}</Link></li>
                </ul>

            </div>
            )})}

        </div>


{/* dosra div */}

        <div className="
        flex 
        items-end
        flex-col xsm:flex-row
        justify-center xsm:justify-between 
        border-t-[1px] 
        border-[black] 
        pt-[33px]">


            <div className="
            w-full
            flex 
            flex-col xsm:flex-row 
            gap-[24px]">

                <p className='
                text-center xsm:text-left
                text-[14px] 
                leading-[21px]
                '>2023 Suleman Khan. All right reserved.</p>

                <div className='
                flex 
                items-center 
                gap-[24px] 
                m-auto xsm:m-0
                '>
                <h2 className='text-[14px] leading-[21px] border-b-[1px] border-[black]'><Link href={"/"}>Privacy Policy</Link></h2>
                <h2 className='text-[14px] leading-[21px] border-b-[1px] border-[black]'><Link href={"/"}>Terms of Service</Link></h2>
                <h2 className='text-[14px] leading-[21px] border-b-[1px] border-[black]'><Link href={"/"}>Cookies Settings</Link></h2> 
                </div>
            </div>


            <div className='
            flex 
            gap-[12px]
            mt-[24px] xsm:[0px]
            m-auto
            '>
            <FaFacebookF size={24} />
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
            </div>

        </div>


    </footer>

    </>
  )
}

export default Footer