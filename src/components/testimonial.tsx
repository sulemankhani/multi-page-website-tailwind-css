import React from 'react'
import { IoIosStar } from "react-icons/io";
import Image from "next/image"
import { TeamData } from "./constant/teamData"

function Testimonial() {


    const sortData = [...TeamData].sort((a, b) => a.id - b.id);

  return (
    <section className='
    text-center xsm:text-left
    py-[112px] 
    px-[24px] xsm:px-[64px]'>

        <h1 className='
        text-[32px] xsm:myH1
        leading-[41px] 
        font-bold
        '>Customer testimonials</h1>
        <p className='text-[18px] leading-[27px] mt-[24px] mb-[80px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


        <div className="w-full flex flex-row gap-[32px] overflow-x-auto ">

{/* Card Div */}
        
        {sortData.map((item)=>{return(

            <div className=' shrink-0 grow-0 p-[32px] border-[1px] border-[black] w-[362px] flex flex-col gap-[24px] ' key={item.id} >


                <div className='flex gap-1'>
                <IoIosStar size={20}/>
                <IoIosStar size={20}/>
                <IoIosStar size={20}/>
                <IoIosStar size={20}/>
                <IoIosStar size={20}/>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>


                <div className='flex gap-[20px]'>
                    <div className='w-[56px] h-[56px] rounded-full overflow-hidden '>
                        <Image src={item.src} alt="choti pic" width={56} height={56}/>
                    </div>
                     
                    <div className='flex flex-col'>
                        <h5 className='text-[16px] leading-[24px] font-semibold'>{item.name}</h5>
                      
                    </div>
                </div>


            </div>

        )})}


        </div>


    </section>
  )
}

export default Testimonial