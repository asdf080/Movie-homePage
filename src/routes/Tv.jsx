import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Pagination from "react-js-pagination";
import "./Paging.css"
import Item from '../components/Item';

export default function Tv() {
  const [lists, setLists] = useState("")
  const [page, setPage] = useState(1)
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${page}`;
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
      setLists(json)
      console.log(json)
    })
    .catch(err => console.error('error:' + err));
  },[page]);

  const handlePageChange = (page) => {
    setPage(page)
  }

  return (
    <Layout>
    <div className='w-full flex flex-col items-center justify-center pb-16'>
      <div className='w-[1000px] flex flex-wrap justify-between'>
        {/* item */}
        {lists?.results?.map(item => (
          <Item item={item}/>
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
