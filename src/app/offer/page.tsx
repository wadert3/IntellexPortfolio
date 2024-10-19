import {Header} from "@/components";

export default function Offer() {
    return (
        <main className={"flex min-h-screen flex-col items-center px-[10%] "}>
            <Header size={'5xl'}
                    heading={'Revolutionize Your Business with AI-Powered Internal Systems Built for YOUR Business'}
                    alignment={'left'}/>
            <div className="company-overview w-2/3">
                <p className={'text-lg'}>At Intallex, the focus is on creating cutting-edge internal systems enhanced by
                    artificial intelligence, designed to transform business operations and drive unprecedented
                    efficiency.</p>

                <h2 className={'text-2xl font-bold mt-8'}>Our Offerings</h2>

                <div className="offerings">
                    <div className="offering mt-4">
                        <h3 className={'text-xl'}>1. Enhanced Management Systems</h3>
                        <p className={'text-lg'}>Create smarter, more accessible tools:
                            <ul>
                                <li><strong>Customer Relations:</strong> Predict customer behavior, automate personalized
                                    interactions, and optimize sales processes.
                                </li>
                                <li><strong>Resource Planning:</strong> Streamline operations with inventory
                                    management, smart resource allocation, and automated financial forecasting.
                                </li>
                                <li><strong>Cognitive Project Management:</strong> Utilize AI to optimize project
                                    timelines, allocate resources efficiently, and predict potential roadblocks before
                                    they occur.
                                </li>
                            </ul>
                        </p>
                    </div>

                    <div className="offering mt-4">
                        <h3 className={'text-xl'}>2. Smart Workflow Automation</h3>
                        <p>Transform internal processes with AI-powered automation:
                            <ul>
                                <li><strong>Document Processing:</strong> Implement intelligent document understanding
                                    to
                                    automate data extraction and classification.
                                </li>
                                <li><strong>Task Prioritization:</strong> Let AI analyze workloads and prioritize tasks
                                    based on importance, deadlines, and available resources.
                                </li>
                                <li><strong>Predictive Maintenance:</strong> For businesses with physical assets, AI can
                                    predict when maintenance is needed, reducing downtime and costs.
                                </li>
                            </ul>
                        </p>
                    </div>

                    <div className="offering mt-4">
                        <h3 className={'text-xl'}>3. AI-Driven Analytics and Decision Support</h3>
                        <p>Harness the power of data with advanced analytics:
                            <ul>
                                <li><strong>Predictive Analytics:</strong> Forecast trends, anticipate market changes,
                                    and
                                    make data-driven decisions with AI-powered insights.
                                </li>
                                <li><strong>Anomaly Detection:</strong> Identify unusual patterns in data that may
                                    indicate
                                    fraud, errors, or opportunities.
                                </li>
                                <li><strong>Natural Language Querying:</strong> Allow staff to interact with data using
                                    conversational language, democratizing access to insights.
                                </li>
                            </ul>
                        </p>
                    </div>

                    <div className="offering mt-4">
                        <h3 className={'text-xl'}>4. Intelligent Knowledge Management</h3>
                        <p>Create a smarter, more accessible knowledge base:
                            <ul>
                                <li><strong>AI-Powered Search:</strong> Implement advanced search capabilities that
                                    understand context and intent, making information retrieval effortless.
                                </li>
                                <li><strong>Automated Knowledge Capture:</strong> Use AI to extract and organize
                                    knowledge
                                    from various sources, keeping your information up-to-date.
                                </li>
                                <li><strong>Personalized Learning:</strong> Provide employees with AI-curated learning
                                    paths
                                    based on their roles, skills, and goals.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                <h2 className={'text-2xl font-bold mt-8'}>The Intallex Advantage</h2>

                <p className={'text-lg'}>By choosing Intallex for AI-integrated internal systems, businesses gain:</p>
                <ol className="process">
                    <li>
                        <h3 className={'text-xl'}>Tailored Solutions</h3>
                        <p className={'text-lg'}>Each system is custom-built to address specific business challenges and
                            objectives within your business.</p>
                    </li>

                    <li>
                        <h3 className={'text-xl'}>Seamless Integration</h3>
                        <p className={'text-lg'}>AI capabilities are woven seamlessly into existing workflows and
                            systems, ensuring smooth adoption. Existing systems can be integrated with our solutions
                            effortlessly.</p>
                    </li>

                    <li>
                        <h3 className={'text-xl'}>Scalability</h3>
                        <p className={'text-lg'}>Systems grow and evolve with the business, adapting to changing needs
                            over time.</p>
                    </li>

                    <li>
                        <h3 className={'text-xl'}>Continuous Improvement</h3>
                        <p className={'text-lg'}>AI algorithms learn and improve over time, delivering increasing value
                            and insights. Our systems are designed to evolve with your business.</p>
                    </li>

                    <li>
                        <h3 className={'text-xl'}>Top of the Line Support</h3>
                        <p className={'text-lg'}>Your systems will maintain to most up to date tools and technologies,
                            ensuring optimal performance and reliability and will remain up to date with continuous
                            updates and support.</p>
                    </li>
                </ol>

                <p className={'text-xl font-bold'}>Transform internal operations, empower employees, and gain a
                    competitive edge with Intallex&quot;s AI-integrated internal systems. The future of business
                    efficiency and intelligence is here - let&quot;s build it together.</p>
            </div>
        </main>
    )
}