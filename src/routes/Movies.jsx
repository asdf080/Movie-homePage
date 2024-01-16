import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import  {  CircularProgressbar,buildStyles  }  from  'react-circular-progressbar' ; 
import  'react-circular-progressbar/dist/styles.css' ;
import Pagination from "react-js-pagination";
import "./Paging.css"
// https://clolee.tistory.com/127
// https://www.npmjs.com/package/react-js-pagination

export default function Movies() {
  const [lists, setLists] = useState("")
  const [page, setPage] = useState(1)
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
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
      setLists(json)
    })
    .catch(err => console.error('error:' + err));
  },[page]);

  const handlePageChange = (page) => {
    setPage(page)
  }

  return (
    <Layout>
    <div className='w-full flex flex-col items-center justify-center py-16'>
      <div className='w-[1000px] flex flex-wrap justify-between'>
        {/* item */}
        {lists?.results?.map(item => (
          <div key={item.id} className='w-[180px] h-[394px] rounded-lg shadow-lg overflow-hidden mt-[30px]'>
            {/* 그림 */}
            <div className='w-full h-[273px] '>
              <img className='w-full h-full object-cover' src={`https://www.themoviedb.org/t/p/w150_and_h225_face${item.poster_path}`} alt="img"
              onError={(e) => e.currentTarget.src = "https://www.jnckl.or.kr/assets/images/image-not-found.png"}
               />
            </div>
            {/* 내용 */}
            <div className='relative w-full h-[121px] pt-[20px] px-2'>
              <h2 className='font-semibold '>{item.original_title}</h2>
              <p className='text-gray-500'>{item.release_date}</p>
              {/* 평가 */}
              <div className='absolute w-10 h-10 -top-6 left-2'>
                <CircularProgressbar value={item.vote_average.toFixed(1)*10} text={item.vote_average.toFixed(1)} background='true' backgroundPadding='7' styles={buildStyles({
                    textColor: '#fff',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#000000',})}  />
              </div>
            </div>
          </div>
        ))}
      </div>
    <div className='pt-4'>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={lists?.total_pages}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </div>
    </div>
    </Layout>
  )
}
