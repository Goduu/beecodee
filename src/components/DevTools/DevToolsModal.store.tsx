import { create as createStore } from "zustand";

type StoreState = {
    isOpen: boolean;
}

const defaultState: StoreState = {
    isOpen: false,
}

function getDefaultState(): StoreState {
    return defaultState
}


export const devToolsModalStore = createStore(getDefaultState)

export const open = () => {
    devToolsModalStore.setState({ isOpen: true })
}

export const close = () => {
    devToolsModalStore.setState({ isOpen: false })
}

