import React from 'react';
import { Checkmark } from 'react-checkmark';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
//bottom-[316-62px]
export default function Successful({ imageURL }) {

  const [copyValue, setCopyValue] = useState('');

  return (
    <>
      <div className='absolute w-[400.36px] h-[454.96px] top-[150.42px]  left-[519.82px] bg-[#FFFFFF] shadow-3xl rounded-[12px]'>

        <div className='absolute w-[198px] h-[76.53px] top-[36px] left-[101.18px] right-[101.18px]'>

            <div className='absolute w-[35px] h-[35px] top-[3.5px] left-[81.5px] '>
                <Checkmark size='35px'/>
            </div>
            <h2 className='absolute w-[198px] h-[27px] left-[0px] top-[49.53px] font-pop non-italic font-medium text-[18px] leading-[27px] tracking-[-0.035em] text-center text-[#4F4F4F]'>Uploaded Successfully!</h2>

        </div>

        <img className='absolute w-[338px] h-[224.4px] top-[137.87px] left-[31.18px] rounded-[12px]' src={imageURL} />

        <div className='absolute w-[338px] h-[34px] bottom-[33.35px] left-[31.18px] border-box bg-[#F6F8FB] border-[1px] border-solid border-[#E0E0E0] rounded-[8px]'>

            <p className='absolute w-[240px] h-[12px] top-[11px] left-[7.12px] font-pop non-italic font-medium text-[8px] leading-[12px] tracking-[-0.035em] text-center text-[#4F4F4F] overflow-hidden'>{imageURL}</p>
            <CopyToClipboard text={copyValue}>
            <button className='absolute w-[74px] h-[30px] top-[2px] right-[2px] rounded-[8px] bg-[#2F80ED]' onClick={() => {setCopyValue(imageURL)}}>
                <p className='absolute w-[37px] h-[12px] top-[9px] left-[19.38px] font-pop non-italic font-medium text-[8px] leading-[12px] tracking-[-0.035em] text-center text-[#FFFFFF]'>Copy Link</p>
            </button>
            </CopyToClipboard>

        </div>

      </div>
    </>
  )
}
