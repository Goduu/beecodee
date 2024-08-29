import { BeeLocale } from "@/components/Localization/localization"

export type User = {
  id: string
  name: string
  email?: string
  avatarUrl: string
  createdAt: string
  userName: string
  currentCourse?: string
  currentLanguage?: BeeLocale
  currentTheme?: string
}
