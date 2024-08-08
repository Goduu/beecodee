"use client"
import React, { useState, useEffect, FC } from 'react';
import { useActivityContext } from './Activity/ActivityContext';
import { IoClose } from './Icons';
import Link from 'next/link';

type ProgressBarProps = {
    size: "small" | "medium" | "large";
}
export const ProgressBar: FC<ProgressBarProps> = ({ size = "medium" }) => {
    const { activities, currentActivityIndex } = useActivityContext();
    // State for the width of the progress bars
    const [width, setWidth] = useState(50);
    const heightClass = size === "small" ? "h-1" : size === "medium" ? "h-4" : "h-6";
    const progressWidth = currentActivityIndex < 0 ? 0 : Math.min((currentActivityIndex / (activities?.length || 1)) * 100, 100);

    // Effect to handle width constraints
    useEffect(() => {
        if (width > 100) {
            setWidth(100);
        } else if (width < 1) {
            setWidth(10);
        }
    }, [width]);

    return (
        <div className='flex gap-4 w-screen justify-center items-center'>
            <Link href={"/"}>
                <IoClose className='w-6 h-6 cursor-pointer' />
            </Link>
            <div className="w-9/12 sm:w-10/12">
                <div
                    className={`bg-gray-200 rounded ${heightClass}`}
                    role="progressbar"
                >
                    <div
                        className={`bg-green-400 rounded ${heightClass} transition duration-300 ease-in-out`}
                        style={{ width: `${progressWidth}%`, transition: 'width 2s' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
