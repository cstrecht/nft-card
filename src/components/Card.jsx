import React from "react";

export default function Card() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-main-bg to-card-line">
      {/* NFT Card: */}
      <div className="w-80 rounded-xl p-7 bg-card-bg shadow-lg shadow-main-bg">
        {/* NFT Image */}
        <div>
          <img
            src="https://public.nftstatic.com/static/nft/res/fc4e11b3c077452aa4e382a78db199a9.png"
            alt="Equilibrium"
            className="rounded-xl cursor-pointer"
          />
        </div>

        {/* NFT Title and Description */}
        <h1 className="text-white font-outfit font-semibold my-3 hover:text-cyan cursor-pointer">
          This is your Cat NFT #00001
        </h1>
        <p className="text-soft-blue font-light font-outfit">
          Our Cats collection promotes cuteness and fluffyness.
        </p>

        {/* NFT Value and days left */}
        <div className="flex items-center justify-between my-3">
          <div className="mt-3 flex -space-x-2 overflow-hidden">
            <svg
              className="mr-3"
              width="11"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            <div className="text-cyan font-outfit text-sm">0.042 ETH</div>
          </div>

          <div className="mt-3 flex -space-x-2 overflow-hidden items-center">
            <svg
              width="17"
              height="17"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3"
            >
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>
            <div className="text-soft-blue font-light font-outfit text-sm">
              3 days left
            </div>
          </div>
        </div>

        {/* Blue line */}
        <div className="border border-card-line rounded-sm opacity-50 my-4"></div>

        {/* Creator */}
        <div className="mt-2 mb-0 flex -space-x-2 overflow-hidden items-center">
          <img
            className="inline-block h-8 w-8 rounded-full ring-1 m-1 mr-5 ring-white"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/560px-Bananas.svg.png"
            alt="Elon musk"
          />
          <div className="text-soft-blue font-light font-outfit text-sm">
            Creation of{" "}
            <span className="text-white hover:text-cyan cursor-pointer">
              {" "}
              Mr. Banana
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
