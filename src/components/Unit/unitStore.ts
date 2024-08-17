import { allLessons, Unit } from "@contentlayer/generated";
import { create as createStore } from "zustand";
import { localStoragePersist } from "../../lib/localStoragePersist";
import { StorageValue } from "zustand/middleware";

// Zustand store types
type StoreState = {
  onGoingUnitSlug?: string;
  onGoingLessonSlug?: string;
  onGoingActivitySlug?: string;
  completedLessons: Set<string>
  onGoingLessonToDoActivities: Set<string>
  onGoingLessonDoneActivities: Set<string>
}

const defaultState: StoreState = {
  completedLessons: new Set<string>([]),
  onGoingLessonToDoActivities: new Set<string>([]),
  onGoingLessonDoneActivities: new Set<string>([]),
}

function getDefaultState(): StoreState {
  return defaultState
}

export const unitStore = createStore(localStoragePersist(getDefaultState,
  {
    name: "unit",
    storage: {
      getItem: (key) => {
        const item = localStorage.getItem(key)
        if (!item) return null;
        const { state } = JSON.parse(item);
        return {
          state: {
            ...state,
            completedLessons: new Set(state.completedLessons),
            onGoingLessonToDoActivities: new Set(state.onGoingLessonToDoActivities),
            onGoingLessonDoneActivities: new Set(state.onGoingLessonDoneActivities)
          },
        }
      },
      setItem: (key, newValue: StorageValue<StoreState>) => {
        const stringifiedObject = JSON.stringify({
          state: {
            ...newValue.state,
            completedLessons: Array.from(newValue.state.completedLessons),
            onGoingLessonToDoActivities: Array.from(newValue.state.onGoingLessonToDoActivities),
            onGoingLessonDoneActivities: Array.from(newValue.state.onGoingLessonDoneActivities),
          },
        })
        localStorage.setItem(key, stringifiedObject)
      },
      removeItem: (key) => localStorage.removeItem(key),
    }
  }))

export const startLesson = (unit: Unit) => {

  unitStore.setState((state) => {
    const completedLessons = new Set(state.completedLessons)
    const unitLessonSlugs = unit.lessonRefs.map(l => l.lesson)
    const unitUncompletedLessons = allLessons
      .filter((lesson) => unitLessonSlugs.includes(lesson.slugAsParams) && !completedLessons.has(lesson.slugAsParams))
      .sort((a, b) => unit.lessonRefs.find(l => l.lesson === a.slugAsParams)!.id - unit.lessonRefs.find(l => l.lesson === b.slugAsParams)!.id)
    const nextLesson = unitUncompletedLessons[0]

    return {
      ...state,
      onGoingUnitSlug: unit.slugAsParams,
      onGoingLessonSlug: nextLesson?.slugAsParams,
      onGoingActivitySlug: nextLesson?.activityRefs[0].activity,
      onGoingLessonToDoActivities: new Set(nextLesson?.activityRefs.map(a => a.activity) || []),
      onGoingLessonDoneActivities: new Set(),
    }
  })

}

export const goToNextActivity = () => {

  unitStore.setState((state) => {
    const onGoingActivitySlug = state.onGoingActivitySlug
    const onGoingLessonToDoActivity = new Set(state.onGoingLessonToDoActivities)
    if (!onGoingActivitySlug) return state
    onGoingActivitySlug && onGoingLessonToDoActivity.delete(onGoingActivitySlug)
    const onGoingLessonDoneActivities = new Set(state.onGoingLessonDoneActivities)
    onGoingLessonDoneActivities.add(onGoingActivitySlug)

    return {
      onGoingLessonToDoActivities: onGoingLessonToDoActivity,
      onGoingActivitySlug: onGoingLessonToDoActivity.values().next().value,
      onGoingLessonDoneActivities: onGoingLessonDoneActivities
    }
  })

}

export const finishLesson = () => {

  unitStore.setState((state) => {
    const onGoingUnitSlug = state.onGoingUnitSlug
    const onGoingLessonSlug = state.onGoingLessonSlug
    if (!onGoingUnitSlug || !onGoingLessonSlug) return state

    const completedLessons = new Set(state.completedLessons)
    completedLessons.add(onGoingLessonSlug)

    return {
      completedLessons: completedLessons,
    }
  })
}

export const initiateCompletedUnitLessons = (completedLessons: Set<string>) => {
  unitStore.setState((state) => {
    const completedLessonsSet = new Set(state.completedLessons)

    completedLessons.forEach((completedLessonSlug) => {
      completedLessonsSet.add(completedLessonSlug)
    })

    return { completedLessons: completedLessonsSet }
  }
  )
}