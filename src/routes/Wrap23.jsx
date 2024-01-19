import React from 'react'
import Layout from '../components/Layout'
import logo from "../assets/footerLogo.png"
import Wrap23Best from '../components/Wrap23Best'

export default function Wrap23() {
  return (
    <Layout>
    <header className='w-full h-[750px] relative'>
    <div className='w-full h-full bg-[url("https://media.themoviedb.org/t/p/w3840_and_h2160_multi_faces/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg")] bg-center bg-cover -z-10 flex justify-center items-center'>
    <div className='z-20 text-white font-bold relative flex flex-col justify-center items-center'>
    <div className='flex justify-center items-start'>
    <img className='absolute left-0 w-[185px] h-[133px] mt-4' src={logo} alt="123"/>
    <div className='gradTit23 text-[180px] leading-[160px] ml-[100px] mb-[35px] px-20 overflow-visible'>
      <h2>&nbsp;That's </h2>
      <h2 className='-indent-20'>a Wrap</h2>
      <h2>&nbsp;2023</h2>
      </div>
    </div>
    <div className='raleWay text-blue-300 text-[24px] mb-4 text-center'>Year eight. 2023. Been wondering about our best of the year? <br /> Keep scrolling to find out what (and who) made our lists this year.</div>
    <div className='raleWay text-[20px]'>This time with your personal best.</div>
    </div>
    {/* 가상 div */}
    <div className='absolute bg-black/70 top-0 left-0 w-full h-full'></div>
    </div>
    </header>
    <section className='Inter w-full bg-black flex justify-center py-[70px]'>
      <div className='w-[900px] h-full px-[20px]'>
        <article>
          <div>
          <h2 className='gradTit23_2 text-left text-[180px] leading-[140px]'>Top</h2>
          </div>
          <div>
          <h2 className='gradTit23_3 text-left text-[180px] leading-[140px]'>movies</h2>
          </div>
          <div className='gradTit23_3 m-8 text-[26px]'>
            Based on user score
          </div>
          <div className='text-[#c0aaf2] text-[30px] font-semibold m-4'>
            One
          </div>
          <div className='flex w-full h-[500px] bg-slate-200 bg-cover bg-center bg-[url("https://media.themoviedb.org/t/p/w1280_and_h720_multi_faces/lMWTlGr9jVUC18T515hPRKym5QQ.jpg")]'>
          <div className='w-full Inter font-bold text-white text-[30px] self-end flex justify-between p-3 px-5  bg-black/60'>
            <span>스파이더맨: 어크로스 더 유니버스</span>
            <span className='text-[#49c6e2]'>84%</span>
          </div>
          </div>
        </article>
        <article className='mt-[60px] flex flex-wrap justify-between gap-3'>
          <Wrap23Best num="Two" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/4Hi7yjiQjokEDStT1MOj5rPgRfW.jpg" tit="There’s Still Tomorrow" per="83%" color="49c6e2"/>
          <Wrap23Best num="Three" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/31YUwuKfbGK4lGj2Q35vkKOavIH.jpg" tit="플레이밍 핫" per="82%" color="49c6e2"/>
          <Wrap23Best num="Four" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/jpD6z9fgNe7OqsHoDeAWQWoULde.jpg" tit="오펜하이머" per="81%" color="49c6e2"/>
          <Wrap23Best num="Five" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/pw2q0dMQYFFtYzKfbtoMKU8iyc9.jpg" tit="빨강, 파랑, 어쨌든 찬란" per="81%" color="49c6e2"/>
          <Wrap23Best num="Six" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg" tit="사운드 오브 프리덤" per="81%" color="49c6e2"/>
          <Wrap23Best num="Seven" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/duT8Vks5FXwDkpxoR84xb2a6VB6.jpg" tit="나의 잘못" per="80%" color="49c6e2"/>
          <Wrap23Best num="Eight" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/zK0FTsXvkWVS3yubZkbenbAFcnY.jpg" tit="가디언즈 오브 갤럭시 Volume 3" per="80%" color="49c6e2"/>
          <Wrap23Best num="Nine" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/mewjjhpju5JT1wDFJDMdctWcCqd.jpg" tit="그란 투리스모" per="80%" color="49c6e2"/>
          <Wrap23Best num="Ten" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/rnOpzbW776F6xgA2MrfyA2FxFxt.jpg" tit="니모나" per="80%" color="49c6e2"/>
        </article>
        <article className='mt-[150px]'>
        <div>
          <h2 className='gradTit23_4 text-left text-[180px] leading-[140px]'>Worst</h2>
          </div>
          <div>
          <h2 className='gradTit23_5 text-left text-[180px] leading-[140px]'>movies</h2>
          </div>
          <div className='gradTit23_5 m-8 text-[26px]'>
            Based on user score
          </div>
          <div className='text-[#e78f90] text-[30px] font-semibold m-4'>
            One
          </div>
          <div className='flex w-full h-[500px] bg-slate-200 bg-cover bg-center bg-[url("https://media.themoviedb.org/t/p/w1280_and_h720_multi_faces/ifOqT5SmA4ANjmyEacLw3KAFKUd.jpg")]'>
          <div className='w-full Inter font-bold text-white text-[30px] self-end flex justify-between p-3 px-5  bg-black/60'>
            <span>아스테릭스 & 오벨릭스: 더 미들 킹덤</span>
            <span className='text-[#49c6e2]'>84%</span>
          </div>
          </div>
        </article>
        <article className='mt-[60px] flex flex-wrap justify-between gap-3'>
          <Wrap23Best num="Two" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/eRI84sd2escYQpBbCK4AJa5uW2m.jpg" tit="곰돌이 푸: 피와 꿀" per="52%" color="e78f90"/>
          <Wrap23Best num="Three" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/x5ex5Dk1jekuOHy7BBrX4jJ0csO.jpg" tit="피터팬 & 웬디" per="56%" color="e78f90"/>
          <Wrap23Best num="Four" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/x5E4TndwASNkaK2hwgeYfsIVo2x.jpg" tit="유 피플" per="57%" color="e78f90"/>
          <Wrap23Best num="Five" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/iTGBHdL12QEpLyRVlykDuiYxzAG.jpg" tit="버드 박스: 바르셀로나" per="59%" color="e78f90"/>
          <Wrap23Best num="Six" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/ejjH8macA8bihVxvCQLZ5RscrzK.jpg" tit="범죄의 장인" per="61%" color="e78f90"/>
          <Wrap23Best num="Seven" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/9DeVlOV9TVRdYeVZZQw8N2Lo6Ke.jpg" tit="65" per="61%" color="e78f90"/>
          <Wrap23Best num="Eight" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg" tit="코카인 베어" per="61%" color="e78f90"/>
          <Wrap23Best num="Nine" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/gekQTgjZkPhpglvP1ZdTHBwi7xO.jpg" tit="엑소시스트: 믿는 자" per="61%" color="e78f90"/>
          <Wrap23Best num="Ten" img="https://media.themoviedb.org/t/p/w116_and_h174_multi_faces/sUNpu0Pd3YGRV3MqTovVuRx9RI4.jpg" tit="윌로우" per="62%" color="e78f90"/>
        </article>
        <article>
          <div className='font-bold text-white h-[200] py-[50px] text-[40px] m-6'>
            <p><span className='text-[44px] text-[#fbba5c]'>7789444</span> Movie edits this year</p>
            <p><span className='text-[44px] text-[#fbba5c]'>152247</span>  Movies added this year</p>
            <p><span className='text-[44px] text-[#fbba5c]'>661508</span>  Movie images added this year</p>
          </div>
        </article>
        <article className='mt-[150px]'>
          <div>
          <h2 className='gradTit23_6 text-left text-[160px] leading-[140px]'>Top</h2>
          </div>
          <div className='h-auto'>
          <h2 className='gradTit23_7 text-left text-[160px] leading-[1.2]'>languages</h2>
          </div>
          <div className='px-[20px] w-full grid grid-cols-2 md:grid-cols-3 gap-8 mt-12'>
            <div className='m-4 font-semibold'>
              <div className='text-[#f581ff] text-[30px] raleWay'>
                One
              </div>
              <div className='text-white text-[50px]'>
                영어
              </div>
            </div>
            <div className='m-4 font-semibold'>
              <div className='text-[#f581ff] text-[30px] raleWay'>
                Two
              </div>
              <div className='text-white text-[50px]'>
                중국어
              </div>
            </div>
            <div className='m-4 font-semibold'>
              <div className='text-[#f581ff] text-[30px] raleWay'>
              Three
              </div>
              <div className='text-white text-[50px]'>
              프랑스어
              </div>
            </div>
            <div className='m-4 font-semibold'>
              <div className='text-[#f581ff] text-[30px] raleWay'>
              Four
              </div>
              <div className='text-white text-[50px]'>
              독일어
              </div>
            </div>
            <div className='m-4 font-semibold'>
              <div className='text-[#f581ff] text-[30px] raleWay'>
              Five
              </div>
              <div className='text-white text-[50px]'>
              러시아어
              </div>
            </div>
          </div>
        </article>
        <article className='mt-[200px]'>
          <div>
          <h2 className='gradTit23_2 text-left text-[155px] leading-[140px]'>Finally,</h2>
          </div>
          <div className='h-auto'>
          <h2 className='gradTit23_3 text-left text-[155px] leading-[1.2]'>Thank you!</h2>
          </div>
        </article>
      </div>
    </section>
    </Layout>
  )
}
