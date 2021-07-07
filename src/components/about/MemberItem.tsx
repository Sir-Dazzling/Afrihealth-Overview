import React from 'react';
import { TeamMemberItemProps } from '../../interfaces';

const MemberItem = ({
    firstName,
    lastname,
    title,
    imgUrl,
    position
}: TeamMemberItemProps) => {
    console.log(imgUrl);
    
    return (
        <div className="relative rounded-3xl lg:w-full h-96"
        style={{
            background: `linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0) 93%),
            url(${imgUrl})`,
            backgroundSize: "cover",
            height: 500
        }}>
            <div 
            className="relative">
                <div className="absolute -bottom-96 justify-self-end self-end left-5 z-10 text-white
                text-xl lg:text-2xl text-left">
                    <p className="font-bold">{title}{firstName} <span className="font-thin">{lastname}</span></p>
                    <p className="font-bold">{position}</p>
                </div>
            </div>
        </div>
    );
};

export default MemberItem;