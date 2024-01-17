import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const navigate = useNavigate()
  const [keyWord, setKeyWord] = useState('')
  const handleClick = e => {
    e.preventDefault()
    navigate(`/search?keyword=${keyWord}`)
  }
  const handleChange = e => {
    setKeyWord(e.target.value)
  }

  const [data, setData] = useState('')
  const location = useLocation()
  const search = new URLSearchParams(location.search)
  const keyword = search.get("keyword")
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`;
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
        console.log(json)
        setData(json)
      })
      .catch(err => console.error('error:' + err));
  },[keyword])

  return (
    <Layout>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='border-b-2 w-full h-[45px] flex justify-center items-center'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <form className='h-full' onSubmit={handleClick}>
            <input className='w-[1150px] h-full px-4 mx-2 text-lg' type="search"
            placeholder={keyword}
            onChange = {handleChange}
            />
          </form>
        </div>
        <div className='w-[1200px] my-8'>
          <ul className='flex flex-wrap justify-between'>
            {data?.results?.map(data => (
              <li className='w-[550px] h-[150px] mx-6 my-3 pr-2 bg-white flex rounded-lg overflow-hidden shadow-lg truncate ...' key={data.id}>
                <div className='w-[120px] h-full bg-slate-500 '>
                  <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}  alt={data.title}
                  onError={(e) => e.currentTarget.src = "https://www.jnckl.or.kr/assets/images/image-not-found.png"}
                   />
                </div>
                <div className='w-[430px] flex flex-col justify-center px-6 truncate ...'>
                  <strong>{data.title}</strong>
                  <div className='text-gray-400'>{data.release_date}</div>
                  <div className='mt-2 truncate ...'>{data.overview}</div>
                </div>
              </li>

            ))}
          </ul>
        </div>
        </div>
    </Layout>
  )
}
