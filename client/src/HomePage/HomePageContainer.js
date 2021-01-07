import React from 'react'
import { PhotoCard } from './PhotoCard'


const HomePageContainer = (props)=>{
    console.log(props.data)
    return(
        <div>
            {props.data.map((res, i)=>(
                <PhotoCard
                    data={res}
                    key={i}
                />
            ))}
            <div className="" style={{display:'flex'}}>
                {props.loading && (
                    <div className="">
                        <h3>Loading....</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export {HomePageContainer}