import React from "react";
import Header from "./components/sections/Header";
import NewEntry from "./components/sections/NewEntry";
import Archive from "./components/sections/Archive";

function App() {
    return (
        <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
            {/* SIDE NAV */}
            <nav className="fixed left-0 h-full">
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
            </nav>

            {/* 1. HEADER */}
            <section className="h-screen w-full flex items-center justify-center">
                {/* snap-start */}
                <Header />
            </section>

            {/* 2. NEW ENTRY */}
            <section className="h-screen w-full flex items-center justify-center">
                <NewEntry />
            </section>

            {/* BROADCAST NODES - MAY BE MERGED WITH DIFFEENT SECTION */}
            <section className="h-screen w-full flex items-center justify-center border border-red-500">
                <Archive />
            </section>
        </main>
    );
}

export default App;
