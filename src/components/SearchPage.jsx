import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const navigate = useNavigate();
  const [keyWord, setKeyWord] = useState("");
  const handleClick = () => {
    navigate(`/search?keyword=${keyWord}`);
  };
  const handleChange = (e) => {
    setKeyWord(e.target.value);
  };

  return (
    <header className="w-full flex justify-center">
      <section className='w-[1300px] h-[360px] bg-[url("https://cdn.pixabay.com/photo/2023/12/05/08/23/port-8431044_1280.jpg")] bg-center bg-cover relative flex items-center '>
        <article className="z-10 w-full min-h-[244px] text-white px-[40px] py-[30px] flex flex-col justify-between">
          <div className="select-none">
            <h2 className="text-[48px] sansTit font-bold leading-10">
              Welcome.
            </h2>
            <p className="text-[32px] sansTit leading-9 font-medium mt-1">
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
          </div>
          <div className="relative">
            <form onSubmit={handleClick}>
              <input
                onChange={handleChange}
                type="text"
                className="w-full h-[46px] px-[20px] py-[10px] rounded-3xl text-gray-700 text-[1.1em] mt-2 focus:outline-0"
                placeholder="영화, TV 프로그램, 인물 검색"
              />
              <button
                onClick={handleClick}
                className="absolute right-0 py-3 px-6 bg-[#1CD3AD] bg-gradient-to-r from-[#1CD3AD] to-[#03B6E1] h-[46px] rounded-3xl font-semibold hover:text-black mt-2 select-none"
              >
                Search
              </button>
            </form>
          </div>
        </article>
        {/* 가상 div */}
        <div className="absolute bg-[#01B1F3]/50 top-0 left-0 w-full h-full flex items-center justify-center"></div>
      </section>
    </header>
  );
}
