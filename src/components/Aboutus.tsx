import React from 'react'
import Image from "next/image"
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { Button } from './ui/button';
import { TeamData } from "./constant/teamData"  // Ensure the path is correct

function AboutUs() {
  return (
    <>
      <section className='w-full py-[48px] xsm:py-[112px] px-[32px] xsm:px-[0px] text-center'>
        <h1 className='myH1 mb-[24px]'>Our team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

        {/* Cards main div */}
        <div className='w-full h-[723px] xsm:h-auto grid grid-cols-1 xsm:grid-cols-3 xsm:grid-rows-2 gap-x-[24px] xsm:gap-x-[48px] gap-y-[48px] xsm:gap-y-[64px] mt-[48px] xsm:mt-[80px] overflow-y-auto'>
          {TeamData.map((item, index) => (
            <div className='flex flex-col justify-center' key={index}>
                <div className='inline-block m-auto mb-[24px]'>
                    <Image src={item.src} alt={item.name} width={80} height={80}/>
                </div>
                <h1 className='text-[20px] leading-[30px] font-semibold'>{item.name}</h1>
                {/* Removed the tittle paragraph */}
                <div className='flex justify-center gap-[14px] m-auto'>
                    <FaLinkedin size={24} />
                    <FaTwitter size={24} />
                    <FiGlobe size={24} />
                </div>
            </div>
          ))}
        </div>

        <Button variant="transparentBtn" className="mt-[48px] xsm:hidden">View All</Button>
      </section>
    </>
  );
}

export default AboutUs;
