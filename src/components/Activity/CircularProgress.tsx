import React, { FC, ReactNode } from 'react';
import { ActivityPath } from './ActivityPath';
import { Lesson } from '@contentlayer/generated';


type CircularProgressProps = {
    percent: number
    children: ReactNode

}

export const CircularProgress: FC<CircularProgressProps> = ({ percent = 50, children }) => {
    const radius = 62;
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
                        strokeWidth="15"
                        fill="transparent"
                        className="text-gray-700"
                    />
                    <circle
                        cx="145"
                        cy="145"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="15"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (percent / 100) * circumference}
                        className="text-amber-500 rounded-xl"
                    />
                </svg>
                <div className="absolute drop-shadow-xl">
                    {children}
                </div>
            </div>
        </div>
    );
};
