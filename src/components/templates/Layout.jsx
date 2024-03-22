import Header from "@/components/organisms/Header"
import Player from "@/components/organisms/Player"

export default function Layout({ paths, children }) {
  return (
    <>


      <Header />
      <video autoPlay={true} muted={true} loop={true} className="md:fixed md:-z-10 md:w-100 md:bottom-32 md:right-2">
        <source src="/MUMMRA.mp4" type="video/mp4" />
      </video>

      <div className="w-full grid grid-rows-[1fr_90px] text-white">
        <div className="w-full  justify-center text-white flex flex-row ss:flex ss:flex-col">
          <Player paths={paths} />
          <main>
            {children}
          </main>
        </div>

        {/* <Print>{files}</Print>
        <div>
        <Print>{paths}</Print>
      </div> */}
      </div>


    </>
  )
}

