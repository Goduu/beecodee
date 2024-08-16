"use client"
import React, { FC } from 'react';
import { unitStore } from './Unit/unitStore';
import { useStore } from 'zustand';
import { ProgressBar } from './ProgressBar';
import { redirect } from 'next/navigation';

type LessonProgressBarProps = {
    size: "small" | "medium" | "large";
}

export const LessonProgressBar: FC<LessonProgressBarProps> = ({ size = "medium" }) => {
    const toDoActivitiesSize = useStore(unitStore, (state) => state.onGoingLessonToDoActivities).size;
    const doneActivitiesSize = useStore(unitStore, (state) => state.onGoingLessonDoneActivities).size;

    const progressWidth = ((doneActivitiesSize || 0) / ((toDoActivitiesSize  + doneActivitiesSize)|| 1)) * 100;


    return (
        <ProgressBar progress={progressWidth} size={size} onClose={() => redirect("/path")} />
    );
};

