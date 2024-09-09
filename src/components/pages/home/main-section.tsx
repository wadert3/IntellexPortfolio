import {Button} from "@/components";


export default function MainSection() {
    return (
        <div className={"h-[512px] flex flex-col items-center justify-around w-2/3"}>
            <h1 className={"text-center text-7xl uppercase font-bold"}>Tired of software that doesnt suit your needs?</h1>
            <Button className={"text-4xl p-12"}>Get Started Now</Button>
        </div>
    )
}