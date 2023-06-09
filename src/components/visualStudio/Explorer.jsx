import { AlignLeft, ChevronDown, CopyPlus, File, FilePlus2, ListFilter, Pin, RotateCcw, Save, X } from "lucide-react";
import { CopyX } from "lucide-react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function Explorer() {

  const [isOpenEditors, setOpenEditors] = useState(true);
  const [isNoFolderOpened, setNoFolderOpened] = useState(false);
  const [isOutline, setOutline] = useState(false);
  const [isTimeline, setTimeline] = useState(false);
  const [isProblems, setProblems] = useState(false);

  //-- Função para abrir o openEditors
  function openOpenEditors() {
    if (isOpenEditors) {
      setOpenEditors(false);
    } else {
      setOpenEditors(true);
    }
  }

  //-- Função para abrir o noFolderOpened
  function openNoFolderOpened() {
    if (isNoFolderOpened) {
      setNoFolderOpened(false);
    } else {
      setNoFolderOpened(true);
    }
  }

  //-- Função para abrir o outline
  function openOutline() {
    if (isOutline) {
      setOutline(false);
    } else {
      setOutline(true);
    }
  }

  //-- Função para abrir o timeline
  function openTimeline() {
    if (isTimeline) {
      setTimeline(false);
    } else {
      setTimeline(true);
    }
  }

  //-- Função para abrir o problems	
  function openProblems() {
    if (isProblems) {
      setProblems(false);
    } else {
      setProblems(true);
    }
  }

  return (
    <>
      <div className="w-[30%] bg-[#21222c] text-gray-100 text-sm flex flex-col items-center">
        <div className="w-full flex items-center justify-between px-2 p-1 ">
          <p className="w-full text-left">EXPLORER</p>
          <MoreHorizontal className="h-4 text-gray-100 hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm" />
        </div>
        <div className="w-full overflow-y-auto">
          <div 
            className="w-full flex justify-between items-center mt-2 bg-[#282a36] hover:bg-[#56585d37] transition-all duration-500 cursor-pointer m-0 p-0"
            onClick={openOpenEditors}
          >
            <div className='flex gap-1 items-center text-[13px] font-bold px-1'>
              {isOpenEditors ? <ChevronDown className="h-4 text-gray-100" /> : <ChevronRight className="h-4 text-gray-100" />}
              <p>
                OPEN EDITORS
              </p>
            </div>
            <div className="flex">
              {isOpenEditors ? (
                <>
                  <div className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm py-[2px]">
                    <FilePlus2 className="h-3 text-gray-100" />
                  </div>
                  <div className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm py-[2px]">
                    <Save className="h-3 text-gray-100" />
                  </div>
                  <div className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm py-[2px]">
                    <CopyX className="h-3 text-gray-100 hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm" />
                  </div>
                </>
              ) : null}
            </div>
          </div>

          {/*-- Open Editors --*/}
          {isOpenEditors ? (
          <div className='flex items-center justify-start text-left w-full ps-5 bg-[#313341] gap-0 p-0 m-0 py-[2px]'>
            <X className='h-4 text-gray-100 hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm' />
            <File className='h-3 text-gray-100 m-0 p-0' />
            <p className='p-0 m-0 text-xs'>
              Untitled-1
            </p>
          </div>
          ) : null}

          <div 
          className="w-full flex justify-between items-center bg-[#282a36] hover:bg-[#56585d37] transition-all duration-500 cursor-pointer m-0 p-0"
          onClick={openNoFolderOpened}
          >
            <div className='flex gap-1 items-center text-[13px] font-bold px-1'>
              {isNoFolderOpened ? <ChevronDown className="h-4 text-gray-100" /> : <ChevronRight className="h-4 text-gray-100" />}
              <p>
                NO FOLDER OPENED
              </p>
            </div>
          </div>

          {/*-- No Folder Opened --*/}
          {isNoFolderOpened ? (
          <div className='w-full bg-[#21222c] gap-0 m-0 text-[14px] px-5 py-3'>
            <p>
              You have not yet opened a folder.
            </p>
            <div className='flex py-3'>
              <button className='bg-[#44475a] hover:bg-[#52556c] transition-all duration-500 cursor-pointer rounded-sm w-full mx-auto'>
                Open Folder
              </button>
            </div>
            <p>
              Opening a folder will close all currently opened editors. To keep them open,  
              <span className='text-[#3794ff] mx-1 hover:border-b-[1.2px] border-[#3794ff] m-0 p-0 cursor-pointer transition-all'>
              add a folder
              </span> instead
            </p>
            <p className="py-3">
              You can open a remote repository or pull request without cloning.
            </p>
          </div>
          ) : null}

          <div 
          className="w-full flex justify-between items-center bg-[#282a36] hover:bg-[#56585d37] transition-all duration-500 cursor-pointer m-0 p-0"
          onClick={openOutline}
          >
            <div className='flex gap-1 items-center text-[13px] font-bold px-1'>
              {isOutline ? <ChevronDown className="h-4 text-gray-100" /> : <ChevronRight className="h-4 text-gray-100" />}
              <p>
                OUTLINE
              </p>
            </div>
            <div className="flex">
              {isOutline ? (
                <>
                  <div className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm py-[2px]">
                    <CopyPlus className="h-3 text-gray-100" />
                  </div>
                  <div className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm py-[2px]">
                    <MoreHorizontal className="h-3 text-gray-100" />
                  </div>
                </>
              ) : null}
            </div>
          </div>

          {/*-- Open Outline --*/}
          {isOutline ? (
          <div className='w-full bg-[#21222c] gap-0 m-0 text-[13px] px-5 py-3 text-[#8c8c8e]'>
            <p>
              No symbols found in the document.
            </p>
          </div>
          ) : null}

          <div 
          className="w-full flex justify-between items-center bg-[#282a36] hover:bg-[#56585d37] transition-all duration-500 cursor-pointer m-0 p-0"
          onClick={openTimeline}
          >
            <div className='flex gap-1 items-center text-[13px] font-bold px-1'>
              {isTimeline ? <ChevronDown className="h-4 text-gray-100" /> : <ChevronRight className="h-4 text-gray-100" />}
              <p>
                TIMELINE
              </p>
            </div>
            <div className="flex">
              {isTimeline ? (
                <>
                  <div className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm py-[2px]">
                    <Pin className="h-3 text-gray-100" />
                  </div>
                  <div className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm py-[2px]">
                    <RotateCcw className="h-3 text-gray-100" />
                  </div>
                  <div className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm py-[2px]">
                    <ListFilter className="h-3 text-gray-100" />
                  </div>
                </>
              ) : null}
            </div>
          </div>

          {/*-- Open Timeline --*/}
          {isTimeline ? (
          <div className='w-full bg-[#21222c] gap-0 m-0 text-[13px] px-5 py-3 text-[#8c8c8e]'>
            <p>
              No timeline information was provided.
            </p>
          </div>
          ) : null}

          <div 
          className="w-full flex justify-between items-center bg-[#282a36] hover:bg-[#56585d37] transition-all duration-500 cursor-pointer m-0 p-0"
          onClick={openProblems}
          >
            <div className='flex gap-1 items-center text-[13px] font-bold px-1'>
              {isProblems ? <ChevronDown className="h-4 text-gray-100" /> : <ChevronRight className="h-4 text-gray-100" />}
              <p>
                PROBLEMS
              </p>
            </div>
            <div className="flex">
              {isProblems ? (
                <>
                  <div className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm py-[2px]">
                    <CopyX className="h-3 text-gray-100" />
                  </div>
                  <div className="hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm py-[2px]">
                    <AlignLeft className="h-3 text-gray-100" />
                  </div>
                </>
              ) : null}
            </div>
          </div>

          {/*-- Open Problems --*/}
          {isProblems ? (
          <div className='w-full bg-[#21222c] gap-0 m-0 text-[13px] px-5 py-3 text-gray-100'>
            <p>
              No problems have been detected in the workspace
            </p>
          </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
