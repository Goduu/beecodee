import { Unit } from '@contentlayer/generated'
import { create } from 'zustand'

type LessonData = {
  currentLessonIndex: number
  lastLessonIndex: number
  concluded: boolean
}

type UnitStore = {
  unitDataByUnitSlug: {
    [unitSlug: string]: LessonData
  }
  currentUnit: Unit
  goToNextLesson: (unitSlug: string) => void
  setLesson: (unitSlug: string, lesson: number, lastLesson: number) => void
  setCurrentUnit: (unit: Unit) => void
  selectLessonByUnitSlug: (unit: Unit) => LessonData

}

export const useUnitStore = create<UnitStore>((set, get) => ({
  unitDataByUnitSlug: {},
  setCurrentUnit: (unit: Unit) => set((state) => {
    return {
      currentUnit: unit
    }
  }),
  goToNextLesson: (unitSlug: string) => set((state) => {
    const currentLessonIndex = state.unitDataByUnitSlug[unitSlug]?.currentLessonIndex ?? 0
    const lastLessonIndex = state.unitDataByUnitSlug[unitSlug]?.lastLessonIndex ?? 0
    const nextLessonIndex = currentLessonIndex + 1
    if (currentLessonIndex <= lastLessonIndex) {
      return {
        unitDataByUnitSlug: {
          ...state.unitDataByUnitSlug,
          [unitSlug]: {
            currentLessonIndex: nextLessonIndex,
            lastLessonIndex: lastLessonIndex,
            concluded: nextLessonIndex === lastLessonIndex,
          },
        },
      }
    } else {
      return state
    }
  }
  ),
  setLesson: (unitSlug: string, lesson: number, lastLesson: number) => set((state: UnitStore) => {
    return {
      unitDataByUnitSlug: {
        ...state.unitDataByUnitSlug,
        [unitSlug]: {
          currentLessonIndex: lesson,
          lastLessonIndex: lastLesson,
          concluded: lesson === lastLesson,
        },
      },
    }
  }),
  resetUnit: (unitSlug: string) => set((state: UnitStore) => {
    return {
      unitDataByUnitSlug: {
        ...state.unitDataByUnitSlug,
        [unitSlug]: {
          currentLessonIndex: 0,
          lastLessonIndex: 0,
          concluded: false,
        },
      },
    }
  }),
  selectLessonByUnitSlug: (unit: Unit) => {
    const unitSlug = unit.slugAsParams
    const lessonData = get().unitDataByUnitSlug[unitSlug]
    if (!lessonData) {
      set(() => {
        return {
          unitDataByUnitSlug: {
            ...get().unitDataByUnitSlug,
            [unitSlug]: {
              currentLessonIndex: 0,
              lastLessonIndex: unit.lessons.length,
              concluded: false
            }
          },
        }
      })
      return get().unitDataByUnitSlug[unitSlug]
    }
    return lessonData
  },
  currentUnit: {} as Unit
}))
