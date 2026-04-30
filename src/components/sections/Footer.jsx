import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-10">
      {/* columns */}
      <div className="flex font-[PPFraktion] text-sm gap-15">
        {/* col1 */}
        <div className="flex flex-col gap-2">
          <h1 className="font-[Monocode] font-bold">OBSIDIAN SOUNDFIELDS</h1>
          <ul className="flex flex-col gap-2 [&_li]:text-xs">
            <li>LATEST</li>
            <li>OVERVIEW</li>
            <li>PROCESS</li>
          </ul>
        </div>
        {/* col2 */}
        <div className="flex flex-col gap-2">
          <h1 className="font-[Monocode] font-bold">PLATFORMS</h1>
          <ul className="flex flex-col gap-2 [&_li]:text-xs">
            <li>YOUTUBE</li>
            <li>SPOTIFY</li>
            <li>SOUNDCLOUD</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
