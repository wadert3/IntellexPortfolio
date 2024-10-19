"use client"
import {motion, Variants} from "framer-motion";
import {Card, CardContent, CardHeader} from "@/components";

type Props = {
    header?: string,
    description?: string,
    children?: JSX.Element,
    className?: string,
    fullWidth?: boolean,
}

export default function AnimatedBox({header, description, fullWidth = false}:Props) {

    const container:Variants = {
        hidden: { opacity: 0, scale: 0.5},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 1
            }
        }
    };

    if(fullWidth) {
        return <motion.div
            whileInView={"visible"}
            initial={"hidden"}
            variants={container}
            viewport={{once: true}}
        >
            <Card className={'w-full'}>
                <CardHeader className="text-5xl font-semibold mb-3 text-center">{header}</CardHeader>
            </Card>
        </motion.div>
    }

    return <motion.div
        whileInView={"visible"}
        initial={"hidden"}
        variants={container}
        viewport={{once: true}}
    >
        <Card className={'max-w-[500px]'}>
            <CardHeader className="text-4xl font-semibold mb-3">{header}</CardHeader>
            <CardContent className="">{description}</CardContent>
        </Card>
    </motion.div>
}