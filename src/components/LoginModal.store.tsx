import { create as createStore } from "zustand"
import { GetStartedAnswer } from "./GetStarted/types"

type StoreState = {
  isOpen: boolean
  getStartedAnswers?: GetStartedAnswer[]
}

const defaultState: StoreState = {
  isOpen: false,
}

function getDefaultState(): StoreState {
  return defaultState
}

export const loginModalStore = createStore(getDefaultState)

export const open = ({ getStartedAnswers }: { getStartedAnswers?: GetStartedAnswer[] }): void => {
  loginModalStore.setState({ isOpen: true, getStartedAnswers })
}

export const close = () => {
  loginModalStore.setState({ isOpen: false })
}
