import './RectangleArchives.css';
import bitmap from '../../Images/Mask (2).png';
import React from "react";

// {/*--------------Showing the blog archive----------------*/}

function RectangleArchives({content, title, img}) {

    console.log(img)
    return (
        <>
            <div className="Container-Archive2">
                <img src={`${img}`} alt="bitmap1" className="bitmap1"/>

                <div className="text-Archives-box">
                    <div className="Container-heading-Archives">
                            <h className="heading">{title}</h>
                    </div>
                    <div className="Container-paragraph1">
                            <p className="lorem-ipsum-dolor-si">
                                {content}
                            </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RectangleArchives;
