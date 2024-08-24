"use client"
import React from 'react';
import { BeeHead, GiHoneypot, IoMdFlower, IoMdLogOut } from './Svgs/Icons';
import { BeecodeeIcon } from './Svgs/BeecodeeIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from '@/lib/auth';
import { LOCALES } from './Localization/localization';

const HIDDEN_PATHS = ['/lessons', '/getStarted']

export const Sidebar = () => {
  const pathname = usePathname()
  const isHomePathname = LOCALES.some(
    (locale) => pathname === `/${locale}`
  )

  const isHidden = isHomePathname || HIDDEN_PATHS.find(path => pathname.includes(path))

  return (
    <div className={`inset-x-0 fixed z-40 ${isHidden && "hidden scale-0"}
      bottom-0 w-full
      sm:left-0 sm:t-0 sm:h-screen sm:w-fit`}>
      <aside
        className="flex sm:flex-col items-center bg-white dark:bg-gray-900 shadow sm:h-full py-1 sm:pb-0 sm:pt-10">
        <div className="sm:h-16 flex items-center sm:w-full justify-center sm:py-10 pl-2 sm:pl-0">
          <Link href='/'>
            <BeecodeeIcon className='w-14 md:hidden' />
            <span className='text-amber-500 font-black text-3xl hidden md:block'>
              beecodee
            </span>
          </Link>
        </div>
        <ul className='flex w-full sm:flex-col justify-evenly sm:justify-center'>
          {menuOptions.map((option, index) => (
            <li key={index} className={`hover:bg-gray-500 rounded-lg p-1 px-1 sm:px-6 ${pathname === option.link && "bg-gray-500"}`}>
              <Link
                href={option.link}
                className={`h-16 flex gap-2 justify-start items-center w-full `}>
                {option.icon}
                <span className='text-xs font-black hidden md:block'>
                  {option.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:mt-auto sm:mb-6 sm:h-16 sm:w-full items-center pr-2 sm:pr-0">
          <button
            onClick={() => signOut()}
            className="h-16 sm:mx-auto flex gap-2 justify-center items-center rounded-lg 
				              sm:w-full hover:bg-red-900 focus:outline-none">
            <IoMdLogOut className='w-12' />
            <span className='text-xs font-black hidden md:block'>
              LOGOUT
            </span>
          </button>
        </div>

      </aside>
    </div>
  );
};

const menuOptions = [
  { icon: <IoMdFlower className='w-10' />, label: 'PATH', link: '/path' },
  { icon: <GiHoneypot className='w-10' />, label: 'HONEYCOMB', link: '/path/honeycomb' },
  { icon: <BeeHead className='w-10' />, label: 'PROFILE', link: '/profile' },

]