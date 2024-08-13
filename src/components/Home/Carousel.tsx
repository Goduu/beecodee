import React from 'react';
import { FaGithub, SiJavascript, SiCss3, SiHtml5, SiPython, SiReact, SiTypescript, FaTools } from '@/components/Icons';
import { TooltipHover } from '@/components/TooltipHover';

export const Carousel = () => {
    const icons = [
        { name: "Javascript", icon: <SiJavascript className='w-10 sm:w-14 text-[#f7df1e]' />, released: true },
        { name: "HTML5", icon: <SiHtml5 className='w-10 sm:w-14' />, released: false },
        { name: "Typescript", icon: <SiTypescript className='w-10 sm:w-14' />, released: false },
        { name: "Css3", icon: <SiCss3 className='w-10 sm:w-14' />, released: false },
        { name: "React", icon: <SiReact className='w-10 sm:w-14' />, released: false },
        { name: "Python", icon: <SiPython className='w-10 sm:w-14' />, released: false },
        { name: "Github", icon: <FaGithub className='w-10 sm:w-14' />, released: false },
    ];

    return (
        <div className="w-screen mx-auto relative hidden md:block px-2">
            <div className="flex justify-center items-center">
                {/* Carousel Items */}
                <div className="flex overflow-hidden gap-2 sm:gap-4">
                    {icons.map((item, index) => (
                        <div key={index} className="relative transition-transform duration-1000 delay-100 ease-in-out w-40 sm:w-52">
                            <div className='flex-shrink-0 flex justify-center items-center gap-1 sm:gap-2 font-bold sm:text-lg'>
                                {item.icon} {item.name}
                            </div>
                            {!item.released &&
                                <div className='absolute top-0 right-0 overflow-visible'>
                                    <TooltipHover text='Coming soon'>
                                        <FaTools className='w-4' />
                                    </TooltipHover>
                                </div>
                            }
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};
