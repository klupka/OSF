import React from "react";
import OSFProcessImage1 from "../../assets/images/foley_recording/blue_plane_interior.jpg";
import OSFProcessImage2 from "../../assets/images/foley_recording/abstract_cieling.jpg";
import OSFProcessImage3 from "../../assets/images/foley_recording/concrete_wall_zoom_mic.jpg";
import OSFProcessImage4 from "../../assets/images/OSF_14.jpg";

import "../embla.css";
import EmblaCarousel from "../EmblaCarousel";
const OPTIONS = {};
const SLIDE_COUNT = 4;
const SLIDES = [
    OSFProcessImage1,
    OSFProcessImage2,
    OSFProcessImage3,
    OSFProcessImage4,
];

const Process = () => {
    return (
        <section className="relative w-full flex flex-col items-center justify-start border border-red-500/0">
            {/* Foreground */}
            <h1 className="font-[Monocode] justify-start border-b-0 border-white/50 border-dotted w-full flex gap-2 mb-25">
                <p className="w-fit whitespace-nowrap text-[65px] font-bold">
                    PROCESS
                </p>
                <p className="text-sm">[03]</p>
            </h1>

            <div className={`flex w-full gap-5 border-0 border-white h-full`}>
                {/* text */}
                <div className="flex flex-col items-center justify-between w-1/3">
                    <div className="flex flex-col gap-10">
                        {/* <div className="flex w-full justify-center">
                            <p className="text-lg font-[PPFraktion]">
                                OBSIDIAN SOUNDFIELDS
                            </p>
                        </div> */}
                        <div className="flex flex-col gap-5">
                            {/* pb-10 border-b border-dashed border-white/25 */}
                            <h2 className="font-[PPFraktion] text-lg">
                                VISION.
                            </h2>
                            {/* <div className="w-full flex justify-center py-5">
                            <img src={osfLogo} className="h-20 w-20"></img>
                        </div> */}
                            <p className="text-xs /75 text-justify font-[PPFraktion] uppercase">
                                Every OSF production is to evoke a sense of
                                "active solitude"—the feeling of being entirely
                                alone in a space that is both immense and
                                intentional. We aim to balance the cold, rigid
                                beauty of brutalist architecture with the warmth
                                of shifting light and ambient textures.
                                Emotionally, the pipeline is designed to move
                                the viewer from a state of distraction into a
                                state of "resonant stillness," where the
                                boundaries between the sound and the space begin
                                to blur.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="font-[PPFraktion] text-lg">
                                VISUAL.
                            </h2>
                            {/* <div className="card p-px">
                            <img src={waveGIF} alt="Wave Animation" />
                        </div> */}
                            <p className="text-xs /75 text-justify font-[PPFraktion] uppercase">
                                The visual foundation of each site begins with
                                environmental concepts drafted in Midjourney.
                                These initial generations serve as the raw
                                data—primitive snapshots of anomalous
                                zones—which are then subjected to an extensive
                                post-production protocol. Using After Effects,
                                every frame is fully customized, polished, and
                                animated. We implement complex masking, particle
                                effects, and precise color grading to transform
                                static imagery into a seamless, breathing
                                environment, ensuring that the visual loop
                                remains stable for long-term observation.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="font-[PPFraktion] text-lg">
                                AUDITORY.
                            </h2>
                            {/* <div className="card p-px">
                            <img src={waveGIF} alt="Wave Animation" />
                        </div> */}
                            <p className="text-xs /75 text-justify font-[PPFraktion] uppercase">
                                The audio layer is the pulse of the OSF archive,
                                engineered entirely within FL Studio. Our sound
                                design is a meticulously composed blend of
                                granular synthesis and ambient textures,
                                designed to feel as though it is emanated
                                directly from the environment’s architecture. By
                                focusing on specific frequency ranges and
                                spatial panning, we create immersive soundscapes
                                that react to the visual atmosphere. Every note
                                and sub-bass frequency is calibrated to provide
                                a high-fidelity refuge for deep-cognitive tasks
                                and meditative clarity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* images */}
                <div className="w-2/3 h-175">
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </div>
            </div>
        </section>
    );
};

export default Process;

{
    /* <div className="max-h-[800px] max-w-[95%] flex flex-col gap-1">
                    <div className="card p-px h-[70%] w-full">
                        <img
                            src={OSFProcessImage1}
                            className="w-full h-full object-cover"
                        ></img>
                    </div>
                    <div className="flex h-[30%] w-full gap-1">
                        <div className="card p-px w-full">
                            <img
                                src={OSFProcessImage2}
                                className="w-full h-full object-cover"
                            ></img>
                        </div>
                        <div className="card p-px w-full">
                            <img
                                src={OSFProcessImage3}
                                className="w-full h-full object-cover"
                            ></img>
                        </div>
                        <div className="card p-px w-full">
                            <img
                                src={OSFProcessImage4}
                                className="w-full h-full object-cover"
                            ></img>
                        </div>
                    </div>
                </div> */
}
