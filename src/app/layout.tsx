import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/global/ThemeProvider/";
import {TopBar} from "@/components";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Intallex LLC",
    description: "Specialized Software Solutions",
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
        </html>
    );
}
