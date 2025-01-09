import React from 'react'
import { Button } from './ui/button'
import Image from "next/image"

function Hero() {
  return (
    <>
    
      <section>

{/* top div */}
        <div className='
        flex
        flex-col xsm:flex-row
        '>

{/* left content div */}
          <div className='
          w-full xsm:w-1/2 
          py-[64px] xsm:py-[250px]
          px-[24px] xsm:px-0
          flex 
          justify-center 
          items-center'>

          <div className='
          w-full 
          px-0 xsm:px-[80px]
          '>

            <h1 className='
            text-[40px] xsm:text-[56px] 
            leading-[48px] xsm:leading-[67px] 
            font-bold 
            mb-[24px] 
            '>
              Learn new skills <br/> online or onsite</h1>
            <p className='text-[18px] leading-[27px] mb-[40px] '>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs <br/> Governor Initiative FOR ARTIFICIAL INTELLIGENCE, WEB 3.0 & METAVERSE (GOVERNoR INITIATIVE).</p>

            <Button className='mr-[16px]'>Start learning now</Button>
            <Button variant={'transparentBtn'} className='mt-[13px] xsm:mt-[0px]'>Explore Courses</Button>
            
          </div>
          
          </div>


{/* right image div */}
          <div className='
          w-full xsm:w-1/2 
          h-[390px] xsm:h-[800px]
          flex 
          justify-center 
          overflow-hidden
          '>
            <Image src={"/main_image.png"} alt="Header pic" width={640} height={900} className='
            w-[428px] xsm:w-[640px]
            h-[500px] xsm:h-[900px]
            '/>
          </div>

        </div>


 

{/* bottom div */}
        <div className='
        w-full 
        h-[228px] 
        bg-headerColor 
        py-[48px] xsm:py-[0px]
        px-[24px] xsm:px-[8px] 
        flex
        gap-[24px] xsm:gap-[0px]
        flex-col xsm:flex-row 
        items-center 
        justify-between 
        '>

          <div>
            <p className='
            w-[320px] 
            text-[20px] xsm:text-[24px] 
            leading-[27px] xsm:leading-[33px] 
            font-bold 
            text-center xsm:text-left
            
            '>Trusted by All Sindh and proud ..</p>
          </div>

          <div className='
          flex 
          gap-[16px] xsm:gap-[19px] 
          overflow-x-auto 
          '>
            <Image src={"/logos/pehla.jpg"} alt="logo1" width={123} height={38} className='
            w-[107px] xsm:w-[123px]
            h-[33px]  xsm:h-[38px]'/>
            <Image src={"/logos/inspum1.jpg"} alt="logo2" width={123} height={38} className='
            w-[107px] xsm:w-[123px]
            h-[33px]  xsm:h-[38px]'/>
            <Image src={"/logos/inspum2.jpg"} alt="logo3" width={123} height={38} className='
            w-[107px] xsm:w-[123px]
            h-[33px]  xsm:h-[38px]'/>
            <Image src={"/logos/inspum3.jpg"} alt="logo4" width={123} height={38} className='
            w-[107px] xsm:w-[123px]
            h-[33px]  xsm:h-[38px]'/>
            <Image src={"/logos/inspum4.jpg"} alt="logo5" width={123} height={38} className='
            w-[107px] xsm:w-[123px]
            h-[33px]  xsm:h-[38px]'/>
            <Image src={"/logos/inspum5.jpg"} alt="logo6" width={123} height={38} className='
            w-[107px] xsm:w-[123px]
            h-[33px]  xsm:h-[38px]'/>
          </div>
        </div>

      </section>

    </>
  )
}

export default Hero