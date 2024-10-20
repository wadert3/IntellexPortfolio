"use client"
import {
    ContactDropdown, ContactForm, Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    Logo,
    MenuDropdown
} from "@/components";
import Link from "next/link";
import {useState} from "react";


export default function TopBar(){
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full max-w-full flex justify-center fixed backdrop-blur-md bg-background/30 z-50 mx-auto border-b">
            <div className="flex px-8 py-4 sm:px-4 sm:py-4 max-w-full w-full justify-between sm:justify-evenly items-center rounded-2xl">
                <div className="hidden sm:block"><ContactDropdown/></div>
                <div><Link href={'/'}><Logo className={'h-12 sm:h-20'} /></Link></div>
                <div><MenuDropdown setOpen={setOpen}/></div>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className={"max-h-screen overflow-y-scroll"}>
                    <DialogHeader>
                        <DialogTitle>Get Started</DialogTitle>
                        <DialogDescription>Level Up Your Systems Today</DialogDescription>
                    </DialogHeader>
                    <ContactForm />
                </DialogContent>
            </Dialog>
        </div>
    )
}