import { Power, RotateCcw } from "lucide-react";
import { Moon, Settings } from "lucide-react";

export default function ConfigPower() {

  return (
    <>
      <div className="bg-[#eaebee] absolute bottom-[110px] ml-[305px] w-[135px] text-sm rounded-md flex flex-col text-gray-600">
        <div className="flex items-center border-b-[1px] border-gray-400 hover:bg-[#e3e5e8] transition-all duration-500 cursor-pointer">
          <Settings className="h-3" />
          <p>Input Options</p>
        </div>
        <div className="flex items-center hover:bg-[#e3e5e8] transition-all duration-500 cursor-pointer">
          <Moon className="h-3" />
          <p>Suspend</p>
        </div>
        <div className="flex items-center hover:bg-[#e3e5e8] transition-all duration-500 cursor-pointer">
          <Power className="h-3" />
          <p>To switch off</p>
        </div>
        <div className="flex items-center hover:bg-[#e3e5e8] transition-all duration-500 cursor-pointer">
          <RotateCcw className="h-3" />
          <p>Restart</p>
        </div>
      </div>
    </>
  );
}
