import {
  ArrowBigDownDash,
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  Battery,
  BatteryCharging,
  BatteryFull,
  Bluetooth,
  BookOpen,
  Cast,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ClipboardCopy,
  Copy,
  FileEdit,
  Home,
  Layers,
  Layout,
  LayoutGrid,
  LockIcon,
  MessageSquare,
  Minus,
  Monitor,
  MonitorDown,
  MonitorOff,
  MonitorUp,
  Paintbrush,
  PanelRightOpen,
  PanelTop,
  Pencil,
  PersonStanding,
  Plane,
  Plus,
  Power,
  RotateCcw,
  RotateCw,
  Save,
  Scissors,
  ScrollText,
  Search,
  Settings,
  ShieldAlert,
  Star,
  SunMedium,
  Undo2,
  Volume2,
  Wifi,
  X,
} from 'lucide-react';
import { useState, useEffect } from 'react';

import Vscode from './components/visualStudio/Vscode';
import PageConfig from './components/pageConfig/Page';
import Calendar from './components/Calendar';
import Explorer from './components/Explorer';
import Contact from './components/Contact';
import ConfigPower from './components/ConfigPower';
import Whatsapp from './components/Whatsapp';
import { set } from 'date-fns';

function App() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  const [isWindows, setWindows] = useState(false);
  const [isEdge, setEdge] = useState(false);
  const [isConfig, setConfig] = useState(false);
  const [isConfigPower, setConfigPower] = useState(false);
  const [isConfigWindows, setConfigWindows] = useState(false);
  const [isCalendar, setCalendar] = useState(false);
  const [isContact, setContact] = useState(false);
  const [isVscode, setVscode] = useState(false);
  const [isWhatsapp, setWhatsapp] = useState(false);
  const [isPowerPoint, setPowerPoint] = useState(false);
  const [isPresentation, setPresentation] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [isExplorer, setExplorer] = useState(false);
  const [isvolume, setVolume] = useState(50);
  const [isBrightness, setBrightness] = useState(100);

  const [isIconEdge, setIconEdge] = useState(false);
  const [isIconConfig, setIconConfig] = useState(false);
  const [isIconVscode, setIconVscode] = useState(false);
  const [isIconExplorer, setIconExplorer] = useState(false);
  const [isIconWhatsapp, setIconWhatsapp] = useState(false);
  const [isIconPowerPoint, setIconPowerPoint] = useState(false);

  const [isPage1, setPage1] = useState(true);
  const [isPage2, setPage2] = useState(false);
  const [isPage3, setPage3] = useState(false);
  const [isPage4, setPage4] = useState(false);

  const [isUrl1, setUrl1] = useState(true);
  const [isUrl2, setUrl2] = useState(false);
  const [isUrl3, setUrl3] = useState(false);
  const [isUrl4, setUrl4] = useState(false);

  const [isSlide, setSlide] = useState(1);
  const [usePng, setUsePng] = useState(false);

  const stylesSlideMap = {
    1: {
      gif: {
        backgroundImage: "url('slides/Inicio.gif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
        zIndex: 100,
      },
      png: {
        backgroundImage: "url('slides/Inicio.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
        zIndex: 100,
      },
    },
    2: {
      gif: {
        backgroundImage: "url('slides/Jornada.gif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
        zIndex: 100,
      },
      png: {
        backgroundImage: "url('slides/Jornada.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
        zIndex: 100,
      },
    },
    3: {
      gif: {
        backgroundImage: "url('slides/App.gif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
        zIndex: 100,
      },
      png: {
        backgroundImage: "url('slides/App.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
        zIndex: 100,
      },
    },
    4: {
      gif: {
        backgroundImage: "url('slides/Ideia.gif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
        zIndex: 100,
      },
      png: {
        backgroundImage: "url('slides/Ideia.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        outline: 'none',
        zIndex: 100,
      },
    },
  };

  const styleSlide = stylesSlideMap[isSlide]
    ? usePng
      ? stylesSlideMap[isSlide].png
      : stylesSlideMap[isSlide].gif
    : {};

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsePng(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, [isSlide]);


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
      setConfigPower(false);
    } else {
      setWindows(true);
      setConfigWindows(false);
      setConfigPower(false);
      setCalendar(false);
      setContact(false);
      setSearch(false);
    }
  }

  //-- Função para abrir o menu configurações do power
  function openConfigPower() {
    if (isConfigPower) {
      setConfigPower(false);
    } else {
      setConfigPower(true);
      setConfigWindows(false);
      setCalendar(false);
      setContact(false);
      setSearch(false);
    }
  }

  //-- Função para alterar o volume
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
  };

  //-- Função para alterar o brilho
  const handleBrightnessChange = (event) => {
    const newBrightness = event.target.value;
    setBrightness(newBrightness);
    changeBrightness();
    function changeBrightness() {
      document.getElementById(
        'body'
      ).style.filter = `brightness(${newBrightness}%)`;
      // deixar o background com o filtro de brilho
    }
  };

  //-- Função para abrir Windows config
  function openConfigWindows() {
    if (isConfigWindows) {
      setConfigWindows(false);
      setConfigPower(false);
    } else {
      setConfigWindows(true);
      setWindows(false);
      setConfigPower(false);
      setCalendar(false);
      setContact(false);
      setSearch(false);
    }
  }

  //-- Função para abri o Search
  function openSearch() {
    if (isSearch) {
      setSearch(false);
    } else {
      setSearch(true);
      setWindows(false);
      setConfigPower(false);
      setConfigWindows(false);
      setCalendar(false);
      setContact(false);
    }
  }

  //-- Função para abrir o menu de contato
  function openContact() {
    if (isContact) {
      setContact(false);
    } else {
      setContact(true);
      setWindows(false);
      setConfigPower(false);
      setConfigWindows(false);
      setCalendar(false);
    }
  }

  //-- Função para abrir o Edge
  function openEdge() {
    if (isEdge) {
      setEdge(false);
    } else {
      setEdge(true);
      setIconEdge(true);

      setUrl1(true);
      setUrl2(false);
      setPage1(true);

      setWindows(false);
      setConfig(false);
      setConfigPower(false);
      setConfigWindows(false);
      setVscode(false);
      setSearch(false);
      setCalendar(false);
      setContact(false);
      setExplorer(false);
      setWhatsapp(false);
      setPowerPoint(false);
    }
  }

  //-- Função para fechar o Edge
  function closeEdge() {
    if (isEdge) {
      setEdge(false);
      setIconEdge(false);

      setPage1(true);
      setPage2(false);
      setPage3(false);
      setPage4(false);

      setUrl1(true);
      setUrl2(false);
      setUrl3(false);
      setUrl4(false);
    }
  }

  //-- Função para abrir o Config
  function openConfig() {
    if (isConfig) {
      setConfig(false);
      setConfigPower(false);
    } else {
      setConfig(true);
      setIconConfig(true);
      setConfigPower(false);
      setConfigWindows(false);
      setCalendar(false);
      setContact(false);
      setWindows(false);
      setEdge(false);
      setVscode(false);
      setSearch(false);
      setCalendar(false);
      setContact(false);
      setExplorer(false);
      setWhatsapp(false);
      setPowerPoint(false);
    }
  }

  //-- Função para fechar o Config
  function closeConfig() {
    if (isConfig) {
      setConfig(false);
      setIconConfig(false);
    }
  }

  //-- Função para abrir o Explorer
  function openExplorer() {
    if (isExplorer) {
      setExplorer(false);
    } else {
      setExplorer(true);
      setIconExplorer(true);
      setCalendar(false);
      setContact(false);
      setWindows(false);
      setConfigPower(false);
      setConfigWindows(false);
      setConfig(false);
      setSearch(false);
      setEdge(false);
      setVscode(false);
      setWhatsapp(false);
      setPowerPoint(false);
    }
  }

  //-- Função para fechar o Explorer
  function closeExplorer() {
    if (isExplorer) {
      setExplorer(false);
      setIconExplorer(false);
    }
  }

  //-- Função para abrir o Calendario
  function openCalendar() {
    if (isCalendar) {
      setCalendar(false);
    } else {
      setCalendar(true);
      setWindows(false);
      setConfigPower(false);
      setConfigWindows(false);
      setContact(false);
      setSearch(false);
    }
  }

  //-- Função para abrir o Vscode
  function openVscode() {
    if (isVscode) {
      setVscode(false);
    } else {
      setVscode(true);
      setIconVscode(true);

      setWindows(false);
      setConfigPower(false);
      setConfigWindows(false);
      setContact(false);
      setCalendar(false);
      setEdge(false);
      setConfig(false);
      setSearch(false);
      setCalendar(false);
      setContact(false);
      setExplorer(false);
      setWhatsapp(false);
      setPowerPoint(false);
    }
  }

  //-- Função para fechar o Vscode
  function closeVscode() {
    if (isVscode) {
      setVscode(false);
      setIconVscode(false);
    }
  }

  //-- Função para abrir o Whatsapp
  function openWhatsapp() {
    if (isWhatsapp) {
      setWhatsapp(false);
    } else {
      setWhatsapp(true);
      setIconWhatsapp(true);

      setWindows(false);
      setConfigPower(false);
      setConfigWindows(false);
      setContact(false);
      setCalendar(false);
      setVscode(false);
      setEdge(false);
      setConfig(false);
      setSearch(false);
      setCalendar(false);
      setContact(false);
      setExplorer(false);
      setPowerPoint(false);
    }
  }

  //-- Função para fechar o Whatsapp
  function closeWhatsapp() {
    if (isWhatsapp) {
      setWhatsapp(false);
      setIconWhatsapp(false);
    }
  }

  //-- Função para abrir o Power Point
  function openPowerPoint() {
    if (isPowerPoint) {
      setPowerPoint(false);
    } else {
      setPowerPoint(true);
      setIconPowerPoint(true);

      setWindows(false);
      setConfigPower(false);
      setConfigWindows(false);
      setContact(false);
      setCalendar(false);
      setVscode(false);
      setWhatsapp(false);
      setEdge(false);
      setConfig(false);
      setSearch(false);
      setCalendar(false);
      setContact(false);
      setExplorer(false);
    }
  }

  //-- Função para fechar o Power Point
  function closePowerPoint() {
    if (isPowerPoint) {
      setPowerPoint(false);
      setIconPowerPoint(false);
    }
  }

  //-- Função para abrir o Presentation
  function openPresentation() {
    if (isPresentation) {
      setPresentation(false);
      setPowerPoint(true);
      setSlide(1);
    } else {
      setPresentation(true);
      setSlide(1);

      setPowerPoint(false);

      setWindows(false);
      setConfigPower(false);
      setConfigWindows(false);
      setContact(false);
      setCalendar(false);
      setVscode(false);
      setEdge(false);
      setConfig(false);
      setSearch(false);
      setCalendar(false);
      setContact(false);
      setExplorer(false);
    }
  }

  //-- Função para fechar o Presentation
  function closePresentation() {
    if (isPresentation) {
      setPresentation(false);
      setPowerPoint(true);
    }
  }

  //- Função para proximo slide
  function nextSlide() {
    if (isSlide === 1) {
      setSlide(2);
      setUsePng(false);
    }
    if (isSlide === 2) {
      setSlide(3);
      setUsePng(false);
    }
    if (isSlide === 3) {
      setSlide(4);
      setUsePng(false);
    }
  }

  //- Função para slide anterior
  function previousSlide() {
    if (isSlide === 2) {
      setSlide(1);
      setUsePng(false);
    }
    if (isSlide === 3) {
      setSlide(2);
      setUsePng(false);
    }
    if (isSlide === 4) {
      setSlide(3);
      setUsePng(false);
    }
  }

  //-- Função para abrir a página 1
  function openPage1() {
    if (!isUrl1) {
      setUrl1(true);
      setUrl2(false);
      setUrl3(false);
      setUrl4(false);
    }
  }

  //-- Função para abrir a página 2
  function openPage2() {
    if (!isUrl2) {
      setUrl2(true);
      setUrl1(false);
      setUrl3(false);
      setUrl4(false);
    } else {
      setUrl1(false);
      setUrl3(false);
      setUrl4(false);
    }
  }

  //-- Função para fechar a página 2
  function closePage2() {
    setPage2(false);
    setUrl2(false);

    setTimeout(() => {
      setPage1(true);
      setUrl1(true);
    }, 100);
  }

  //-- Função para abrir a página 3
  function openPage3() {
    if (!isUrl3) {
      setUrl3(true);
      setUrl1(false);
      setUrl2(false);
      setUrl4(false);
    }
  }

  //-- Função para fechar a página 3
  function closePage3() {
    setPage3(false);
    setUrl3(false);

    setTimeout(() => {
      setPage2(true);
      setUrl2(true);
    }, 100);
  }

  //-- Função para abrir a página 4
  function openPage4() {
    if (!isUrl4) {
      setUrl4(true);
      setUrl3(false);
      setUrl2(false);
      setUrl1(false);
    }
  }

  //-- Função para fechar a página 4
  function closePage4() {
    if (isPage4) {
      setPage4(false);
      setUrl4(false);

      setTimeout(() => {
        setPage3(true);
        setUrl3(true);
      }, 100);
    }
  }

  //-- Função para abrir uma nova página
  function openNewPage() {
    if (!isPage2) {
      setPage2(true);
      setUrl2(true);
      setUrl1(false);
      setUrl3(false);
      setUrl4(false);
    } else if (!isPage3) {
      setPage3(true);
      setUrl3(true);
      setUrl2(false);
      setUrl1(false);
      setUrl4(false);
    } else if (!isPage4) {
      setPage4(true);
      setUrl4(true);
      setUrl3(false);
      setUrl2(false);
      setUrl1(false);
    }
  }

  //-- Função para restart pagina do Edge
  function restartPage() {
    if (isUrl1) {
      setPage1(false);
      setUrl1(false);

      setTimeout(() => {
        setPage1(true);
        setUrl1(true);
      }, 100);
    }
    if (isUrl2) {
      setPage2(false);
      setUrl2(false);

      setTimeout(() => {
        setPage2(true);
        setUrl2(true);
      }, 100);
    }
    if (isUrl3) {
      setPage3(false);
      setUrl3(false);

      setTimeout(() => {
        setPage3(true);
        setUrl3(true);
      }, 100);
    }
    if (isUrl4) {
      setPage4(false);
      setUrl4(false);

      setTimeout(() => {
        setPage4(true);
        setUrl4(true);
      }, 100);
    }
  }

  return (
    <>
      {/* Desktop */}
      <div className="flex h-screen w-full m-0 p-0">
        {/* Mobile */}
        <div
          className="h-screen w-full m-0 p-0 absolute block lg:hidden"
          style={{
            zIndex: 100,
            backgroundColor: '#F8F8F2',
          }}
        >
          <div className="flex flex-col items-center justify-center h-screen w-full m-0 p-3 ">
            <img src="logo.png" className="h-[50px] w-[50px]" />
            <p className="text-center text-lg font-bold text-[#44475a]">
              O sistema só pode ser visualizado em Desktop
            </p>
          </div>
        </div>

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
                  <p className="text-xs">Pinned</p>
                  <p className="text-xs cursor-pointer bg-[#eaebee] hover:bg-[#f2f4f7] transition-all duration-700 ps-2 py-1 rounded-md flex">
                    All apps <ChevronRight className="h-4" />
                  </p>
                </div>
                <div className="flex justify-around items-center px-2 mt-4 text-[#6e717a] font-medium">
                  <div
                    className="flex flex-col items-center justify-center w-[100px] hover:bg-[#ffffff5b] transition-all duration-500 p-1 rounded-sm cursor-pointer"
                    onClick={openEdge}
                  >
                    <img src="iconEdge.svg" className="h-[30px] w-[30px]" />
                    <p className="text-xs text-center">Microsoft Edge</p>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center w-[100px] hover:bg-[#ffffff5b] transition-all duration-500 p-1 rounded-sm cursor-pointer"
                    onClick={openVscode}
                  >
                    <img src="vscode.svg" className="h-[30px] w-[30px]" />
                    <p className="text-xs text-center">Visual Studio Code</p>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center h-[85px] w-[100px] hover:bg-[#ffffff5b] transition-all duration-500 p-1 rounded-sm cursor-pointer"
                    onClick={openWhatsapp}
                  >
                    <img src="iconWhatsapp.svg" className="h-[30px] w-[30px]" />
                    <p className="text-xs text-center">Whatsapp</p>
                  </div>
                  <div
                    className="flex flex-col items-center justify-center h-[85px] w-[100px] hover:bg-[#ffffff5b] transition-all duration-500 p-1 rounded-sm cursor-pointer"
                    onClick={openPowerPoint}
                  >
                    <img src="PowerPoint.png" className="h-[30px] w-[30px]" />
                    <p className="text-xs text-center">PowerPoint</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#dbe0f1f8] w-[450px] absolute bottom-[50px] border-t rounded-b-xl px-6 flex justify-between items-center h-[50px]">
                <div className="h-[40px] flex justify-center items-center text-[#6e717a] p-1  hover:hover:bg-[#eaebee] rounded-md transition-all duration-500 cursor-pointer">
                  <img src="logo.png" className="w-[40px] h-[40px]" />
                  <p className="text-sm font-medium">Matheus Chiodi</p>
                </div>

                <div className="flex gap-2 text-[#6e717a]">
                  <div className="p-1 hover:bg-[#eaebee] rounded-md transition-all duration-500 cursor-pointer">
                    <ArrowDownToLine className="h-5" />
                  </div>
                  <div
                    className="p-1 hover:bg-[#eaebee] rounded-md transition-all duration-500 cursor-pointer"
                    onClick={openConfig}
                  >
                    <Settings className="h-5" />
                  </div>
                  <div
                    className={`p-1 hover:bg-[#eaebee] rounded-md transition-all duration-500 cursor-pointer
                  ${isConfigPower ? 'bg-[#eaebee]' : ''}
                  `}
                    onClick={openConfigPower}
                  >
                    <Power className="h-5" />
                  </div>
                </div>
              </div>

              {/* Config Power*/}
              {isConfigPower ? <ConfigPower /> : null}
            </div>
          </div>
        ) : null}

        {/* Config Windows */}
        {isConfigWindows ? (
          <div className="absolute justify-center items-center h-[100%] pb-[48px] pe-2 pt-[17%] w-full">
            <div className="h-[297px] w-[300px] ms-auto bottom-0 rounded-t-md">
              <div className="bg-[#dbe0f1f8] w-[300px] absolute bottom-[88px] rounded-t-md border-t">
                <div className="grid grid-cols-3 m-0 pt-4">
                  <div className="flex h-10 w-[80px] items-center justify-center ms-4 bg-[#fffffffe] rounded-md ">
                    <div className="flex items-center border-r border-gray-100 h-10 hover:bg-gray-100 transition-all duration-500 hover:rounded-l-md cursor-pointer">
                      <Wifi className="h-4 text-[#6e717a99] w-[40px]" />
                    </div>
                    <div className="flex items-center h-10 hover:bg-gray-100 transition-all duration-500 hover:rounded-r-md cursor-pointer">
                      <ChevronRight className="h-4 text-[#6e717a99] w-[40px]" />
                    </div>
                  </div>
                  <div className="flex h-10 w-[80px] items-center justify-center ms-2 bg-[#fffffffe] rounded-md ">
                    <div className="flex items-center border-r border-gray-100 h-10 hover:bg-gray-100 transition-all duration-500 hover:rounded-l-md cursor-pointer">
                      <Bluetooth className="h-4 text-[#6e717a99] w-[40px]" />
                    </div>
                    <div className="flex items-center h-10 hover:bg-gray-100 transition-all duration-500 hover:rounded-r-md cursor-pointer">
                      <ChevronRight className="h-4 text-[#6e717a99] w-[40px]" />
                    </div>
                  </div>
                  <div className="flex h-10 w-[80px] items-center justify-center ms-w bg-[#ffffff57] rounded-md ">
                    <div className="flex items-center border-r border-gray-100 h-10 hover:bg-[#ffffffb4] transition-all duration-500 hover:rounded-md cursor-pointer">
                      <ShieldAlert className="h-4 text-[#6e717a99] w-[80px]" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 m-0 pt-4">
                  <div className="flex h-10 w-[80px] items-center justify-center ms-4 bg-[#ffffff57] rounded-md ">
                    <div className="flex items-center border-r border-gray-100 h-10 hover:bg-[#ffffffb4] transition-all duration-500 hover:rounded-md cursor-pointer">
                      <Plane className="h-4 text-[#6e717a99] w-[80px]" />
                    </div>
                  </div>
                  <div className="flex h-10 w-[80px] items-center justify-center ms-2 bg-[#ffffff57] rounded-md ">
                    <div className="flex items-center border-r border-gray-100 h-10 hover:bg-[#ffffffb4] transition-all duration-500 hover:rounded-md cursor-pointer">
                      <Battery className="h-4 text-[#6e717a99] w-[80px]" />
                    </div>
                  </div>
                  <div className="flex h-10 w-[80px] items-center justify-center ms-w bg-[#ffffff57] rounded-md ">
                    <div className="flex items-center border-r border-gray-100 h-10 hover:bg-[#ffffffb4] transition-all duration-500 hover:rounded-md cursor-pointer">
                      <PersonStanding className="h-4 text-[#6e717a99] w-[80px]" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 m-0 pt-4">
                  <div className="flex h-10 w-[80px] items-center justify-center ms-4 bg-[#ffffff57] rounded-md ">
                    <div className="flex items-center border-r border-gray-100 h-10 hover:bg-[#ffffffb4] transition-all duration-500 hover:rounded-md cursor-pointer">
                      <SunMedium className="h-4 text-[#6e717a99] w-[80px]" />
                    </div>
                  </div>
                  <div className="flex h-10 w-[80px] items-center justify-center ms-2 bg-[#ffffff57] rounded-md ">
                    <div className="flex items-center border-r border-gray-100 h-10 hover:bg-[#ffffffb4] transition-all duration-500 hover:rounded-md cursor-pointer">
                      <Cast className="h-4 text-[#6e717a99] w-[80px]" />
                    </div>
                  </div>
                  <div className="flex h-10 w-[80px] items-center justify-center ms-w bg-[#ffffff57] rounded-md ">
                    <div className="flex items-center border-r border-gray-100 h-10 hover:bg-[#ffffffb4] transition-all duration-500 hover:rounded-md cursor-pointer">
                      <Copy className="h-4 text-[#6e717a99] w-[80px]" />
                    </div>
                  </div>
                </div>
                <div className="mb-2 mt-4">
                  <div className="flex items-center">
                    <SunMedium className="h-5 text-[#6e717ac0] w-[70px]" />
                    <input
                      type="range"
                      className="w-[200px] h-[6px]"
                      min="0"
                      max="100"
                      value={isBrightness}
                      onChange={handleBrightnessChange}
                    />
                  </div>
                  <div className="flex items-center mt-3">
                    <Volume2 className="h-5 text-[#6e717ac0] w-[70px]" />
                    <input
                      type="range"
                      className="w-[200px] h-[6px]"
                      min="0"
                      max="100"
                      value={isvolume}
                      onChange={handleVolumeChange}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#dbe0f1f8] w-[300px] absolute bottom-[48px] h-[40px] rounded-b-md border-t">
                <div className="flex justify-between px-4 items-center h-[40px]">
                  <div className="flex items-center hover:bg-[#e1e5f3] transition-all duration-500 rounded-md cursor-pointer px-1">
                    <BatteryCharging className="h-5 text-[#6e717a]" />
                    <p className="text-xs ms-1 text-[#6e717a]">100%</p>
                  </div>
                  <div className="flex items-center p-1">
                    <div className="hover:bg-[#e1e5f3] transition-all duration-500 p-[3px] rounded-md cursor-pointer">
                      <Pencil className="h-4 text-[#6e717a]" />
                    </div>
                    <div
                      className="hover:bg-[#e1e5f3] transition-all duration-500 p-[3px] rounded-md cursor-pointer"
                      onClick={openConfig}
                    >
                      <Settings className="h-4 text-[#6e717a]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Search */}
        {isSearch ? (
          <div className="absolute justify-center items-center h-[100%] pb-[48px] pt-[5%] w-full">
            <div className="bg-[#e1e5f3f5] h-[100%] w-[450px] mx-auto bottom-0 rounded-md pt-1">
              <div className="flex justify-center w-full h-[40px] mt-3">
                <input
                  type="text"
                  className="bg-[#eaebee] text-[#6e717a] rounded-t-lg w-[420px] mx-auto px-2 p-1 text-xs border-b-[2.5px] border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <div className="flex m-0 px-2 mt-2 justify-between">
                <div className="text-[#6e717a]">
                  <p className="font-medium mb-2 px-1">Recent</p>
                  <div
                    className="flex items-center font-medium text-sm hover:bg-[#ffffff5b] transition-all duration-500 px-1 rounded-sm cursor-pointer"
                    onClick={openEdge}
                  >
                    <img
                      src="iconEdge.svg"
                      className="h-[30px] w-[30px] me-1"
                    />
                    Microsoft Edge
                  </div>
                  <div
                    className="mt-2 flex items-center font-medium text-sm hover:bg-[#ffffff5b] transition-all duration-500 px-1 rounded-sm cursor-pointer"
                    onClick={openVscode}
                  >
                    <img src="vscode.svg" className="h-[30px] w-[30px] me-1" />
                    Visual Studio Code
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Calendario */}
        {isCalendar ? <Calendar /> : null}

        {/* Contato */}
        {isContact ? <Contact /> : null}

        {/* Edge */}
        {isEdge ? (
          <div className="justify-center items-center h-[100%] pb-[45px] w-full bg-[#38393c] m-0 p-0">
            <div className="flex justify-between items-center m-0 p-0">
              <div className="flex m-0 p-0 items-center">
                <div className="mx-3 p-1 m-0 hover:bg-[#56585d] transition-all duration-500 cursor-not-allowed rounded-sm flex items-center h-[30px]">
                  <p className="m-0 text-gray-50">
                    <Layout className="h-5 text-white rounded-md" />
                  </p>
                </div>
                <div
                  className={`text-white w-[200px] flex justify-center items-center h-[45px] cursor-pointer hover:bg-[#414246] transition-all duration-500
                ${
                  isUrl1
                    ? 'bg-[#56585d]'
                    : 'bg-[#38393c] border-l border-gray-400'
                }
                `}
                  onClick={openPage1}
                >
                  <div className="flex px-2">
                    <img src="logo.png" className="w-[20px] h-[20px]" />
                    <p className="m-0 text-xs">Matheus Chiodi</p>
                  </div>
                </div>
                {isPage2 ? (
                  <div
                    className={`text-white rounded-tr-[4px] w-[200px] flex items-center h-[45px] cursor-pointer hover:bg-[#414246] transition-all duration-500
                  ${
                    isUrl2
                      ? 'bg-[#56585d] justify-between'
                      : 'bg-[#38393c] justify-center'
                  }
                  `}
                    onClick={openPage2}
                  >
                    <div className="flex px-2">
                      <img src="logo.png" className="w-[20px] h-[20px]" />
                      <p className="m-0 text-xs">NLW Spacetime</p>
                    </div>

                    {isUrl2 ? (
                      <div
                        className="hover:bg-[#63656a] transition-all duration-500 rounded-sm py-[3px] mx-2"
                        onClick={closePage2}
                      >
                        <X className="h-3 cursor-pointer" />
                      </div>
                    ) : null}
                  </div>
                ) : null}

                {isPage3 ? (
                  <div
                    className={`text-white rounded-tr-[4px] w-[200px] flex  items-center h-[45px] cursor-pointer hover:bg-[#414246] transition-all duration-500
                  ${
                    isUrl3
                      ? 'bg-[#56585d] justify-between'
                      : 'bg-[#38393c] justify-center'
                  }
                  `}
                    onClick={openPage3}
                  >
                    <div className="flex px-2">
                      <img src="logo.png" className="w-[20px] h-[20px]" />
                      <p className="m-0 text-xs">Project Shop</p>
                    </div>
                    {isUrl3 ? (
                      <div
                        className="hover:bg-[#63656a] transition-all duration-500 rounded-sm py-[3px] mx-2"
                        onClick={closePage3}
                      >
                        <X className="h-3 cursor-pointer" />
                      </div>
                    ) : null}
                  </div>
                ) : null}

                {isPage4 ? (
                  <div
                    className={`text-white rounded-tr-[4px] w-[200px] flex items-center h-[45px] cursor-pointer hover:bg-[#414246] transition-all duration-500
                  ${
                    isUrl4
                      ? 'bg-[#56585d] justify-between'
                      : 'bg-[#38393c] justify-center border-r border-gray-400 rounded-tr-[10px]'
                  }
                  `}
                    onClick={openPage4}
                  >
                    <div className="flex px-2">
                      <img src="logo.png" className="w-[20px] h-[20px]" />
                      <p className="m-0 text-xs">Tic Tac Toe</p>
                    </div>
                    {isUrl4 ? (
                      <div
                        className="hover:bg-[#63656a] transition-all duration-500 rounded-sm py-[3px] mx-2"
                        onClick={closePage4}
                      >
                        <X className="h-3 cursor-pointer" />
                      </div>
                    ) : null}
                  </div>
                ) : null}

                {!isPage2 || !isPage3 || !isPage4 ? (
                  <div
                    className="mx-1 p-1 m-0 hover:bg-[#56585d] transition-all duration-500 cursor-pointer rounded-sm flex items-center h-[30px]"
                    onClick={openNewPage}
                  >
                    <p className="m-0 text-gray-50">
                      <Plus className="h-4 text-white rounded-md" />
                    </p>
                  </div>
                ) : null}
              </div>
              <div className="flex items-center m-0 p-0">
                <div
                  className="p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 px-3 cursor-pointer"
                  onClick={openEdge}
                >
                  <p className="m-0 text-gray-50">__</p>
                </div>
                <div className="p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 px-3 cursor-not-allowed flex items-center">
                  <p className="m-0 text-gray-50">
                    <Layers className="h-5" />
                  </p>
                </div>
                <div
                  className="p-0 m-0 h-[45px] hover:bg-red-600 transition-all duration-500 px-3 cursor-pointer flex items-center"
                  onClick={closeEdge}
                >
                  <p className="m-0 text-gray-50">
                    <X className="h-5" />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#56585d] h-[40px] px-2 flex items-center justify-between">
              <div className="flex gap-3 w-full">
                <div className="m-0 p-[3px] flex items-center hover:bg-[#6d7077] transition-all duration-50 rounded-sm cursor-not-allowed">
                  <ArrowLeft className="h-5 text-gray-50" />
                </div>
                <div
                  className="m-0 p-[3px] flex items-center hover:bg-[#6d7077] transition-all duration-50 cursor-pointer rounded-sm"
                  onClick={restartPage}
                >
                  <RotateCw className="h-5 text-gray-50" />
                </div>
                <div className="m-0 p-[3px] flex items-center hover:bg-[#6d7077] transition-all duration-50 rounded-sm cursor-not-allowed">
                  <Home className="h-5 text-gray-50" />
                </div>
                <div className="w-[55%] text-gray-400 bg-[#46474b] px-4 rounded-xl flex items-center  justify-between cursor-not-allowed">
                  <p className="flex items-center text-sm overflow-hidden h-[32px]">
                    <div className="hover:bg-[#56585d] transition-all duration-500 rounded-sm px-[2px] py-[4px] cursor-pointer me-2">
                      <LockIcon className="h-3 text-gray-300" />
                    </div>
                    {isUrl4 ? (
                      <>https://matheuschiodi.github.io/tic-tac-toe/</>
                    ) : null}
                    {isUrl3 ? (
                      <>https://matheuschiodi.github.io/Project-Shop/</>
                    ) : null}
                    {isUrl2 ? (
                      <>
                        https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/
                      </>
                    ) : null}
                    {isUrl1 ? (
                      <>
                        https://
                        <span className="text-gray-300">
                          matheuschiodi.github.io
                        </span>
                        /Portfolio/
                      </>
                    ) : null}
                  </p>
                  <div className="hover:bg-[#56585d] transition-all duration-500 rounded-sm px-[2px] py-[4px] cursor-pointer">
                    <Star className="h-3 text-gray-300" />
                  </div>
                </div>
              </div>
              <div>
                <img src="logo.png" className="w-[50px] h-[40px]" />
              </div>
            </div>

            {/*Tela 1*/}
            {isUrl1 ? (
              <div className="w-full bg-[#fff] h-[87.5%] flex items-center justify-center m-0 p-0">
                <iframe
                  src="https://matheuschiodi.github.io/Portfolio/"
                  width="100%"
                  height="100%"
                  title="Portfolio"
                  className="m-0 p-0"
                />
              </div>
            ) : null}

            {/*Tela 2*/}
            {isUrl2 ? (
              <div className="w-full bg-[#fff] h-[88%] flex items-center justify-center m-0 p-0">
                <iframe
                  src="https://matheuschiodi.github.io/NLW-Spacetime-not-Prisma/"
                  width="100%"
                  height="100%"
                  title="Portfolio"
                  className="m-0 p-0"
                />
              </div>
            ) : null}

            {/*Tela 3*/}
            {isUrl3 ? (
              <div className="w-full bg-[#fff] h-[88%] flex items-center justify-center m-0 p-0">
                <iframe
                  src="https://matheuschiodi.github.io/Project-Shop/"
                  width="100%"
                  height="100%"
                  title="Portfolio"
                  className="m-0 p-0"
                />
              </div>
            ) : null}

            {/*Tela 4*/}
            {isUrl4 ? (
              <div className="w-full bg-[#fff] h-[88%] flex items-center justify-center m-0 p-0">
                <iframe
                  src="https://matheuschiodi.github.io/tic-tac-toe/"
                  width="100%"
                  height="100%"
                  title="Portfolio"
                  className="m-0 p-0"
                />
              </div>
            ) : null}
          </div>
        ) : null}

        {/* Vscode */}
        {isVscode ? (
          <div className="justify-center items-center h-[100%] pb-[45px] w-full bg-[#21222c] m-0">
            <div className="flex justify-between items-center m-0 p-0">
              <div className="flex items-center justify-center gap-1 text-gray-100 text-xs h-[30px] p-1">
                <img src="vscode.svg" className="w-[20px] h-[20px]" />
                <p className="hover:bg-[#56585d] transition-all duration-500 px-1 rounded-sm cursor-pointer">
                  File
                </p>
                <p className="hover:bg-[#56585d] transition-all duration-500 px-1 rounded-sm cursor-pointer">
                  Edit
                </p>
                <p className="hover:bg-[#56585d] transition-all duration-500 px-1 rounded-sm cursor-pointer">
                  Selection
                </p>
                <p className="hover:bg-[#56585d] transition-all duration-500 px-1 rounded-sm cursor-pointer">
                  View
                </p>
                <p className="hover:bg-[#56585d] transition-all duration-500 px-1 rounded-sm cursor-pointer">
                  Run
                </p>
              </div>
              <div className="p-1 flex items-center">
                <ArrowLeft className="h-4 text-[#6e6f73] hover:text-gray-100 transition-all duration-500 cursor-pointer" />
                <ArrowRight className="h-4 text-[#6e6f73] me-1 hover:text-gray-100 transition-all duration-500 cursor-pointer" />
                <div className="flex items-center justify-center gap-4 text-gray-100 text-xs h-[30px] bg-[#2c2d37] w-[400px] rounded-md border border-[#55565b] hover:bg-[#393a46] cursor-pointer transition-all duration-500">
                  <Search className="h-3" />
                  <p>Search</p>
                </div>
              </div>
              <div className="flex items-center justify-center text-gray-100 text-xs h-[30px]">
                <div
                  className="p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 cursor-pointer"
                  onClick={openVscode}
                >
                  <p className="m-0 text-gray-50 mt-[6px] px-3">__</p>
                </div>
                <div className="p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 text-gray-50 px-3">
                    <Layers className="h-5" />
                  </p>
                </div>
                <div
                  className="p-0 m-0 h-[45px] hover:bg-red-600 transition-all duration-500 cursor-pointer flex items-center"
                  onClick={closeVscode}
                >
                  <p className="m-0 text-gray-50 px-3">
                    <X className="h-5" />
                  </p>
                </div>
              </div>
            </div>
            <Vscode />
          </div>
        ) : null}

        {/* Whatsapp */}
        {isWhatsapp ? (
          <div className="justify-center items-center h-[100%] pb-[45px] w-full bg-[#202020] m-0">
            <div className="flex justify-between items-center m-0 p-0">
              <div className="flex items-center justify-center gap-1 text-gray-100 text-xs h-[30px] p-1">
                <img src="iconWhatsapp.svg" className="w-[30px] h-[30px]" />
                <p>Whatsapp</p>
              </div>
              <div className="flex items-center justify-center text-gray-100 text-xs h-[30px]">
                <div
                  className="p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 cursor-pointer"
                  onClick={openWhatsapp}
                >
                  <p className="m-0 text-gray-50 mt-[6px] px-3">__</p>
                </div>
                <div className="p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 text-gray-50 px-3">
                    <Layers className="h-5" />
                  </p>
                </div>
                <div
                  className="p-0 m-0 h-[45px] hover:bg-red-600 transition-all duration-500 cursor-pointer flex items-center"
                  onClick={closeWhatsapp}
                >
                  <p className="m-0 text-gray-50 px-3">
                    <X className="h-5" />
                  </p>
                </div>
              </div>
            </div>
            <Whatsapp />
          </div>
        ) : null}

        {/* PowerPoint */}
        {isPowerPoint ? (
          <div className="flex flex-col h-full w-full bg-gray-200 m-0 pb-[45px]">
            <div className="w-full h-17 max-h-20 bg-[#b7472a] flex flex-wrap justify-between">
              <div className="w-full flex justify-between">
                <div className="flex items-center justify-center text-gray-100 text-xs sm:text-sm md:text-base h-[30px]">
                  <div className="ml-2 p-0 m-0 h-[45px] hover:bg-[#a92b1a] transition-all duration-500 cursor-pointer">
                    <p className="m-0 text-[#fdc9b5] mt-[11.5px] px-3">
                      <Save className="h-5" />
                    </p>
                  </div>
                  <div className="p-0 m-0 h-[45px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                    <p className="m-0 text-[#c7725c] px-2 flex items-center mt-1">
                      <Undo2 className="h-5" />
                      <ChevronDown className="h-3" />
                    </p>
                  </div>
                  <div className="p-0 m-0 h-[45px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                    <p className="m-0 text-[#c7725c] px-3 flex items-center mt-1">
                      <RotateCcw className="h-5" />
                    </p>
                  </div>
                  <div
                    className="p-0 m-0 h-[45px] hover:bg-[#a92b1a] transition-all duration-500 cursor-pointer flex items-center"
                    onClick={openPresentation}
                  >
                    <p className="m-0 text-[#fdc9b5] px-3 flex items-center mt-1">
                      <MonitorDown className="h-5" />
                    </p>
                  </div>
                  <div className="p-0 m-0 h-[45px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                    <p className="m-0 text-[#fdc9b5] px-3 flex items-center mt-1">
                      <ArrowBigDownDash className="h-3" />
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center mt-1">
                  <p className="text-xs sm:text-sm md:text-base text-[#fdc9b5]">
                    Apresentação Escola Leticia
                  </p>
                </div>

                <div className="flex">
                  <div className="h-[40px] flex items-center justify-center hover:bg-[#a92b1a] transition-all duration-500 cursor-pointer mr-1 px-1">
                    <img src="logo.png" className="w-5 h-5" />
                    <p className="text-xs sm:text-sm md:text-base text-[#fdc9b5]">
                      Matheus Chiodi
                    </p>
                  </div>
                  <div className="p-0 m-0 h-[40px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                    <p className="m-0 text-[#fdc9b5] px-3 flex items-center">
                      <MonitorUp className="h-4" />
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-gray-100 text-xs h-[30px]">
                    <div
                      className="p-0 m-0 h-[45px] hover:bg-[#a92b1a] transition-all duration-500 cursor-pointer"
                      onClick={openPowerPoint}
                    >
                      <p className="m-0 text-gray-50 mt-[8px] px-3">__</p>
                    </div>
                    <div className="p-0 m-0 h-[45px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                      <p className="m-0 text-gray-50 px-3 mt-1">
                        <Layers className="h-5" />
                      </p>
                    </div>
                    <div
                      className="p-0 m-0 h-[45px] hover:bg-red-600 transition-all duration-500 cursor-pointer flex items-center"
                      onClick={closePowerPoint}
                    >
                      <p className="m-0 text-gray-50 px-3 mt-1">
                        <X className="h-5" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-wrap mt-[2px]">
                <div className="p-0 m-0 h-[40px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 px-3 flex items-center lg:text-[12px] xl:text-sm text-[#fdc9b5]">
                    Arquivo
                  </p>
                </div>
                <div className="p-0 m-0 h-[40px] bg-[#f3f3f3] transition-all duration-500 flex items-center">
                  <p className="m-0 px-3 flex items-center lg:text-[14px] xl:text-sm">
                    Página Inicial
                  </p>
                </div>
                <div className="p-0 m-0 h-[40px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 px-3 flex items-center lg:text-[12px] xl:text-sm text-[#fdc9b5]">
                    Inserir
                  </p>
                </div>
                <div className="p-0 m-0 h-[40px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 px-3 flex items-center lg:text-[12px] xl:text-sm text-[#fdc9b5]">
                    Desenhar
                  </p>
                </div>
                <div className="p-0 m-0 h-[40px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 px-3 flex items-center lg:text-[12px] xl:text-sm text-[#fdc9b5]">
                    Desing
                  </p>
                </div>
                <div className="p-0 m-0 h-[40px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 px-3 flex items-center lg:text-[12px] xl:text-sm text-[#fdc9b5]">
                    Transições
                  </p>
                </div>
                <div className="p-0 m-0 h-[40px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 px-3 flex items-center lg:text-[12px] xl:text-sm text-[#fdc9b5]">
                    Animações
                  </p>
                </div>
                <div className="p-0 m-0 h-[40px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 px-3 flex items-center lg:text-[12px] xl:text-sm text-[#fdc9b5]">
                    Apresentação de Slides
                  </p>
                </div>
                <div className="p-0 m-0 h-[40px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 px-3 flex items-center lg:text-[12px] xl:text-sm text-[#fdc9b5]">
                    Gravar
                  </p>
                </div>
                <div className="p-0 m-0 h-[40px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 px-3 flex items-center lg:text-[12px] xl:text-sm text-[#fdc9b5]">
                    Revisão
                  </p>
                </div>
                <div className="p-0 m-0 h-[40px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 px-3 flex items-center lg:text-[12px] xl:text-sm text-[#fdc9b5]">
                    Exibir
                  </p>
                </div>
                <div className="p-0 m-0 h-[40px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 px-3 flex items-center lg:text-[12px] xl:text-sm text-[#fdc9b5]">
                    Ajuda
                  </p>
                </div>
                <div className="p-0 m-0 h-[40px] hover:bg-[#a92b1a] transition-all duration-500 cursor-not-allowed flex items-center">
                  <p className="m-0 px-3 flex items-center lg:text-[12px] xl:text-sm text-[#fdc9b5]">
                    Diga-me
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:h-[100px] xl:h-20 bg-gray-300 flex">
              <img src="PowerPoint_PaginaInicial.png" />
            </div>

            <div className="flex-grow bg-gray-200 flex lg:h-[60%] xl:h-[64%]">
              <div className="w-1/6 border-r-2 border-gray-300 p-4 overflow-y-auto">
                <div className="flex">
                  <p className="mr-2">1</p>
                  <div
                    className="border-2 border-[#a92b1a] w-[90%] h-[100px] hover:border-[4px]  transition-all cursor-pointer"
                    style={{
                      backgroundImage: "url('slides/Inicio.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      outline: 'none',
                    }}
                  ></div>
                </div>
                <div className="flex mt-4">
                  <p className="mr-2">2</p>
                  <div
                    className="border-2 border-[#d2d2d2] w-[90%] h-[100px] hover:border-[3px] hover:border-[#a92b1a] transition-all duration-300 cursor-not-allowed"
                    style={{
                      backgroundImage: "url('slides/Jornada.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      outline: 'none',
                    }}
                  ></div>
                </div>
                <div className="flex mt-4">
                  <p className="mr-2">3</p>
                  <div
                    className="border-2 border-[#d2d2d2] w-[90%] h-[100px] hover:border-[3px] hover:border-[#a92b1a] transition-all duration-300 cursor-not-allowed"
                    style={{
                      backgroundImage: "url('slides/App.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      outline: 'none',
                    }}
                  ></div>
                </div>
                <div className="flex mt-4">
                  <p className="mr-2">4</p>
                  <div
                    className="border-2 border-[#d2d2d2] w-[90%] h-[100px] hover:border-[3px] hover:border-[#a92b1a] transition-all duration-300 cursor-not-allowed"
                    style={{
                      backgroundImage: "url('slides/Ideia.png')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      outline: 'none',
                    }}
                  ></div>
                </div>
              </div>
              <div className="w-5/6 flex justify-center items-center">
                <div
                  className="w-4/5 h-[90%] border-2 border-gray-300"
                  style={{
                    backgroundImage: "url('slides/Inicio.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </div>
            </div>
            <div className="w-full bg-[#f3f3f3] border-t-2 border-[#d2d2d2] h-7 flex justify-between">
              <div className="flex items-center justify-center">
                <p className="text-[#262626] lg:text-[10px] xl:text-[16px] mx-3">
                  Slide 1 de 4
                </p>
                <div className="p-0 m-0 h-[100%] hover:bg-[#d2d2d2] transition-all duration-500 cursor-not-allowed flex items-center mx-2">
                  <p className="m-0 text-[#747474] px-2 flex items-center">
                    <FileEdit className="lg:h-3 xl:h-4" />
                  </p>
                </div>
                <p className="text-[#262626] lg:text-[10px] xl:text-[16px] mx-3">
                  Português (Brasil)
                </p>
                <div className="p-0 m-0 h-[100%] hover:bg-[#d2d2d2] transition-all duration-500 cursor-not-allowed flex items-center mx-2">
                  <p className="text-[#262626] lg:text-[10px] xl:text-[16px] mx-3 flex items-center">
                    <FileEdit className="lg:h-3 xl:h-4" />
                    Acessibilidade: investigar
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center m-0 p-0">
                <div className="flex items-center justify-start">
                  {[
                    'Anotacões',
                    'Exibir Configurações',
                    'Comentarios',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '70%',
                  ].map((text, index) => (
                    <div
                      key={index}
                      className="p-0 m-0 h-[39px] hover:bg-[#d2d2d2] transition-all duration-500 cursor-not-allowed flex items-center my-1"
                    >
                      <p className="m-0 text-[#747474] px-2 flex items-center lg:text-[10px] xl:text-[16px]">
                        {index === 0 && (
                          <ScrollText className="lg:h-3 xl:h-4" />
                        )}
                        {index === 1 && <FileEdit className="lg:h-3 xl:h-4" />}
                        {index === 2 && (
                          <MessageSquare className="lg:h-3 xl:h-4" />
                        )}
                        {index === 3 && (
                          <PanelRightOpen className="lg:h-3 xl:h-4" />
                        )}
                        {index === 4 && (
                          <LayoutGrid className="lg:h-3 xl:h-4" />
                        )}
                        {index === 5 && <BookOpen className="lg:h-3 xl:h-4" />}
                        {index === 6 && <Monitor className="lg:h-3 xl:h-4" />}
                        {index === 7 && <Minus className="lg:h-3 xl:h-4" />}
                        {index === 8 && <Plus className="lg:h-3 xl:h-4" />}
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Apresentacao */}
        {isPresentation ? (
          <div
            className="justify-center items-center h-[100%] pb-[45px] w-full bg-[#323131] m-0 absolute flex"
            style={styleSlide}
          >
            <div className="w-[7%] h-[25px] bg-[#1a1a1a] absolute bottom-1 right-1 rounded-[30px] flex items-center justify-evenly">
              <button
                className="w-[20px] flex justify-center items-center border-2 rounded-[50%] hover:bg-[#464444] transition-all duration-300 cursor-pointer"
                onClick={previousSlide}
              >
                <p>
                  <ChevronLeft className="h-3 text-gray-100" />
                </p>
              </button>
              <button
                className="w-[20px] flex justify-center items-center border-2 rounded-[50%] hover:bg-[#464444] transition-all duration-300 cursor-pointer"
                onClick={nextSlide}
              >
                <p>
                  <ChevronRight className="h-3 text-gray-100" />
                </p>
              </button>
              <div className="border-l-2 border-[#323131] h-full "></div>
              <button
                className="w-[20px] flex justify-center items-center border-2 rounded-[50%] hover:bg-red-600 transition-all duration-300 cursor-pointer"
                onClick={closePresentation}
              >
                <p>
                  <X className="h-3 text-gray-100" />
                </p>
              </button>
            </div>
          </div>
        ) : null}
        {/* Config */}
        {isConfig ? (
          <div className="justify-center items-center h-[100%] pb-[45px] w-full bg-[#202020] m-0 p-0">
            <div className="flex justify-between items-center m-0 p-0 absolute top-0 h-[50px] w-full">
              <div className="flex items-center justify-center cursor-pointer">
                <ArrowLeft className="h-4 text-gray-50 ms-3 me-1" />
                <p className="text-gray-50">Configs</p>
              </div>
              <div className="flex items-center m-0 p-0">
                <div
                  className="p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 px-3 cursor-pointer"
                  onClick={openConfig}
                >
                  <p className="m-0 text-gray-50">__</p>
                </div>
                <div className="p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 px-3 cursor-pointer flex items-center">
                  <p className="m-0 text-gray-50">
                    <Layers className="h-5" />
                  </p>
                </div>
                <div
                  className="p-0 m-0 h-[45px] hover:bg-red-600 transition-all duration-500 px-3 cursor-pointer flex items-center"
                  onClick={closeConfig}
                >
                  <p className="m-0 text-gray-50">
                    <X className="h-5" />
                  </p>
                </div>
              </div>
            </div>
            <PageConfig />
          </div>
        ) : null}

        {/* Explorer */}
        {isExplorer ? (
          <div className="justify-center items-center h-[100%] pb-[45px] w-full bg-[#191919] m-0 p-0">
            <div className="flex justify-between items-center m-0 p-0 top-0 h-[40px] w-full">
              <div className="flex items-center justify-between cursor-pointer bg-[#2c2c2c] text-gray-100 h-[40px] w-[200px] rounded-t-lg ms-1 px-2">
                <div className="flex items-center">
                  <Home className="h-4 text-gray-100 me-1" />
                  <p>Início</p>
                </div>
                <div className="flex items-center hover:bg-[#56585d] transition-all duration-500 rounded-sm py-1">
                  <X className="h-3 text-gray-100 cursor-pointer" />
                </div>
              </div>
              <div className="flex items-center m-0 p-0">
                <div
                  className="p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 px-3 cursor-pointer"
                  onClick={openExplorer}
                >
                  <p className="m-0 text-gray-50">__</p>
                </div>
                <div className="p-0 m-0 h-[45px] hover:bg-[#56585d] transition-all duration-500 px-3 cursor-pointer flex items-center">
                  <p className="m-0 text-gray-50">
                    <Layers className="h-5" />
                  </p>
                </div>
                <div
                  className="p-0 m-0 h-[45px] hover:bg-red-600 transition-all duration-500 px-3 cursor-pointer flex items-center"
                  onClick={closeExplorer}
                >
                  <p className="m-0 text-gray-50">
                    <X className="h-5" />
                  </p>
                </div>
              </div>
            </div>
            <Explorer />
          </div>
        ) : null}

        <div className="fixed bottom-0 bg-[#d9dfed] w-full flex justify-center items-center h-[45px] m-0 p-0">
          <div className="flex w-full m-0 p-0">
            <div className="flex w-[90%] text-center items-center justify-center">
              <div className="flex w-full justify-center ms-[10%]">
                <div
                  className={`hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-[1px] h-[37px] me-[2px] rounded-md ${
                    isWindows ? 'bg-[#eaebee]' : ''
                  }`}
                  onClick={openWindow}
                >
                  <img src="iconWindows.svg" />
                </div>
                <div
                  className={`hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-0 me-[7px] rounded-md
                  ${isSearch ? 'bg-[#eaebee] h-[37px]' : 'h-[37px]'}`}
                  onClick={openSearch}
                >
                  <img src="search.png" className="h-5 mt-1 px-[8px]" />
                </div>
                <div
                  className={`hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-0  h-[37px] me-[7px] rounded-md
                  ${
                    isExplorer
                      ? 'bg-[#eaebee] border-b-2 border-blue-600'
                      : 'h-[37px]'
                  }
                  ${
                    isIconExplorer
                      ? 'border-b-2 border-blue-600 h-[37px]'
                      : 'h-[37px]'
                  }
                  `}
                  //onClick={openExplorer}
                >
                  <img src="explorer.png" className="h-5 mt-1 px-[8px]" />
                </div>
                <div
                  className={`hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-[1px] me-[7px] rounded-md
                    ${
                      isVscode
                        ? 'bg-[#eaebee] border-b-2 border-blue-600'
                        : 'h-[37px]'
                    }
                    ${
                      isIconVscode
                        ? 'border-b-2 border-blue-600 h-[37px]'
                        : 'h-[37px]'
                    }
                  `}
                  onClick={openVscode}
                >
                  <img src="vscode.svg" />
                </div>
                <div
                  className={`hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-[1px] me-[7px] rounded-md
                    ${
                      isEdge
                        ? 'bg-[#eaebee] border-b-2 border-blue-600'
                        : 'h-[37px]'
                    }
                    ${
                      isIconEdge
                        ? 'border-b-2 border-blue-600 h-[37px]'
                        : 'h-[37px]'
                    }
                  `}
                  onClick={openEdge}
                >
                  <img src="iconEdge.svg" />
                </div>
                <div className="hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-[1px] h-[37px] me-[7px] rounded-md">
                  <img src="iconsMicrosoftStore.svg" />
                </div>
                {isIconConfig ? (
                  <div
                    className={`hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-[4px] me-[7px] rounded-md
                      ${
                        isConfig
                          ? 'bg-[#eaebee] border-b-2 border-blue-600'
                          : 'h-[37px]'
                      }
                      ${
                        isIconConfig
                          ? 'border-b-2 border-blue-600 h-[37px]'
                          : 'h-[37px]'
                      }
                    `}
                    onClick={openConfig}
                  >
                    <Settings className="h-5 mt-1" />
                  </div>
                ) : null}

                {isIconWhatsapp ? (
                  <div
                    className={`hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-0 me-[7px] rounded-md
                  ${
                    isWhatsapp
                      ? 'bg-[#eaebee] border-b-2 border-blue-600'
                      : 'h-[37px]'
                  }
                  ${
                    isIconWhatsapp
                      ? 'border-b-2 border-blue-600 h-[37px]'
                      : 'h-[37px]'
                  }
                  `}
                    onClick={openWhatsapp}
                  >
                    <img src="iconWhatsapp.svg" />
                  </div>
                ) : null}

                {isIconPowerPoint ? (
                  <div
                    className={`hover:bg-[#eaebee] flex transition-all duration-500 cursor-pointer m-0 p-[1px] me-[7px] rounded-md
                  ${
                    isPowerPoint
                      ? 'bg-[#eaebee] border-b-2 border-blue-600'
                      : 'h-[37px]'
                  }
                  ${
                    isIconPowerPoint
                      ? 'border-b-2 border-blue-600 h-[37px]'
                      : 'h-[37px]'
                  }
                  `}
                    onClick={openPowerPoint}
                  >
                    <img src="PowerPoint.png" />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex text-center items-center mx-auto">
              <div className="text-right me-1 absolute right-0 flex">
                <div className="flex justify-between flex-row items-center">
                  <div
                    className={`hover:bg-[#eaebee] flex items-center justify-center transition-all duration-500 cursor-pointer m-0 p-[4px] h-[37px] me-[2px] rounded-md
                    ${isContact ? 'bg-[#eaebee]' : 'h-[37px]'}
                    `}
                    onClick={openContact}
                  >
                    <ChevronUp className="h-5" />
                  </div>
                  <div
                    className={`hover:bg-[#eaebee] flex items-center justify-center transition-all duration-500 cursor-pointer m-0 p-[4px] h-[37px] me-[2px] rounded-md
                    ${isConfigWindows ? 'bg-[#eaebee]' : 'h-[37px]'}
                    `}
                    onClick={openConfigWindows}
                  >
                    <Wifi className="h-4" />
                    <Volume2 className="h-4 ms-1" />
                    <BatteryFull className="h-4 ms-1" />
                  </div>
                </div>
                <div
                  className={`hover:bg-[#eaebee] transition-all duration-500 cursor-pointer rounded-md px-3
                  ${isCalendar ? 'bg-[#eaebee]' : ''}
                  `}
                  onClick={openCalendar}
                >
                  <p className="text-xs">{currentTime}</p>
                  <p className="text-xs">{currentDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
