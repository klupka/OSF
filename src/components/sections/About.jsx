import img1 from "../../assets/images/foley_recording/abstract_cieling.jpg";
import img2 from "../../assets/images/foley_recording/blue_plane_interior.jpg";
import img3 from "../../assets/images/foley_recording/concrete_wall_zoom_mic.jpg";

const About = () => {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center">
            <h1 className="font-[Monocode] text-sm text-left border-b-2 border-white/15 border-dotted w-full flex justify-between">
                <p>[01] OVERVIEW</p>
                <button
                    onClick={() => {
                        setIsVisible((prev) => !prev);
                    }}
                    className="text-sm"
                >
                    +
                </button>
            </h1>
            <div className="p-5 bg-linear-to-b from-[#69696925] to-transparent flex flex-col gap-5">
                <div className="flex gap-2 w-full">
                    <img
                        src={img1}
                        className="object-cover w-full aspect-square"
                    ></img>
                    <img
                        src={img2}
                        className="object-cover w-full aspect-square "
                    ></img>
                    <img
                        src={img3}
                        className="object-cover w-full aspect-square"
                    ></img>
                </div>
                <div className="">
                    <p className="font-[Oxanium]">
                        <span className="font-[Monocode] text-xl">
                            OBSIDIAN SOUNDFIELDS
                        </span>{" "}
                        (OSF) is a specialized digital archive dedicated to the
                        documentation of anomalous environments and celestial
                        phenomena. From the crystalline planes of Chroma Horizon
                        to the submerged ring of Blue Meridian, our work focuses
                        on the intersection of structured space and reactive
                        sound.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
