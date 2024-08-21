"use client"
import { CountUp } from "countup.js";
import React, { FC, useEffect, useRef } from "react";
type CounterUpProps = {
    countTo: number;
    scrollSpyDelay?: number
}

export const CounterUp: FC<CounterUpProps> = ({ countTo, scrollSpyDelay = 1000 }) => {
    const countUpRef = useRef(null);
    let countUpAnim: CountUp;

    useEffect(() => {
        initCountUp();
    }, []);

    async function initCountUp() {
        // dynamic import works better for nextJs
        const countUpModule = await import('countup.js');
        if (!countUpRef.current) return;
        countUpAnim = new countUpModule.CountUp(countUpRef.current, countTo, { enableScrollSpy: true, scrollSpyDelay });
        if (!countUpAnim.error) {
            countUpAnim.start();
        } else {
            console.error(countUpAnim.error);
        }
    }

    return (
        <span ref={countUpRef}>0</span>
    );
};
