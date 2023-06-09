import { AlignLeft, ChevronDown, ChevronLeft, ChevronRight, FileInput, ListMinus, Regex, ReplaceAll, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function Search() {

  const [search, setSearch] = useState('');

  //-- Função para abrir o replace
  const openReplace = () => {
    if (search) {
      setSearch(false);
    } else {
      setSearch(true);
    }
  }

  return (
    <>
      <div className="w-[30%] bg-[#21222c] text-gray-100 px-2 p-1 text-sm flex flex-col items-center">
        <div className="w-full flex items-center justify-between">
          <p className="w-full text-left">SEARCH</p>
          <div className="flex">
            <RotateCcw className="h-3 text-gray-400 my-1" />
            <ListMinus className="h-3 text-gray-400 my-1" />
            <div className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm py-[1px]">
              <FileInput className="h-3 text-gray-100 my-1" />
            </div>
            <AlignLeft className="h-3 text-gray-400 my-1" />
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-3">
          <div 
            className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm m-0 text-center justify-center"
            onClick={openReplace}
            >
            {search ? <ChevronDown className="h-3 text-gray-100 my-1" /> : <ChevronRight className="h-3 text-gray-100 my-1" />}
            
          </div>
          
          <div className="w-[90%] flex flex-col">
            <div className="flex w-full m-0 p-0 bg-[#282a36]">
              <input type="text" className="w-full bg-transparent text-gray-100 p-1 rounded-sm ring-0" placeholder="Search" />
              <div className="flex items-center text-[11px] ml-[-40px] bg-[#282a36]">
                <p className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm px-1 m-0 w-[30px] text-center">
                  Aa
                </p>
                <p className="mx-1 hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm px-1 m-0 w-[30px] text-center">
                  ab
                </p>
                <div className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm px-1 m-0">
                  <Regex className="h-3 text-gray-100 my-1 w-[15px]" />
                </div>
              </div>
            </div>

            {search ? ( 
            <div className="flex w-full m-0 p-0 mt-1 bg-[#282a36]">
              <input type="text" className="w-full bg-transparent text-gray-100 p-1 rounded-sm ring-0" placeholder="Replace" />
              <div className="flex items-center text-[11px] ml-[-20px] bg-[#282a36]">
                <p className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm px-1 m-0 w-[30px] text-center">
                  AB
                </p>
                <div className="px-1 m-0">
                  <ReplaceAll className="h-3 text-gray-400 my-1 w-[15px]" />
                </div>
              </div>
            </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
