import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { IoIosHelpCircleOutline } from 'react-icons/io'
const LandingSection = () => {
  return (
    <section id="landing" className="landing-section bg-gray-200 py-16 px-12 md:px-20 relative z-20 text-black font-SpaceGrotesk flex flex-col items-center">
      <div className="landing-wrapper">
        <header className="flex justify-center mb-12">
          <h1 className="font-bold text-3xl max-w-96 text-center text-neutral-800 ">
            Check out some of the things we do to make people closer to the hungarian job market
          </h1>
        </header>
        <main className="landing-main flex flex-wrap gap-8 justify-center">
          {/* First Card */}
          <div className="max-w-md border-2 border-gray-400 rounded-lg p-12 flex flex-col justify-between items-center shadow-lg">
            <span><svg width="140" height="140" viewBox="0 0 140 140" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_4014_33508)">
                <circle cx="70" cy="70" r="69" fill="white" stroke="#a0a8b2" stroke-width="2" />
                <rect x="42.7419" y="40.4346" width="57.9224" height="57.9224" stroke="#7F6AFF" />
                <path
                  d="M94.4146 62.5949C103.778 62.5949 111.369 55.004 111.369 45.6402C111.369 36.2764 103.778 28.6855 94.4146 28.6855C85.0508 28.6855 77.46 36.2764 77.46 45.6402C77.46 55.004 85.0508 62.5949 94.4146 62.5949Z"
                  fill="#464d5d" />
                <path
                  d="M70 82.9412C72.233 78.3681 75.7056 74.514 80.0221 71.8181C84.3386 69.1222 89.3255 67.6929 94.4147 67.6929C99.5039 67.6929 104.491 69.1222 108.807 71.8181C113.124 74.514 116.596 78.3681 118.829 82.9412"
                  fill="#464d5d" />
                <path
                  d="M45.5853 84.3258C54.9491 84.3258 62.54 76.735 62.54 67.3712C62.54 58.0074 54.9491 50.4165 45.5853 50.4165C36.2215 50.4165 28.6306 58.0074 28.6306 67.3712C28.6306 76.735 36.2215 84.3258 45.5853 84.3258Z"
                  fill="#7F6AFF" stroke="#7F6AFF" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M21.1707 104.672C23.4037 100.099 26.8762 96.245 31.1928 93.5491C35.5093 90.8532 40.4962 89.4238 45.5854 89.4238C50.6746 89.4238 55.6615 90.8532 59.978 93.5491C64.2945 96.245 67.7671 100.099 70.0001 104.672"
                  fill="#7F6AFF" stroke="#7F6AFF" stroke-width="2" stroke-linecap="square"
                  stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4014_33508">
                  <rect width="140" height="140" fill="white" />
                </clipPath>
              </defs>
            </svg>
            </span>
            <div className="text-center mt-2">
              <h1 className="font-bold text-left text-lg text-neutral-800 md:text-xl">
                Are you a company or an individual and need someone to hire for an internship or job?
              </h1>
            </div>
            <Button radius="full" className="custom-bg py-6 w-full text-base text-neutral-200 mt-4 font-semibold" as={Link} href="" variant="flat">
              Make a job post
            </Button>
          </div>

          {/* Second Card */}
          <div className="max-w-md border-2 border-gray-400 rounded-lg p-12 flex flex-col justify-between items-center shadow-lg">
            <span><svg width="140" height="140" viewBox="0 0 140 140" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_4014_33527)">
                <circle cx="70" cy="70" r="69" fill="white" stroke="#a0a8b2" stroke-width="2" />
                <circle cx="70.0001" cy="60.7476" r="31.8537" stroke="#7F6AFF" stroke-width="1.49398" />
                <rect x="61.9763" y="96.5801" width="16.0478" height="15.2729" fill="#464d5d" />
                <circle cx="70.0001" cy="60.7479" r="26.6474" fill="#7F6AFF" stroke="white"
                  stroke-width="1.55545" />
              </g>
              <defs>
                <clipPath id="clip0_4014_33527">
                  <rect width="140" height="140" fill="white" />
                </clipPath>
              </defs>
            </svg>
            </span>
            <div className="text-center mt-2">
              <h1 className="font-bold text-neutral-800 text-left text-lg md:text-xl" id="adjust-h1">
                Are you looking for a job or an internship?
              </h1>
            </div>
            <Button radius="full" className="text-base custom-bg py-6 w-full text-neutral-200 mt-4 font-semibold" as={Link} href="" variant="flat">
              Subscribe
            </Button>
          </div>

          {/* Third Card */}
          <div className="max-w-md border-2 border-gray-400 rounded-lg p-12 flex flex-col justify-between items-center shadow-lg">
            <div className="help-wrapper mb-6">
            <span className="h-32 w-32 rounded-full text-8xl border-2 border-gray-400 custom-color custom-color bg-white flex justify-center items-center">
                <IoIosHelpCircleOutline  />
              </span>
            </div>
            <div className="text-center mt-2">
            <h1 className="font-bold text-neutral-800 text-left text-lg md:text-xl" id="adjust-h1">
                Do you have any questions? Check out the frequently asked questions section of the website!
              </h1>
            </div>
            <Button radius="full" className="text-base custom-bg py-6 w-full text-neutral-200 mt-4 font-semibold" as={Link} href="" variant="flat">
              See more
            </Button>
          </div>
        </main>
      </div>
    </section>
  );
};

export default LandingSection;
