import './LastBlogpost.css';
import bitmap from "../../Images/Mask (2).png";
import React from "react";

function LastBlogpost () {
    return (
        <>
            <div className="Container-lastpost">
                <img src={bitmap} alt="bitmap22" className="bitmap2"/>

                <div className="text-lastpost">
                    <div className="Container-heading2">
                        <h className="heading">Heading</h>
                    </div>
                    <div className="Container-paragraph2">
                        <p className="lorem-ipsum-dolor-si">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Phasellus eget metus blandit,
                            pharetra nisi eu, aliquet leo. risus,
                            id lobortis massa ultrices nec.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LastBlogpost;