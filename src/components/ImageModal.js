import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const ImageModal = ({link,setOpenModal}) => {
    return (
        <div className="modalBack">
        <div className="modalContainer">
            <div className="modalClose" onClick={() => {setOpenModal(false)}}><i class="fas fa-times-circle"></i></div>
            <div className="modalContent">
                <img className="image" alt="image-error"src={link}/>
            </div>
        </div>
    </div>
   
    )
}
