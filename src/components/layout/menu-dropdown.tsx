import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components";
import {Menu} from "lucide-react";
import Link from "next/link";


export default function MenuDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className={"rounded-md border p-2 hover:bg-secondary hover:cursor-pointer"}><Menu/></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-2">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Link href={"/offer"}>What We Can Offer</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={"/schedule"}>Book a Call Today</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={'/connect'}>Get In Touch</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};
