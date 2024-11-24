"use client"
import {Button, Card, CardContent, ContactFormPopup, Header} from "@/components";
import {Award, Bot, Settings} from "lucide-react";
import {motion} from "framer-motion";
import {useState} from "react";


export default function CustomCRM() {
    const [open, setOpen] = useState(false);

    return (
        <main className="flex min-h-screen flex-col items-center px-[10%]">
            <Header size={'7xl'}
                    heading={'Finally, a CRM That Adapts to You'}
                    alignment={'center'}
                    className={'mt-auto h-screen justify-center'}>
                <div>
                    <p className={'text-xl sm:text-3xl text-center font-bold text-slate-500 mt-12'}>Take control of your sales
                        process
                        with a
                        AI-enhanced CRM designed to grow with your business.</p>
                    <Button className={"text-4xl whitespace-normal mt-12 py-12 sm:p-12"} onClick={() => setOpen(true)}>Book Free Consultation</Button>
                </div>
            </Header>
            <div className={"max-w-full"}>
                <div className="py-16">
                    <div className="mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="p-6">
                                <CardContent className="space-y-4">
                                    <Award className="h-12 w-12 text-blue-600 mb-4"/>
                                    <h3 className="text-xl font-semibold">Sales Process Freedom</h3>
                                    <p className="text-slate-600">
                                        Build and modify your sales workflow without constraints. Your process, your
                                        way, every step of the journey.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="p-6">
                                <CardContent className="space-y-4">
                                    <Bot className="h-12 w-12 text-blue-600 mb-4"/>
                                    <h3 className="text-xl font-semibold">AI Command Center</h3>
                                    <p className="text-slate-600">
                                        Leverage cutting-edge AI to automate repetitive tasks, predict customer
                                        behavior, and close deals faster.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="p-6">
                                <CardContent className="space-y-4">
                                    <Settings className="h-12 w-12 text-blue-600 mb-4"/>
                                    <h3 className="text-xl font-semibold">Control & Customization</h3>
                                    <p className="text-slate-600">
                                        We build your custom CRM to suit your business needs and follow your sales
                                        process. Every aspect of your CRM experience is tailored to
                                        what you need to maximize sales and close more deals.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Pain Points Section */}
                <div className=" py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our CRM?</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-red-600">Common CRM Frustrations</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Rigid, one-size-fits-all workflows</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Lack of control over your sales process</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Limited automation capabilities</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-green-600">Our Solution</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start space-x-2">
                                        <span className="text-green-600">✓</span>
                                        <span>Fully customized workflows that adapt to your needs</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-green-600">✓</span>
                                        <span>AI Integration to keep your processes advanced and efficient</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <span className="text-green-600">✓</span>
                                        <span>Intelligent automation powered by advanced AI</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <Card className=" text-white py-16 w-full">
                    <div className="container mx-auto px-4 text-center w-full">
                        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Sales Process?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Discover how our AI-enhanced CRM can help you close more deals and grow your business.
                        </p>
                        <Button className="px-8 py-6 text-lg max-w-full" onClick={() => setOpen(true)}>
                            Find Out How it Works
                        </Button>
                    </div>
                </Card>
            </div>
            <div className={'w-full sm:ml-48 mb-8 mt-24'}>
                <p className={"text-gray-500 w-full"}>Built By Intallex LLC.</p>
            </div>
            <ContactFormPopup open={open} setOpen={setOpen}/>
        </main>
    )
}