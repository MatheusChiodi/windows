import { useState } from "react";
import { File, X } from "lucide-react";
import VsCodeExplorer from "./explorer/vscodeExplorer";

export default function Vscode() {
  const [isVscodeExplorer, setVscodeExplorer] = useState(false);
  const [isVscodeSearch, setVscodeSearch] = useState(false);
  const [isVscodeExtensions, setVscodeExtensions] = useState(false);
  
  //-- Função para abrir o Vscode Explorer
  function openVscodeExplorer() {
    if (isVscodeExplorer) {
      setVscodeExplorer(false);
    } else {
      setVscodeExplorer(true);
      setVscodeSearch(false);
      setVscodeExtensions(false);
    }
  }

  //-- Função para abrir o Vscode Search
  function openVscodeSearch() {
    if (isVscodeSearch) {
      setVscodeSearch(false);
    } else {
      setVscodeSearch(true);
      setVscodeExplorer(false);
      setVscodeExtensions(false);
    }
  }

  //-- Função para abrir o Vscode Extensions
  function openVscodeExtensions() {
    if (isVscodeExtensions) {
      setVscodeExtensions(false);
    } else {
      setVscodeExtensions(true);
      setVscodeExplorer(false);
      setVscodeSearch(false);
    }
  }
  return (
    <>
      <div className="w-full bg-[#191a21] h-[100%] pb-[40px] flex m-0">
        <div className="w-[3.4%] bg-[#343746] pt-3 px-2 flex flex-col items-center justify-between">
          <div className="flex flex-col gap-4 text-[#6272a4] text-lg">
            <i
              className={`fas fa-copy cursor-pointer hover:text-gray-100 transition-all duration-500 ${
                isVscodeExplorer ? 'text-gray-100' : null
              } `}
              onClick={openVscodeExplorer}
            ></i>
            <i
              className={`fas fa-search cursor-pointer hover:text-gray-100 transition-all duration-500 ${
                isVscodeSearch ? 'text-gray-100' : null
              }`}
              onClick={openVscodeSearch}
            ></i>
            <i
              className={`fas fa-puzzle-piece cursor-pointer hover:text-gray-100 transition-all duration-500 ${
                isVscodeExtensions ? 'text-gray-100' : null
              }`}
              onClick={openVscodeExtensions}
            ></i>
            <i className="fas fa-code-branch cursor-pointer hover:text-gray-100 transition-all duration-500"></i>
          </div>
          <div className="flex flex-col gap-4 text-[#6272a4] text-lg pb-3">
            <i className="far fa-user cursor-pointer hover:text-gray-100 transition-all duration-500"></i>
            <i className="fas fa-cog cursor-pointer hover:text-gray-100 transition-all duration-500"></i>
          </div>
        </div>

        {/* Explorer */}
        {isVscodeExplorer ? (
          <VsCodeExplorer />
        ) : null}

        {/* Search */}
        {isVscodeSearch ? (
          <></>
        ) : null}

        {/* Extensions */}
        {isVscodeExtensions ? (
          <></>
        ) : null}

        <div className="w-[96.6%] bg-[#282a36]">
          <div className="w-full m-0 p-0 h-[40px] bg-[#191a21]">
            <div className="flex items-center justify-between bg-[#282a36] text-gray-100 w-[170px] h-[40px] rounded-tr-md px-3">
              <div className="flex items-center justify-center text-sm">
                <File className="h-4 w-4 me-1" />
                Untitled-1
              </div>
              <X className="h-3 w-3 cursor-pointer hover:bg-[#56585d] transition-all duration-500 rounded-sm" />
            </div>
          </div>
          <div className="w-full m-0 p-0 h-[100%] pb-[47px] bg-[#282a36] flex justify-center items-center">
            <textarea className="bg-[#282a36] text-gray-100 w-[99%] h-full mx-auto border-none ring-[#282a36] focus:outline-none"></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
