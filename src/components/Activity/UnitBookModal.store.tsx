import { Unit } from "@contentlayer/generated";
import { create as createStore } from "zustand";

type StoreState = {
    unit?: Unit;
    isOpen: boolean;
}

const defaultState: StoreState = {
    isOpen: false,
}

function getDefaultState(): StoreState {
    return defaultState
}


export const unitBookModalStore = createStore(getDefaultState)

export const open = (unit: Unit) => {
    unitBookModalStore.setState({ isOpen: true, unit })
}

export const close = () => {
    unitBookModalStore.setState({ isOpen: false })
}

