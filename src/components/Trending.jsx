import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Trending.css";
import bgImage from "../assets/trndBg.png";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
// https://www.npmjs.com/package/react-spinners

export default function Trending() {
  const [lists, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let tabs = [
    { id: "all", label: "All" },
    { id: "movie", label: "Movies" },
    { id: "tv", label: "TV" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/${activeTab}/day?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODJkMDhlZjRiMGZhNDQzM2FhMTY1ZTNlYWU5MWE4OSIsInN1YiI6IjY1NzdhY2ZlYmJlMWRkMDBjNDBkMWM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1CaaK-PVd0aJ1_mIY8__gDtz886vOE4nyRPijt0G4V4",
      },
    };
    setIsLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setList(json?.results);
        setIsLoading(false);
      })
      .catch((err) => console.error("error:" + err));
  }, [activeTab]);
  return (
    <section className="w-full flex justify-center">
      <div id="trendWrap" className="w-[1300px] min-h-[450px] pt-[50px]">
        {/* 타이틀 */}
        <div className="px-10 flex items-center">
          <h2 className="sansTit font-semibold text-[30px] mr-7">Trending</h2>
          {/* 탭바 */}
          <div className="border-2 border-[#032541] rounded-3xl">
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} className={`z-10 text-[20px] px-4 py-2 relative rounded-full  ${activeTab === t.id ? "text-green-500" : "text-black"}`}>
                {activeTab === t.id && <motion.span className="absolute inset-0 bg-[#032541] rounded-3xl -z-10" layoutId="bubble" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                {t.label}
              </button>
            ))}
          </div>
        </div>
        {/* 리스트 */}
        <article style={{ backgroundImage: `url(${bgImage})` }} id="trendList" className="flex justify-center my-8 py-4">
          {isLoading ? (
            <HashLoader color="#032541" />
          ) : (
            lists.slice(0, 7).map((item) => (
              <div key={item.id} className="w-[150px] min-h-[293px] mt-4 mx-4 relative">
                <Link to={`/detail/${item.id}`}>
                  <img src={`https://www.themoviedb.org/t/p/w150_and_h225_face${item.poster_path}`} alt="img" className="rounded-2xl" />
                  <div className="w-11 h-11 bg-gray-700 border-2 border-white p-1 rounded-full flex justify-center items-center absolute top-[195px] left-[-5px] font-semibold text-green-400">{item.vote_average.toFixed(1)}</div>
                  <div className="mt-6 font-semibold leading-5">{item.original_title || item.original_name}</div>
                  <div>{item.release_date || item.first_air_date}</div>
                </Link>
              </div>
            ))
          )}
        </article>
      </div>
    </section>
  );
}
