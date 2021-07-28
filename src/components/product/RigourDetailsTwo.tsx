import React from "react";
import Fade from 'react-reveal/Fade';

const RigourDetails2 = () => {
    return (
        <Fade right>
            <div className="bg-gray-normal flex flex-col-reverse lg:flex-row
        px-2 md:px-10 lg:px-10 py-16 lg:space-x-20 space-y-10 lg:space-y-0 font-visblyround">

                <div className="bg-white pt-8 px-5 lg:px-10 lg:w-2/3 rounded-3xl">
                    <div className="space-y-5">
                        <div className="flex w-full justify-between items-center">
                            <p className="text-xl font-bold">Telemedicine</p>
                            <div>
                                <img
                                    src="/images/product/plus.png" />
                            </div>
                        </div>

                        <p className="text-lg lg:text-xl tracking-wider w-3/4">
                            Get access to the largest network of healthcare professionals.
                        </p>
                        <p className="text-lg lg:text-xl tracking-wider w-3/4">
                            We are designed to offer convenient care remotely at your schedule when you book medical appointments through our rigour+ app.
                        </p>
                        <p className="text-lg lg:text-xl tracking-wider w-3/4">
                            Our medical personnel consider different factors, such as your medical and genetic history, before determining prescriptions.
                        </p>
                        <p className="text-lg lg:text-xl tracking-wider w-3/4">
                            You can choose from our pool of doctors; Whether male and female, doctors who speak your language, or with a certain specialty so you feel comfortable as they are integrated into your medication therapy to improve the chances of success.
                        </p>
                        <p className="text-lg lg:text-xl tracking-wider w-3/4">
                            You can choose from our pool of doctors; Whether male and female, doctors who speak your language, or with a certain speciality so you feel comfortable as they are integrated into your medication therapy to improve the chances of success.
                        </p>
                        <p className="text-lg lg:text-xl tracking-wider w-3/4">
                            Our physicians undergo credentialing to ensure they are board-certified and licensed, as well as a professional experience evaluation before being approved to practise with us. We also provide them guidelines and protocols to ensure that services are standardized across the board.
                        </p>
                        <p className="text-lg lg:text-xl tracking-wider w-3/4">
                            We at Afrihealth actively critique our methods to guarantee a failsafe measure of care around diagnosis & prescriptions.
                        </p>
                        <p className="text-lg lg:text-xl tracking-wider w-3/4">
                            Schedule an appointment whenever you want, wherever you are and with whomever you want!
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            className="lg:h-96"
                            src="/images/medical_access/med_access.png" />
                    </div>
                </div>

                <div className="bg-white rounded-lg lg:w-2/3 flex flex-col
            lg:space-y-20">
                    <div className="rounded-3xl py-8 px-5 lg:px-10 space-y-10">
                        <div className="flex w-full justify-between items-center">
                            <p className="text-xl font-bold">Ambulance Booking</p>
                            <div>
                                <img
                                    src="/images/product/plus.png" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p className="text-lg lg:text-xl tracking-wider lg:w-2/3">
                                Get access to swift and safe emergency medical attention.
                            </p>
                            <p className="text-lg lg:text-xl tracking-wider lg:w-2/3">
                                At AfriHealth, we understand the importance of an emergency medical unit so we integrated an easy-to-use ambulance booking service into the Rigour+ app.
                            </p>
                            <p className="text-lg lg:text-xl tracking-wider lg:w-2/3">
                                With the widest array of medical personnel, ambulance vehicles and emergency response centres, we provide premium crisis response for whatever emergency you or your loved ones are facing through our Rigour+ app.
                            </p>
                            <p className="text-lg lg:text-xl tracking-wider lg:w-2/3">
                                From the moment a distress call is made, Afrihealth takes total responsibility for the welfare of your ward while our team of professional first-time responders give expert help to control the situation while easing you of anxiety until the ambulance arrives.
                            </p>
                            <p className="text-lg lg:text-xl tracking-wider lg:w-2/3">
                                With ambulance vehicles owned by Afrihealth and our over 75 partner hospitals in Lagos, rest assured of the quickest response time despite the location.
                            </p>
                            <p className="text-lg lg:text-xl tracking-wider lg:w-2/3">
                                Rigour+ additionally eases the burden of adding your location as your GPS enabled device lets us know where relief is needed. In the same vein, your ward’s ambulance’s real-time location data is available in-app to assuage your fears of safety.
                            </p>
                            <p className="text-lg lg:text-xl tracking-wider lg:w-2/3">
                                Further, Rigour+ provides the ability to get the cost estimate of the ambulance service in-app immediately you make your request.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img
                                src="/images/product/bus.png" />
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default RigourDetails2;