import Grainient from "../Grainient";
import QRCode from "react-qr-code";
import Barcode from "react-barcode";

// SVGs
import itunesSVG from "../../assets/images/itunes.svg";
import youtubeSVG from "../../assets/images/youtube.svg";
import tidalSVG from "../../assets/images/tidal.svg";
import spotifySVG from "../../assets/images/spotify.svg";
// import angleRight from "../../assets/images/angle-right.svg";
import angleRight from "../../assets/images/arrow-up-right.svg";
import osfGlassLogo from "../../assets/images/osf_glass_logo.png";
import osfLogo from "../../assets/images/osf_logo.png";

// fast-average-color
import { useEffect, useState, useRef } from "react";
import { FastAverageColor } from "fast-average-color";
import thumbnailImage from "../../assets/images/maxresdefault3.jpg";
import thumbnailImage2 from "../../assets/images/maxresdefault2.jpg";
import thumbnailImage3 from "../../assets/images/maxresdefault4.jpg";

import waveGIF from "../../assets/videos/wave.gif";

// Inside your component, use it like this:
const QRCodeComponent = QRCode.default ? QRCode.default : QRCode;

function NewEntry() {
    const latestVideoURL = "https://www.youtube.com/watch?v=c_EdC85jKq4";
    const imageSrc = thumbnailImage;
    const imageSrcBg1 = thumbnailImage2;
    const imageSrcBg2 = thumbnailImage3;

    const [averageThumbnailColors, setAverageThumbnailColors] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const adjustColorToHex = (
        r,
        g,
        b,
        lightnessAmount,
        saturationAmount = 0,
    ) => {
        // 1. Convert RGB to HSL
        let r1 = r / 255,
            g1 = g / 255,
            b1 = b / 255;
        const max = Math.max(r1, g1, b1),
            min = Math.min(r1, g1, b1);
        let h,
            s,
            l = (max + min) / 2;

        if (max === min) {
            h = s = 0; // achromatic
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r1:
                    h = (g1 - b1) / d + (g1 < b1 ? 6 : 0);
                    break;
                case g1:
                    h = (b1 - r1) / d + 2;
                    break;
                case b1:
                    h = (r1 - g1) / d + 4;
                    break;
            }
            h /= 6;
        }

        // 2. Adjust Lightness AND Saturation
        // We clamp both between 0 and 1 to prevent invalid CSS values
        l = Math.min(Math.max(l + lightnessAmount, 0), 1);
        s = Math.min(Math.max(s + saturationAmount, 0), 1);

        // 3. Convert HSL back to RGB
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        let rFinal, gFinal, bFinal;
        if (s === 0) {
            rFinal = gFinal = bFinal = l;
        } else {
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            rFinal = hue2rgb(p, q, h + 1 / 3);
            gFinal = hue2rgb(p, q, h);
            bFinal = hue2rgb(p, q, h - 1 / 3);
        }

        const toHex = (x) => {
            const hex = Math.round(x * 255).toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        };

        return `#${toHex(rFinal)}${toHex(gFinal)}${toHex(bFinal)}`;
    };

    useEffect(() => {
        setIsLoading(true);

        // 1. Create a new Image object in memory
        const img = new Image();
        img.src = imageSrc;

        // 2. Define what happens when the image is fully downloaded
        img.onload = () => {
            const fac = new FastAverageColor();

            fac.getColorAsync(img)
                .then((color) => {
                    const [r, g, b] = color.value;
                    const saturationAmount = 0.05;
                    const lightColor = adjustColorToHex(
                        r,
                        g,
                        b,
                        -0.5,
                        saturationAmount,
                    );
                    const mediumColor = adjustColorToHex(
                        r,
                        g,
                        b,
                        -0.1,
                        saturationAmount,
                    );
                    const darkColor = adjustColorToHex(
                        r,
                        g,
                        b,
                        -0.15,
                        saturationAmount,
                    );

                    console.log({ lightColor, mediumColor, darkColor });
                    setAverageThumbnailColors({
                        lightColor: lightColor,
                        mediumColor: mediumColor,
                        darkColor: darkColor,
                        // lightColor: "#adadad",
                        // mediumColor: "#adadad",
                        // darkColor: "#adadad",
                    });

                    // 4. Finish loading
                    setIsLoading(false);
                })
                .catch((e) => {
                    console.error("FAC Error:", e);
                    setIsLoading(false); // Stop loading even if it fails
                });
        };

        img.onerror = () => {
            console.error("Failed to load image at", imageSrc);
            setIsLoading(false);
        };
    }, [imageSrc]); // Runs again if the image source changes

    // const [isVisible, setIsVisible] = useState(true);

    if (isLoading == false && averageThumbnailColors !== null) {
        return (
            <section className="relative w-full flex flex-col items-center justify-start border border-red-500/0">
                {/* Foreground */}
                <h1 className="font-[Monocode] text-left border-b-0 border-white/50 border-dotted w-full flex gap-2 mb-25">
                    <p className="w-fit whitespace-nowrap text-[65px] font-bold">
                        LATEST
                    </p>
                    <p className="text-sm">[01]</p>
                    <div className=" text-xs w-full flex flex-col px-1 m-0">
                        {/* <div className="w-full border-b-2 border-white/50 border-dotted"></div> */}
                        {/* <div className="w-full border-b-2 border-white/0 border-dashed"></div> */}
                    </div>
                    {/* <button
                        [01]
                    </button> */}
                </h1>

                <div className={`flex flex-col w-full h-150`}>
                    <div className="flex gap-5 h-full justify-between w-full">
                        <div className="text-sm uppercase font-[Monocode] flex flex-col justify-between bg-red-500/0 w-1/3">
                            <div className="flex flex-col gap-5">
                                <div className="flex w-full justify-between">
                                    <p className="text-lg font-[PPFraktion]">
                                        Azure Strip
                                    </p>
                                    <p className="text-lg font-[PPFraktion]">
                                        092
                                    </p>
                                </div>
                                <p className="text-xs /75 text-justify font-[PPFraktion]">
                                    The Azure Strip exists not to move people
                                    from one place to another, but to carry them
                                    through moments they would otherwise refuse
                                    to leave behind, a long corridor washed in
                                    blue light tuned with minute precision. The
                                    color was not chosen arbitrarily; extensive
                                    research identified a consistent cognitive
                                    response to a specific range of blue, linked
                                    to perceptions of beginnings, most commonly
                                    associated with the early morning sky and
                                    the sense of forward possibility it implies.
                                    People often enter the Strip during
                                    hesitation or indecision, and once inside it
                                    does not restrain them, only insists on
                                    continuation, subtly adjusting its length,
                                    rhythm, and illumination to match the pace
                                    of what they are avoiding. Thoughts that
                                    once felt fixed begin to loosen, not through
                                    understanding or resolution, but through
                                    endurance alone, and when the Strip finally
                                    releases someone, it does so quietly,
                                    leaving them unable to name what changed,
                                    only certain that the moment they were
                                    trapped in no longer exists behind them.
                                </p>
                            </div>

                            <div className="text-xs [&_th]:font-normal [&_td]:text-left [&_th]:text-left flex gap-5 justify-between font-[PPFraktion]">
                                <div className="border-2 border-[#ffffff]">
                                    <QRCodeComponent
                                        value={latestVideoURL}
                                        size={48}
                                        bgColor="#FFFFFF"
                                        fgColor="#FFFFFF00"
                                    />
                                </div>
                                <table className="border-separate border-spacing-x-2 w-full text-[8px]">
                                    <tbody>
                                        <tr>
                                            {/* <th>DETECTED</th> */}

                                            <td>04-01-2026</td>
                                        </tr>

                                        <tr>
                                            {/* <th>TRANSMISSION</th> */}

                                            <td>c_EdC85jKq4</td>
                                        </tr>

                                        <tr>
                                            {/* <th>DURATION</th> */}

                                            <td>01:00:00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="border-separate border-spacing-x-2 w-full text-[8px]">
                                    <tbody>
                                        <tr>
                                            <th>OBS // 観測 ... 45,721</th>
                                        </tr>
                                        <tr>
                                            <th>RSN // 共鳴 ... 1,832</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="relative flex items-start justify-center gap-2 bg-blue-500/0 w-2/3">
                            {/* VIDEO */}
                            <div className="z-10 flex gap-5 font-[Oxanium] transition-all group h-150 w-full">
                                <div className="card p-px overflow-hidden relative w-full h-full">
                                    <span className="relative z-20 flex flex-col gap-5 h-full w-full">
                                        <div className="overflow-hidden h-full w-full">
                                            <img
                                            // onLoad={(e) =>
                                            //     getThumbnailColor(
                                            //         e.currentTarget,
                                            //     )
                                            // }
                                            ></img>
                                            <iframe
                                                className="h-full w-full"
                                                src="https://www.youtube.com/embed/SLda51T53vw"
                                            ></iframe>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            {/* VERTICAL BARCODE + OSF MICROGRAPHIC */}
                            <div className="flex flex-col justify-between items-start h-full overflow-hidden">
                                <div className="rotate-90 w-5 m-0 p-0">
                                    <Barcode
                                        value="azure strip"
                                        background="#FFFFFF00"
                                        textMargin="0"
                                        magin="0"
                                        fontSize="0"
                                        marginTop="0"
                                        marginBottom="0"
                                        marginLeft="0"
                                        marginRight="0"
                                        lineColor="#FFFFFF"
                                        displayValue="false"
                                        className="m-0 p-0"
                                        width="1"
                                        height="15"
                                    />
                                </div>
                                <div className="font-[PPFraktion] flex flex-col -space-y-2 [&_p]:rotate-90 -mb-1 text-[10px] w-4">
                                    <p>O</p>
                                    <p>S</p>
                                    <p>F</p>
                                    <p>-</p>
                                    <p>0</p>
                                    <p>9</p>
                                    <p>2</p>
                                </div>
                            </div>
                        </div>

                        {/* TO BE REMOVED */}
                        {/* <div className="flex flex-col gap-2 justify-center grow items-center hidden">
                            <div className="flex flex-col gap-5 justify-center items-center pb-5">
                                <img src={osfGlassLogo} className="h-40"></img>
                                <p className=" font-[Monocode]">
                                    OBSIDIAN SOUNDFIELDS
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 justify-start w-65">
                                <a
                                    className="card overflow-hidden relative w-full group transition-all"
                                    href="https://www.youtube.com/@OBSIDIANSOUNDFIELDS"
                                    target="_blank"
                                >
                                    <div className="grain-overlay"></div>

                                    <span
                                        className="relative p-3 z-20  flex justify-start items-center gap-4 px-5"
                                        style={{
                                            backgroundColor: `${averageThumbnailColors.mediumColor}10`,
                                        }}
                                    >
                                        <img
                                            src={youtubeSVG}
                                            alt="Icon Description"
                                            className="w-7 h-7 bg-[#ff0033] p-1 rounded-full"
                                        />
                                        <div className="font-[Oxanium] flex justify-between items-center w-full">
                                            <p>YouTube</p>
                                            <img
                                                src={angleRight}
                                                className="w-5 h-5 opacity-75 group-hover:opacity-100"
                                            />
                                        </div>
                                    </span>
                                </a>

                                <a
                                    className="card overflow-hidden relative w-full group transition-all"
                                    href="https://open.spotify.com/artist/6CUKjF2wMpVVLiHrKSshzE?si=j536xbPhRhOdMP-sJQbj4w"
                                    target="_blank"
                                >
                                    <div className="grain-overlay"></div>

                                    <span
                                        className="relative p-3 z-20  flex justify-start items-center gap-4 px-5 bg-green-500/10"
                                        style={{
                                            boxShadow: `0 0 100px 10px ${averageThumbnailColors.mediumColor}50`,
                                            backgroundColor: `${averageThumbnailColors.mediumColor}10`,
                                        }}
                                    >
                                        <img
                                            src={spotifySVG}
                                            alt="Icon Description"
                                            className="w-7 h-7 bg-[#33c064] p-1  rounded-full"
                                        />
                                        <div className="font-[Oxanium] flex justify-between items-center w-full">
                                            <p>Spotify</p>
                                            <img
                                                src={angleRight}
                                                className="w-5 h-5 opacity-75 group-hover:opacity-100"
                                            />
                                        </div>
                                    </span>
                                </a>

                                <a
                                    className="card overflow-hidden relative w-full group transition-all"
                                    href="https://music.apple.com/us/artist/obsidian-soundfields/1736659531"
                                    target="_blank"
                                >
                                    <div className="grain-overlay"></div>

                                    <span
                                        className="relative p-3 z-20  flex justify-start items-center gap-4 px-5 bg-pink-500/10"
                                        style={{
                                            boxShadow: `0 0 100px 10px ${averageThumbnailColors.mediumColor}50`,
                                            backgroundColor: `${averageThumbnailColors.mediumColor}10`,
                                        }}
                                    >
                                        <img
                                            src={itunesSVG}
                                            alt="Icon Description"
                                            className="w-7 h-7 p-1 pr-1.5 bg-[#ff4e6b] rounded-full"
                                        />
                                        <div className="font-[Oxanium] flex justify-between items-center w-full">
                                            <p>Apple Music</p>
                                            <img
                                                src={angleRight}
                                                className="w-5 h-5 opacity-75 group-hover:opacity-100"
                                            />
                                        </div>
                                    </span>
                                </a>

                                <a
                                    className="card overflow-hidden relative w-full hover:cursor-pointer group transition-all"
                                    target="_blank"
                                    href="https://tidal.com/artist/51167375"
                                >
                                    <div className="grain-overlay"></div>

                                    <span
                                        className="relative p-3 z-20  flex justify-start items-center gap-4 px-5 bg-teal-500/10"
                                        style={{
                                            boxShadow: `0 0 100px 10px ${averageThumbnailColors.mediumColor}50`,
                                            backgroundColor: `${averageThumbnailColors.mediumColor}10`,
                                        }}
                                    >
                                        <img
                                            src={tidalSVG}
                                            alt="Icon Description"
                                            className="w-7 h-7 bg-[#000000] p-1 rounded-full"
                                        />
                                        <div className="font-[Oxanium] flex justify-between items-center w-full">
                                            <p>Tidal</p>
                                            <img
                                                src={angleRight}
                                                className="w-5 h-5 opacity-75 group-hover:opacity-100"
                                            />
                                        </div>
                                    </span>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default NewEntry;
