import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function People() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const url = "https://api.themoviedb.org/3/person/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODJkMDhlZjRiMGZhNDQzM2FhMTY1ZTNlYWU5MWE4OSIsInN1YiI6IjY1NzdhY2ZlYmJlMWRkMDBjNDBkMWM0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1CaaK-PVd0aJ1_mIY8__gDtz886vOE4nyRPijt0G4V4",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setLists(json.results);
        console.log(json.results);
      })
      .catch((err) => console.error("error:" + err));
  }, []);
  return (
    <Layout>
      <section className="w-full flex justify-center py-16">
        <ul className="w-[1000px] flex flex-wrap justify-between">
          {lists?.map((item) => (
            <li key={item.id} className="w-[225px] h-[370px] rounded-md shadow-lg flex flex-col overflow-hidden mb-[30px]">
              <div className="w-full h-[273px]">
                <img className="w-full h-full object-cover" src={`https://www.themoviedb.org/t/p/w150_and_h225_face${item.profile_path}`} alt="img" />
              </div>
              <div className="w-full grow p-3 px-[14px]">
                <div className="font-bold text-lg">{item.name}</div>
                <div className="leading-5">
                  {item?.known_for[1].original_title} ({item?.known_for[1].media_type})
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
