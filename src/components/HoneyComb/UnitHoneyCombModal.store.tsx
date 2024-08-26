import { Unit } from "@contentlayer/generated"
import { create as createStore } from "zustand"

type StoreState = {
  unit?: Unit
  isOpen: boolean
}

const defaultState: StoreState = {
  isOpen: false,
}

function getDefaultState(): StoreState {
  return defaultState
}

export const unitHoneyCombModalStore = createStore(getDefaultState)

export const open = (unit: Unit) => {
  unitHoneyCombModalStore.setState({ isOpen: true, unit })
}

export const close = () => {
  unitHoneyCombModalStore.setState({ isOpen: false })
}
