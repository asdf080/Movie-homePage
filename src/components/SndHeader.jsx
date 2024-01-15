import React from 'react'

export default function SndHeader() {
  return (
    <header className='w-full flex justify-center'>
      <section className='w-[1300px] h-[360px] bg-[url("https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg")] bg-center bg-cover relative flex items-center'>
      <article className='z-10 w-full min-h-[244px] text-white px-[40px] py-[30px] flex flex-col justify-between'>
        <div>
          <h2 className='text-[60px] sansTit font-semibold leading-[4rem] gradTxt'>That's a <br /> Wrap 2023</h2>
          <p className='text-[20px] sansTit leading-9 font-medium mt-1 mb-5'>The best (and worst) of the year from TMDB.</p>
          <button className='border-2 border-white p-2 px-4 rounded-3xl font-semibold'>Check it out →</button>
        </div>
        </article>
        {/* 가상 div */}
        <div className='absolute bg-black/70 top-0 left-0 w-full h-full flex items-center justify-center'></div>
      </section>
    </header>
  )
}
