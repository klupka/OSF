import Grainient from "../Grainient";
import QRCode from "react-qr-code";

// SVGs
import itunesSVG from "../../assets/images/itunes.svg";
import youtubeSVG from "../../assets/images/youtube.svg";
import tidalSVG from "../../assets/images/tidal.svg";
import spotifySVG from "../../assets/images/spotify.svg";

// Inside your component, use it like this:
const QRCodeComponent = QRCode.default ? QRCode.default : QRCode;

const NewEntry = () => {
    const imageSrc = "https://img.youtube.com/vi/c_EdC85jKq4/maxresdefault.jpg";

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video */}

            <div className="absolute top-0 left-0 w-full h-full object-cover -z-10">
                <Grainient
                    color1="#328283" // light
                    color2="#032028" // mid
                    color3="#001118" // dark
                    timeSpeed={0.5}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={12}
                    warpSpeed={6}
                    warpAmplitude={80}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.05}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1}
                    gamma={1}
                    saturation={0.75}
                    centerX={0}
                    centerY={0}
                    zoom={0.8}
                />
            </div>

            {/* Foreground */}
            <div className="z-10 flex gap-5 text-white font-[Oxanium]">
                <div className="card p-5 overflow-hidden relative">
                    <div className="grain-overlay"></div>
                    <span className="relative z-20 flex flex-col gap-5">
                        <div className="overflow-hidden">
                            <img
                                className="scale-101 h-150"
                                src={imageSrc}
                            ></img>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl">
                                    106 // Blue Meridian - 1 Hour Calming
                                    Underwater Soundfield
                                </h2>
                                <p className="text-sm text-white/75">
                                    Blue Meridian is an immense circular
                                    corridor spanning several kilometers in
                                    diameter, forming...
                                </p>
                            </div>
                            <div className="text-sm [&_th]:font-normal [&_th]:text-right [&_th]:text-white/65 flex gap-2">
                                <table className="border-separate border-spacing-x-2">
                                    <tbody>
                                        <tr>
                                            <th>DETECTED:</th>
                                            <td>04-01-2026</td>
                                        </tr>
                                        <tr>
                                            <th>TRANSMISSION:</th>
                                            <td>c_EdC85jKq4</td>
                                        </tr>
                                        <tr>
                                            <th>DURATION:</th>
                                            <td>04-01-2026</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="border-2 border-white">
                                    <QRCodeComponent
                                        value={
                                            "https://www.youtube.com/watch?v=c_EdC85jKq4"
                                        }
                                        size={64}
                                        bgColor="#FFFFFF"
                                        fgColor="#FFFFFF00"
                                    />
                                </div>
                            </div>
                        </div>
                    </span>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="card p-5 overflow-hidden relative">
                        <div className="grain-overlay"></div>
                        <span className="relative z-20 text-white flex justify-center">
                            {/* <div className="font-[Oxanium]">YouTube</div> */}
                            <img
                                src={youtubeSVG}
                                alt="Icon Description"
                                className="w-10 h-10"
                            />
                        </span>
                    </div>

                    <div className="card p-5 overflow-hidden relative">
                        <div className="grain-overlay"></div>
                        <span className="relative z-20 text-white flex justify-center">
                            {/* <div className="font-[Oxanium]">Spotify</div> */}
                            <img
                                src={spotifySVG}
                                alt="Icon Description"
                                className="w-10 h-10"
                            />
                        </span>
                    </div>

                    <div className="card p-5 overflow-hidden relative">
                        <div className="grain-overlay"></div>
                        <span className="relative z-20 text-white flex justify-center">
                            {/* <div className="font-[Oxanium]">Apple Music</div> */}
                            <img
                                src={itunesSVG}
                                alt="Icon Description"
                                className="w-10 h-10"
                            />
                        </span>
                    </div>

                    <div className="card p-5 overflow-hidden relative">
                        <div className="grain-overlay"></div>
                        <span className="relative z-20 text-white flex justify-center">
                            {/* <div className="font-[Oxanium]">Tidal</div> */}
                            <img
                                src={tidalSVG}
                                alt="Icon Description"
                                className="w-10 h-10"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewEntry;
