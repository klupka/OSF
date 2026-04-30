import React, { useEffect, useState } from "react";
import Header from "./components/sections/Header";
import NewEntry from "./components/sections/NewEntry";
import About from "./components/sections/About";
import Test from "./components/sections/Test";

import BlurEffect from "react-progressive-blur";

import osfLogo from "./assets/images/osf_logo.png";

import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import Process from "./components/sections/Process";
import Footer from "./components/sections/Footer";

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

  const scrollToSection = (e, id) => {
    e.preventDefault(); // Stop the default #id jump
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center", // This is the magic line that centers it
        inline: "nearest",
      });
    }
  };

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

        <div
          className={`fixed top-0 w-full z-90 transition-all duration-500 ease-in-out`}
        >
          <BlurEffect
            className={`h-45 bg-linear-to-b from-[#060606] to-transparent`}
            intensity={100}
            position="top"
          />
        </div>

        <nav
          className={`fixed top-0 w-full z-100 transition-all duration-500 ease-in-out`}
        >
          <div className="flex justify-between items-center px-3 py-2 z-100">
            <img src={osfLogo} className="w-7 h-7"></img>
            <ul className="font-[Monocode] text-sm flex px-5 gap-10 py-2 justify-end items-center">
              <li>
                <a
                  href="#new-entry-section"
                  onClick={(e) => scrollToSection(e, "new-entry-section")}
                >
                  01
                </a>
              </li>
              <li>
                <a
                  href="#overview-section"
                  onClick={(e) => scrollToSection(e, "overview-section")}
                >
                  02
                </a>
              </li>
              <li>
                <a
                  href="#process-section"
                  onClick={(e) => scrollToSection(e, "process-section")}
                >
                  03
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* 1. HEADER */}
        <section
          className="h-screen w-full flex items-center justify-center"
          id="header-section"
        >
          <Header />
        </section>

        <div className="flex flex-col gap-[500px]">
          {/* 2. NEW ENTRY */}
          <section
            className="w-full max-w-375 flex flex-col items-center justify-center"
            id="new-entry-section"
          >
            <NewEntry />
          </section>

          {/* OVERVIEW */}
          <section
            className="w-full max-w-375 flex flex-col items-center justify-center"
            id="overview-section"
          >
            <About />
          </section>

          {/* PROCESS */}
          <section
            className="w-full max-w-375 flex flex-col items-center justify-center"
            id="process-section"
          >
            <Process />
          </section>

          {/* FOOTER */}
          <section className="w-full max-w-375 flex flex-col items-center justify-center">
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
