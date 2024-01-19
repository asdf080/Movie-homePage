import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import "./PopMovie.css";
import { Link } from "react-router-dom";

export default function TvSeries() {
  const [moList, setMoList] = useState([]);
  const genres = [
    {
      id: 10759,
      name: "Action & Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 10762,
      name: "Kids",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10763,
      name: "News",
    },
    {
      id: 10764,
      name: "Reality",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
    {
      id: 10766,
      name: "Soap",
    },
    {
      id: 10767,
      name: "Talk",
    },
    {
      id: 10768,
      name: "War & Politics",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  const getGenreNames = (ids) => {
    return ids
      .map((id) => {
        const genre = genres.find((genre) => genre.id === id);
        return genre ? genre.name : null;
      })
      .filter((name) => name != null)
      .join(", ");
  };

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODJkMDhlZjRiMGZhNDQzM2FhMTY1ZTNlYWU5MWE4OSIsInN1YiI6IjY1NzdhY2ZlYmJlMWRkMDBjNDBkMWM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1CaaK-PVd0aJ1_mIY8__gDtz886vOE4nyRPijt0G4V4",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMoList(json?.results);
      })
      .catch((err) => console.error("error:" + err));
  }, []);
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div id="slWrap" className="w-[1300px] h-[460px] pt-[40px] mb-10">
        {/* 타이틀 영역 */}
        <div className="px-10 flex items-center">
          <h2 className="sansTit font-semibold text-[30px] mr-7 ">
            Popular Movies
          </h2>
        </div>
        {/* 리스트 */}
        <article className="mt-12">
          <Slide>
            {moList.slice(0, 10).map((item) => (
              <Link key={item.id} to={`/detail/${item.id}`}>
                <div className="px-[42px] pb-4">
                  <img
                    className="w-[350px] block rounded-2xl"
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                    alt="img"
                  />
                  <div className="mt-3 font-semibold h-[20px] ">
                    {item.title}
                  </div>
                  <div>{getGenreNames(item.genre_ids)}</div>
                </div>
              </Link>
            ))}
          </Slide>
        </article>
      </div>
    </section>
  );
}
