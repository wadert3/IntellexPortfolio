"use client"
import * as React from "react"
import {SVGProps} from "@/components/images/types.d.ts";
import {useTheme} from "next-themes";
const IntellexFull = (props:SVGProps) => {
    const {theme, systemTheme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={578.007}
            height={111.404}
            viewBox="0 0 152.931 29.476"
            {...props}
        >
            <defs>
                <linearGradient id="c">
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
                    xlinkHref="#a"
                    id="d"
                    x1={38.344}
                    x2={75.132}
                    y1={21.246}
                    y2={21.246}
                    gradientTransform="matrix(1.55895 0 0 1 14.659 170.957)"
                    gradientUnits="userSpaceOnUse"
                />
                <linearGradient id="a">

                    {currentTheme === "light" && <><stop
                        offset={0.024}
                        style={{
                            stopColor: "#000",
                            stopOpacity: 0,
                        }}
                    />
                        <stop
                            offset={0.42}
                            style={{
                                stopColor: "#000",
                                stopOpacity: 1,
                            }}
                        /></>}
                    {currentTheme === "dark" && <><stop
                        offset={0.024}
                        style={{
                            stopColor: "#fff",
                            stopOpacity: 0,
                        }}
                    />
                        <stop
                            offset={0.42}
                            style={{
                                stopColor: "#fff",
                                stopOpacity: 1,
                            }}
                        /></>}
                </linearGradient>
                <linearGradient
                    xlinkHref="#b"
                    id="e"
                    x1={220.347}
                    x2={208.943}
                    y1={102.807}
                    y2={105.742}
                    gradientTransform="matrix(17.39485 0 0 17.39485 -3464.685 -1260.858)"
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
                <linearGradient
                    xlinkHref="#c"
                    id="f"
                    x1={229.627}
                    x2={288.993}
                    y1={82.882}
                    y2={79.989}
                    gradientTransform="matrix(12.99621 0 0 17.39485 -2504.486 -1260.858)"
                    gradientUnits="userSpaceOnUse"
                />
            </defs>
            <g
                style={{
                    strokeWidth: 1.12503,
                }}
            >
                <path
                    d="m165.857 340.734 11.6-73.333h12l-2.267 14h.267q2-7.334 7.733-11.334t14.133-4q11.067 0 16.534 6.8 5.466 6.8 3.6 18.534l-7.867 49.333h-12l7.467-47.2q1.333-8.4-2.134-12.8-3.466-4.533-10.666-4.533-7.467 0-12.534 4.666-5.066 4.667-6.533 13.2l-7.333 46.667zm75.466 14.666 66.8-125.333h12.934l-66.8 125.333Zm112-13.333q-12.933 0-19.6-7.733-6.666-7.867-4.533-21.6l2.8-17.333q2.267-14 10.933-21.6 8.8-7.734 22.533-7.734 8.4 0 14.4 3.067t8.8 8.4q2.934 5.333 1.867 12.267-1.333 8.666-7.067 13.2-5.6 4.4-14.666 4.4h-26.933l-1.067 6.666q-1.333 8.133 2.533 12.933 4 4.667 11.733 4.667 6.667 0 11.334-2.533 4.8-2.667 6.4-7.067h12q-2.667 9.467-10.934 14.8-8.266 5.2-20.533 5.2zm-10-44.266h26.8q3.2 0 5.333-1.867 2.267-1.867 2.934-6.133 1.066-6.267-3.067-10-4-3.867-11.467-3.867-8.133 0-13.466 4.8-5.2 4.667-6.533 13.333zm100.933 42.933q-9.733 0-14.666-5.6-4.8-5.734-3.334-15.067l10.4-65.733h-25.333l1.733-10.933h37.334l-12.134 76.666q-.8 4.533 1.334 7.2 2.133 2.533 6.4 2.533h22.666l-1.733 10.934zm80 0q-9.733 0-14.666-5.6-4.8-5.734-3.334-15.067l10.4-65.733h-25.333l1.733-10.933h37.333l-12.133 76.666q-.8 4.533 1.334 7.2 2.133 2.533 6.4 2.533h22.666l-1.733 10.934zm69.067 1.333q-12.934 0-19.6-7.733-6.667-7.867-4.534-21.6l2.8-17.333q2.267-14 10.934-21.6 8.8-7.734 22.533-7.734 8.4 0 14.4 3.067t8.8 8.4q2.933 5.333 1.867 12.267-1.334 8.666-7.067 13.2-5.6 4.4-14.667 4.4h-26.933l-1.067 6.666q-1.333 8.133 2.534 12.933 4 4.667 11.733 4.667 6.667 0 11.333-2.533 4.8-2.667 6.4-7.067h12q-2.666 9.467-10.933 14.8-8.267 5.2-20.533 5.2zm-10-44.266h26.8q3.2 0 5.333-1.867 2.267-1.867 2.933-6.133 1.067-6.267-3.066-10-4-3.867-11.467-3.867-8.133 0-13.467 4.8-5.2 4.667-6.533 13.333zm57.6 42.933 31.333-38.133-18.133-35.2h13.866l10.4 22.666q.667 1.467 1.333 3.2.8 1.734 1.067 2.8.667-1.066 1.733-2.8 1.067-1.733 2.134-3.2l17.466-22.666h14.267l-29.333 36.133 19.2 37.2h-13.867l-11.333-24q-.667-1.467-1.467-3.333l-1.067-3.2q-.8 1.2-2 3.2-1.2 1.866-2.4 3.333l-18.933 24z"
                    style={{
                        fontSize: "133.333px",
                        fontFamily: "&quot",
                        whiteSpace: "pre",
                        opacity: 0.99,
                        fill: currentTheme === "dark" ? "#fff" : "#000",
                        strokeWidth: 2.12604,
                        fillOpacity: 1,
                    }}
                    transform="matrix(.23518 0 0 .23518 -15.548 -54.107)"
                />
                <path
                    d="M74.434 190.757h57.352v2.893H74.434Z"
                    style={{
                        opacity: 0.99,
                        fill: "url(#d)",
                        strokeWidth: 0.562515,
                    }}
                    transform="matrix(.88886 0 0 .88886 -9.308 -166.42)"
                />
                <g
                    style={{
                        strokeWidth: 19.57,
                    }}
                >
                    <path
                        d="M423.332 180.863 368.103 528.19h-190.28l-7.982 50.32h215.272l63.582-397.647zm30.172 0-63.58 397.648H508.02l7.98-50.321h-91.437l55.229-347.327z"
                        style={{
                            fontSize: "133.333px",
                            fontFamily: "&quot",
                            whiteSpace: "pre",
                            opacity: 0.99,
                            fill: "url(#e)",
                            strokeWidth: 56.7531,
                        }}
                        transform="matrix(.0511 0 0 .0511 -8.679 -3.535)"
                    />
                    <path
                        d="m338.475 130.541-5.96 50.322H448.695l8.047-50.322zm123.076 0-8.047 50.322h791.859l5.96-50.322z"
                        style={{
                            fontSize: "133.333px",
                            fontFamily: "&quot",
                            whiteSpace: "pre",
                            opacity: 0.99,
                            fill: "url(#f)",
                            strokeWidth: 56.7531,
                        }}
                        transform="matrix(.0511 0 0 .0511 -8.679 -3.535)"
                    />
                </g>
            </g>
        </svg>
    )
}
export default IntellexFull
