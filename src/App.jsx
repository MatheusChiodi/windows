import {
  File,
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  Battery,
  BatteryCharging,
  BatteryFull,
  Bluetooth,
  Cast,
  ChevronRight,
  ChevronUp,
  Copy,
  Github,
  Home,
  Layers,
  Layout,
  Linkedin,
  LockIcon,
  Moon,
  Pencil,
  PersonStanding,
  Plane,
  Plus,
  Power,
  RotateCcw,
  RotateCw,
  Search,
  Settings,
  ShieldAlert,
  Star,
  SunMedium,
  Volume2,
  Wifi,
  X,
  MoreHorizontal,
  ChevronDown,
  ArrowUp,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { getDaysInMonth, set } from 'date-fns';
import Itens from './components/pageConfig/Itens';

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
  const [isSearch, setSearch] = useState(false);
  const [isExplorer, setExplorer] = useState(false);

  const [isIconEdge, setIconEdge] = useState(false);
  const [isIconConfig, setIconConfig] = useState(false);
  const [isIconVscode, setIconVscode] = useState(false);

  const [isPage1, setPage1] = useState(true);
  const [isPage2, setPage2] = useState(false);
  const [isPage3, setPage3] = useState(false);
  const [isPage4, setPage4] = useState(false);

  const [isUrl1, setUrl1] = useState(true);
  const [isUrl2, setUrl2] = useState(false);
  const [isUrl3, setUrl3] = useState(false);
  const [isUrl4, setUrl4] = useState(false);

  const [isVscodeExplorer, setVscodeExplorer] = useState(false);
  const [isVscodeSearch, setVscodeSearch] = useState(false);
  const [isVscodeExtensions, setVscodeExtensions] = useState(false);

  //Pegar calendario -----------------------------------------------------------------------------------------------------
  const now = new Date();
  // mes inicia no 0
  const month = String(now.getMonth());
  const year = now.getFullYear();

  const daysInMonth = getDaysInMonth(new Date(year, month));

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const TodayDay = String(now.getDate()).padStart(2, '0');

  var nameMonth = '';
  if (month == 0) {
    nameMonth = 'January';
  } else if (month == 1) {
    nameMonth = 'February';
  } else if (month == 2) {
    nameMonth = 'March';
  } else if (month == 3) {
    nameMonth = 'April';
  } else if (month == 4) {
    nameMonth = 'May';
  } else if (month == 5) {
    nameMonth = 'June';
  } else if (month == 6) {
    nameMonth = 'July';
  } else if (month == 7) {
    nameMonth = 'August';
  } else if (month == 8) {
    nameMonth = 'September';
  } else if (month == 9) {
    nameMonth = 'October';
  } else if (month == 10) {
    nameMonth = 'November';
  } else if (month == 11) {
    nameMonth = 'December';
  }

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
      setCalendar(false);
      setContact(false);
      setWindows(false);
      setConfigPower(false);
      setConfigWindows(false);
      setConfig(false);
      setSearch(false);
      setEdge(false);
      setVscode(false);
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
    }
  }

  //-- Função para fechar o Vscode
  function closeVscode() {
    if (isVscode) {
      setVscode(false);
      setIconVscode(false);
    }
  }

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
              {isConfigPower ? (
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
              ) : null}
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
                    />
                  </div>
                  <div className="flex items-center mt-3">
                    <Volume2 className="h-5 text-[#6e717ac0] w-[70px]" />
                    <input
                      type="range"
                      className="w-[200px] h-[6px]"
                      min="0"
                      max="100"
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
        {isCalendar ? (
          <div className="absolute justify-center items-center h-[100%] pb-[48px] pe-2 pt-[17%] w-full">
            <div className="h-[297px] w-[300px] ms-auto bottom-0 rounded-t-md">
              <div className="bg-[#dbe0f1f8] w-[300px] absolute bottom-[48px] rounded-md border-t">
                <div className="grid grid-cols-7 p-2">
                  <div className="flex justify-between items-center w-[280px] mx-auto px-3 text-sm">
                    <p>{nameMonth}</p>
                    <p>{year}</p>
                  </div>
                </div>
                <div className="grid grid-cols-7 p-2">
                  {days.map((day, index) => (
                    <div
                      key={index}
                      className={`flex justify-center items-center h-[30px] border-[1px] hover:bg-[#e1e5f3] transition-all duration-500 cursor-pointer
                    ${day == TodayDay ? 'bg-[#e7eaf2]' : ''}
                    `}
                    >
                      <p className="text-xs text-[#6e717a]">{day}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Contato */}
        {isContact ? (
          <div className="absolute justify-center items-center h-[100%] pb-[48px] pe-2 pt-[17%] w-full">
            <div className="h-[297px] w-[300px] ms-auto bottom-0 rounded-t-md">
              <div className="bg-[#dbe0f1f8] w-[120px] absolute bottom-[48px] ms-[20px] rounded-md border-t py-1">
                <div className="flex justify-around items-center">
                  <a
                    href="https://github.com/MatheusChiodi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 text-[#6e717a] hover:text-[#000000] transition-all duration-500 cursor-pointer" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/matheus-chiodi-b484581aa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 text-[#6e717a] hover:text-[#000000] transition-all duration-500 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}

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
                <div className="w-[30%] bg-[#21222c] text-gray-100 px-2 p-1 text-sm flex flex-col items-center">
                  <div className="w-full flex items-center justify-between">
                    <p className="w-full text-left">EXPLORER</p>
                    <MoreHorizontal className="h-4 text-gray-100" />
                  </div>
                </div>
              ) : null}

              {/* Search */}
              {isVscodeSearch ? (
                <div className="w-[30%] bg-[#21222c] text-gray-100 px-2 p-1 text-sm flex flex-col items-center">
                  <div className="w-full flex items-center justify-between">
                    <p className="w-full text-left">SEARCH</p>
                    <MoreHorizontal className="h-4 text-gray-100" />
                  </div>
                </div>
              ) : null}

              {/* Extensions */}
              {isVscodeExtensions ? (
                <div className="w-[30%] bg-[#21222c] text-gray-100 px-2 p-1 text-sm flex flex-col items-center">
                  <div className="w-full flex items-center justify-between">
                    <p className="w-full text-left">EXTENSIONS</p>
                    <MoreHorizontal className="h-4 text-gray-100" />
                  </div>
                </div>
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
            <div className="flex justify-between m-0 p-0 mt-[40px] h-[90%] pb-[45px] w-full">
              <div className="flex flex-col w-[30%] ">
                <div className="flex items-center h-[81px]">
                  <img src="logo.png" className="w-[80px] h-[80px] m-0 p-0" />
                  <div className="m-0 p-0 gap-0 text-gray-50">
                    <p className="m-0 p-0 gap-0 leading-none font-bold text-[15px]">
                      Matheus Chiodi
                      <br />
                      <span className="font-medium">
                        matheuschiodi20@gmail.com
                      </span>
                    </p>
                  </div>
                </div>
                <div className="my-3 px-2 pe-5">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-[#2d2d2d] h-[40px] px-4 rounded-sm text-gray-50 border-b border-gray-50 text-sm"
                  />
                </div>
                <div className="text-gray-50 px-3 text-xs">
                  <div className="flex items-center gap-2 mb-[2px] me-2 bg-[#2d2d2d] py-1 rounded-sm transition-all duration-500 cursor-pointer">
                    <div className="bg-blue-500 h-3 w-[2px] rounded-md"></div>
                    <img
                      src="config_sistema.png"
                      className="w-[20px] h-[20px] rounded-full"
                    />
                    System
                  </div>
                  <div className="flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer">
                    <img
                      src="config_bluetooth.png"
                      className="w-[20px] h-[20px] rounded-full"
                    />
                    Bluetooth and devices
                  </div>
                  <div className="flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer">
                    <img
                      src="config_wifi.png"
                      className="w-[20px] h-[20px] rounded-full"
                    />
                    Network and Internet
                  </div>
                  <div className="flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer">
                    <img
                      src="config_personalization.png"
                      className="w-[20px] h-[20px] rounded-full"
                    />
                    Personalization
                  </div>
                  <div className="flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer">
                    <img
                      src="config_apps.png"
                      className="w-[20px] h-[20px] rounded-full"
                    />
                    Apps
                  </div>
                  <div className="flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer">
                    <img
                      src="config_accounts.png"
                      className="w-[20px] h-[20px] rounded-full"
                    />
                    Accounts
                  </div>
                  <div className="flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer">
                    <img
                      src="config_time.png"
                      className="w-[20px] h-[20px] rounded-full"
                    />
                    Time and language
                  </div>
                  <div className="flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer">
                    <img
                      src="config_games.png"
                      className="w-[20px] h-[20px] rounded-full"
                    />
                    Games
                  </div>
                  <div className="flex items-center gap-2 mb-1 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer">
                    <img
                      src="config_privacy.png"
                      className="w-[20px] h-[20px] rounded-full"
                    />
                    Privacy and security
                  </div>
                  <div className="flex items-center gap-2 me-2 hover:bg-[#2d2d2d] py-1 ps-1 rounded-sm transition-all duration-500 cursor-pointer">
                    <img
                      src="config_update.png"
                      className="w-[20px] h-[20px] rounded-full"
                    />
                    Windows Update
                  </div>
                </div>
              </div>
              <div className="w-[70%]">
                <div className="m-0 p-0 gap-0 text-gray-50 h-[81px] flex items-center justify-start">
                  <p className="m-0 p-0 gap-0 leading-none font-bold text-xl mt-[-20px]">
                    System
                  </p>
                </div>
                <div className="m-0 p-0 gap-0 h-[92%] overflow-y-scroll">
                  <Itens />
                </div>
              </div>
            </div>
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
                  `}
                  onClick={openExplorer}
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
                    <Settings className="h-5" />
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
