import React from 'react'
import errorImg from '../images/eImg.svg'

export const ErrorComponent = ({message}) => {
    return (
        <div className="errorImg">
            {
                (message="You've reached the end!") ? "" : <img src={errorImg}/>
            }
            
            <h5>{message}</h5>
        </div>
    )
}
