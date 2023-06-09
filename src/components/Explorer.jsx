import { ArrowUp, Home } from 'lucide-react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  RotateCcw,
  Search,
} from 'lucide-react';

export default function Explorer() {
  return (
    <>
      <div className="flex justify-between items-center m-0 p-0 w-full">
        <div className="flex items-center bg-[#2c2c2c] text-gray-100 h-[50px] w-full border-b-2 border-[#3a3a3a]"></div>
      </div>
      <div className="flex justify-between items-center m-0 p-0 w-full">
        <div className="flex items-center bg-[#191919] text-gray-100 h-[56px] w-full">
          <div className="flex items-center justify-between w-full">
            <ArrowLeft className="h-4 text-gray-300 ms-1 me-1 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
            <ArrowRight className="h-4 text-gray-300 me-1 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
            <ChevronDown className="h-4 text-gray-300 me-1 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
            <ArrowUp className="h-4 text-gray-300 me-[20px] hover:text-gray-50 transition-all duration-500 cursor-pointer" />
            <div className="flex items-center justify-between border border-[#535353] w-[75%] px-2 p-[1px]">
              <div className="flex items-center">
                <Home className="h-4 text-gray-300 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
                <ChevronRight className="h-3 text-gray-300 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
                <p>Início</p>
              </div>
              <div className="flex items-center">
                <ChevronDown className="h-3 text-gray-300 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
                <RotateCcw className="h-3 text-gray-300 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center border border-[#535353] w-[12%] me-[10px] px-2 p-[1px] overflow-hidden">
              <div className="flex items-center justify-between w-full text-gray-300 hover:text-gray-50 transition-all duration-500 cursor-pointer">
                <p>Pesquisar</p>
                <Search className="h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center m-0 p-0 w-full">
        <div className="flex items-center justify-between bg-[#191919] text-gray-100 w-full">
          <div className="w-[10%] overflow-y-scroll h-[500px]">
            <div className="flex items-center justify-center h-[30px]">
              <Home className="h-4 text-gray-300 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
              <p>Inicio</p>
            </div>

            <div className="fle flex-col items-center justify-center h-[30px] mt-3">
              <div className="flex items-center justify-center mb-1">
                <Home className="h-4 text-gray-300 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
                <p>Inicio</p>
              </div>
              <div className="flex items-center justify-center mb-1">
                <Home className="h-4 text-gray-300 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
                <p>Inicio</p>
              </div>
              <div className="flex items-center justify-center mb-1">
                <Home className="h-4 text-gray-300 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
                <p>Inicio</p>
              </div>
              <div className="flex items-center justify-center mb-1">
                <Home className="h-4 text-gray-300 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
                <p>Inicio</p>
              </div>
              <div className="flex items-center justify-center mb-1">
                <Home className="h-4 text-gray-300 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
                <p>Inicio</p>
              </div>
              <div className="flex items-center justify-center mb-1">
                <Home className="h-4 text-gray-300 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
                <p>Inicio</p>
              </div>
              <div className="flex items-center justify-center mb-1">
                <Home className="h-4 text-gray-300 hover:text-gray-50 transition-all duration-500 cursor-pointer" />
                <p>Inicio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
