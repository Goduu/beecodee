import React, { FC, ReactNode } from 'react';


type CircularProgressProps = {
    percent: number
    size?: "small" | "medium" | "large"
    children: ReactNode
}

export const CircularProgress: FC<CircularProgressProps> = ({ percent = 50, size = "medium", children }) => {
    const radius = size === "small" ? 38 : size === "medium" ? 58 : 70;
    const stroke = size === "small" ? 16 : size === "medium" ? 20 : 28;
    const initialPosition = radius + stroke;
    const circumference = 2 * Math.PI * radius;

    return (
        <div className="relative inline-block">
            <svg
                className="transform -rotate-90 justify-center items-center"
                width={2 * initialPosition}
                height={2 * initialPosition}
            >
                <circle
                    cx={initialPosition}
                    cy={initialPosition}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={stroke}
                    fill="transparent"
                    className="text-gray-700"
                />
                <circle
                    cx={initialPosition}
                    cy={initialPosition}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={stroke}
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - (percent / 100) * circumference}
                    className="text-amber-500 rounded-xl"
                />
            </svg>
            <div className="absolute drop-shadow-xl inset-0 flex justify-center items-center">
                {children}
            </div>
        </div>
    );
};
