import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function VsCodeSearch() {
  return (
    <>
      <div className="w-[30%] bg-[#21222c] text-gray-100 px-2 p-1 text-sm flex flex-col items-center">
        <div className="w-full flex items-center justify-between">
          <p className="w-full text-left">SEARCH</p>
          <MoreHorizontal className="h-4 text-gray-100" />
        </div>
      </div>
    </>
  );
}
