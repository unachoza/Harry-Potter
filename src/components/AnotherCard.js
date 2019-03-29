import React from 'react'
import { relative } from 'path';

const AnotherCard = () => {
    return (
        <div className="container">
            {/* <h2>other cards</h2> */}
            <div className="card">
                <div className="card-image">
                    <img src="https://www.halegroves.com/images/xl/buy-florida-mangoes-online-071917.jpg?v=100009963161-2"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator">Mangos</span>
                    <p>Lorem ipsom the sun came out for a minute</p>
                </div>
                <div className="card-action">
                    <a href="https://www.halegroves.com/south-florida-mangos/p/southfloridamangos/">More Mangos</a>
                </div>
                <div className="card-reveal">
                    <span className="card-title">Arianna has a lot to say about mangos<i className="material-icons right">close</i></span>
                </div>
            </div>
</div>
    )
}

export default AnotherCard