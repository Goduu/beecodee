import { Activity, allActivities, Lesson, Unit } from "@contentlayer/generated";
import { create as createStore } from "zustand";
import { localStoragePersist } from "../../lib/localStoragePersist";

type StoreActivity = {
  id: string;
}

type StoreLesson = {
  activities: StoreActivity[];
  currentActivityIndex: number;
  concluded: boolean;
}

type StoreUnit = {
  currentLessonIndex: number;
  lessons: StoreLesson[];
  concluded: boolean;
}

type UnitsState = {
  [unitId: string]: StoreUnit;
}

// Zustand store types
type StoreState = {
  units: UnitsState;
  currentUnitId?: string | null;
  currentActivityData?: Activity | null;
}

type StoreActions = {
  increaseNumber: (unitId: string) => void;
}

const defaultState: StoreState = {
  units: {},
}

function getDefaultState(): StoreState {
  return defaultState
}

export const unitStore = createStore(localStoragePersist(getDefaultState, { name: "unit" }))

export const initializeUnit = (unitId: string, lessons: Lesson[]) => {
  unitStore.setState((state) => {
    if (!state.units[unitId]) {
      state.units[unitId] = {
        currentLessonIndex: 0,
        concluded: false,
        lessons: lessons.map<StoreLesson>((lesson) => ({
          activities: lesson.activities.map<StoreActivity>((activity) => ({
            id: activity,
          })),
          currentActivityIndex: 0,
          concluded: false,
        })),
      };
      state.currentActivityData = allActivities.find((activity) => activity.slugAsParams === lessons[0].activities[0])
    }
    return state;
  })

}

export const setCurrentUnitId = (unit: Unit) => {
  unitStore.setState((state) => {
    return {
      currentUnitId: unit.slugAsParams
    }
  })
}

export const resetLessonProgress = (unit: Unit) => {
  unitStore.setState((state) => {
    const currentLessonIndex = state.units[unit.slugAsParams].currentLessonIndex
    const currentLesson = state.units[unit.slugAsParams].lessons[currentLessonIndex]
    const currentActivityId = currentLesson.activities[0].id

    return {
      currentUnitId: unit.slugAsParams,
      currentActivityData: allActivities.find((activity) => activity.slugAsParams === currentActivityId),
      units: {
        ...state.units,
        [unit.slugAsParams]: {
          ...state.units[unit.slugAsParams],
          lessons: state.units[unit.slugAsParams].lessons.map((lesson) => {
            if(lesson === currentLesson) {
              return {
                ...lesson,
                currentActivityIndex: 0,
                concluded: false
              }
            }
            return lesson
          })
        }
      }
    }
  })
}


// @Attention point of rerendering
export const getCurrentLessonData = () => {
  const currentUnitId = unitStore.getState().currentUnitId
  if (!currentUnitId) return null

  const currentUnit = unitStore.getState().units[currentUnitId]
  if (!currentUnit) return null

  const currentLesson = currentUnit.lessons[currentUnit.currentLessonIndex]
  return currentLesson
}

export const goToNextActivity = () => {
  const currentUnitId = unitStore.getState().currentUnitId
  if (!currentUnitId) return

  const units = unitStore.getState().units
  if (!currentUnitId) return null

  const currentUnit = units[currentUnitId]

  if (!currentUnit) return null

  const currentLesson = currentUnit.lessons[currentUnit.currentLessonIndex]

  if (!currentLesson) return

  // If it's the last activity, conclude the lesson 
  if (currentLesson.currentActivityIndex === currentLesson.activities.length - 1) {
    currentLesson.concluded = true
    currentLesson.currentActivityIndex = 0
  } else {
    currentLesson.currentActivityIndex += 1
  }

  const activityData = allActivities.find((activity) => {
    const activitySlug = currentUnit.lessons[currentUnit.currentLessonIndex].activities[currentLesson.currentActivityIndex].id
    return (
      activity.slugAsParams === activitySlug
    )
  })

  unitStore.setState((state) => {
    return {
      currentActivityData: activityData,
      units: {
        ...state.units,
        [currentUnitId]: {
          ...currentUnit,
          lessons: state.units[currentUnitId].lessons.map((lesson, index) => {
            if (index === state.units[currentUnitId].currentLessonIndex) {
              return currentLesson
            }
            return lesson
          })
        }

      }
    }
  })

}

export const goToNextLesson = () => {
  const currentUnitId = unitStore.getState().currentUnitId
  if (!currentUnitId) return

  const units = unitStore.getState().units
  if (!currentUnitId) return null

  const currentUnit = units[currentUnitId]

  if (!currentUnit) return null

  if (currentUnit.currentLessonIndex === currentUnit.lessons.length - 1) {
    currentUnit.concluded = true
  } else {
    currentUnit.currentLessonIndex += 1
  }

  unitStore.setState((state) => {
    return {
      units: {
        ...state.units,
        [currentUnitId]: currentUnit
      }
    }
  })

}
