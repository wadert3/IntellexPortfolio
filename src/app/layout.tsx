import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/global/ThemeProvider/";
import {TopBar} from "@/components";
import React from "react";

import {GoogleAnalytics} from "@next/third-parties/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Intallex LLC",
    description: "A thought leader in Software Solutions for businesses",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        <ThemeProvider attribute="class"
                       defaultTheme="system"
                       enableSystem
                       disableTransitionOnChange>
            <TopBar />
                {children}
        </ThemeProvider>
        </body>
        <GoogleAnalytics gaId={"G-LS175TEW83"}/>
        </html>
    );
}
