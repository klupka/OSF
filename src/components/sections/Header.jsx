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
                // playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src={bgVideo} />
                Your browser does not support the video tag.
            </video>

            {/* Foreground */}
            <div className="text-center">
                <h1 className="text-6xl font-bold text-white drop-shadow-lg font-[monocode]">
                    OBSIDIAN SOUNDFIELDS
                </h1>
            </div>
        </section>
    );
};

export default Header;
