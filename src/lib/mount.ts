import { useEffect } from "react"
import { create as createStore } from "zustand"

type MountedState = {
  mounted: boolean
}

const defaultState: MountedState = {
  mounted: false,
}

const store = createStore(() => defaultState)

export function isMounted() {
  return store.getState().mounted
}

export function setMountedTrue() {
  if (!isMounted()) {
    console.debug("🔩 Setting 'mounted' to true")
    store.setState({ mounted: true })
  }
}

export function useMounted() {
  return store().mounted
}

export function useSetMountedTrue() {
  useEffect(setMountedTrue, [])
}

export function waitForAppToMount() {
  return new Promise<void>((resolve) => {
    if (isMounted()) {
      resolve()
    } else {
      const unsubscribe = store.subscribe((state) => {
        if (state.mounted) {
          unsubscribe()
          resolve()
        }
      })
    }
  })
}

export function test_resetMounted() {
  if (process.env.NODE_ENV !== "test") {
    // Since the browser only mounts the app once on page load, there is usually no reason to reset this.
    throw new Error("only available in test environment")
  }
  const replace = true
  store.setState(defaultState, replace)
}
