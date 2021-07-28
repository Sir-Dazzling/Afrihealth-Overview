import React from "react";
import Slide from 'react-reveal/Slide';

const MoreInfoSection = () => {
    return (
        <div className="bg-white flex flex-col px-2 md:px-10 lg:px-10 py-16 space-y-10 lg:space-y-10 font-visblyround">
            <Slide top cascade>
                <div className="space-y-3 text-2xl lg:text-6xl font-bold tracking-wider w-full">
                    <p>at Afrihealth, we are dedicated to improving your life through modern medicine and innovative technology built around your comfort. </p>
                </div>
            </Slide>
            <Slide left cascade>
                <div className="space-y-10 text-base lg:text-3xl">
                    <p>
                        We have built a healthcare platform that offers full-spectrum care, from diagnosis to medication therapy. With the widest network of medical resources and avant-garde software engineering, Afrihealth seamlessly connects telemedicine, diagnostics, pharmacy services, & Insurance to provide better, affordable healthcare.
                    </p>
                    <p>
                        We have built a platform that solves the riddle of regional bottlenecks like poor emergency response times, inadequate access to medical personnel, the epidemic of counterfeit drugs & sparse access to risk protection schemes.
                    </p>
                    <p>
                        Our team of software engineers have leveraged advances in Artificial Intelligence and network security to augment the reach of physicians and provide on-demand access whilst ensuring that you get the best and safest access to our platform.
                    </p>
                    <p>
                        We work alongside you; never imposing any decision on you by providing information to help you make educated, important judgments about your healthcare; only being a partner in your journey to absolute wellness. We provide reports from the cost of their treatment to where their medication is sourced and never hiding behind any technicality.
                    </p>
                    <p>
                        Fundamental to our approach is helping patients navigate care choices while generating transient personal treatment plans focused on convenience, transparency, affordability and kindness.
                    </p>
                    <p>
                        Our goal is to break down the obstacles between primary care and socially determined barriers to create a nigh-perfect experience in healthcare. Your convenience means care whenever, wherever, and however you need it -  immediate virtual professional consults,  stable access to medical service providers, obtainability to safe medications & coverage through HMOs without an intimidating heap of paperwork.
                    </p>
                    <p>
                        The result is a reimagined healthcare not limited by economics or location run by a team of world-class medical personnel and software engineers to deliver empathy-driven virtual primary care just for you.
                    </p>
                </div>
            </Slide>
        </div>
    );
};

export default MoreInfoSection;