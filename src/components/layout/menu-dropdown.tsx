import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components";
import {Menu} from "lucide-react";
import Link from "next/link";
type props = {
    setOpen: (open: boolean) => void
}

export default function MenuDropdown({setOpen}:props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className={"rounded-md border p-2 hover:bg-secondary hover:cursor-pointer"}><Menu/></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-2">
                <DropdownMenuGroup>
                    {/*<Link href={"/offer"}>*/}
                    {/*    <DropdownMenuItem>*/}
                    {/*        What We Can Offer*/}
                    {/*    </DropdownMenuItem>*/}
                    {/*</Link>*/}
                    {/*<Link href={"/schedule"}>*/}
                    {/*    <DropdownMenuItem>*/}
                    {/*        Book a Call Today*/}
                    {/*    </DropdownMenuItem>*/}
                    {/*</Link>*/}

                        <DropdownMenuItem onClick={() => setOpen(true)}>
                            Get In Touch
                        </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};
