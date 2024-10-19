
type Props = {
    content?: JSX.Element,
    heading: string,
    size?: textSize,
    alignment?: alignment
}

export default function Header({content, heading, size = '7xl', alignment = 'center'}: Props) {

    return (
        <div className={"h-[512px] flex flex-col items-center justify-around w-3/4"}>
            <h1 className={`text-${size} text-${alignment} uppercase font-bold`}>{heading}</h1>
            {content}
        </div>
    )
}