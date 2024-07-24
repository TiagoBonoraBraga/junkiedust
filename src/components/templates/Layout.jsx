import Header from '@/components/organisms/Header';
import Player from '@/components/organisms/Player';
import Image from 'next/image';
// import bg from '../../../public/cat-kitty.gif';
import bg from '../../../public/mumm-ra-munn-ra.gif';
import { useEffect, useRef } from 'react';
import YouTubeVideo from '@/components/molecules/YouTubeVideo';
export default function Layout({ paths, children }) {
  const imageBgRef = useRef(null);
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     const imageBg = imageBgRef.current; // corresponding DOM node
  //     imageBg.src = mum;
  //   }, 2000);
  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <YouTubeVideo videoId={'DbDpiZPscko'} />
      </div>

      <div className="hidden md:block md:bottom-28 md:right-0  w-full h-full -z-10 fixed">
        <Image
          ref={imageBgRef}
          src={bg}
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          alt="Junkie Way"
        />
      </div>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        className=" md:hidden md:fixed md:-z-10 md:w-100 md:bottom-32 md:right-2"
      >
        <source src="/MUMMRA2.mp4" type="video/mp4" />
      </video>

      <div className="w-full grid grid-rows-[1fr_90px] text-white ">
        <div className="w-full  justify-center text-white flex flex-row ss:flex ss:flex-col">
          <Player paths={paths} />
          <main>{children}</main>
        </div>

        {/* <Print>{files}</Print>
        <div>
        <Print>{paths}</Print>
      </div> */}
      </div>
    </>
  );
}
