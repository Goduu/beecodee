import { createJSONStorage, persist, StateStorage } from "zustand/middleware"
import { waitForAppToMount } from "./mount"

export function isBrowser() {
  return typeof window === "object"
}

/**
 * An SSR-compatible wrapper of the default zustand persist middleware.
 */
const storage: StateStorage = {
  getItem: async (key: string) => {
    // if (!isBrowser()) {
    //   console.log('not browser')
    //   return null
    // }

    // You can find more information on this in docs/first-render.md.
    // await waitForAppToMount()

    return localStorage.getItem(key)
  },

  setItem: async (key: string, json: string) => {
    if (!isBrowser()) {
      return
    }

    await waitForAppToMount()

    localStorage.setItem(key, json)
  },

  removeItem: async (key: string) => {
    if (!isBrowser()) {
      return
    }

    await waitForAppToMount()

    localStorage.removeItem(key)
  },
}

export const localStoragePersist: typeof persist = (storageConfig, persistConfig) => {
  if (!persistConfig?.name) {
    throw new Error("Please provide a name")
  }
  return persist(storageConfig, {
    ...persistConfig,
    name: `beecodee-${persistConfig.name}`,
    // @ToDo Check if there is still a need for the custom storage
    storage: persistConfig.storage || createJSONStorage(() => storage),

    // This function is called when the version changes.
    // By default, reset the state to the default state.
    migrate: (persistedState, version) => {
      const oldVersion = version || 0
      const newVersion = persistConfig.version || 0

      console.debug(
        `🪄 Local storage state "${persistConfig.name}" was reset because it changed from v${oldVersion} to v${newVersion}.`,
      )

      // ´storageConfig` can be more complex but we only use it as a
      // parameterless function that returns the default state.
      const createDefaultState = storageConfig as () => any
      return createDefaultState()
    },
  })
}
