import {
  CheckCircle2,
  ClipboardPaste,
  Info,
  MonitorUp,
  PictureInPicture2,
  ServerCog,
  Wrench,
} from 'lucide-react';
import {
  Bell,
  ChevronRight,
  Copy,
  Focus,
  Monitor,
  Power,
  Server,
  Share,
  Volume2,
} from 'lucide-react';

export default function Itens() {
  return (
    <>
      <div className="flex items-center">
        <div className="flex items-center">
          <img
            src="background.jpg"
            className=" aspect-video w-[150px] m-0 p-0 rounded-lg"
          />
          <div className="text-gray-50 ms-2">
            <p className="font-bold">Pc Windowns</p>
            <p className="font-medium">Alienware m15 R6</p>
          </div>
        </div>
        <div className="flex items-center mx-auto hover:bg-[#323232] transition-all duration-500 cursor-pointer h-[60px] px-2 rounded-md">
          <img src="config_microsoft_365.png" className="me-2" />
          <div className="text-gray-50">
            <p className="font-bold">Microsoft 365</p>
          </div>
        </div>
        <div className="flex items-center mx-auto hover:bg-[#323232] transition-all duration-500 cursor-pointer h-[60px] px-2 rounded-md">
          <img src="config_update.png" className="me-2" />
          <div className="text-gray-50">
            <p className="font-bold">Windows Update</p>
          </div>
        </div>
      </div>
      <div className="flex items-center me-3 mt-5 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <Monitor className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">Display</p>
            <p className="m-0 p-0 text-sm gap-0">
              Displays, brightness, night shift, and True Tone
            </p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <Volume2 className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">Sound</p>
            <p className="m-0 p-0 text-sm gap-0">
              Volume levels, output, input, sound devices
            </p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <Bell className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">Notifications</p>
            <p className="m-0 p-0 text-sm gap-0">
              App and system alerts, do not disturb
            </p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <Focus className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">Focus</p>
            <p className="m-0 p-0 text-sm gap-0">Reduce distractions</p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <Power className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">
              Energy and battery
            </p>
            <p className="m-0 p-0 text-sm gap-0">
              Sleep, battery usage, battery saver
            </p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <Server className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">Storage</p>
            <p className="m-0 p-0 text-sm gap-0">
              Storage space, drives, configuration rules
            </p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <Share className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">
              Proximity sharing
            </p>
            <p className="m-0 p-0 text-sm gap-0">
              Discoverability, location of received files
            </p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <Copy className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">Multitasking</p>
            <p className="m-0 p-0 text-sm gap-0">
              Adjust windows, desktops, task switching
            </p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <CheckCircle2 className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">Activation</p>
            <p className="m-0 p-0 text-sm gap-0">
              Activation status, subscriptions, product key
            </p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <Wrench className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">
              Problems solution
            </p>
            <p className="m-0 p-0 text-sm gap-0">
              Recommended troubleshooting, preferences, history
            </p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <ServerCog className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">Recovery</p>
            <p className="m-0 p-0 text-sm gap-0">
              Reset, Advanced Startup, Go Back
            </p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <PictureInPicture2 className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">
              Projection to This Computer
            </p>
            <p className="m-0 p-0 text-sm gap-0">
              Permissions, Pairing PIN, Discoverability
            </p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <MonitorUp className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">Remote Desktop</p>
            <p className="m-0 p-0 text-sm gap-0">
              Remote Desktop Users, Connection Permissions
            </p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <ClipboardPaste className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">Clipboard Cut</p>
            <p className="m-0 p-0 text-sm gap-0">Copy History, Sync, Clear</p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
      <div className="flex items-center me-3 mt-3 px-3 pb-2 rounded-lg text-gray-50 bg-[#2b2b2b] hover:bg-[#323232] transition-all duration-500 cursor-pointer">
        <div className="flex items-center">
          <Info className="h-[25px] w-[25px] me-3" />
          <div className="m-0 p-0 gap-0">
            <p className=" font-medium text-lg m-0 p-0 gap-0">About</p>
            <p className="m-0 p-0 text-sm gap-0">
              Device Specifications, Rename Computer, Windows Specifications
            </p>
          </div>
        </div>
        <ChevronRight className="h-[25px] w-[25px] ms-auto mt-2" />
      </div>
    </>
  );
}
