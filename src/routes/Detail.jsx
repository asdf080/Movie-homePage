import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import  {  CircularProgressbar,buildStyles  }  from  'react-circular-progressbar' ; 
import  'react-circular-progressbar/dist/styles.css' ;
// https://www.npmjs.com/package/react-circular-progressbar

export default function Detail() {
  const {id} = useParams()
  const [info, setInfo] = useState('')
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODJkMDhlZjRiMGZhNDQzM2FhMTY1ZTNlYWU5MWE4OSIsInN1YiI6IjY1NzdhY2ZlYmJlMWRkMDBjNDBkMWM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1CaaK-PVd0aJ1_mIY8__gDtz886vOE4nyRPijt0G4V4'
      }
    };

fetch(url, options)
  .then(res => res.json())
  .then(json => {
    setInfo(json);
    console.log(json)
  })
  .catch(err => console.error('error:' + err));
  }, [id])

  return (
    <Layout>
      <div className='w-full'>
        <nav className='w-full h-10'>
          <ul className='h-full flex justify-center items-center gap-16'>
            <li>개요</li>
            <li>미디어</li>
            <li>팬덤</li>
            <li>공유</li>
          </ul>
        </nav>
        <header className={`relative w-full h-[570px] flex justify-center text-white`}>
          <div className='absolute top-0 left-0 w-full h-full -z-20'>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} alt="bimg" />
          </div>
          <div className='absolute top-0 left-0 w-full h-full -z-10 bg-gray-900/90'></div>
          <div className='w-[1300px] h-full py-[30px] px-10 flex'>
            <div className='w-[300px] h-[500px] bg-[#032541]'>
              <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}` || "error"} alt="img" />
              <div className='flex justify-center items-center pt-4'>{info.homepage?.includes("amazon")?
              <img className='max-h-[40px]' src="https://image.tmdb.org/t/p/w500/wyxcf7UpBqtTJdEfXxhRj7dhdx7.png" alt="img"/> : info.homepage?.includes("netflix")?
              <img className='max-h-[40px]' src="https://image.tmdb.org/t/p/w500/tyHnxjQJLH6h4iDQKhN5iqebWmX.png" alt="img"/> : null}</div>
            </div>
            <div className='w-[980px] h-full flex items-center pl-10'>
              <article>
                {/* 첫째줄 */}
                <h2 className='inline-block text-[35px] font-bold'>{info.original_title || "error"}</h2><span className='text-[35px] text-gray-300'> ({info.release_date?.slice(0,4) || "error"})</span><br />
                {/* 둘째줄 */}
                <span>{info.release_date || "error"} </span><span>({info.spoken_languages?.[0]?.iso_639_1}) | </span><span>{info.genres?.[0]?.name || "error"}, {info.genres?.[1]?.name || "error"}</span> | <span>{Math.floor(info.runtime/60)}h {info.runtime-60}m</span><br />
                {/* 셋째줄 */}
                <div className='flex items-center my-4'>
                <div className=' h-[70px] w-[70px] mr-2 font-bold'>
                <CircularProgressbar value={info.vote_average?.toFixed(1)*10 || "error"} text={`${info.vote_average?.toFixed(1)*10}%`} background='true' backgroundPadding='7' styles={buildStyles({
                  textColor: '#fff',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#000000',})}  />
                </div><span>회원<br />점수</span>
                </div>
                {/* 넷째줄 */}
                <div className='mt-5 leading-4 italic text-gray-300'>{info.tagline}</div>
                {/* 다섯째줄 */}
                <div className='my-3 font-bold text-2xl'>개요</div>
                <div className='my-3'>{info.overview}</div>
              </article>
            </div>
          </div>
        </header>
      </div>
    </Layout>
  )
}
