import { create as createStore } from "zustand"

type StoreState = {
  isOpen: boolean
}

const defaultState: StoreState = {
  isOpen: false,
}

function getDefaultState(): StoreState {
  return defaultState
}

export const loginModalStore = createStore(getDefaultState)

export const open = () => {
  loginModalStore.setState({ isOpen: true })
}

export const close = () => {
  loginModalStore.setState({ isOpen: false })
}
