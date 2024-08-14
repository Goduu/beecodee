import { FC, SVGProps } from "react";

export const Beecodee: FC<SVGProps<SVGSVGElement>> = (svgProps) => (
    <svg
        {...svgProps}
        width="100%"
        height="100%"
        viewBox="0 0 661 171"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
    >
        <g transform="matrix(123.363,0,0,123.363,626.472,129.397)"></g>
        <text
            x="31.222px"
            y="129.397px"
            style={{
                fontFamily: "'ArialRoundedMTBold', 'Arial Rounded MT Bold', sans-serif",
                fontSize: '123.363px',
                fill: '#f3970e',
            }}
        >
            beecodee
        </text>
    </svg>
);