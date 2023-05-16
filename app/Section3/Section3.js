import React from 'react';
import design from '/public/design.png'
import code from '/public/code.png'
import consulting from '/public/consulting.png'
import Image from 'next/image';

const Section3 = () => {
  return (
    <div className=' sm:flex-row ml-auto mt-20 mx-auto shadow-lg overflow-hidden ml-16  flex-col justify-center text-center items-center mx-auto flex gap-10'>
      <div className='sm: h-[330px] w-[330px] overflow-hidden flex bg-white shadow-lg justify-center text-center  w-[440px] h-[460px] rounded-xl'>
        <Image className='h-[90px] w-[90px] object-contain mt-8' src={design} alt="" />
        <p className='justify-center absolute mt-36 font-semibold font-poppins align-middle items-center mt-42'>Beautiful Design</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-48'>Creating elegent designs suited for your needs following core design theory</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[16.5rem] text-teal-500'>Design Tools | Use</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[19.4rem]'>Photoshop</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[21.4rem]'>Illustrator</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[23.4rem]'>Figma</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[25.4rem]'>Indesign</p>
      </div>
      <div className='sm: h-[330px] w-[330px] overflow-hidden flex bg-white justify-center shadow-lg text-center  w-[440px] h-[460px] rounded-xl'>
        <Image className='h-[90px] w-[90px] object-contain mt-8' src={code} alt="" />
        <p className='justify-center absolute mt-36 font-semibold font-poppins align-middle items-center mt-42'>Code your own dream project</p>
        <p className='justify-center absolute w-[400px] mt-36 font-semibold font-poppins align-middle items-center mt-48'>Do you have any idea for your next great website? Lets make it a really</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[16.5rem] text-teal-500'>Design Tools | Use</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[19.4rem]'>Photoshop</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[21.4rem]'>Illustrator</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[23.4rem]'>Figma</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[25.4rem]'>Indesign</p>
      </div>
      <div className='sm: h-[330px] w-[330px] overflow-hidden flex bg-white justify-center shadow-lg text-center  w-[440px] h-[460px] rounded-xl'>
        <Image className='h-[90px] w-[90px] object-contain mt-8' src={consulting} alt="" />
        <p className='justify-center absolute mt-36 font-semibold font-poppins align-middle items-center mt-42'>Consulting</p>
        <p className='justify-center absolute w-[400px] mt-36 font-semibold font-poppins align-middle items-center mt-48'>Are you intrested in feedback for your current project? I can give you tips and tricks to level up</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[16.5rem] text-teal-500'>Design Tools | Use</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[19.4rem]'>Photoshop</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[21.4rem]'>Illustrator</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[23.4rem]'>Figma</p>
        <p className='justify-center absolute w-[330px] mt-36 font-semibold font-poppins align-middle items-center mt-[25.4rem]'>Indesign</p>
      </div>
    </div>
  )
}

export default Section3
