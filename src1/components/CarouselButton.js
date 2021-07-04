import React from 'react'
import "./CarouselButton.css"

function CarouselButton({caption}) {
    return (
        <div>
        <div className={`carousel_button reg_label`}>
           {caption}
        </div>            
        </div>
    )
}

export default CarouselButton
