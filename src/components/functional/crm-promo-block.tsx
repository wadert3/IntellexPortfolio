import {Button, Card, CardContent} from '@/components';
import {ArrowRight, Bot, LineChart} from 'lucide-react';
import Link from "next/link";

const CRMPromoBlock = () => {
    return (
        <Card className="overflow-hidden bg-gradient-to-r from-background to-primary-foreground">
            <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Content */}
                    <div className="p-8 space-y-6">
                        <div className="flex items-center space-x-2 text-blue-600">
                            <Bot className="h-5 w-5"/>
                            <span className="font-semibold">AI-Enhanced CRM</span>
                        </div>

                        <h2 className="text-3xl font-bold ">
                            Transform Your Sales Process
                        </h2>

                        <p className="text-slate-400">
                            Discover our adaptive CRM that grows with your business. Powered by AI, customizable to your
                            needs, and designed for success.
                        </p>
                        <Link href="/custom-crm">
                            <Button
                                className="mt-4"
                                size="lg"
                            >
                                Explore the CRM
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                            </Button>
                        </Link>
                    </div>

                    {/* Right Visual Element */}
                    <div className="relative hidden md:block">
                        {/* Abstract Background Pattern */}
                        <div className="absolute inset-0 bg-blue-600 opacity-10">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                                </pattern>
                                <rect width="100" height="100" fill="url(#grid)"/>
                            </svg>
                        </div>

                        {/* Feature Highlights */}
                        <div className="relative h-full flex items-center justify-center p-8">
                            <div className="grid grid-cols-2 gap-4">
                                <div className=" p-4 rounded-lg shadow-sm">
                                    <LineChart className="h-6 w-6 text-blue-600 mb-2"/>
                                    <p className="text-sm font-medium">Designed for Scale</p>
                                </div>
                                <div className=" p-4 rounded-lg shadow-sm">
                                    <Bot className="h-6 w-6 text-blue-600 mb-2"/>
                                    <p className="text-sm font-medium">AI Automation</p>
                                </div>
                                <div className=" p-4 rounded-lg shadow-sm translate-x-4">
                                    <svg className="h-6 w-6 text-blue-600 mb-2" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                                    </svg>
                                    <p className="text-sm font-medium">Custom Built</p>
                                </div>
                                <div className=" p-4 rounded-lg shadow-sm translate-x-4">
                                    <svg className="h-6 w-6 text-blue-600 mb-2" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                    <p className="text-sm font-medium">Lightning Fast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CRMPromoBlock;