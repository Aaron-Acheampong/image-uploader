import React from 'react';
import { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../api/firebase';
import { v4 } from 'uuid';





export default function Uploading({ image, setImageURL, setImage }) {

  const [progress, setProgress] = useState(0);

  
  useEffect(() => {
    handleUpload();
  }, []);



  const handleUpload = () => {

    const storageRef = ref(storage, `images/${image.name + v4()}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          setImageURL(downloadURL);
          setImage(null);
        })
      }
    )
  }

/*
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        storage
           .ref("images")
           .child(image.name)
           .getDownloadURL()
           .then(url => {
            console.log(url);
            setImageURL(url);
            setImage(null);
           });
      }
    );
  };
*/
//bottom-[481.08px] 
  return (
    <>
      <div className='absolute w-[400.36px] h-[143.57px] top-[300.35px] left-[519.82px] bg-[#FFFFFF] shadow-3xl rounded-[12px]'>

        <div className='absolute w-[100px] h-[27px] top-[36px] left-[32px] font-pop non-italic font-medium text-[18px] leading-[27px] tracking-[-0.035em] text-[#4F4F4F]'>Uploading...</div>

        <div className='absolute w-[340.71px] h-[6px] bottom-[43.82px] left-[32px] bg-[#F2F2F2] rounded-[8px] '>
            <progress className='text-[#3081dd]' id="progress-bar" value={progress} max="100"></progress>
        </div>

      </div>
    </>
  )
}
