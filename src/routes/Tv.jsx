import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Item from '../components/Item';

export default function Tv() {
  const [lists, setLists] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    fetchData()
  },[]);

  const fetchData = (pageNum=1) => {
    const url = `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${pageNum}`;
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
        setLists(prev => [...prev, ...json.results])
      })
      .catch(err => console.error('error:' + err));
  }

  const handleLoadMore = () => {
    const nextPage = page+1;
    setPage(nextPage)
    fetchData(nextPage)
  }

  return (
    <Layout>
    <div className='w-full flex flex-col items-center justify-center pb-16'>
      <div className='w-[1000px] flex flex-wrap justify-between'>
        {/* item */}
        {lists?.map(item => (
          <Item key={item.id} item={item}/>
        ))}
      {/* load more */}
      <div onClick={handleLoadMore} className='w-[97%] py-3 mt-[40px] rounded-lg bg-[#01b4e4] text-white font-semibold text-center text-lg hover:text-black cursor-pointer'>Load More</div>
      </div>
    </div>
    </Layout>
  )
}
