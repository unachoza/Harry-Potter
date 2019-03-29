import React from 'react'
import './Card.css'

const card = () => {
    return (
         <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1547832965/garden.jpg"/>
            </div>
            <div className="card-content">
                 <span className="card-title activator grey-text text-darken-4">Flower<i className="material-icons right"></i></span>
                 <p><a href="https://zara.com">This is a link</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                 <p> Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
            </div>
            
          
    )
}

export default card