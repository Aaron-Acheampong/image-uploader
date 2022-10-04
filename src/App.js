import Footer from "./components/Footer";
import Input from "./components/Input";
import Successful from "./components/Successful";
import { useState, useCallback } from 'react';
import Uploading from "./components/Uploading";

//import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
//import { v4 } from 'uuid';
import { useDropzone } from 'react-dropzone';
import React from 'react';



function App() {

  const [imageURL, setImageURL] = useState(null);
  const [image, setImage] = useState(null);
  const [loaded, setLoaded] = useState(false);

  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);
  //const [imageList, setImageList] = useState([]);

  const types = ['image/png', 'image/jpeg'];

  // This is a reference to all the files
  // const imageListRef = ref(storage, "images/");
 /* 
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      //console.log(response);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });


  }, []);
  */
  const handleChange = (e) => {
    e.preventDefault();
    let selected = e.target.files[0];
    if( selected && types.includes(selected.type) ) {
      setLoaded(true);
      setImage(e.target.files[0]);
      
    } else {
      setImage(null);
      //setError("Please select an image file (png or jpeg)");
    }

  }


 
  return (
    <div className="bg-[#c7b3b3]">

        {!loaded &&<Input handleChange={handleChange} setImage={setImage} setLoaded={setLoaded}/> }
        { image && <Uploading image={image} setImageURL={setImageURL} setImage={setImage} /> }
        { imageURL && <Successful imageURL={imageURL} /> }
        <Footer />
    </div>
  );
  
}

export default App;
