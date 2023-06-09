import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

export default function Contact() {

  return (
    <>
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
    </>
  );
}
