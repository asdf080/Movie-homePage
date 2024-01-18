import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import  {  CircularProgressbar,buildStyles  }  from  'react-circular-progressbar' ; 
import  'react-circular-progressbar/dist/styles.css' ;
import "./Detail.css"
// https://www.npmjs.com/package/react-circular-progressbar

export default function Detail() {
  const {id} = useParams();
  const [info, setInfo] = useState('');
  const [cast, setCast] = useState('');
  const [keywords, setKeywords] = useState('')
  const [video, setVideo] = useState([])
  // 영화 정보 
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
    })
    .catch(err => console.error('error:' + err));
  }, [id])
  // 크레딧 정보
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODJkMDhlZjRiMGZhNDQzM2FhMTY1ZTNlYWU5MWE4OSIsInN1YiI6IjY1NzdhY2ZlYmJlMWRkMDBjNDBkMWM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1CaaK-PVd0aJ1_mIY8__gDtz886vOE4nyRPijt0G4V4'
      }
    };
    
    fetch(url, options)
      .then(res => res?.json())
      .then(json => {
        setCast(json)
        console.clear()
      })
      .catch(err => console.error('error:' + err));
  }, [id])
  // 키워드
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/keywords`;
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
        setKeywords(json)
      })
      .catch(err => console.error('error:' + err));
  }, [id])
  // 비디오
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
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
        setVideo(json.results)
        console.clear()
      })
      .catch(err => console.error('error:' + err));
  }, [id])

  return (
    <Layout>
      <div className='w-full'>
        <header className={`relative w-full h-[570px] flex justify-center text-white`}>
          <div className='absolute top-0 left-0 w-full h-full -z-20'>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${info?.backdrop_path}`} alt="bimg" />
          </div>
          <div className='absolute top-0 left-0 w-full h-full -z-10 bg-gray-900/90'></div>
          <div className='w-[1300px] h-full py-[30px] px-10 flex'>
            <div className='w-[300px] h-[500px] bg-[#032541]'>
              <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${info?.poster_path}` || "loading"} alt="img" />
              {/* <div className='flex justify-center items-center pt-4'>{info.homepage?.includes("amazon")?
              <img className='max-h-[40px]' src="https://image.tmdb.org/t/p/w500/wyxcf7UpBqtTJdEfXxhRj7dhdx7.png" alt="img"/> : info.homepage?.includes("netflix")?
              <img className='max-h-[40px]' src="https://image.tmdb.org/t/p/w500/tyHnxjQJLH6h4iDQKhN5iqebWmX.png" alt="img"/> : null}</div> */}
            </div>
            <div className='w-[980px] h-full flex items-center pl-10'>
              <article>
                {/* 첫째줄 */}
                <h2 className='inline-block text-[35px] font-bold'>{info?.original_title || "loading"}</h2><span className='text-[35px] text-gray-300'> ({info?.release_date?.slice(0,4) || "loading"})</span><br />
                {/* 둘째줄 */}
                <span>{info?.release_date || "loading"} </span><span>({info.spoken_languages?.[0]?.iso_639_1}) | </span><span>{info.genres?.[0]?.name || "loading"}, {info.genres?.[1]?.name || "loading"}</span> | <span>{Math.floor(info.runtime/60)}h {info.runtime-60}m</span><br />
                {/* 셋째줄 */}
                <div className='flex items-center my-4'>
                <div className=' h-[70px] w-[70px] mr-2 font-bold'>
                <CircularProgressbar value={info.vote_average?.toFixed(1)*10 || "loading"} text={`${info.vote_average?.toFixed(1)*10}%`} background='true' backgroundPadding='7' styles={buildStyles({
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
        <main className='flex justify-center'>
        <section className='w-[1100px] h-full my-[30px]'>
          <h2 className='text-[22px] font-bold mb-5'>주요 출연진</h2>
          <ul className='flex flex-wrap mb-8'>
            {cast?.cast?.slice(0, 6).map(cast => (
              <li key={cast.id} className='w-[150px] h-[265px] m-2 mx-4 flex flex-col rounded-lg overflow-hidden shadow-lg'>
                <div className='w-full h-[175px]'><img className='w-full h-full object-cover' src={`https://media.themoviedb.org/t/p/w138_and_h175_face${cast.profile_path}`} alt="img"
                onError={(e) => e.currentTarget.src = "https://www.jnckl.or.kr/assets/images/image-not-found.png"}
                 /></div>
                <div className='w-full flex-grow p-2'>
                  <strong>{cast.name}</strong>
                  <p className='text-gray text-[14px]'>{cast.character}</p>
                </div>
              </li>
            ))}
          </ul>
          <h2 className='text-[22px] font-bold mb-5'>주요 제작진</h2>
          <ul className='flex flex-wrap justify-around mb-8'>
            {cast?.crew?.slice(0,4).map(crew => (
            <li key={crew.id} className='w-[250px] h-[100px] m-2 shadow-lg overflow-hidden rounded-lg flex'>
              <div className='w-[100px] h-full'>
                <img className='w-full h-full object-cover' src={`https://media.themoviedb.org/t/p/w138_and_h175_face${crew.profile_path}`} alt="img"
                onError={(e) => e.currentTarget.src = "https://www.jnckl.or.kr/assets/images/image-not-found.png"}
                 />
              </div>
              <div className='flex flex-col justify-center p-3'>
                <strong>{crew.name}</strong>
                <p>{crew.known_for_department}</p>
              </div>
            </li>
            ))}
          </ul>
          <hr />
          <h2 className='text-[22px] font-bold mb-5 mt-8'>트레일러</h2>
          <ul id="detailVideoUl" className='flex overflow-x-scroll'>
            {video?.map(v => (
              <li className='mx-[10px] mb-2' key={v.key}>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${v.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
              </li>
            ))}
          </ul>
        </section>
        <aside className='w-[275px] h-full my-[40px] pl-5'>
          <ul>
            <li className='mb-5'>
              <h2 className='font-bold'>PRODUCTION</h2>
              <p>{info?.production_companies?.[0]?.name}</p>
            </li>
            <li className='mb-5'>
              <h2 className='font-bold'>STATUS</h2>
              <p>{info?.status}</p>
            </li>
            <li className='mb-5'>
              <h2 className='font-bold'>LANGUAGE</h2>
              <p>{info?.spoken_languages?.[0]?.english_name}</p>
              <p>{info?.spoken_languages?.[1]?.english_name}</p>
            </li>
            <li className='mb-5'>
              <h2 className='font-bold'>BUDGET</h2>
              <p>{"$"+info?.budget?.toLocaleString() || "-"}</p>
            </li>
            <li className='mb-5'>
              <h2 className='font-bold'>REVENUE</h2>
              <p>{"$"+info?.revenue?.toLocaleString() || "-"}</p>
            </li>
            <li className='mb-5'>
              <h2 className='font-bold mb-1'>KEYWORD</h2>
              <ul className='flex flex-wrap'>
                {keywords?.keywords?.map(keyword => (
                  <li key={keyword.name} className='bg-gray-100 rounded-sm m-1 p-1 px-2 text-[15px]'>{keyword.name}</li>
                ))}
              </ul>
            </li>
          </ul>
        </aside>
        </main>
      </div>
    </Layout>
  )
}
