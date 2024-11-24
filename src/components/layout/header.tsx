
type Props = {
    content?: JSX.Element,
    heading: string,
    size?: textSize,
    alignment?: alignment,
    children?: JSX.Element,
    className?: string
}

export default function Header({content, heading, children, className, size = '7xl', alignment = 'center'}: Props) {

    return (
        <div className={`flex flex-col w-3/4 mt-20 ${className}`}>
            <h1 className={`text-5xl sm:text-${size}  text-${alignment} uppercase font-bold`}>{heading}</h1>
            {content ?? children}
        </div>
    )
}