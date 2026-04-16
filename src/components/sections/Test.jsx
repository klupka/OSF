import React from "react";
import BlurEffect from "react-progressive-blur";
import img1 from "../../assets/images/foley_recording/abstract_cieling.jpg";

const Test = () => {
    return (
        <div className="relative">
            {/* Your content */}
            <img src={img1} alt="Background" />

            {/* Add blur effect */}
            <BlurEffect
                className="h-32 bg-linear-to-b from-black/20 to-transparent"
                intensity={100}
                position="top"
            />
        </div>
    );
};

export default Test;
