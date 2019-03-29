import React from 'react'
import './Card.css'

const card = () => {
    return (
         <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="https://res.cloudinary.com/dh41vh9dx/image/upload/c_scale,h_147/v1547834893/red.jpg"/>
            </div>
            <div class="card-content">
                 <span class="card-title activator grey-text text-darken-4">Flower<i class="material-icons right">more_vert</i></span>
                 <p><a href="#">This is a link</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                 <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
            </div>
            
          
    )
}

export default card