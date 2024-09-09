import {Header} from "@/components";

export default function Offer() {
    return (
        <main>
            <Header heading={'So what is it?'}/>
            <div className="company-overview">
                <h1>Custom Software Solutions for Your Business Needs</h1>

                <p>At [Company Name], we specialize in delivering tailored software solutions that transform how
                    businesses operate. Our expertise spans across various domains, ensuring we can meet the diverse
                    needs of modern enterprises.</p>

                <h2>Our Offerings</h2>

                <div className="offerings">
                    <div className="offering">
                        <h3>1. E-commerce Solutions</h3>
                        <p>We build robust, scalable e-commerce platforms that help you reach customers globally. From
                            inventory management to secure payment processing, we&quot;ve got you covered.</p>
                    </div>

                    <div className="offering">
                        <h3>2. In-House Software</h3>
                        <p>Streamline your internal operations with custom-built software designed specifically for your
                            workflow. Increase efficiency and reduce errors with tools that fit your processes
                            perfectly.</p>
                    </div>

                    <div className="offering">
                        <h3>3. Management Systems</h3>
                        <p>Take control of your business with comprehensive management software. Whether it&quot;s CRM, ERP,
                            or project management, we create systems that give you clear insights and powerful tools to
                            manage your operations effectively.</p>
                    </div>

                    <div className="offering">
                        <h3>4. AI Solutions</h3>
                        <p>Harness the power of artificial intelligence to gain a competitive edge. We develop AI-driven
                            solutions for data analysis, predictive modeling, process automation, and whatever problem you need solved.</p>
                    </div>
                </div>

                <h2>Our Process</h2>

                <ol className="process">
                    <li>
                        <h3>Discovery & Consultation</h3>
                        <p>We begin by thoroughly understanding your business, challenges, and objectives. Our experts
                            work closely with you to define the scope and requirements of your project.</p>
                    </li>

                    <li>
                        <h3>Planning & Design</h3>
                        <p>Based on the insights gathered, we create a detailed project plan and design the software
                            architecture. We present wireframes and prototypes for your feedback to ensure we&quot;re aligned
                            with your vision.</p>
                    </li>

                    <li>
                        <h3>Development</h3>
                        <p>Our skilled developers bring the design to life, using cutting-edge technologies and best
                            practices. We follow an agile methodology, allowing for flexibility and continuous
                            improvement throughout the development process.</p>
                    </li>

                    <li>
                        <h3>Quality Assurance</h3>
                        <p>Rigorous testing is performed at every stage to ensure your software is robust, secure, and
                            performs optimally. We conduct thorough user acceptance testing to guarantee the solution
                            meets all requirements.</p>
                    </li>

                    <li>
                        <h3>Implementation & Training</h3>
                        <p>We ensure a smooth deployment of your new software. Our team provides comprehensive training
                            to your staff, ensuring they&quot;re comfortable and proficient with the new system.</p>
                    </li>

                    <li>
                        <h3>Ongoing Support & Optimization</h3>
                        <p>Our relationship doesn&quot;t end at launch. We provide dedicated ongoing support, regular
                            updates, and continuous optimization to ensure your software evolves with your business
                            needs.</p>
                    </li>
                </ol>

                <p>At [Company Name], we&quot;re not just building software; we&quot;re crafting solutions that drive your
                    business forward. Let&quot;s transform your challenges into opportunities for growth and innovation.</p>
            </div>
        </main>
    )
}