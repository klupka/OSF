import OSF23Image from "../../assets/images/OSF_23.jpg";
import OSF26Image from "../../assets/images/OSF_26.jpg";
import OSFExImage from "../../assets/images/OSF_Extra.jpg";
import OSF14Image from "../../assets/images/OSF_14.jpg";
import waveGIF from "../../assets/videos/wave.gif";
import osfLogo from "../../assets/images/osf_logo.png";

const About = () => {
    return (
        <section className="relative h-[1200px] w-full flex flex-col items-center justify-center">
            {/* Foreground */}
            <h1 className="font-[Monocode] justify-start border-b-0 border-white/50 border-dotted w-full flex gap-2 mb-25">
                <p className="w-fit whitespace-nowrap text-[65px] font-bold">
                    OVERVIEW
                </p>
                <p className="text-sm">[02]</p>
            </h1>

            <div className={`flex w-full gap-5 border-0 border-white h-full`}>
                {/* images */}
                <div className="max-h-[800px] max-w-[75%] flex flex-col gap-1">
                    {/* top image (big) */}
                    <div className="card p-px h-[70%] w-full">
                        <img
                            src={OSF14Image}
                            className="w-full h-full object-cover"
                        ></img>
                    </div>
                    <div className="flex h-[30%] w-full gap-1">
                        <div className="card p-px w-full">
                            <img
                                src={OSF23Image}
                                className="w-full h-full object-cover"
                            ></img>
                        </div>
                        <div className="card p-px w-full">
                            <img
                                src={OSF26Image}
                                className="w-full h-full object-cover"
                            ></img>
                        </div>
                        <div className="card p-px w-full">
                            <img
                                src={OSFExImage}
                                className="w-full h-full object-cover"
                            ></img>
                        </div>
                    </div>
                </div>

                {/* text */}
                <div className="flex flex-col gap-10">
                    <div className="flex w-full justify-center">
                        <p className="text-lg font-[PPFraktion]">
                            OBSIDIAN SOUNDFIELDS
                        </p>
                        {/* <p className="text-lg font-[PPFraktion]">092</p> */}
                    </div>
                    <div className="flex flex-col gap-5">
                        {/* pb-10 border-b border-dashed border-white/25 */}
                        <h2 className="font-[PPFraktion] text-lg">MISSION.</h2>
                        {/* <div className="w-full flex justify-center py-5">
                            <img src={osfLogo} className="h-20 w-20"></img>
                        </div> */}
                        <p className="text-xs /75 text-justify font-[PPFraktion] uppercase">
                            OBSIDIAN SOUNDFIELDS (OSF) is a specialized digital
                            archive dedicated to the documentation of anomalous
                            environments and celestial phenomena. From the
                            crystalline planes of Chroma Horizon to the
                            submerged ring of Blue Meridian, our work focuses on
                            the intersection of structured space and reactive
                            sound.
                        </p>
                        <p className="text-xs /75 font-[PPFraktion] uppercase">
                            NOTICE: UNAUTHORIZED ENCROACHMENT UPON CATALOGED
                            STRUCTURES IS STRICTLY PROHIBITED. VISITOR'S PASS IS
                            REQUIRED.
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="font-[PPFraktion] text-lg">PROCESS.</h2>
                        <div className="card p-px">
                            <img src={waveGIF} alt="Wave Animation" />
                        </div>
                        <p className="text-xs /75 text-justify font-[PPFraktion] uppercase">
                            All content is created and produced by OSF: the
                            music and sound design are composed in FL Studio,
                            the visuals are edited and animated in After
                            Effects, and any initial images are generated with
                            Midjourney but fully customized, polished, and
                            integrated by OSF.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

// <section className="relative h-screen w-full flex flex-col items-center justify-center">
//     <h1 className="font-[Monocode] text-sm text-left border-b-2 border-white/15 border-dotted w-full flex justify-between">
//         <p>[01] OVERVIEW</p>
//         <button
//             onClick={() => {
//                 setIsVisible((prev) => !prev);
//             }}
//             className="text-sm"
//         >
//             +
//         </button>
//     </h1>
//     <div className="p-5 bg-linear-to-b from-[#69696925] to-transparent flex flex-col gap-5">
//         <div className="flex gap-2 w-full">
//             <img
//                 src={img1}
//                 className="object-cover w-full aspect-square"
//             ></img>
//             <img
//                 src={img2}
//                 className="object-cover w-full aspect-square "
//             ></img>
//             <img
//                 src={img3}
//                 className="object-cover w-full aspect-square"
//             ></img>
//         </div>
//         <div className="">
//             <p className="font-[Oxanium]">
//                 <span className="font-[Monocode] text-xl">
//                     OBSIDIAN SOUNDFIELDS
//                 </span>
//                 (OSF) is a specialized digital archive dedicated to the
//                 documentation of anomalous environments and celestial
//                 phenomena. From the crystalline planes of Chroma Horizon
//                 to the submerged ring of Blue Meridian, our work focuses
//                 on the intersection of structured space and reactive
//                 sound.
//             </p>
//         </div>
//     </div>
// </section>
