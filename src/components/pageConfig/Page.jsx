import Itens from './Itens';

export default function PageConfig() {
  return (
    <>
      <div className="flex justify-between m-0 p-0 mt-[40px] h-[90%] pb-[45px] w-full">
        <div className="flex flex-col w-[30%] ">
          <div className="flex items-center h-[81px]">
            <img src="logo.png" className="w-[80px] h-[80px] m-0 p-0" />
            <div className="m-0 p-0 gap-0 text-gray-50">
              <p className="m-0 p-0 gap-0 leading-none font-bold text-[15px]">
                Matheus Chiodi
                <br />
                <span className="font-medium">mchiodidev@gmail.com</span>
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
    </>
  );
}
