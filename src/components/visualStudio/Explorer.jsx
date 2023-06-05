import { ChevronDown, File, FilePlus2, Save, X } from "lucide-react";
import { CopyX } from "lucide-react";
import { ChevronRight, MoreHorizontal } from "lucide-react";

export default function Explorer() {
  return (
    <>
      <div className="w-[30%] bg-[#21222c] text-gray-100 text-sm flex flex-col items-center">
        <div className="w-full flex items-center justify-between px-2 p-1 ">
          <p className="w-full text-left">EXPLORER</p>
          <MoreHorizontal className="h-4 text-gray-100 hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm" />
        </div>
        <div className="w-full flex justify-between items-center mt-2 bg-[#282a36] hover:bg-[#56585d37] transition-all duration-500 cursor-pointer m-0 p-0">
          <div className='flex gap-1 items-center text-[13px] font-bold px-1'>
            <ChevronDown className="h-4 text-gray-100" />
            <p>
              OPEN EDITORS
            </p>
          </div>
          <div className="flex">
            <FilePlus2 className="h-3 text-gray-100 hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm" />
            <Save className="h-3 text-gray-100 hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm" />
            <CopyX className="h-3 text-gray-100 hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm" />
          </div>
        </div>
        <div className='flex items-center justify-start text-left w-full ps-5 bg-[#313341] gap-0 p-0 m-0 py-[2px]'>
          <X className='h-4 text-gray-100 hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm m-0 p-0' />
          <File className='h-3 text-gray-100 m-0 p-0' />
          <p className='p-0 m-0 text-xs'>
            Untitled-1
          </p>
        </div>

        <div className="w-full flex justify-between items-center bg-[#282a36] hover:bg-[#56585d37] transition-all duration-500 cursor-pointer m-0 p-0">
          <div className='flex gap-1 items-center text-[13px] font-bold px-1'>
            <ChevronRight className="h-4 text-gray-100" />
            <p>
              NO FOLDER OPENED
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
