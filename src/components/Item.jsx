import React from 'react'
import  {  CircularProgressbar,buildStyles  }  from  'react-circular-progressbar' ; 
import  'react-circular-progressbar/dist/styles.css' ;
import { Link } from 'react-router-dom'

export default function Item({item}) {
  return (
    <>
     <Link to={`/detail/${item.id}`}>
      <div className='w-[180px] h-[394px] rounded-lg shadow-lg overflow-hidden mt-[30px]'>
        {/* 그림 */}
        <div className='w-full h-[273px] '>
          <img className='w-full h-full object-cover' src={`https://www.themoviedb.org/t/p/w150_and_h225_face${item.poster_path}`} alt="img"
          onError={(e) => e.currentTarget.src = "https://www.jnckl.or.kr/assets/images/image-not-found.png"}
            />
        </div>
        {/* 내용 */}
        <div className='relative w-full h-[121px] pt-[25px] px-2'>
          <h2 className='font-semibold leading-4'>{item.original_title || item.original_name}</h2>
          <p className='text-gray-500'>{item.release_date || item.first_air_date}</p>
          {/* 평가 */}
          <div className='absolute w-10 h-10 -top-6 left-2'>
            <CircularProgressbar value={item.vote_average.toFixed(1)*10} text={item.vote_average.toFixed(1)} background='true' backgroundPadding='7' styles={buildStyles({
                textColor: '#fff',
                trailColor: '#d6d6d6',
                backgroundColor: '#000000',})}  />
          </div>
        </div>
      </div>
      </Link>
    </>
  )
}
