import React from 'react'


const PhotoCard = (props)=>{
  
    return(
        <div>
            <div className="">
                <h3>{props.data.title} dhjdv</h3>
            </div>
            <div className="">
                <img src={props.data.url} />
            </div>
        </div>
    )
}

export {PhotoCard}