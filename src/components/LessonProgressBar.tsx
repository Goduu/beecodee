"use client"
import React, { useState, useEffect, FC } from 'react';
import { unitStore } from './Unit/unitStore';
import { useStore } from 'zustand';
import { ProgressBar } from './ProgressBar';
import { redirect } from 'next/navigation';

type LessonProgressBarProps = {
    size: "small" | "medium" | "large";
}

export const LessonProgressBar: FC<LessonProgressBarProps> = ({ size = "medium" }) => {
    const [width, setWidth] = useState(50);
    const currentUnitId = useStore(unitStore, (state) => state.currentUnitId);
    const unit = useStore(unitStore, (state) => state.units[currentUnitId || '']);

    useEffect(() => {
        if (width > 100) {
            setWidth(100);
        } else if (width < 1) {
            setWidth(10);
        }
    }, [width]);

    const currentLessonData = unit?.lessons.find((lesson) => lesson.id === unit.currentLessonId)
    const activitiesLengthDivisor = currentLessonData?.activities.length || 1;
    if (!currentLessonData) return null;

    const progressWidth = currentLessonData.concluded ? 100
        : Math.min((currentLessonData.currentActivityIndex / (activitiesLengthDivisor)) * 100, 100);


    return (
        <ProgressBar progress={progressWidth} size={size} onClose={() => redirect("/path")} />
    );
};

