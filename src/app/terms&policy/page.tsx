"use client";
import Footer from "@/Components/Footer";
import Navbar from '../../Components/Navbar';


const Terms: React.FC = () => {
    return(
        <div className="font-anton bg-[#232931] overflow-x-hidden text-white">
            <div>
                <Navbar/>
            </div>
            <div className="md:mt-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl py-6 md:py-8 lg:py-10 px-10" > Terms & Policies </h1>
            </div> 
            <div className="grid grid-cols-2">
            <div className="mx-4 md:mx-10 lg:mx-20">
            <div className="border-b border-gray-400">
            <div className="">
                <h1 className="text-3xl md:text-4xl">Terms To Use</h1>
                <p className="ml-10 text-lg md:text-xl lg:text-2xl p-2 md:p-4">By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.</p>
            </div>
            <div className="mt-10">
                <h1 className="text-xl md:text-3xl">Acceptance of Terms</h1>
                <ul className="list-disc list-inside pl-4 md:pl-6">
                    <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                        <h1 className="ml-16">Binding Agreement:</h1>
                        <p>By using SeekIt, you agree to abide by these Terms of Use. If you do not agree, please do not use our website.</p>
                    </li>
                    <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                        <h1 className="ml-16">Modifications:</h1>
                        <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Continued use of the site signifies your acceptance of the revised terms.</p>
                    </li>
                </ul>
            </div>
            <div className="mt-10">
                <h1 className="text-xl md:text-2xl">Use of the Website</h1>
                <ul className="list-disc list-inside pl-4 md:pl-6">
                    <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                        <h1 className="ml-16">Eligibility:</h1>
                        <p>You must be at least 13 years old to use this website.</p>
                    </li>
                    <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                        <h1 className="ml-16">User Conduct:</h1>
                        <p>You agree not to use the site for any unlawful purpose or in a way that could harm the site, its users, or its operators.</p>
                    </li>
                    <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                        <h1 className="ml-16">Account Security:</h1>
                        <p>If you create an account, you are responsible for maintaining the confidentiality of your login information.</p>
                    </li>
                </ul>
            </div>
            <div className="mt-10">
                <h1 className="text-xl md:text-2xl">Intellectual Property</h1>
                <ul className="list-disc list-inside pl-4 md:pl-6">
                    <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                        <h1 className="ml-16">Content Ownership:</h1>
                        <p>All content on SeekIt is owned by us or our content providers and is protected by intellectual property laws.</p>
                    </li>
                    <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                        <h1 className="ml-16">Limited License:</h1>
                        <p>You are granted a limited, non-exclusive, and non-transferable license to access and use the site for personal purposes.</p>
                    </li>
                </ul>
            </div>
            <div className="my-10">
                <h1 className="text-xl md:text-2xl">Limitation of Liability</h1>
                <ul className="list-disc list-inside pl-4 md:pl-6">
                    <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                        <h1 className="ml-16">No Warranties:</h1>
                        <p>SeekIt is provided "as is" without any warranties of any kind.</p>
                    </li>
                    <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                        <h1 className="ml-16">Limitation:</h1>
                        <p>We are not liable for any indirect, incidental, or consequential damages arising out of your use of the site.</p>
                    </li>
                </ul>
            </div>
            </div>
            <div className="border-b-2">
                <div className="">
                    <h1 className="text-3xl md:text-4xl mt-20">Privacy Policy</h1>
                    <h2 className=" text-2xl md:text-3xl p-2 md:p-4 ml-24 mt-4">Your Privacy Matters</h2>
                    <p className="text-lg md:text-xl lg:text-2xl px-4 md:px-10 ml-20">We are committed to protecting your personal information and respecting your privacy. This policy outlines how we collect, use, and protect your data.</p>
                </div>
                <div className="mt-10">
                    <h1 className="text-xl md:text-2xl">Information We Collect</h1>
                    <ul className="list-disc list-inside pl-4 md:pl-6">
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Personal Information:</h1>
                            <p>Includes data you provide when you create an account, such as your name, email address, and contact details.</p>
                        </li>
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Usage Data:</h1>
                            <p>Information about how you use our site, including pages visited, time spent on the site, and other analytical data.</p>
                        </li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h1 className="text-xl md:text-2xl">How We Use Your Information</h1>
                    <ul className="list-disc list-inside pl-4 md:pl-6">
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Service Delivery:</h1>
                            <p>To provide, operate, and maintain our website.</p>
                        </li>
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Improvement:</h1>
                            <p>To understand and analyze how you use our site to improve our offerings.</p>
                        </li>
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Communication:</h1>
                            <p>To contact you with updates, promotional materials, and other information that may be of interest to you.</p>
                        </li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h1 className="text-xl md:text-2xl">Sharing Your Information</h1>
                    <ul className="list-disc list-inside pl-4 md:pl-6">
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Third-Party Service Providers:</h1>
                            <p>We may share your information with third parties who perform services on our behalf (e.g., hosting, analytics).</p>
                        </li>
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Legal Requirements:</h1>
                            <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>
                        </li>
                    </ul>
                </div>
                <div className="my-10">
                    <h1 className="text-xl md:text-2xl">Security of Your Information</h1>
                    <ul className="list-disc list-inside pl-4 md:pl-6">
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Protection Measures:</h1>
                            <p>We implement a variety of security measures to ensure the safety of your personal information.</p>
                        </li>
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">No Absolute Security:</h1>
                            <p>While we strive to protect your personal data, no method of transmission over the internet is 100% secure.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="">
                <div>
                    <h1 className="text-3xl md:text-4xl mt-20">Cookie Policy</h1>
                    <h2 className="text-2xl md:text-3xl p-2 md:p-4 mt-4 ml-20">Understanding Our Use of Cookies</h2>
                    <p className="text-lg md:text-xl lg:text-2xl p-2 md:p-4 ml-20">Our website uses cookies to improve your experience. This policy explains what cookies are, how we use them, and how you can manage them.</p>
                </div>
                <div>
                    <h1 className="text-xl md:text-2xl mt-10">What Are Cookies?</h1>
                    <ul className="list-disc list-inside pl-4 md:pl-6">
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Definition:</h1>
                            <p>Cookies are small text files placed on your device by websites you visit. They are used to make websites work more efficiently and provide information to the site owners.</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl md:text-2xl mt-10">Types of Cookies We Use</h1>
                    <ul className="list-disc list-inside pl-4 md:pl-6">
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Essential Cookies:</h1>
                            <p>Necessary for the website to function properly (e.g., login authentication).</p>
                        </li>
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Performance Cookies:</h1>
                            <p>Help us understand how visitors interact with our site by collecting and reporting information anonymously.</p>
                        </li>
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Functional Cookies:</h1>
                            <p>Enable the website to remember your preferences (e.g., language selection).</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl md:text-2xl my-10">Managing Cookies</h1>
                    <ul className="list-disc list-inside pl-4 md:pl-6">
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Browser Settings:</h1>
                            <p>You can manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies.</p>
                        </li>
                        <li className="flex flex-col md:flex-row gap-2 md:gap-4 text-lg md:text-xl py-2">
                            <h1 className="ml-16">Opt-Out:</h1>
                            <p>You can opt out of some third-party cookies through third-party cookie management sites.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="my-10 md:my-20">
                <h1 className="font-extralight text-lg md:text-xl lg:text-2xl ">SeekIt is dedicated to providing a seamless and secure online experience for all our users. Our Terms of Use, Cookies Policy, and Privacy Policy are designed to ensure transparency, protect your privacy, and uphold your trust. By using SeekIt, you join us in our mission to create a safe and efficient online environment where you can access information with confidence. Thank you for being a part of our community.</h1>
            </div>
            </div>
            <div className="" id="">
                <video autoPlay loop className="w-[700px] rounded-2xl  fixed top-32">
                <source src="document.mp4" type="video/mp4"/>
                Your Video is not supported
                </video>
            </div>
            </div>
            <div className="">
                <Footer/> 
            </div>
        </div>
    )
}

export default Terms;
