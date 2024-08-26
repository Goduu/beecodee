import { userMetadata } from "@/lib/auth"
import { fetchUserXpollen } from "@/lib/supabase/api/fetchUserXpollen"
import React from "react"
import { FaGithub, SiJavascript } from "./Svgs/Icons"
import { Pollen } from "./Svgs/Pollen"

export const UserCard = async () => {
  const userData = await userMetadata()
  const userXpollen = await fetchUserXpollen()

  return (
    <div className="group relative flex text-sm font-semibold after:shadow-lg after:shadow-black">
      <div className="flex items-center gap-2">
        <div className="flex w-60 items-center gap-2 rounded-xl border p-2 transition-all delay-100 duration-1000 group-hover:w-80">
          <img className="absolute -left-16 w-28 rounded-full" src={userData?.avatarUrl} alt="User avatar" />
          <div className="ml-16 flex flex-col items-center md:items-start">
            <p className="w-4/5 truncate">{userData?.name}</p>
            <p className="flex items-center gap-2 text-lg font-bold">
              {" "}
              <Pollen className="w-8" />
              {userXpollen}
            </p>
            <SiJavascript className="w-8" />
          </div>
        </div>
        <p className="absolute right-2 opacity-0 transition-all delay-100 duration-700 hover:scale-125 group-hover:right-3 group-hover:opacity-100">
          <a
            href={`https://github.com/${userData?.userName}`}
            target="_blank"
            className="transform transition-transform"
          >
            <span className="sr-only">Github</span>
            <FaGithub className="w-7" />
          </a>
        </p>
      </div>
    </div>
  )
}
