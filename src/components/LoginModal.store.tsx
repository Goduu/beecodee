import { create as createStore } from "zustand"

export type FirsLoginData = {
  course?: string
  language: string
}

type StoreState = {
  isOpen: boolean
  firstLoginData?: FirsLoginData
}

const defaultState: StoreState = {
  isOpen: false,
}

function getDefaultState(): StoreState {
  return defaultState
}

export const loginModalStore = createStore(getDefaultState)

export const open = (): void => {
  loginModalStore.setState({ isOpen: true })
}

export const close = () => {
  loginModalStore.setState({ isOpen: false })
}

export const openFirstLogin = (firstLoginData: FirsLoginData) => {
  loginModalStore.setState({ isOpen: true, firstLoginData })
}
