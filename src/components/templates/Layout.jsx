import Header from "@/components/organisms/Header"
import Player from "@/components/organisms/Player"

import { File, Path } from '@/types/index'
import { Print } from "../atoms/Print"

export default function Layout({ paths, children }) {
  return (
    <>
      <Header />
      <div className="w-full grid grid-rows-[1fr_90px] text-white">
        <div className="w-full  justify-center text-white">
          {children}
        </div>
        {/* <Print>{files}</Print>
        <div>
          <Print>{paths}</Print>
        </div> */}
        <Player paths={paths} />
      </div>
    </>
  )
}

