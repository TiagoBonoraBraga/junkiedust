import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icons } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { siteConfig } from "@/config/site";
// import { Print } from "./print";

export function MainView({ paths, files, selectSong }) {
  const [open, setOpen] = useState(false);
  // const [inputValue, setInputValue] = useState(selectSong)
  const handleSelectSong = (music) => {
    const index = files.map(e => e.src).indexOf(music)
    selectSong(index)
    console.log(index);
    console.log(music);
  };

  return (
    <ScrollArea className="relative bg-[#121212] ">
      <div className="pb-4 ">
        <header className="sticky top-0 h-16 bg-black/80 flex flex-row items-center justify-between px-8 z-10">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="w-48 shadow-[rgba(0,_0,_0,_0.3)_0px_16px_24px_0px,_rgba(0,_0,_0,_0.2)_0px_6px_8px_0px]"
            >
              <DropdownMenuItem className="p-0">
                <a
                  href={siteConfig.links.github.url}
                  className="flex flex-row items-center w-full justify-between py-2.5 px-3"
                  target="_blank"
                  rel="noopener"
                >
                  <span>Account</span>
                  <Icons.externalLink className="h-4 w-4" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem className="flex flex-row items-center justify-between">
                <span>Support</span>
                <Icons.externalLink className="h-4 w-4" />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-row items-center justify-between">
                <span>Download</span>
                <Icons.externalLink className="h-4 w-4" />
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className="mt-8 mb-8 px-3">
          {/* <Print>{paths}</Print> */}
          {/* <Print>{files}</Print>  */}
          {paths.map((data) => (
            <section key={data.name} className="mt-9 first:mt-0 ">
              <div className="max-w-xs mx-auto">
                <div className="flex flex-col">
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden ">
                        <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                          <thead className="bg-purple-500 dark:bg-gray-700">
                            <tr>
                              <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase dark:text-gray-400">
                                {data.name}
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            {data.files.map((item) => (
                              <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td className="cursor-pointer py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"  onClick={() => handleSelectSong(item.src)} key={item.src} >
                                    {item.filename}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
