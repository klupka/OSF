import React, { useEffect, useState } from "react";
import Header from "./components/sections/Header";
import NewEntry from "./components/sections/NewEntry";
import Archive from "./components/sections/Archive";
import Platforms from "./components/sections/Platforms";

import osfLogo from "./assets/images/osf_logo.png";

import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

function App() {
    const [isAtTop, setIsAtTop] = useState(true);

    window.addEventListener("scroll", () => {
        // console.log(window.scrollY);
        if (window.scrollY === 0) {
            setIsAtTop(true);
        } else {
            // Actions to take once they start scrolling down
            // document.body.classList.remove('at-top');
            setIsAtTop(false);
        }
    });

    return (
        <>
            <ReactLenis />
            <main className="h-screen flex flex-col items-center text-[#d8d8d8]">
                {/* SIDE NAV */}
                {/* <nav className="fixed left-0 h-full">
                <div className="flex flex-col h-full items-start justify-between p-4 font-[oxanium] text-white">
                    <div></div>
                    <div>{"[00] ---"}</div>
                    <div className="flex justify-center items-center gap-2">
                        <img
                            src="./images/osf_favicon.png"
                            className="h-10"
                        ></img>
                        <div>blending reality.</div>
                    </div>
                </div>
            </nav> */}

                <nav
                    className={`fixed top-0 w-full z-9999 transition-all duration-500 ease-in-out ${
                        isAtTop ? "" : "top-nav"
                    }`}
                >
                    {isAtTop ?? <div className="grain-overlay"></div>}
                    <div className="flex justify-between items-center px-3 py-2">
                        <img src={osfLogo} className="w-7 h-7"></img>
                        <ul className="font-[Monocode] text-sm flex px-5 gap-10 py-2 justify-end items-center">
                            <li>
                                <a href="#new-entry-section">01</a>
                            </li>
                            <li>
                                <a href="/services">02</a>
                            </li>
                            <li>
                                <a href="/contact">03</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* 1. HEADER */}
                <section
                    className="h-screen w-full flex items-center justify-center"
                    id="header-section"
                >
                    {/* snap-start */}
                    <Header />
                </section>

                {/* 2. NEW ENTRY */}
                <section
                    className="h-screen w-375 flex flex-col items-center justify-center"
                    id="new-entry-section"
                >
                    <NewEntry />
                </section>

                {/* BROADCAST NODES - MAY BE MERGED WITH DIFFEENT SECTION */}
                <section className="h-screen w-375 flex flex-col items-center justify-center">
                    {/* <Archive /> */}
                    <Archive />
                </section>
            </main>
        </>
    );
}

export default App;
