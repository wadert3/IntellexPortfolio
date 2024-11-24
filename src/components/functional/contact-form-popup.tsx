"use client"
import {ContactForm, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import {useState} from "react";


export default function ContactFormPopup({open, setOpen}: {open: boolean, setOpen: (open: boolean) => void}) {

    const [openThankYou, setOpenThankYou] = useState(false);

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-h-screen overflow-y-scroll max-w-screen p-4">
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
        </div>
    )
}