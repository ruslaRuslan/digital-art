import React, { useState } from "react";

const CopyLinkComponent: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState<string>("");

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Link copied to clipboard!");
      setTimeout(() => {
        setCopySuccess("");
      }, 500);
    } catch (err) {
      setCopySuccess("Failed to copy!");

      setTimeout(() => {
        setCopySuccess("");
      }, 500);
    }
  };

  const linkToCopy: string = "http://localhost:5173/artist-page"; // Replace with your link

  return (
    <>
      <div>
        <button
          onClick={() => copyToClipboard(linkToCopy)}
          className="flex items-center gap-4 pl-8 pr-10 hover:pl-10 hover:pr-12 hover:bg-transparent mt-7 bg-purple-700 active:bg-violet-800 focus:outline-none focus:ring focus:ring-purple-700 ... p-3 rounded-2xl duration-500 border-2 border-purple-700 xs:hidden md:flex "
        >
          <img src="/images/copy.svg" />
          <p className="font-semibold">0xc0E3...B79C</p>
        </button>
      </div>
      <div className="relative">
        <p className="mt-8 absolute text-[#858584] ">{copySuccess}</p>
      </div>
    </>
  );
};

export default CopyLinkComponent;
