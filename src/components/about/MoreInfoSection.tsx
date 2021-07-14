import React from "react";
import Slide from 'react-reveal/Slide';

const MoreInfoSection = () => {
    return (
        <div className="bg-white flex flex-col px-2 md:px-10 lg:px-10 py-16 space-y-10 lg:space-y-10 font-custom">
            <Slide top cascade>
                <div className="space-y-3 text-2xl lg:text-6xl font-bold tracking-wider w-full">
                    <p>at afrihealth we aim to create an</p>
                    <p>easy and accessible flow of quality</p>
                    <p>health care</p>
                </div>
            </Slide>
            <Slide left cascade>
                <div className="space-y-10 text-base lg:text-3xl">
                    <p>
                        to everyone in afria and the world at large. The importance of quality health care is uncontested and we belive
                        that everyone, no matter the social or economic status deserves access
                        to premium healthcare
                    </p>
                    <p>
                        afrihealth addresses key issues that are crippling to the healthcare system in africa, focusing on areas affected by neglect, poor health
                        management, and inaccessibilty to risk protection schemes, with an alarming number of cases escalating due to the issues listed above and even more, we at afrihealth aim to significantly reduce the impact of these mishaps.
                    </p>
                    <p>
                        twith years of proper research, afrihealth has curated and designed
                        a range of products and services, partenring with certified healthcare
                        providers, health maintenance organisations, pharmacies, laboratories and
                        other essentail health services to make solutons accessible to africans and the world at large.
                    </p>
                </div>
            </Slide>
        </div>
    );
};

export default MoreInfoSection;