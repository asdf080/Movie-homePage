import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
  function handleBack() {
    window.history.back();
  }
  const css = 'p-2 m-2 px-3 border-2 border-[#032541] rounded-lg hover:bg-[#032541] hover:text-white'
  return (
    <div className='m-8'>
      <h2 className='font-bold text-2xl'>🙄  페이지를 찾을 수 없습니다.</h2>
      <div className='mt-4 ml-3'>
        <Link to="/"><button className={css}>메인 페이지로 가기</button></Link>
        <button  className={css} onClick={handleBack}>뒤로 가기</button>
      </div>
    </div>
  )
}
