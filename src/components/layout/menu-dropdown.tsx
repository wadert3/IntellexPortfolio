import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem, DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components";
import {Linkedin, Mail, Menu, Phone} from "lucide-react";
import Link from "next/link";

type props = {
    setOpen: (open: boolean) => void
}

export default function MenuDropdown({setOpen}: props) {
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

                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="sm:hidden">
                                Contact
                            </DropdownMenuSubTrigger>
                            <DropdownMenuContent className="p-2">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Link className="flex" href='tel:+15098229508'>
                                            <Phone className="mr-2 h-4 w-4"/>
                                            +1 509 822-9508
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link className="flex" href={'mailto:intellexwebapps@gmail.com'}>
                                            <Mail className="mr-2 h-4 w-4"/>
                                            intellexwebapps@gmail.com
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator/>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Link className="flex" href={'https://www.linkedin.com/in/intellex-web-apps/'}>
                                            <Linkedin className="mr-2 h-4 w-4"/>
                                            <span>LinkedIn</span>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenuSub>

                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};
