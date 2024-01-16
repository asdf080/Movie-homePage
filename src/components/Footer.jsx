import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../assets/footerLogo.png'

export default function Footer() {
  return (
    <footer className='w-full min-h-[200px] bg-[#032541] flex justify-center py-20 gap-3'>
      {/* 1 */}
      <div className='flex flex-col'>
        <Link to="/" className='mr-[40px] w-[130px]'>
          <img src={footerLogo} alt="img" />
        </Link>
      </div>
      {/* 2 */}
      <div className='w-[120px] text-white flex flex-col'>
        <h3 className='uppercase font-semibold'>the basic</h3>
        <p>문의하기</p>
        <p>지원</p>
        <p>API</p>
        <p>구성요소</p>
      </div>
      {/* 3 */}
      <div className='w-[120px] text-white flex flex-col'>
        <h3 className='uppercase font-semibold'>참여하기</h3>
        <p>기여 지침서</p>
        <p>영화 추가</p>
        <p>프로그램 추가</p>
      </div>
      {/* 4 */}
      <div className='w-[120px] text-white flex flex-col'>
        <h3 className='uppercase font-semibold'>커뮤니티</h3>
        <p>가이드라인</p>
        <p>토론 내역</p>
        <p>기여 랭킹</p>
      </div>
      {/* 5 */}
      <div className='min-w-[120px] text-white flex flex-col'>
        <h3 className='uppercase font-semibold'>법적 사항</h3>
        <p>서비스 이용약관</p>
        <p>API Terms of Use</p>
        <p>개인정보약관</p>
        <p>DMCA Policy</p>
      </div>
    </footer>
  )
}
