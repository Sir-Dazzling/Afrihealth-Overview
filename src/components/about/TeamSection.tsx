import React from "react";
import MemberItem from "./MemberItem";

const TeamSection = () => {
    return (
        <div className="bg-gray-100 py-16 px-2 md:px-10 lg:px-12 lg:space-x-20
        lg:space-y-20">
            <div className="text-center space-y-10 lg:space-y-20">
                <div>
                    <p className="text-3xl lg:text-7xl font-bold tracking-wider">
                        meet the team whose inspiration
                    </p>
                    <p className="text-3xl lg:text-7xl font-bold tracking-wider">
                        brngs<span className="text-blue-600"> healthcare </span>
                        to your doorsteps
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-24 lg:px-28">
                    <MemberItem
                        firstName="Adolf"
                        lastname="Wabara"
                        imgUrl="/images/team/1.png"
                        position="Co-founder president"
                        title="Dr." />
                    <MemberItem
                        firstName="Deo"
                        lastname="Ode"
                        imgUrl="/images/team/1.png"
                        position="Founder"
                        title="Dr." />
                    <MemberItem
                        firstName="Micheal"
                        lastname="Hannovam"
                        imgUrl="/images/team/3.png"
                        position="Chief Technology Officer" />
                </div>
            </div>

            <div className="lg:px-12 py-10 lg:py-0 lg:space-y-20">
                <div className="space-y-10">
                    <p className="text-3xl lg:text-7xl font-bold tracking-wider">
                        our partners
                    </p>
                    <div className="text-xl lg:text-3xl tracking-wider">
                        <p>
                            we share our vision and apassion to bring affordable healthcare to
                        </p>
                        <p>everyone with these organisations</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 py-10 lg:py-0 lg:grid-cols-3 lg:gap-40">
                    <img
                        src="/images/team/partner_1.png" />
                    <img
                        src="/images/team/partner_2.png" />
                    <img
                        src="/images/team/partner_3.png" />
                </div>
            </div>
        </div>
    );
};

export default TeamSection;