"use client"
import * as React from "react"
import {useTheme} from "next-themes";
import {SVGProps} from "@/components/images/types.d.ts";



const IntellexLogo = (props:SVGProps) =>
{
    const {theme, systemTheme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={1057.332}
            height={930.875}
            viewBox="0 0 279.752 246.294"
            {...props}
        >
            <title>{"wades black and white logo"}</title>
            <defs>
                <linearGradient
                    xlinkHref="#a"
                    id="c"
                    x1={220.347}
                    x2={208.943}
                    y1={102.807}
                    y2={105.742}
                    gradientTransform="translate(-1840.185 -274.14) scale(9.56371)"
                    gradientUnits="userSpaceOnUse"
                />
                <linearGradient id="a">
                    {currentTheme === "light" && <><stop
                        offset={0}
                        style={{
                            stopColor: "#000",
                            stopOpacity: 1,
                        }}
                    />
                    <stop
                        offset={1}
                        style={{
                            stopColor: "#031130",
                            stopOpacity: 0,
                        }}
                    /></>}
                    {currentTheme === "dark" && <><stop
                        offset={0}
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                    <stop
                        offset={1}
                        style={{
                            stopColor: "#fceecf",
                            stopOpacity: 0,
                        }}
                    /></>}
                </linearGradient>
                <linearGradient
                    xlinkHref="#b"
                    id="d"
                    x1={229.627}
                    x2={244.929}
                    y1={82.882}
                    y2={79.989}
                    gradientTransform="matrix(7.14533 0 0 9.56371 -1312.266 -274.14)"
                    gradientUnits="userSpaceOnUse"
                />
                <linearGradient id="b">
                    {currentTheme === "light" && <><stop
                        offset={0}
                        style={{
                            stopColor: "#000",
                            stopOpacity: 1,
                        }}
                    />
                    <stop
                        offset={1}
                        style={{
                            stopColor: "#031130",
                            stopOpacity: 0,
                        }}
                    /></>}
                    {currentTheme === "dark" && <><stop
                        offset={0}
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 1,
                        }}
                    />
                    <stop
                        offset={1}
                        style={{
                            stopColor: "#fceecf",
                            stopOpacity: 0,
                        }}
                    /></>}
                </linearGradient>
            </defs>
            <path
                d="m297.452 518.52-30.365 190.96H162.47l-4.39 27.667H276.44l34.958-218.628zm16.589 0-34.957 218.627h64.928l4.388-27.667H298.13l30.364-190.96z"
                style={{
                    fontSize: "133.333px",
                    fontFamily: "&quot",
                    whiteSpace: "pre",
                    opacity: 0.99,
                    fill: "url(#c)",
                    strokeWidth: 2.9,
                }}
                transform="translate(-158.082 -490.853)"
            />
            <path
                d="m250.798 490.853-3.277 27.666h63.875l4.423-27.666zm67.666 0-4.423 27.666H434.557l3.277-27.666z"
                style={{
                    fontSize: "133.333px",
                    fontFamily: "&quot",
                    whiteSpace: "pre",
                    opacity: 0.99,
                    fill: "url(#d)",
                    strokeWidth: 2.9,
                }}
                transform="translate(-158.082 -490.853)"
            />
        </svg>
    )
}
export default IntellexLogo