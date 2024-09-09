import {IntellexFull} from "@/components";

type LogoProps = {
    width?: `${number}`|number,
    height?: `${number}`|number,
    className?: string,
}

export default function Logo({width, className}:LogoProps) {
    return <IntellexFull className={`relative fill-white ${className ?? ""}`} width={width}/>
}