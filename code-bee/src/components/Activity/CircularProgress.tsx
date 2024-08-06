import React, { FC, useState } from 'react';
import { ActivityPath } from './ActivityPath';
import { Lesson } from '@contentlayer/generated';


type CircularProgressProps = {
    percent: number
    lesson: Lesson
}
export const CircularProgress: FC<CircularProgressProps> = ({ percent = 50, lesson }) => {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    return (
        <div>
            <div className="flex items-center justify-center relative">
                <svg className="transform -rotate-90 w-72 h-72">
                    <circle
                        cx="145"
                        cy="145"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="20"
                        fill="transparent"
                        className="text-gray-700"
                    />
                    <circle
                        cx="145"
                        cy="145"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="20"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (percent / 100) * circumference}
                        className="text-amber-500 rounded-xl"
                    />
                </svg>
                <div className="absolute drop-shadow-xl hover:scale-105 duration-300">
                    <ActivityPath lesson={lesson} />
                </div>
            </div>
        </div>
    );
};
