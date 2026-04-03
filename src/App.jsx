import React from "react";
import Header from "./components/sections/Header";
import NewEntry from "./components/sections/NewEntry";

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
            <section className="h-screen w-full snap-start flex items-center justify-center">
                <Header />
            </section>

            {/* 2. NEW ENTRY */}
            <section className="h-screen w-full snap-start flex items-center justify-center">
                <NewEntry />
            </section>

            {/* BROADCAST NODES - MAY BE MERGED WITH DIFFEENT SECTION */}
            <section className="h-screen w-full snap-start flex items-center justify-center bg-green-500">
                <h1 className="text-4xl font-bold text-white">Section 3</h1>
            </section>
        </main>
    );
}

export default App;
