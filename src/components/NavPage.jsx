import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus,faGlobe,faBell, faUserAstronaut,faMagnifyingGlass,faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/LOGO.png"
import "./NavPage.css"
import { Link } from 'react-router-dom';

export default function NavPage() {
  const [showNav, setShowNav] = useState(true)
  document.addEventListener("wheel", e => {
    // 휠 내릴때 nav 숨기기 
    if(e.deltaY > 0){
      setShowNav(false)
    // 휠 올릴때 nav 보이기
    } else if (e.deltaY < 0){
      setShowNav(true)
    }
  })
  return (
    <nav className={`sticky top-0 ${showNav ? "-translate-y-0" : "-translate-y-[64px]"} duration-200 z-30 w-full h-16 bg-[#032541] flex justify-center items-center`}>
      <div className='max-w-[1300px] w-full h-[40px] px-[40px] flex justify-between items-center text-white font-bold'>
        {/* 왼쪽 메뉴 */}
        <div className='flex items-center gap-5'>
          {/* 로고 */}
          <Link to="/"><img src={logo} alt="logo" className='w-[154px] h-5' /></Link>
          {/* 메뉴 */}
          <div className='flex space-x-4' id="navLmenu">
            <Link to="/movies"><div>영화</div></Link>
            <Link to="/tv"><div>TV 프로그램</div></Link>
            <div>인물</div>
            <div>More</div>
          </div>
        </div>
        {/* 오른쪽 메뉴 */}
        <div className='flex items-center gap-6 text-xl'>
          <FontAwesomeIcon icon={faPlus} className='navR' />
          <FontAwesomeIcon icon={faGlobe} className='navR' />
          <FontAwesomeIcon icon={faBell} className='navR' />
          <FontAwesomeIcon icon={faUserAstronaut} className='navR' />
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#01B4E4",}} className='navR' />
          <FontAwesomeIcon icon={faBars} id='mobileMenu' />
        </div>
      </div>
    </nav>
  )
}
