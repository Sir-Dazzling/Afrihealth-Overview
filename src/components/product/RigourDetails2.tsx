import React from "react";

const RigourDetails2 = () => {
    return (
        <div className="bg-gray-normal flex flex-col-reverse lg:flex-row
        px-2 md:px-10 lg:px-32 py-16 lg:space-x-20 space-y-10 lg:space-y-0">
            <div className="bg-white pt-8 px-5 lg:px-10 lg:w-2/3 rounded-3xl">
                <div className="space-y-5">
                    <div className="flex w-full justify-between items-center">
                        <p className="text-xl font-bold">Doctor's Online Appointment</p>
                        <div>
                            <img
                                src="/images/product/plus.png" />
                        </div>
                    </div>

                    <p className="text-lg lg:text-xl tracking-wider w-3/4">
                        Experience a hassle free way of booking doctor appointments with rigour+ choose From our rich and careful selection of health care service provider’s tailored Specifically for your needs
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
                    <div>
                        <p className="text-lg lg:text-xl tracking-wider lg:w-2/3">
                            Emergecies may be unplanned, but our responses can afford not to be With the rigour+ app access to prompt ambulance response is is assured.
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
    );
};

export default RigourDetails2;