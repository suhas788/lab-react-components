import React from "react"

export default function GalleryBody(like){

    var imageData=like.data2
    return (
        <div> {
            imageData.map(image => {
                return(
                    <div key ={image.id} className="column">
                        <img src={image.img} alt=""></img>
                    </div>
                )
            })
            } 
        </div>
    )
}

