import React from 'react'
import Layout from '../components/Layout'
import logo from "../assets/footerLogo.png"

export default function Wrap23() {
  return (
    <Layout>
    <header className='w-full h-[750px] relative'>
    <div className='w-full h-full bg-[url("https://media.themoviedb.org/t/p/w3840_and_h2160_multi_faces/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg")] bg-center bg-cover -z-10 flex justify-center items-center'>
    <div className='z-20 text-white font-bold relative flex flex-col justify-center items-center'>
    <div className='flex justify-center items-start'>
    <img className='absolute left-0 w-[185px] h-[133px] mt-4' src={logo} alt="123"/>
    <div className='gradTit23 text-[180px] leading-[160px] ml-[100px] mb-[35px] px-20 overflow-visible'>
      <h2>&nbsp;That's </h2>
      <h2 className='-indent-20'>a Wrap</h2>
      <h2>&nbsp;&nbsp;2023</h2>
      </div>
    </div>
    <div className='raleWay text-blue-300 text-[24px] mb-4'>Year eight. 2023. Been wondering about our best and worst of the year? <br /> Keep scrolling to find out what (and who) made our lists this year.</div>
    <div className='raleWay text-[20px]'>This time with your personal best and worst.</div>
    </div>
    {/* 가상 div */}
    <div className='absolute bg-black/70 top-0 left-0 w-full h-full'></div>
    </div>
    </header>
    <section className='w-full h-[800px] bg-black'>

    </section>
    </Layout>
  )
}
