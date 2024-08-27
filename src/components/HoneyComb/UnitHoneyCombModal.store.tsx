import { Unit, UnitContent } from "@contentlayer/generated"
import { create as createStore } from "zustand"

type StoreState = {
  unit?: Unit
  unitContent?: UnitContent
  isOpen: boolean
}

const defaultState: StoreState = {
  isOpen: false,
}

function getDefaultState(): StoreState {
  return defaultState
}

export const unitHoneyCombModalStore = createStore(getDefaultState)

export const open = (unitContent: UnitContent | undefined, unit: Unit) => {
  unitHoneyCombModalStore.setState({ isOpen: true, unitContent, unit })
}

export const close = () => {
  unitHoneyCombModalStore.setState({ isOpen: false })
}
