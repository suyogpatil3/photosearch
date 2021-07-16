import React from 'react'
import Loader from "react-loader-spinner";
export const Loading = () => {
    return (
        <div className="loading">
            <div><Loader
                    type="Puff"
                    color="#ff5d33f1"
                    height={200}
                    width={200}
                    timeout={5000} //3 secs
                />
            </div>
            <div>
                <h3>Loading..</h3>
            </div>
        </div>
    )
}
