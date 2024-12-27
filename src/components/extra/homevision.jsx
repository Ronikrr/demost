import React, { useRef, useState, useEffect } from 'react';
import img from '../../assets/image.svg'
const HomeVision = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const elementRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            setCursorPosition({ x: clientX, y: clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const getRotationStyle = () => {
        if (!elementRef.current) return {};

        const element = elementRef.current.getBoundingClientRect();
        const elementCenterX = element.left + element.width / 2;
        const elementCenterY = element.top + element.height / 2;

        const angle =
            Math.atan2(cursorPosition.y - elementCenterY, cursorPosition.x - elementCenterX) *
            (180 / Math.PI);

        return {
            transform: `rotate(${angle}deg)`,
            transition: "transform 0.1s linear",
        };
    };
    return (
        <div className="homevision relative flex flex-col items-center justify-center w-full h-[60rem] overflow-hidden bg-[#ef4523] z-[-1]">
            {[...Array(4)].map((_, index) => (
                <div key={index} className="relative flex h-[12rem] flex-shrink-0 transform translate-y-5">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className={`flex  h-full ${index % 2 === 0 ? 'animate-vision-scrolllines-move' : 'animate-vision-scrolllines-mov'}`}>
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="flex items-center mr-[4rem] roboto_thin">
                                    <div className="font-bold text-black text-[12rem] leading-[12rem] tracking-[0.2rem] uppercase mr-[4rem]">
                                        visual
                                    </div>
                                    <p className="text-transparent capitalize homevisionpath stroke-black text-[12rem] leading-[12rem] tracking-[0.2rem] ml-[2rem]">
                                        first
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
            <div className="absolute w-[38rem] h-[38rem] bg-black rounded-[2rem] mt-[10rem]">
                <p className="flex justify-center items-center absolute font-zh text-[1.5rem] text-[#ef4523] top-2 left-2 ">C</p>
                <p className="flex justify-center items-center absolute font-zh text-[1.5rem] text-[#ef4523] top-2 right-2 ">C</p>
                <p className="flex justify-center items-center absolute font-zh text-[1.5rem] text-[#ef4523] bottom-2 right-2 ">C</p>
                <p className="flex justify-center items-center absolute font-zh text-[1.5rem] text-[#ef4523] bottom-2 left-2">C</p>
            </div>
            <div className=" home_vision_spidereye absolute w-[40rem] mt-[10rem]"
                ref={elementRef}
                style={getRotationStyle()}
            >
                <img src={img} alt="" className="w-full h-full" />
            </div>
        </div>
    );
};

export default HomeVision;