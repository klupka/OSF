import React from "react";
import bgVideo from "../../assets/videos/hero_background.mp4";

const Header = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src={bgVideo} />
                Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 bg-linear-to-b from-transparent to-[#060606] -z-10"
                aria-hidden="true"
            />

            {/* Foreground */}
            <div className="text-center z-10 flex flex-col gap-3 w-375">
                <h1 className="text-6xl font-bold drop-shadow-lg font-[monocode]">
                    OBSIDIAN SOUNDFIELDS
                </h1>
                {/* <div className="flex justify-center items-center gap-2 font-[Oxanium] hidden">
                    <img src="./images/osf_favicon.png" className="h-5"></img>
                    <div>blending reality.</div>
                </div> */}
            </div>
        </section>
    );
};

export default Header;
