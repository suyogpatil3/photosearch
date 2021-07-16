import React from 'react'
import errorImg from '../images/eImg.svg'

export const ErrorComponent = () => {
    return (
        <div className="errorImg">
            <img src={errorImg}/>
            <h4>Sorry!! Some error occured</h4>
        </div>
    )
}
