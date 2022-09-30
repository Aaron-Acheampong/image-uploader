import React from 'react'

export default function Uploading({ progress }) {
  return (
    <>
      <div className='absolute w-[400.36px] h-[143.57px] top-[455.35px] bottom-[481.08px] left-[519.82px] bg-[#FFFFFF] shadow-3xl rounded-[12px]'>

        <div className='absolute w-[100px] h-[27px] top-[36px] left-[32px] font-pop non-italic font-medium text-[18px] leading-[27px] tracking-[-0.035em] text-[#4F4F4F]'>Uploading...</div>

        <div className='absolute w-[340.71px] h-[6px] bottom-[43.82px] left-[32px] bg-[#F2F2F2] rounded-[8px]'>
            <progress id="progress-bar" value={progress} max="100"></progress>
        </div>

      </div>
    </>
  )
}
