import {ContactDropdown, Logo, MenuDropdown} from "@/components";
import Link from "next/link";


export default function TopBar(){
    return (
        <div className="w-full flex justify-center fixed backdrop-blur-md bg-background/30 z-50 mx-auto border-b">
            <div className="flex p-4 w-full justify-evenly items-center rounded-2xl">
                <div><ContactDropdown/></div>
                <div><Link href={'/'}><Logo className={'h-12'} /></Link></div>
                <div><MenuDropdown/></div>
            </div>
        </div>
    )
}