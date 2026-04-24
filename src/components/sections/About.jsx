import OSF23Image from "../../assets/images/OSF_23.jpg";
import OSF26Image from "../../assets/images/OSF_26.jpg";
import OSFExImage from "../../assets/images/OSF_Extra.jpg";
import OSF14Image from "../../assets/images/OSF_14.jpg";
import waveGIF from "../../assets/videos/wave.gif";
import osfLogo from "../../assets/images/osf_logo.png";

const About = () => {
    return (
        <section className="relative w-full flex flex-col items-center justify-start border border-red-500/0">
            {/* Foreground */}
            <h1 className="font-[Monocode] justify-start border-b-0 border-white/50 border-dotted w-full flex gap-2 mb-25">
                <p className="w-fit whitespace-nowrap text-[65px] font-bold">
                    OVERVIEW
                </p>
                <p className="text-sm">[02]</p>
            </h1>

            <div className={`flex w-full gap-5 border-0 border-white h-full`}>
                {/* images */}
                <div className="w-2/3 flex flex-col gap-1 bg-blue-500/0">
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
                    <div className="flex justify-between items-center font-[PPFraktion] text-[8px] w-full pt-2">
                        <div className="flex justify-center items-center flex-col gap-1 [&_th]:font-normal [&_td]:text-left [&_th]:text-left w-full">
                            <div className="flex w-full gap-5 justify-between items-center">
                                <p>
                                    4F 50 45 52 41 54 49 4F 4E 20 53 54 41 52 54
                                </p>
                                <div className="w-1/2 flex justify-between">
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>6</p>
                                    <p>2</p>
                                    <p>0</p>
                                    <p>2</p>
                                    <p>3</p>
                                </div>
                            </div>
                            <table className="w-full flex justify-between text-left">
                                <tbody className="w-full flex flex-col items-stretch">
                                    <tr className="flex w-full">
                                        <th className="w-1/3">ENTRIES</th>

                                        <td className="w-2/3">108</td>
                                    </tr>
                                    <tr className="flex w-full">
                                        <th className="w-1/3">ACCESS_LVL</th>

                                        <td className="w-2/3">OBSERVER</td>
                                    </tr>
                                </tbody>
                                <tbody className="w-full flex flex-col items-stretch">
                                    <tr className="flex w-full">
                                        <th className="w-1/3">SIGNAL</th>

                                        <td className="w-2/3">STABLE</td>
                                    </tr>
                                    <tr className="flex w-full">
                                        <th className="w-1/3">STRENGTH</th>

                                        <td className="w-2/3">99.78%</td>
                                    </tr>
                                    <tr className="flex w-full">
                                        <th className="w-1/3">OUTPUT</th>

                                        <td className="w-2/3">DIGITAL</td>
                                    </tr>
                                </tbody>
                                <tbody className="w-full flex flex-col items-stretch">
                                    <tr className="flex w-full">
                                        <th className="w-1/3">SOURCE</th>

                                        <td className="w-2/3 px-0.5 bg-white text-black w-fit">
                                            OSF
                                        </td>
                                    </tr>
                                    <tr className="flex w-full">
                                        <th className="w-1/3">--</th>

                                        <td className="w-2/3">--</td>
                                    </tr>
                                    {/* <tr className="flex w-full">
                                        <th className="w-3/3">
                                            UNAUTHENTICATED ACCESS. VISITOR'S
                                            PASS IS REQUIRED.
                                        </th>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* text */}
                <div className="flex flex-col items-center justify-between w-1/3 bg-red-500/0">
                    <div className="flex flex-col gap-10">
                        <div className="flex w-full justify-start">
                            <p className="text-lg font-[PPFraktion]">
                                OBSIDIAN SOUNDFIELDS
                            </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            {/* <h2 className="font-[PPFraktion] text-lg">
                                MISSION.
                            </h2> */}
                            <p className="text-xs /75 text-justify font-[PPFraktion] uppercase">
                                Obsidian Soundfields (OSF) is an ambient audio
                                visual project and evolving digital archive that
                                explores liminal space, perception, and the
                                emotional weight of environment. Built on
                                original sound design and minimalistic visual
                                composition, OSF presents spaces that feel vast,
                                quiet, and suspended in time, often inspired by
                                brutalist architecture, empty interiors, and
                                distant, unplaceable locations. Each release is
                                treated as a recorded observation, allowing the
                                viewer to experience a moment that exists
                                somewhere between reality and abstraction.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            {/* <h2 className="font-[PPFraktion] text-lg">
                                ENVIRONMENT.
                            </h2> */}
                            <p className="text-xs /75 text-justify font-[PPFraktion] uppercase">
                                At its core, OSF combines field recordings,
                                analog style synthesis, and spatial audio
                                techniques to create immersive soundscapes that
                                emphasize stillness, depth, and subtle motion.
                                These sound environments are paired with
                                carefully constructed visuals where lighting,
                                scale, and atmosphere take priority over action.
                                Fixed perspectives, soft illumination, and slow
                                environmental shifts create a sense of presence
                                rather than narrative. The result is not meant
                                to tell a direct story, but to place the viewer
                                inside a controlled atmosphere where
                                interpretation is entirely personal.
                            </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            {/* <h2 className="font-[PPFraktion] text-lg">
                                PURPOSE.
                            </h2> */}

                            <p className="text-xs /75 text-justify font-[PPFraktion] uppercase">
                                Every entry within Obsidian Soundfields
                                functions as part of a larger interconnected
                                system, presented in the tone of an archive or
                                classified record. Locations, structures, and
                                anomalies are documented rather than explained,
                                hinting at a broader underlying framework that
                                remains intentionally unresolved. Through this
                                format, OSF becomes more than a collection of
                                visuals and sound. It operates as a living
                                archive of environments designed to evoke
                                introspection, calm, and a quiet sense of
                                discovery within spaces that feel both
                                unfamiliar and strangely known.
                            </p>
                        </div>
                    </div>
                    {/* text - footer */}
                    {/* <div className="flex justify-between items-center font-[PPFraktion] text-[8px] w-full border-t border-dotted pt-5">
                        <div className="flex justify-center items-center flex-col gap-1 [&_th]:font-normal [&_td]:text-left [&_th]:text-left w-full">
                            <table className="w-full flex justify-between text-left">
                                <tbody className="w-full flex flex-col items-stretch">
                                    <tr className="flex w-full">
                                        <th className="w-1/2">ENTRIES</th>

                                        <td className="w-1/2">108</td>
                                    </tr>
                                    <tr className="flex w-full">
                                        <th className="w-1/2">ACCESS_LVL</th>

                                        <td className="w-1/2">OBSERVER</td>
                                    </tr>
                                </tbody>
                                <tbody className="w-full flex flex-col items-stretch">
                                    <tr className="flex w-full">
                                        <th className="w-1/2">SIGNAL</th>

                                        <td className="w-1/2">STABLE</td>
                                    </tr>
                                    <tr className="flex w-full">
                                        <th className="w-1/2">STRENGTH</th>

                                        <td className="w-1/2">99.78%</td>
                                    </tr>
                                    <tr className="flex w-full">
                                        <th className="w-1/2">OUTPUT</th>

                                        <td className="w-1/2">DIGITAL</td>
                                    </tr>
                                </tbody>
                                <tbody className="w-full flex flex-col items-stretch">
                                    <tr className="flex w-full">
                                        <th className="w-1/2">SOURCE</th>

                                        <td className="w-1/2 px-0.5 bg-white text-black w-fit">
                                            OSF
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="flex w-full gap-5 justify-between items-center">
                                <p>
                                    4F 50 45 52 41 54 49 4F 4E 20 53 54 41 52 54
                                </p>
                                <div className="w-3/4 flex justify-between">
                                    <p>1</p>
                                    <p>1</p>
                                    <p>1</p>
                                    <p>6</p>
                                    <p>2</p>
                                    <p>0</p>
                                    <p>2</p>
                                    <p>3</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default About;

// SAVE FOR FOOTER GRAPHICS
// <div className="flex justify-between items-center font-[PPFraktion] text-[10px] w-full">
//     <p className="font-bold text-lg">2023</p>
//     <div className="flex justify-center items-center flex-col gap-1">
//         <p>DESIGNED, MANUFACTURED, AND PRODUCED BY&nbsp;</p>
//         <span className="font-[Monocode] border px-1 tracking-widest w-fit">
//             OBSIDIAN SOUNDFIELDS
//         </span>
//     </div>
// </div>
