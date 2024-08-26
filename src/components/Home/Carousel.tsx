import React from "react"
import {
  FaGithub,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiPython,
  SiReact,
  SiTypescript,
  FaTools,
} from "@/components/Svgs/Icons"
import { TooltipHover } from "@/components/TooltipHover"

export const Carousel = () => {
  const icons = [
    {
      name: "Javascript",
      icon: <SiJavascript className="w-10 text-[#f7df1e] sm:w-14" />,
      released: true,
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="w-10 sm:w-14" />,
      released: false,
    },
    {
      name: "Typescript",
      icon: <SiTypescript className="w-10 sm:w-14" />,
      released: false,
    },
    {
      name: "Css3",
      icon: <SiCss3 className="w-10 sm:w-14" />,
      released: false,
    },
    {
      name: "React",
      icon: <SiReact className="w-10 sm:w-14" />,
      released: false,
    },
    {
      name: "Python",
      icon: <SiPython className="w-10 sm:w-14" />,
      released: false,
    },
    {
      name: "Github",
      icon: <FaGithub className="w-10 sm:w-14" />,
      released: false,
    },
  ]

  return (
    <div className="relative mx-auto hidden w-screen px-2 md:block">
      <div className="flex items-center justify-center">
        {/* Carousel Items */}
        <div className="flex gap-2 overflow-hidden sm:gap-4">
          {icons.map((item, index) => (
            <div key={index} className="relative w-40 transition-transform delay-100 duration-1000 ease-in-out sm:w-52">
              <div className="flex flex-shrink-0 items-center justify-center gap-1 font-bold sm:gap-2 sm:text-lg">
                {item.icon} {item.name}
              </div>
              {!item.released && (
                <div className="absolute right-0 top-0 overflow-visible">
                  <TooltipHover text="Coming soon">
                    <FaTools className="w-4" />
                  </TooltipHover>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
