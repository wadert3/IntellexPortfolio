"use client"
import {motion, Variants} from "framer-motion";
import {Card, CardContent, CardHeader} from "@/components";

type Props = {
    header?: string,
    description?: string,
    children?: JSX.Element,
    className?: string,
}

export default function AnimatedBox({header, description}:Props) {

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

    return <motion.div
        animate={"visible"}
        initial={"hidden"}
        variants={container}
    >
        <Card className={'max-w-[500px]'}>
            <CardHeader className="text-4xl font-semibold mb-3">{header}</CardHeader>
            <CardContent className="">{description}</CardContent>
        </Card>
    </motion.div>
}