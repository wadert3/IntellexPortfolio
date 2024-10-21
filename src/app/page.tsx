"use client"
import {
    AnimatedBox,
    Button, ContactForm,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    Header
} from "@/components"
import {useState} from "react";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";

import {motion} from "framer-motion";

// function CardHeader(props: { className: string, children: ReactNode }) {
//     return null;
// }

export default function Home() {
    const [open, setOpen] = useState(false);
    const [openThankYou, setOpenThankYou] = useState(false);

    return (
        <main className="flex min-h-screen flex-col items-center px-[10%]">
            <div className="flex h-screen flex-col items-center justify-evenly">
                <Header heading={"Tired of software that doesnt suit your needs?"}
                             content={<Button className={"text-4xl py-12 sm:p-12"} onClick={() => setOpen(true)}>Get Started
                                 Now</Button>}/>
                <motion.div
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: 200}}
                    className={'w-1/2 border-r-2 border-white h-[200px] mr-auto'}></motion.div>
            </div>
            <div className={' w-full flex flex-col items-center justify-evenly pb-48'}>
                <div className="w-full pb-12">
                    <AnimatedBox header={"We Can Offer..."}
                                 description={""} fullWidth/>
                </div>
                <div className="w-full flex py-12">
                    <AnimatedBox header={"Tailored Solutions..."}
                                 description={"Providing custom-built software to fit your exact needs. Streamline your unique business process and solve unconventional problems. Its built to be Effective, Efficient and Scalable."}/>
                </div>
                <div className="w-full flex py-12 justify-end">
                    <AnimatedBox header={"Across Industries..."}
                                 description={"Solutions in e-commerce, internal management, and any kind of AI solution you can imagine. If you have an issue we've got you covered."}/>
                </div>
                <div className="w-full flex pt-12">
                    <AnimatedBox header={"Seamlessly Integrated."}
                                 description={"Seamless implementation with existing systems and software. We build in the latest technologies to keep you ahead of the competition."}/>
                </div>
            </div>
            <div className="mb-24">
                <Button className={"text-4xl py-12 sm:p-12"} onClick={() => setOpen(true)}>Get Started Now</Button>
            </div>
            <div className={'w-full sm:ml-48 mb-8'}>
                <p className={"text-gray-500 w-full"}>Built By Intallex LLC.</p>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-h-screen overflow-y-scroll">
                    <DialogHeader>
                        <DialogTitle>Get Started</DialogTitle>
                        <DialogDescription>Level Up Your Systems Today</DialogDescription>
                    </DialogHeader>
                    <ContactForm onSuccess={() => {
                        setOpenThankYou(true);
                        setOpen(false)
                    }}/>
                </DialogContent>
            </Dialog>

            <Dialog open={openThankYou} onOpenChange={setOpenThankYou}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Thanks for reaching out!</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                        We&quot;ll be contacting you shortly.
                    </DialogBody>
                </DialogContent>
            </Dialog>
        </main>
    );
}
