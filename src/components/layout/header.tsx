
type Props = {
    content?: JSX.Element,
    heading: string
}

export default function Header({content, heading}: Props) {
    return (
        <div className={"h-[512px] flex flex-col items-center justify-around w-2/3"}>
            <h1 className={"text-center text-7xl uppercase font-bold"}>{heading}</h1>
            {content}
        </div>
    )
}