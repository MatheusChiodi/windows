import { Archive, CheckCheck, Edit, MessageCircle, Mic, MoreHorizontal, Paperclip, Phone, PieChart, Search, Settings, Smile, Video } from "lucide-react";

export default function Whatsapp() {
  return (
    <>
      <div className="w-full h-[100%] pb-[45px] flex m-0 mt-1">
        <div className="w-[50px] mt-2 flex flex-col items-center justify-between">
          <div>
            <div className="bg-[#3c3c3c] p-[4px] rounded-sm cursor-pointer border-l-[2px] border-[#00a884]">
            <MessageCircle size={25} className="text-gray-100"/>
            </div>
            <div className="hover:bg-[#3c3c3c] transition-all duration-500 p-[4px] rounded-sm my-2 cursor-pointer">
            <Phone size={25} className="text-gray-100"/>
            </div>
            <div className="hover:bg-[#3c3c3c] transition-all duration-500 p-[4px] rounded-sm cursor-pointer">
              <PieChart size={25} className="text-gray-100"/>
            </div>
          </div>
          <div>
            <div className="hover:bg-[#3c3c3c] transition-all duration-500 p-[4px] rounded-sm my-2 cursor-pointer">
              <Settings size={25} className="mt-1 text-gray-100"/>
            </div>
            <img src="logo.png" alt="whatsapp" className="w-[30px] h-[30px] rounded-full mt-1"/>
          </div>
          
        </div>
        <div className="bg-[#272727] w-[400px]">
          <div className="flex items-center justify-between p-[10px] text-gray-100 font-semibold  px-3">
            <p>
              Conversar
            </p>
            <div className="flex gap-2">
              <div className="hover:bg-[#3c3c3c] transition-all duration-500 p-[4px] rounded-sm cursor-pointer">
                <Edit size={25} className="text-gray-100"/>
              </div>
              <div className="hover:bg-[#3c3c3c] transition-all duration-500 p-[4px] rounded-sm cursor-pointer">
                <MoreHorizontal size={25} className="text-gray-100"/>
              </div>
            </div>
          </div>
          <div className="px-3">
            <input 
              type="text" 
              placeholder="Pesquisar ou começar uma nova conversa 🔎" 
              className="bg-[#3c3c3c] w-full p-[10px] text-gray-100 outline-none border-b text-xs rounded-t-md"
            />
          </div>
          
          <div className="overflow-y-auto">
            <div className="flex items-center gap-2 text-gray-100 mx-2 px-2 my-2 hover:bg-[#3c3c3c] rounded-md cursor-pointer transition-all duration-500 py-1">
              <Archive size={25} className="text-gray-100"/>
              <p>
                Arquivadas
              </p>
            </div>
            <div className="flex bg-[#3c3c3c] hover:bg-[#4d4d4d] mx-2 rounded-md pb-2 pt-1 items-center cursor-pointer">
              <img src="logo.png" alt="logo" className="w-[50px] h-[50px] rounded-full mt-1"/>
              <div className="ps-2">
                <p className="text-gray-100 font-medium">
                  Matheus Chiodi
                </p>
                <div className="flex items-center">
                  <CheckCheck size={20} className="text-[#3471c3] mr-1"/>
                  <p className="text-gray-100 text-xs">
                    Olá, pessoal! 👋🏼
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-[1px]">
          <div className="bg-[#272727] flex justify-between w-full">
            <div className="flex">
              <img src="logo.png" alt="logo" className="w-[50px] h-[50px] rounded-full mt-1"/>
              <p className="text-gray-100 font-medium text-lg mt-2 ml-2">
                Matheus Chiodi
              </p>
            </div>
            <div className="flex items-center">
              <div className="hover:bg-[#3c3c3c] transition-all duration-500 p-[4px] rounded-sm cursor-pointer mr-3">
                <Video size={25} className="text-gray-100"/>
              </div>
              <div className="hover:bg-[#3c3c3c] transition-all duration-500 p-[4px] rounded-sm cursor-pointer mr-3">
                <Phone size={25} className="text-gray-100"/>
              </div>
              <div className="hover:bg-[#3c3c3c] transition-all duration-500 p-[4px] rounded-sm cursor-pointer border-l border-gray-100 px-3">
                <Search size={25} className="text-gray-100"/>
              </div>
            </div>
          </div>
          <div className="bg-[#3c3c3c] w-full h-[100%] mb-[-90px] overflow-y-auto">
            <div className="flex flex-col-reverse">
              <div className="flex items-center justify-end">
                <div className="bg-[#025c4c] rounded-md px-2 py-1 m-1 mt-2">
                  <div className="text-gray-100">
                    <p className="text-sm mr-[50px] m-0 p-0 w-[500px] text-justify">
                    Olá, pessoal! 👋🏼 <br/>
                    Eu sou um programador com mais de 2 anos de experiência e gostaria de compartilhar com vocês um pouco sobre minha jornada e habilidades técnicas. 💻 <br/>
                    Durante esse tempo, trabalhei com diversas tecnologias, aprimorando minhas habilidades e buscando soluções inovadoras. Algumas das tecnologias com as quais tenho experiência incluem:
                    JavaScript, CodeIgniter, PHP, SQL e ReactJS <br/><br/>
                    </p>
                    <p className="text-sm mr-[50px] m-0 p-0 w-[500px]">
                    🔗 GitHub: <a href="https://github.com/MatheusChiodi" className="hover:text-gray-300 transition-all duration-500">https://github.com/MatheusChiodi</a><br/>
                    🔗 LinkedIn: <a href="https://www.linkedin.com/in/matheus-chiodi-b484581aa/" className="hover:text-gray-300 transition-all duration-500">https://www.linkedin.com/in/matheus-chiodi-b484581aa/</a><br/>
                    </p>
                    <div className="w-full flex justify-end items-center m-0 p-0">
                      <p className="text-gray-100 text-[9px] m-0 p-0">
                        10:00
                      </p>
                      <CheckCheck size={15} className="text-[#3471c3] ml-1"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#272727] w-full h-[45px] flex items-center justify-between px-1">
            <div className="flex items-center gap-2 w-full">
              <div className="hover:bg-[#3c3c3c] transition-all duration-500 p-[4px] rounded-sm cursor-pointer w-[5%] flex justify-center">
                <Smile size={25} className="text-gray-100"/>
              </div>
              <div className="hover:bg-[#3c3c3c] transition-all duration-500 p-[4px] rounded-sm cursor-pointer w-[5%] flex justify-center">
                <Paperclip size={25} className="text-gray-100"/>
              </div>
              <input type="text" className="bg-[#272727] hover:bg-[#3c3c3c] text-gray-100 outline-none text-xs h-[38px] px-2 w-[100%]" placeholder="Digite uma mensagem"/>
              <div className="hover:bg-[#3c3c3c] transition-all duration-500 p-[4px] rounded-sm cursor-pointer w-[5%] flex justify-center">
                <Mic size={25} className="text-gray-100"/>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}
