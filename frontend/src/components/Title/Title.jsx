
import React from 'react';
import './Title.css'

const Title = ({ title, description, imageSrc}) => {
    return (
        <div className="container-two-columns">
            <picture>
                <img className="Title-image" src={imageSrc} alt="image-loading" />
            </picture>
            <div className="Title-data">
                <h1 className="Title-heading">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};
export default Title;