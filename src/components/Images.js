import React,{useCallback,useRef} from 'react'
import { Loading } from './Loading';

export const Images = ({imagesArray,inputQuery,setOpenModal,setModalSrc,loading,page,setPage}) => {
    const pageNo = useRef();
    const lastImageOnPage = useCallback((image) => {
        if(loading) return //return because we dont want ot check window if images are still loading
        if(pageNo.current){ //doing this to disconnect from current page and add to next page
            pageNo.current.disconnect()
        }
        //setting new reference to end of new page
        pageNo.current = new IntersectionObserver(entries => { //function watches all the entries that it is watching currently
            if(entries[0].isIntersecting && page<10){ //This checks if the image is currently there on the page
                setPage(prevPage => prevPage+1)
            }
        }) 
        if(image){
            pageNo.current.observe(image); // to keep a track of the last image
        }
    },[loading,page]);

    const setModal= (link) => {
        setOpenModal(true);
        setModalSrc(link);
    }
    return (
        <div className="imageContainer">
           {
               ((imagesArray===[])) ? <h3>No results found</h3> 
             : imagesArray.map((link,i) => { 
                 if(imagesArray.length === i+1){
                    <div>{loading && 'Loading...'}</div>
                 return<img src={link} 
                    alt="image-error" 
                    onClick={() => setModal(link)} 
                    style={{cursor:"pointer"}}
                    ref = {lastImageOnPage}
                    />
                 }
                    return<img src={link} 
                    alt="image-error" 
                    onClick={() => setModal(link)} 
                    style={{cursor:"pointer"}}/>
                })
             }
             <div className="moreImages">
                {inputQuery!=="" && page<10 ? <h3>Loading</h3> : <h4>..</h4>}
             </div>
        </div>
    )
}
