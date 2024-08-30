"use client"
import React, { FC } from "react"
import { Pollen } from "../Svgs/Pollen"
import { FaBookBookmark, SiJavascript } from "../Svgs/Icons"
import { useLocaleContext } from "../Localization/LocaleContext"
import { User } from "@/lib/auth/types"
import { CompletedLessonIdsByUnitId } from "@/lib/supabase/api/fetchUserFinishedLessons"

type ProfilePageProps = {
  userData: User | null | undefined
  userXpollen: number
  userFinishLessons: CompletedLessonIdsByUnitId | undefined
}

export const ProfilePage: FC<ProfilePageProps> = ({ userData, userXpollen, userFinishLessons }) => {
  const { locale } = useLocaleContext()

  const joinedDateMMYYY =
    (userData &&
      new Date(userData?.createdAt).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })) ||
    ""

  return (
    <div className="flex min-h-[450px] w-[450px] flex-col flex-wrap items-center justify-center gap-16 px-5 sm:w-[600px]">
      <h2 className="text-4xl font-black text-amber-500">{T[locale].title}</h2>

      <img src={userData?.avatarUrl} alt="avatar" className="h-32 rounded-full" />
      <div className="flex  flex-col items-center gap-4 rounded-3xl p-4">
        <div className="flex flex-col gap-4">
          <div className="text-xl">{userData?.name}</div>
          <div className="text-sm text-slate-900 opacity-50 dark:text-slate-50">
            {T[locale].startedOn} {joinedDateMMYYY}
          </div>
          <div className="flex items-center gap-2">
            <Pollen className="w-8" />
            {userXpollen} XPollen
          </div>
          <div className="flex items-center gap-4">
            <FaBookBookmark className="w-7" />
            {Array.from(userFinishLessons?.values() || []).reduce((total, lesson) => total + lesson.size, 0)}{" "}
            <span>{T[locale].finishedLessons}</span>
          </div>
          <SiJavascript className="w-7 py-2" />
        </div>
      </div>
    </div>
  )
}
const en = {
  title: "Profile",
  startedOn: "Started on:",
  finishedLessons: "Finished Lessons",
}
const fr: typeof en = {
  title: "Profil",
  startedOn: "Commencé le:",
  finishedLessons: "Leçons terminées",
}
const pt: typeof en = {
  title: "Perfil",
  startedOn: "Começou em:",
  finishedLessons: "Aulas concluídas",
}
const de: typeof en = {
  title: "Profil",
  startedOn: "Begonnen am:",
  finishedLessons: "Abgeschlossene Lektionen",
}
const es: typeof en = {
  title: "Perfil",
  startedOn: "Empezado en:",
  finishedLessons: "Lecciones terminadas",
}
const T = { en, fr, pt, de, es }
