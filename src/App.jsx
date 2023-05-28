import { ArrowDownToLine, ArrowLeft, BatteryCharging, BatteryFull, ChevronRight, ChevronUp, Home, Layers, Layout, LockIcon, Moon, Pen, Pencil, Plus, Power, RotateCcw, RotateCw, Settings, Star, Volume2, Wifi, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Itens from './components/pageConfig/Itens';

function App() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());
  
  const [isWindows, setWindows] = useState(false);
  const [isEdge, setEdge] = useState(false);
  const [isConfig, setConfig] = useState(false);
  const [isConfigPower, setConfigPower] = useState(false);
  const [isConfigWindows, setConfigWindows] = useState(false);

  const [isIconEdge, setIconEdge] = useState(false);
  const [isIconConfig, setIconConfig] = useState(false);

  const [isPage1, setPage1] = useState(true);
  const [isPage2, setPage2] = useState(false);

  const [isUrl1, setUrl1] = useState(true);
  const [isUrl2, setUrl2] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Função auxiliar para formatar a hora e os minutos
  function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return hours + ':' + minutes;
  }

  const [currentDate, setCurrentDate] = useState(getFormattedDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getFormattedDate());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Função auxiliar para formatar a data no formato dia/mês/ano
  function getFormattedDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mês começa em zero, então adicionamos 1
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }

  //-- Função para abrir o menu iniciar
  function openWindow() {
    if (isWindows) {
      setWindows(false);
    }else{
      setWindows(true);
    }
  }

  //-- Função para abrir o menu configurações do power
  function openConfigPower() {
    if (isConfigPower) {
      setConfigPower(false);
    }else{
      setConfigPower(true);
    }
  }

  //-- Função para abrir Windows config 
  function openConfigWindows() {
    if (isConfigWindows) {
      setConfigWindows(false);
    }else{
      setConfigWindows(true);
    }
  }

  //-- Função para abrir o Edge
  function openEdge() {
    if (isEdge) {
      setEdge(false);
    }else{
      setEdge(true);
      setIconEdge(true);
      setWindows(false);
      setConfig(false);
      setUrl1(true);
      setUrl2(false);
      setPage1(true);
    }
  }

  //-- Função para fechar o Edge
  function closeEdge() {
    if (isEdge) {
      setEdge(false);
      setIconEdge(false);
      setPage2(false);
      setPage1(true);
    }
  }

  //-- Função para abrir o Config
  function openConfig() {
    if (isConfig) {
      setConfig(false);
    }else{
      setConfig(true);
      setIconConfig(true);
      setWindows(false);
      setEdge(false);
    }
  }

  //-- Função para fechar o Config
  function closeConfig() {
    if (isConfig) {
      setConfig(false);
      setIconConfig(false);
    }
  }

  //-- Função para abrir a página 1
  function openPage1() {
    if (!isPage1) {
      setPage1(true);
      setUrl1(true);
      setUrl2(false);
      if(isPage1){
        setPage2(true);
      }
    }
  }

  //-- Função para abrir a página 2
  function openPage2() {
    if (isPage1) {
      setPage1(false);
      setPage2(true);

      setUrl2(true);
      setUrl1(false);
    }else{
      setPage1(true);
      setUrl1(true);
      setUrl2(false);
    }
  }

  //-- Função para fechar a página 2
  function closePage2() {
    if (isPage2) {
      setPage2(false);
      setPage1(true);
      setUrl1(true);
      setUrl2(false);
    }
  }

  return (
    <>
      <div className="flex h-screen w-full m-0 p-0">
        {/* Menu Iniciar */}
        {isWindows ? (
          <div className="absolute justify-center items-center h-[100%] pb-[48px] pt-[5%] w-full">
            <div className="bg-[#e1e5f3f5] flex h-[100%] w-[450px] mx-auto bottom-0 rounded-md">
              <div className="p-4 w-full">
                <input 
                  type="text" 
                  className="bg-[#eaebee] text-[#6e717a] rounded-t-sm w-full p-1 text-xs border-b-[2.5px] border-blue-500" 
                  placeholder="Type here to search"
                />

                <div className="flex justify-between items-center px-2 mt-4 text-gray-600 font-medium">
                  <p className="text-xs">
                    Pinned
                  </p>
                  <p className="text-xs cursor-pointer bg-[#eaebee] hover:bg-[#f2f4f7] transition-all duration-700 ps-2 py-1 rounded-md flex">
                    All apps <ChevronRight className="h-4"/>
                  </p>
                </div>
              </div>
              <div className='bg-[#dbe0f1f8] w-[450px] absolute bottom-[50px] border-t rounded-b-xl px-6 flex justify-between items-center h-[50px]'>
                <div className='h-[40px] flex justify-center items-center text-[#6e717a] p-1  hover:hover:bg-[#eaebee] rounded-md transition-all duration-500 cursor-pointer'>
                  <img src='logo.png' className='w-[40px] h-[40px]'/>
                  <p className='text-sm font-medium'>Matheus Chiodi</p>
                </div>
                
                <div className='flex gap-2 text-[#6e717a]'>
                  <div className='p-1 hover:bg-[#eaebee] rounded-md transition-all duration-500 cursor-pointer'>
                    <ArrowDownToLine className='h-5'/>
                  </div>
                  <div className='p-1 hover:bg-[#eaebee] rounded-md transition-all duration-500 cursor-pointer' onClick={openConfig}>
                    <Settings className='h-5'/>
                  </div>
                  <div 
                    className={`p-1 hover:bg-[#eaebee] rounded-md transition-all duration-500 cursor-pointer
                    ${isConfigPower ? 'bg-[#eaebee]' : ''}
                    `} 
                    onClick={openConfigPower}>
                    <Power className='h-5'/>
                  </div>
                </div>
              </div>

              {/* Config Power*/}
              {isConfigPower ? (
                <div className='bg-[#eaebee] absolute bottom-[110px] ml-[305px] w-[135px] text-sm rounded-md flex flex-col text-gray-600'>
                  <div className='flex items-center border-b-[1px] border-gray-400 hover:bg-[#e3e5e8] transition-all duration-500 cursor-pointer'>
                    <Settings className='h-3'/>
                    <p>
                      Input Options
                    </p>
                  </div>
                  <div className='flex items-center hover:bg-[#e3e5e8] transition-all duration-500 cursor-pointer'>
                    <Moon className='h-3'/>
                    <p>
                      Suspend
                    </p>
                  </div>
                  <div className='flex items-center hover:bg-[#e3e5e8] transition-all duration-500 cursor-pointer'>
                    <Power className='h-3'/>
                    <p>
                      To switch off
                    </p>
                  </div>
                  <div className='flex items-center hover:bg-[#e3e5e8] transition-all duration-500 cursor-pointer'>
                    <RotateCcw className='h-3'/>
                    <p>
                      Restart
                    </p>
                  </div>
                </div>
              ) : null}
              
            </div>
          </div>  
        ) : null }

        {/* Config Windows */}
        {isConfigWindows ? (
        <div className="absolute justify-center items-center h-[100%] pb-[48px] pe-2 pt-[5%] w-full">
          <div className="bg-[#e1e5f3f5] flex h-[100%] w-[300px] ms-auto bottom-0 rounded-md">
            <div className="bg-[#dbe0f1f8] w-[300px] absolute bottom-[48px] h-[40px] rounded-b-md border-t">
              <div className='flex justify-between px-2 items-center h-[40px]'>
                <div className='flex items-center hover:bg-[#e1e5f3] transition-all duration-500 p-[3px] rounded-md cursor-pointer'>
                  <BatteryCharging className='h-5 text-[#6e717a]'/>
                  <p className='text-xs ms-1 text-[#6e717a]'>
                    100%
                  </p>
                </div>
                <div className='flex items-center'>
                  <div className='hover:bg-[#e1e5f3] transition-all duration-500 p-[3px] rounded-md cursor-pointer'>
                    <Pencil className='h-4 text-[#6e717a]'/>
                  </div>
                  <div className='hover:bg-[#e1e5f3] transition-all duration-500 p-[3px] rounded-md cursor-pointer'>
                    <Settings className='h-4 text-[#6e717a]'/>
                  </div>
                </div>
                  
              </div>
            </div>
          </div>
        </div>
        ) : null }
        {/* Edge */}
          {isEdge ? (
          <div className="justify-center items-center h-[100%] pb-[45px] w-full bg-[#38393c] m-0 p-0">
            <div className="flex justify-between items-center m-0 p-0">
              <div className='flex m-0 p-0 items-center'>
                <div className='mx-3 p-1 m-0 hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm flex items-center h-[30px]'>
                  <p className='m-0 text-gray-50'>
                    <Layout className="h-5 text-white rounded-md"/>
                  </p>
                </div>
                <div 
                  className={`text-white w-[200px] flex justify-center items-center h-[45px] cursor-pointer hover:bg-[#414246] transition-all duration-500
                  ${!isPage2 ? 'rounded-t-[4px]' : 'rounded-tl-[4px] border-r border-gray-400'}
                  ${isUrl2 ? 'bg-[#38393c] border-l border-gray-400' : 'bg-[#56585d]'}
                  `}
                  onClick={openPage1}
                  >
                  <div className='flex px-2'>
                    <img src='logo.png' className='w-[20px] h-[20px]'/>
                    <p className='m-0 text-xs'>Matheus Chiodi</p>
                  </div>
                </div>
                {isPage2 ? (
                  <div 
                    className={`text-white rounded-tr-[4px] w-[200px] flex justify-between items-center h-[45px] cursor-pointer hover:bg-[#414246] transition-all duration-500
                    ${isUrl1 ? 'bg-[#38393c]' : 'bg-[#56585d]'}
                    `} 
                    onClick={openPage2}>
                    <div className='flex px-2'>
                      <img src='logo.png' className='w-[20px] h-[20px]'/>
                      <p className='m-0 text-xs'>NLW Spacetime</p>
                    </div>
                    
                    <div className='hover:bg-[#63656a] transition-all duration-500 rounded-sm py-[3px] mx-2' onClick={closePage2}>
                      <X className='h-3 cursor-pointer'/>
                    </div>
                  </div>
                ) : null}

                <div className='mx-1 p-1 m-0 hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm flex items-center h-[30px]' onClick={openPage2}>
                  <p className='m-0 text-gray-50'>
                    <Plus className="h-4 text-white rounded-md"/>
                  </p>
                </div>
              </div>
              <div className='flex items-center m-0 p-0'>
                <div className='p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 px-3 cursor-pointer' onClick={openEdge}>
                  <p className='m-0 text-gray-50'>
                    __
                  </p>
                </div>
                <div className='p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 px-3 cursor-pointer flex items-center'>
                  <p className='m-0 text-gray-50'>
                    <Layers className='h-5'/>
                  </p>
                </div>
                <div className='p-0 m-0 h-[45px] hover:bg-red-600 transition-all duration-500 px-3 cursor-pointer flex items-center' onClick={closeEdge}>
                  <p className='m-0 text-gray-50'>
                    <X className='h-5'/>
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full bg-[#56585d] h-[40px] px-2 flex items-center justify-between'>
              <div className='flex gap-3 w-full'>
                <div className='m-0 p-[3px] flex items-center hover:bg-[#6d7077] transition-all duration-50 cursor-pointer rounded-sm'>
                  <ArrowLeft className='h-5 text-gray-50'/>
                </div>
                <div className='m-0 p-[3px] flex items-center hover:bg-[#6d7077] transition-all duration-50 cursor-pointer rounded-sm'>
                  <RotateCw className='h-5 text-gray-50'/>
                </div>
                <div className='m-0 p-[3px] flex items-center hover:bg-[#6d7077] transition-all duration-50 cursor-pointer rounded-sm'>
                  <Home className='h-5 text-gray-50'/>
                </div>
                <div className='w-[55%] text-gray-400 bg-[#46474b] px-4 rounded-xl flex items-center  justify-between'>
                  <p className='flex items-center'>
                    <div className='hover:bg-[#56585d] transition-all duration-500 rounded-sm px-[2px] py-[4px] cursor-pointer me-2'>
                      <LockIcon className='h-3 text-gray-300'/>
                    </div>
                    {isUrl2 ? (
                      <>
                        https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/
                      </>             
                    ) : null}
                    {isUrl1 ? (
                      <>
                        https://<span className='text-gray-300'>matheuschiodi.github.io</span>/Portfolio/
                      </>   
                    ) : null}
                    
                  </p>
                  <div className='hover:bg-[#56585d] transition-all duration-500 rounded-sm px-[2px] py-[4px] cursor-pointer'>
                    <Star className='h-3 text-gray-300'/>
                  </div>
                </div>
              </div>
              <div>
                <img src='logo.png' className='w-[50px] h-[40px]'/>
              </div>
            </div>

            {/*Tela 1*/}
            {isUrl1 ? (
              <div className='w-full bg-[#fff] h-[88%] flex items-center justify-center m-0 p-0'>
                <iframe src='https://matheuschiodi.github.io/Portfolio/' width='100%' height='100%' title="Portfolio" className='m-0 p-0'/>
              </div>
            ) : null}
            

            {/*Tela 2*/}
            {isUrl2 ? (
            <div className='w-full bg-[#fff] h-[88%] flex items-center justify-center m-0 p-0'>
              <iframe src='https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/' width='100%' height='100%' title="Portfolio" className='m-0 p-0'/>
            </div>
            ) : null}
          </div>
        ) : null }

        {/* Config */}
        {isConfig ? (
          <div className="justify-center items-center h-[100%] pb-[45px] w-full bg-[#202020] m-0 p-0">
            <div className="flex justify-between items-center m-0 p-0 absolute top-0 h-[50px] w-full">
              <div className='flex items-center justify-center cursor-pointer'>
                <ArrowLeft className='h-4 text-gray-50 ms-3 me-1'/>
                <p className='text-gray-50'>
                  Configs
                </p>
              </div>
              <div className='flex items-center m-0 p-0'>
                <div className='p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 px-3 cursor-pointer' onClick={openConfig}>
                  <p className='m-0 text-gray-50'>
                    __
                  </p>
                </div>
                <div className='p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 px-3 cursor-pointer flex items-center'>
                  <p className='m-0 text-gray-50'>
                    <Layers className='h-5'/>
                  </p>
                </div>
                <div className='p-0 m-0 h-[45px] hover:bg-red-600 transition-all duration-500 px-3 cursor-pointer flex items-center' onClick={closeConfig}>
                  <p className='m-0 text-gray-50'>
                    <X className='h-5'/>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between m-0 p-0 mt-[55px] h-[90%] pb-[45px] w-full">
              <div className='flex flex-col w-[30%] '>
                <div className='flex items-center h-[81px]'>
                  <img src='logo.png' className='w-[80px] h-[80px] m-0 p-0'/>
                  <div className='m-0 p-0 gap-0 text-gray-50'>
                    <p className='m-0 p-0 gap-0 leading-none font-bold text-[15px]'>
                      Matheus Chiodi
                      <br/>
                      <span className='font-medium'>matheuschiodi20@gmail.com</span>
                    </p>
                  </div>
                </div>
                <div className='my-3 px-2 pe-5'>
                  <input 
                    type='text' 
                    placeholder='Search' 
                    className='w-full bg-[#2d2d2d] h-[40px] px-4 rounded-sm text-gray-50 border-b border-gray-50 text-sm'/>
                </div>
                <div className='text-gray-50 px-3 text-sm'>
                  <div className='flex items-center gap-2 mb-1 mt-2 me-2 bg-[#2d2d2d] py-1 rounded-sm transition-all duration-500 cursor-pointer'>
                    <div className='bg-blue-500 h-3 w-[2px] rounded-md'></div>
                    <Wifi className='h-5'/>
                    System
                  </div>
                  <div className='flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer'>
                    <Wifi className='h-5'/>
                    Bluetooth and devices
                  </div>
                  <div className='flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer'>
                    <Wifi className='h-5'/>
                    Network and Internet
                  </div>
                  <div className='flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer'>
                    <Wifi className='h-5'/>
                    Personalization
                  </div>
                  <div className='flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer'>
                    <Wifi className='h-5'/>
                    Apps
                  </div>
                  <div className='flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer'>
                    <Wifi className='h-5'/>
                    Accounts
                  </div>
                  <div className='flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer'>
                    <Wifi className='h-5'/>
                    Time and language
                  </div>
                  <div className='flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer'>
                    <Wifi className='h-5'/>
                    Games
                  </div>
                  <div className='flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer'>
                    <Wifi className='h-5'/>
                    Accessibility 
                  </div>
                  <div className='flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer'>
                    <Wifi className='h-5'/>
                    Privacy and security
                  </div>
                  <div className='flex items-center gap-2 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer'>
                    <Wifi className='h-5'/>
                    Windows Update
                  </div>
                </div>
              </div>
              <div className='w-[70%]'>
                <div className='m-0 p-0 gap-0 text-gray-50 h-[81px] flex items-center justify-start'>
                  <p className='m-0 p-0 gap-0 leading-none font-bold text-xl mt-[-20px]'>
                    System
                  </p>
                </div>
                <div className='m-0 p-0 gap-0 h-[92%] overflow-y-scroll'>
                  <Itens />
                </div>
              </div>
            </div>           
          </div>
        ) : null }
        
        <div className="fixed bottom-0 bg-[#d9dfed] w-full flex justify-center items-center h-[45px] m-0 p-0">
          <div className="flex w-full m-0 p-0">
            <div className="flex w-[90%] text-center items-center justify-center">
              <div className="flex w-full justify-center ms-[10%]">
                <div 
                  className={`hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-[1px] h-[37px] me-[2px] rounded-md ${isWindows ? 'bg-[#eaebee]' : ''}`} 
                  onClick={openWindow}
                >
                  <img src='iconWindows.svg'/>
                </div>
                <div className="hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-0 h-[37px] me-[7px] rounded-md">
                  <img src='search.png' className='h-5 mt-1 px-[8px]'/>
                </div>
                <div className="hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-0  h-[37px] me-[7px] rounded-md">
                  <img src='explorer.png' className='h-5 mt-1 px-[8px]'/>
                </div>
                <div className="hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-[2px] px-[4px] h-[37px] me-[7px] rounded-md">
                  <img src='vscode.svg'/>
                </div>
                <div 
                  className={`hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-[1px] me-[7px] rounded-md
                    ${isEdge ? 'bg-[#eaebee] border-b-2 border-blue-600' : 'h-[37px]'}
                    ${isIconEdge ? 'border-b-2 border-blue-600 h-[37px]' : 'h-[37px]'}
                  `} 
                  onClick={openEdge}
                  >
                  <img src='iconEdge.svg'/>
                </div>
                <div className="hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-[1px] h-[37px] me-[7px] rounded-md">
                  <img src='iconsMicrosoftStore.svg'/>
                </div>
                {isIconConfig ? (
                  <div 
                      className={`hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-[4px] me-[7px] rounded-md
                      ${isConfig ? 'bg-[#eaebee] border-b-2 border-blue-600' : 'h-[37px]'}
                      ${isIconConfig ? 'border-b-2 border-blue-600 h-[37px]' : 'h-[37px]'}
                    `} 
                    onClick={openConfig}
                    >
                    <Settings className='h-5'/>
                  </div>
                ) : null }
              </div>
            </div>
            <div className="flex text-center items-center mx-auto">
              <div className='text-right me-1 absolute right-0 flex'>
                <div className="flex justify-between flex-row items-center">
                  <div className="hover:bg-[#eaebee] flex items-center justify-center transition-all duration-500 cursor-pointer m-0 p-[4px] h-[37px] me-[2px] rounded-md">
                    <ChevronUp className='h-5'/>
                  </div>
                  <div 
                    className={`hover:bg-[#eaebee] flex items-center justify-center transition-all duration-500 cursor-pointer m-0 p-[4px] h-[37px] me-[2px] rounded-md
                    ${isConfigWindows ? 'bg-[#eaebee]' : 'h-[37px]'}
                    `}
                    onClick={openConfigWindows}
                    >
                    <Wifi className='h-4'/>
                    <Volume2 className='h-4 ms-1'/>
                    <BatteryFull className='h-4 ms-1'/>
                  </div>     
                </div>
                <div className="hover:bg-[#eaebee] transition-all duration-500 cursor-pointer rounded-md px-3">
                  <p className='text-xs'>{currentTime}</p>
                  <p className='text-xs'>{currentDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
