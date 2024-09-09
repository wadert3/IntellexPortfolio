import {AnimatedBox, Button} from "@/components"
import {Header} from "@/components";

export default function Home() {


    return (
    <main className="flex min-h-screen flex-col items-center px-[10%]">
            <div className="flex h-screen flex-col items-center justify-evenly">
               <Header heading={"Tired of software that doesnt suit your needs?"} content={<Button className={"text-4xl p-12"}>Get Started Now</Button>}/>
            </div>
            <div className={' w-full flex flex-col items-center justify-evenly pb-48'}>
                <div className="w-full flex py-12">
                    <AnimatedBox header={"Tailored Solutions..."} description={"Providing custom-built software to fit your exact needs. Streamline your unique business process and solve unconventional problems. We make sure its Effective, Efficient and Scalable."}/>
                </div>
                <div className="w-full flex py-12 justify-end">
                    <AnimatedBox header={"Across Industries..."} description={"Solutions in e-commerce, internal management, and any kind of AI solution you can imagine. If you have an issue we've got you covered."}/>
                </div>
                <div className="w-full flex py-12">
                    <AnimatedBox header={"Seamlessly Integrated."} description={"Seamless implementation with existing systems and software. We build in the latest technologies to keep you ahead of the competition."}/>
                </div>
            </div>
            <div className="mb-24">
                <Button className={"text-4xl p-12"}>Get Started Now</Button>
            </div>
            <div className={'w-full ml-48 mb-8'}>
                <p className={"text-gray-500 w-full"}>Built By Intellex LLC.</p>
            </div>
        </main>
    );
}
