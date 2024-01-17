import React from 'react'

export default function Wrap23Best(props) {
  return (
    <div className='ml-4'>
    <h3 className={`text-[30px] text-[#${props.color}] font-semibold`}>{props.num}</h3>
    <div className='flex max-w-[290px]'>
      <div className='m-2'><img src={props.img} alt="img" /></div>
      <div className='flex flex-col justify-center text-[20px] w-[130px]'>
        <div className='text-white leading-6 font-semibold'>
          {props.tit}
        </div>
        <div className={`text-[#${props.color}] leading-10`}>
          {props.per}
        </div>
        </div>
    </div>
  </div>
  )
}
