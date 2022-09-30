import React from 'react'

export default function Input({ handleChange }) {
  return (
    <>
        <div className='absolute w-[402px] h-[469px] left-[519.82px] bottom-[306.63px] top-[304.37px] rounded-[12px] bg-[#FFFFFF] shadow-3xl'>

            <form className='absolute w-[338px] h-[397px] top-[36px] left-[32px]'>

                <h2 className='absolute w-[165px] h-[26.99px] right-[78.85px] font-pop non-italic font-medium text-[18px] leading-[27px] tracking-[-0.035em] text-[#4F4F4F]'>Upload your image</h2>
                <p className='absolute h-[14.99px] w-[121px] top-[42.98px] left-[108.82px] font-pop non-italic font-medium text-[10px] leading-[15px] tracking-[-0.035em] text-[#828282] text-center'>File should be Jpeg, Png,...</p>

                <div className='absolute w-[338px] h-[255.8px] bottom-[53.61px] top[87.59px] left-[0]'>
                    <div className='absolute w-[338px] h-[218.9px] bottom-[36.9px] border-box border-dashed border-[1px] border-[#97BEF4] rounded-[12px] bg-[#F6F8FB]'>

                        <img src='../assets/im01.png' className='absolute w-[114.13px] h-[88.24px] top-[35.84px] left-[111.43px] bg-[#BDBDBD]'/>

                        <p className='absolute w-[166px] h-[17.99px] bottom-[39.57px] left-[91.35px] font-pop non-italic font-medium text-[12px] leading-[18px] tracking-[-0.035em] text-[#BDBDBD]'>Drag & Drop your image here</p>
                        
                    </div>

                    <p className='absolute w-[14px] h-[17.99px] left-[162px] bottom-[0] top-[237.81px] font-pop non-italic font-medium text-[12px] leading-[18px] tracking-[-0.035em] text-[#BDBDBD] text-center'>Or</p>
                </div>

                <div className='absolute w-[101px] h-[31.98px] left-[118.82px] bottom-0 bg-[#2F80ED] rounded-[8px]'>
                    <label for='image' className='absolute w-[69px] h-[15.99px] top-[8px] left-[16px] font-noto non-italic font-medium text-[12px] leading-[16px] tracking-[-0.035em] text-center text-[#FFFFFF]'> Choose a file
                        <input id='image' type='file' accept='image/png, image/jpeg, image/gif' enctype='multipart/form-data' className='hidden' onChange={handleChange}/>
                    </label>
                </div>

            </form>

        </div>
    </>
  )
}
