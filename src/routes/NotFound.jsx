import React from 'react'

export default function NotFound() {
  function handleBack() {
    window.history.back();
  }
  
  return (
    <div className='m-8'>
      <h2 className='font-bold text-2xl'>🙄 페이지를 찾을 수 없습니다.</h2>
      <button>메인 페이지로 가기</button><br />
      <button onClick={handleBack}>뒤로 가기</button>

    </div>
  )
}
