import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faGlobe, faMoon, faUserAstronaut, faMagnifyingGlass, faBars, faSun } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/LOGO.png";
import "./NavPage.css";
import { Link } from "react-router-dom";
import { Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, PopoverBody, useColorMode } from "@chakra-ui/react";

export default function NavPage() {
  const [showNav, setShowNav] = useState(true);
  document.addEventListener("wheel", (e) => {
    // 휠 내릴때 nav 숨기기
    if (e.deltaY > 0) {
      setShowNav(false);
      // 휠 올릴때 nav 보이기
    } else if (e.deltaY < 0) {
      setShowNav(true);
    }
  });
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav className={`sticky top-0 ${showNav ? "-translate-y-0" : "-translate-y-[64px]"} duration-200 z-30 w-full h-16 bg-[#032541] flex justify-center items-center`}>
      <div className="max-w-[1300px] w-full h-[40px] px-[40px] flex justify-between items-center text-white font-bold">
        {/* 왼쪽 메뉴 */}
        <div className="flex items-center gap-5">
          {/* 로고 */}
          <Link to="/">
            <img src={logo} alt="logo" className="w-[154px] h-5" />
          </Link>
          {/* 메뉴 */}
          <div className="flex space-x-4" id="navLmenu">
            <Link to="/movies">
              <div>영화</div>
            </Link>
            <Link to="/tv">
              <div>TV 프로그램</div>
            </Link>
            <div>인물</div>
            <a href="https://developer.themoviedb.org/docs/getting-started" target="_blank">
              <div>More</div>
            </a>
          </div>
        </div>
        {/* 오른쪽 메뉴 */}
        <div className="flex items-center gap-6 text-xl">
          <FontAwesomeIcon icon={faPlus} className="navR" />
          <FontAwesomeIcon icon={faGlobe} className="navR" />
          <div className="min-w-[20px] cursor-pointer">
            <FontAwesomeIcon icon={colorMode === "light" ? faMoon : faSun} className="navR" onClick={toggleColorMode} />
          </div>
          <Popover>
            <PopoverTrigger>
              <FontAwesomeIcon icon={faUserAstronaut} className="navR cursor-pointer" />
            </PopoverTrigger>
            <PopoverContent color="black">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Welcome!</PopoverHeader>
              <PopoverBody>Explore Movies, TV show, people now</PopoverBody>
            </PopoverContent>
          </Popover>
          <FontAwesomeIcon icon={faBars} id="mobileMenu" />
        </div>
      </div>
    </nav>
  );
}
