"use client"
import {motion, Variants} from "framer-motion";

type Props = {
    header?: string,
    description?: string,
    children?: JSX.Element
}

export default function AnimatedLink({header, description, children}:Props) {

    const container:Variants = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    return <motion.a
        animate={"visible"}
        initial={"hidden"}
        variants={container}
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
    >
        <h2 className="mb-3 text-2xl font-semibold">
            {header}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {description ?? children}
        </p>
    </motion.a>
}