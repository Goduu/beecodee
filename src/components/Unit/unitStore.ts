import { Unit } from '@contentlayer/generated'
import { create } from 'zustand'

type CurrentLesson = number

type UnitStore = {
  currentLessonByUnitSlug: {
    [unitSlug: string]: {
      currentLessonIndex: CurrentLesson
      lastLessonIndex: number
      concluded: boolean
    }
  }
  setCurrentLesson: (unitSlug: string, lesson: number, lastLesson: number) => void
}

export const useUnitStore = create<UnitStore>((set, get) => ({
  currentLessonByUnitSlug: {},
  passLesson: (unitSlug: string) => set((state) => {
    const currentLesson = state.currentLessonByUnitSlug[unitSlug]?.currentLessonIndex ?? 0
    const lastLesson = state.currentLessonByUnitSlug[unitSlug]?.lastLessonIndex ?? 0
    const nextLesson = currentLesson + 1
    if (currentLesson < lastLesson) {
      return {
        currentLessonByUnitSlug: {
          ...state.currentLessonByUnitSlug,
          [unitSlug]: {
            currentLessonIndex: nextLesson,
            lastLessonIndex: lastLesson,
            concluded: nextLesson === lastLesson,
          },
        },
      }
    } else {
      return state
    }
  }
  ),
  setCurrentLesson: (unitSlug: string, lesson: number, lastLesson: number) => set((state: UnitStore) => {
    return {
      currentLessonByUnitSlug: {
        ...state.currentLessonByUnitSlug,
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
      currentLessonByUnitSlug: {
        ...state.currentLessonByUnitSlug,
        [unitSlug]: {
          currentLessonIndex: 0,
          lastLessonIndex: 0,
          concluded: false,
        },
      },
    }
  }),
}))

export const selectLessonByUnitSlug = (unit: Unit) => (state: UnitStore) => {
  const unitSlug = unit.slugAsParams;
  const lessonData = state.currentLessonByUnitSlug[unitSlug];
  if (!lessonData) {
    state.setCurrentLesson(unitSlug, 0, unit.lessons.length);
    return state.currentLessonByUnitSlug[unitSlug]
  }
  return lessonData
};