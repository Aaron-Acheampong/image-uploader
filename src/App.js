import Footer from "./components/Footer";
import Input from "./components/Input";
import Successful from "./components/Successful";
import { useEffect, useState } from 'react';
import Uploading from "./components/Uploading";
import { storage, app} from './api/firebase';
//import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';



function App() {

  const [imageURL, setImageURL] = useState(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  //const [imageList, setImageList] = useState([]);

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
    if(e.target.files[0]) {
      setImage(e.target.files[0]);
      changeLoading()
      handleUpload();
    }

  }

  const changeLoading = () => {
    if (image){
      setIsLoading(true);
    }
  }


  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name + v4()}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalButes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
           .ref("images")
           .child(image.name)
           .getDownloadURL()
           .then(url => {
            console.log(url);
            setImageURL(url);
           });
      }
    );
  };

 
  return (
    <div className="bg-[#c7b3b3]">
        { !isLoading && <Input handleChange={handleChange} /> }
        { isLoading && !imageURL && <Uploading progress={progress} /> }
        { imageURL && <Successful imageURL={imageURL} /> }
        <Footer />
    </div>
  );
}

export default App;
