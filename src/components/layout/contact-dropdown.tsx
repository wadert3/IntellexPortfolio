import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components";
import {Linkedin, Mail, Phone} from "lucide-react";
import Link from "next/link";


export default function ContactDropdown() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Button variant="outline" className="text-foreground">Contact</Button>
            </DropdownMenuTrigger>
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
                    {/*<DropdownMenuItem>*/}
                    {/*    <Github className="mr-2 h-4 w-4"/>*/}
                    {/*    <span>GitHub</span>*/}
                    {/*</DropdownMenuItem>*/}
                    <DropdownMenuItem>
                        <Link className="flex" href={'https://www.linkedin.com/in/intellex-web-apps/'}>
                            <Linkedin className="mr-2 h-4 w-4"/>
                            <span>LinkedIn</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};