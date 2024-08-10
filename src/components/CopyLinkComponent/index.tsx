import React, { useState } from "react";

const CopyLinkComponent: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState<string>("");

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Link copied to clipboard!");
      setTimeout(() => {
        setCopySuccess("");
      }, 400);
    } catch (err) {
      setCopySuccess("Failed to copy!");

      setTimeout(() => {
        setCopySuccess("");
      }, 400);
    }
  };

  const data: string = "0xc0E3...B79C"; // Replace with your link

  return (
    <>
      <button
        onClick={() => copyToClipboard(data)}
        className="w-[100%] relative flex items-center gap-4 pl-8 pr-10 hover:pl-10 hover:pr-12 hover:bg-transparent mt-7 bg-purple-700 active:bg-violet-800 focus:outline-none focus:ring focus:ring-purple-700 ... p-3 rounded-2xl duration-500 border-2 border-purple-700  md:flex "
      >
        <img src="/images/copy.svg" />
        <p className="font-semibold">{data}</p>
        <p className="top-[-30px] absolute text-[#858584] ">{copySuccess}</p>
      </button>
    </>
  );
};

export default CopyLinkComponent;
