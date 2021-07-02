import React from 'react';
import { TeamMemberItemProps } from '../../interfaces';

const MemberItem = ({
    firstName,
    lastname,
    title,
    imgUrl,
    position
}: TeamMemberItemProps) => {
    return (
        <div className="rounded-3xl lg:w-full">
            <div 
            className="relative">
                <img
                className="rounded-3xl"
                    src={imgUrl} />
                <div className="absolute bottom-5 left-10 z-10 text-white
                text-xl lg:text-2xl text-left">
                    <p className="font-bold">{title}{firstName} <span className="font-thin">{lastname}</span></p>
                    <p className="font-bold">{position}</p>
                </div>
            </div>
        </div>
    );
};

export default MemberItem;