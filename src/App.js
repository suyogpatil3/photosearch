import './App.css';
import React, {useState,useEffect} from 'react';
import { Header } from './components/Header';
import { Images } from './components/Images';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ImageModal } from './components/ImageModal';
import { ErrorComponent } from './components/ErrorComponent';
import { Loading } from './components/Loading';

function App() {
  const [imagesArray, setImagesArray] = useState([]);
  const [modalSrc,setModalSrc] = useState('');    //to get modal source from images component
  const [openModal,setOpenModal] = useState(false);  //to open/close modal
  const [inputQuery,setInputQuery] = useState("");  //getting input from Header
  const[page,setPage] = useState(1);                //for changing page number while infinite loading
  const[error,setError] = useState(false);
  const[loading,setLoading] = useState(false);

//function for fetching data from flickr API
  async function fetchDataFromUrl(url){
     var picArray=[];
     setLoading(true);
     await fetch(url)
    .then((res) => {return res.json()})
    .then((data) => {
        picArray = data.photos.photo.map((image) => {
           return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
        })
        setImagesArray(prevState => {
          return([...prevState,...picArray])
        } );
        setLoading(false);
    })
    .catch(error => {
      setError(true);
    })
  }

//for getting default photos
//changed the default url given by company to a url return default dog images because the provided default url contained adult images
  // const defaultUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=c603ee6ad346f3682d963bc43161ad94&page=${page}&format=json&nojsoncallback=1`
  const defaultUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c603ee6ad346f3682d963bc43161ad94&page=${page}&tags=dogs&format=json&nojsoncallback=1`
  useEffect(() => {
    if(inputQuery==="")
    fetchDataFromUrl(defaultUrl);
  },[inputQuery,page])

// for searching photos for given input query
  useEffect(() => {
    if(inputQuery!==""){
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c603ee6ad346f3682d963bc43161ad94&page=${page}&tags=${inputQuery}&format=json&nojsoncallback=1`
    fetchDataFromUrl(url);
    }
  }, [inputQuery,page])

  //for resetting images array everytime input query changes
  useEffect(() => {
    setImagesArray([]);
  }, [inputQuery])

  return (
    <React.Fragment>
      <div>
        <div>
          <Header setInputQuery={setInputQuery} 
              inputQuery={inputQuery}
              setPage={setPage}/>
        </div>
        <div className="body">
          {loading ?  <Loading/> : ""}
          {!error ? <Images 
                      imagesArray={imagesArray} 
                      setOpenModal={setOpenModal} 
                      setModalSrc={setModalSrc} //for getting image source for modal
                      loading={loading}
                      page={page}                //page for infinite loading
                      setPage={setPage}
                    inputQuery={inputQuery}/> 
                  : <ErrorComponent/>}
        
        {openModal ? <ImageModal 
                        link={modalSrc} 
                        setOpenModal={setOpenModal}
                      /> 
                    : ""}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
