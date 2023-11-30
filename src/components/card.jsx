import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@/components/ui/context-menu";
import { Icons } from "@/components/icons";
import { ResponsiveImage } from "@/components/responsive-image";

export function Card({ id, image, title, text }) {
  const first_item_id = "s01_c01";

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="group py-2 px-2 flex flex-col justify-center items-center bg-[#181818] rounded-md hover:bg-[#282828] transition-colors cursor-pointer">
            {/* <div className="relative w-32  bg-gradient-to-br from-violet-800 to-teal-500/80 rounded-md">
              <ResponsiveImage
                ratio={3 / 2}
                src={image}
                alt={image}
                sizes="(max-width: 910px) 50vw,
              (max-width: 1115px) 33vw,
              (max-width: 1320px) 25vw,
              (max-width: 1522px) 20vw,
              16vw"
              />
              {id === first_item_id && (
                <span className="absolute flex h-5 w-5 animate-bounce items-center justify-center inset-0 m-auto z-10">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
              )}

              <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute bottom-3 right-3 h-14 w-14 rounded-full bg-green-500 z-10 shadow-md flex items-center justify-center">
                <Icons.play className="h-5 w-5 text-black" />
              </div>
            </div> */}
            <div>
              {/* codigo tirado acima div className="mt-2 space-y-1" */}
              <p className="font-semibold text-white truncate" title={title}>
                {title}
              </p>
              <p className="font-semibold text-stone-400 text-sm line-clamp-2 flex justify-start items-">
                {text}
              </p>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Add to queue</ContextMenuItem>
          <ContextMenuItem>Go to playlist radio</ContextMenuItem>
          <ContextMenuItem>
            <div className="w-full flex flex-row items-center justify-between">
              <span>Report</span>
              <Icons.externalLink className="h-4 w-4 text-white" />
            </div>
          </ContextMenuItem>
          <ContextMenuItem>Add to Your Library</ContextMenuItem>
          <ContextMenuItem>Exclude from your taste profile</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Copy link to playlist</ContextMenuItem>
              <ContextMenuItem>Embed playlist</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>About recommendations</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Open in Desktop app</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </>
  );
}
