"use client"
import React, { FC } from 'react';
import { IoClose } from './Icons';

type ProgressBar = {
    size: "small" | "medium" | "large";
    onClose?: () => void;
    progress: number;
}

export const ProgressBar: FC<ProgressBar> = ({ size = "medium", progress, onClose }) => {
    const heightClass = size === "small" ? "h-1" : size === "medium" ? "h-4" : "h-6";

    return (
        <div className='flex gap-4 w-screen justify-center items-center'>
            <IoClose className='w-6 h-6 cursor-pointer' onClick={onClose} />
            <div className="w-9/12 sm:w-10/12">
                <div
                    className={`bg-gray-200 rounded-full ${heightClass}`}
                    role="progressbar"
                >
                    <div
                        className={`bg-green-400 rounded-full ${heightClass} transition duration-300 ease-in-out`}
                        style={{ width: `${progress}%`, transition: 'width 2s' }}
                    />
                </div>
            </div>
        </div>
    );
};

