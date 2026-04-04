import Grainient from "../Grainient";
import QRCode from "react-qr-code";

// SVGs
import itunesSVG from "../../assets/images/itunes.svg";
import youtubeSVG from "../../assets/images/youtube.svg";
import tidalSVG from "../../assets/images/tidal.svg";
import spotifySVG from "../../assets/images/spotify.svg";

// fast-average-color
import { useEffect, useState, useRef } from "react";
import { FastAverageColor } from "fast-average-color";
import thumbnailImage from "../../assets/images/maxresdefault3.jpg";
import thumbnailImage2 from "../../assets/images/maxresdefault2.jpg";
import thumbnailImage3 from "../../assets/images/maxresdefault4.jpg";

// Inside your component, use it like this:
const QRCodeComponent = QRCode.default ? QRCode.default : QRCode;

function NewEntry() {
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

    if (isLoading == false && averageThumbnailColors !== null) {
        return (
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-full object-cover -z-10">
                    {/* <Grainient
                        color1={averageThumbnailColors.lightColor} // light
                        color2={averageThumbnailColors.mediumColor} // mid
                        color3={averageThumbnailColors.darkColor} // dark
                        timeSpeed={0} // was 0.5
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
                    /> */}
                </div>

                {/* Foreground */}

                <div className="flex flex-col gap-2 h-full justify-center">
                    <div className="flex flex-col gap-10">
                        <h1 className="font-[Monocode] text-5xl text-white font-bold text-start">
                            // LATEST
                        </h1>
                        <div className="relative flex gap-0 items-center">
                            {/* BG Card #1 */}
                            <div
                                className="-z-90 blur-sm absolute -left-20 h-[90%] gap-5 text-white font-[Oxanium] brightness-65 saturate-50"
                                style={{
                                    boxShadow: `0 0 100px 10px ${averageThumbnailColors.mediumColor}50`,
                                    backgroundColor: `${averageThumbnailColors.mediumColor}50`,
                                }}
                            >
                                <div className="bg-white/10 p-5 overflow-hidden relative">
                                    <div className="grain-overlay"></div>

                                    <span className="relative z-20 flex flex-col gap-5">
                                        <div className="overflow-hidden">
                                            <img
                                                onLoad={(e) =>
                                                    getThumbnailColor(
                                                        e.currentTarget,
                                                    )
                                                }
                                                className="scale-101 h-130"
                                                src={imageSrcBg1}
                                            ></img>
                                        </div>

                                        <div className="flex justify-between">
                                            <div className="flex flex-col gap-2">
                                                <h2 className="text-xl">
                                                    092 // Azure Strip - 1 Hour
                                                    Immersive Soundfield
                                                </h2>

                                                <p className="text-sm text-white/75">
                                                    The Azure Strip exists not
                                                    to move people from one
                                                    place to another, but to
                                                    carry them through moments
                                                    they would otherwise refuse
                                                    to leave behind...
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
                                                            <th>
                                                                TRANSMISSION:
                                                            </th>

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
                            </div>

                            {/* Main Card */}
                            <div
                                className="z-10 flex gap-5 text-white font-[Oxanium]"
                                style={{
                                    boxShadow: `0 0 100px 10px ${averageThumbnailColors.mediumColor}50`,
                                    backgroundColor: `${averageThumbnailColors.mediumColor}50`,
                                }}
                            >
                                <div className="card p-5 overflow-hidden relative">
                                    <div className="grain-overlay"></div>

                                    <span className="relative z-20 flex flex-col gap-5">
                                        <div className="overflow-hidden">
                                            <img
                                                onLoad={(e) =>
                                                    getThumbnailColor(
                                                        e.currentTarget,
                                                    )
                                                }
                                                className="scale-101 h-150"
                                                src={imageSrc}
                                            ></img>
                                        </div>

                                        <div className="flex justify-between">
                                            <div className="flex flex-col gap-2">
                                                <h2 className="text-xl">
                                                    092 // Azure Strip - 1 Hour
                                                    Immersive Soundfield
                                                </h2>

                                                <p className="text-sm text-white/75">
                                                    The Azure Strip exists not
                                                    to move people from one
                                                    place to another, but to
                                                    carry them through moments
                                                    they...
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
                                                            <th>
                                                                TRANSMISSION:
                                                            </th>

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
                            </div>

                            {/* BG Card #2 */}
                            <div
                                className="-z-90 blur-sm absolute -right-20 h-[90%] gap-5 text-white font-[Oxanium] brightness-65 saturate-50"
                                style={{
                                    boxShadow: `0 0 100px 10px ${averageThumbnailColors.mediumColor}50`,
                                    backgroundColor: `${averageThumbnailColors.mediumColor}50`,
                                }}
                            >
                                <div className="bg-white/10 p-5 overflow-hidden relative">
                                    <div className="grain-overlay"></div>

                                    <span className="relative z-20 flex flex-col gap-5">
                                        <div className="overflow-hidden">
                                            <img
                                                onLoad={(e) =>
                                                    getThumbnailColor(
                                                        e.currentTarget,
                                                    )
                                                }
                                                className="scale-101 h-130"
                                                src={imageSrcBg2}
                                            ></img>
                                        </div>

                                        <div className="flex justify-between">
                                            <div className="flex flex-col gap-2">
                                                <h2 className="text-xl">
                                                    106 // Blue Meridian - 1
                                                    Hour Calming Underwater
                                                    Soundfield
                                                </h2>

                                                <p className="text-sm text-white/75">
                                                    Blue Meridian is an immense
                                                    circular corridor spanning
                                                    several kilometers in
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
                                                            <th>
                                                                TRANSMISSION:
                                                            </th>

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
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        {/* <h2 className="font-[Monocode] text-xl text-white text-center">
                            LISTEN_NOW
                        </h2> */}
                        <div className="flex gap-2 justify-start">
                            <div className="card overflow-hidden relative w-full">
                                <div className="grain-overlay"></div>

                                <span
                                    className="relative p-3 z-20 text-white flex justify-start items-center gap-4 px-5"
                                    style={{
                                        boxShadow: `0 0 100px 10px ${averageThumbnailColors.mediumColor}50`,
                                        backgroundColor: `${averageThumbnailColors.mediumColor}40`,
                                    }}
                                >
                                    <img
                                        src={youtubeSVG}
                                        alt="Icon Description"
                                        className="w-7 h-7"
                                    />
                                    <p className="font-[Oxanium]">
                                        YouTube&nbsp;&nbsp;&nbsp;↗
                                    </p>
                                </span>
                            </div>

                            <div className="card overflow-hidden relative w-full">
                                <div className="grain-overlay"></div>

                                <span
                                    className="relative p-3 z-20 text-white flex justify-start items-center gap-4 px-5"
                                    style={{
                                        boxShadow: `0 0 100px 10px ${averageThumbnailColors.mediumColor}50`,
                                        backgroundColor: `${averageThumbnailColors.mediumColor}40`,
                                    }}
                                >
                                    <img
                                        src={spotifySVG}
                                        alt="Icon Description"
                                        className="w-7 h-7"
                                    />
                                    <p className="font-[Oxanium]">
                                        Spotify&nbsp;&nbsp;&nbsp;↗
                                    </p>
                                </span>
                            </div>

                            <div className="card overflow-hidden relative w-full">
                                <div className="grain-overlay"></div>

                                <span
                                    className="relative p-3 z-20 text-white flex justify-start items-center gap-4 px-5"
                                    style={{
                                        boxShadow: `0 0 100px 10px ${averageThumbnailColors.mediumColor}50`,
                                        backgroundColor: `${averageThumbnailColors.mediumColor}40`,
                                    }}
                                >
                                    <img
                                        src={itunesSVG}
                                        alt="Icon Description"
                                        className="w-7 h-7"
                                    />
                                    <p className="font-[Oxanium]">
                                        Apple Music&nbsp;&nbsp;&nbsp;↗
                                    </p>
                                </span>
                            </div>

                            <div className="card overflow-hidden relative w-full">
                                <div className="grain-overlay"></div>

                                <span
                                    className="relative p-3 z-20 text-white flex justify-start items-center gap-4 px-5"
                                    style={{
                                        boxShadow: `0 0 100px 10px ${averageThumbnailColors.mediumColor}50`,
                                        backgroundColor: `${averageThumbnailColors.mediumColor}40`,
                                    }}
                                >
                                    <img
                                        src={tidalSVG}
                                        alt="Icon Description"
                                        className="w-7 h-7"
                                    />
                                    <p className="font-[Oxanium]">
                                        Tidal&nbsp;&nbsp;&nbsp;↗
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NewEntry;
