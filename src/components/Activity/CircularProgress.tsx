import React, { FC, ReactNode } from 'react';


type CircularProgressProps = {
    percent: number
    children: ReactNode

}

export const CircularProgress: FC<CircularProgressProps> = ({ percent = 50, children }) => {
    const radius = 62;
    const stroke = 20;
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
