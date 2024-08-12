"use client"
import React, { useState, useEffect, FC } from 'react';
import { IoClose } from './Icons';
import Link from 'next/link';
import { unitStore } from './Unit/unitStore';
import { useStore } from 'zustand';

type ProgressBarProps = {
    size: "small" | "medium" | "large";
}
export const ProgressBar: FC<ProgressBarProps> = ({ size = "medium" }) => {
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
    // const currentLessonStoreData = getCurrentLessonData();
    const activitiesLengthDivisor = currentLessonData?.activities.length || 1;
    if (!currentLessonData) return null;

    const heightClass = size === "small" ? "h-1" : size === "medium" ? "h-4" : "h-6";
    const progressWidth = currentLessonData.concluded ? 100
        : Math.min((currentLessonData.currentActivityIndex / (activitiesLengthDivisor)) * 100, 100);

    // Effect to handle width constraints


    return (
        <div className='flex gap-4 w-screen justify-center items-center'>
            <Link href={"/"}>
                <IoClose className='w-6 h-6 cursor-pointer' />
            </Link>
            <div className="w-9/12 sm:w-10/12">
                <div
                    className={`bg-gray-200 rounded-full ${heightClass}`}
                    role="progressbar"
                >
                    <div
                        className={`bg-green-400 rounded-full ${heightClass} transition duration-300 ease-in-out`}
                        style={{ width: `${progressWidth}%`, transition: 'width 2s' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
