import React from 'react';
import boy_3 from '../assets/banner/rb_86609.png';
import plus from '../assets/banner/image 178.png';

const Whychoose = () => {
    return (
        <section className="banner relative  py-[50px] h-full md:h-[200vh] lg:py-[100px] w-full ">
            <div className="absolute w-full h-[150vh] -z-10">
                <img src="https://uithemez.com/i/artech/home6_modernAgency/assets/img/boxes.png" className="w-full h-full -rotate-6" alt="" />
            </div>
            <div className="container mx-auto">
                {/* Heading Section */}
                <div className="flex flex-col justify-center text-center head">
                    <h1 className="text-[20px] sm:text-[50px] goblin_one_regular">Why Choose Us..!</h1>
                    <div className="mx-auto w-full md:w-[600px] relative mb-[75px]">
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] z-50"></div>
                        <p className="text-[20px] sm:text-[25px] poppins_thin text-[#ef4523]">"Why Choose BBD ?"</p>
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] right-0 z-50"></div>
                    </div>
                </div>

                {/* First Section */}
                <div className="flex flex-col relative pb-[95px] lg:pb-0 lg:absolute xl:left-32 4xl:top-[-64px] 4xl:left-[-25px] justify-center w-full mx-auto text-center md:w-[436px] h-full lg:h-[506px] head">
                        <img src={boy_3} className="  xl:w-[300px] xl:h-[365px] 4xl:w-[436px] 4xl:h-[506px]" alt="" />
                    </div>
                <div className="relative flex items-center w-full poppins_thin justify-center lg:pt-[95px]  flex-col sm:flex-row">
                    <div className="flex flex-col relative right-0 xl:absolute xl:top-[57px] xl:left-[477px] justify-center w-full text-center md:w-[754px] head">
                        <img src={plus} className="w-[206px] sm:w-[306px] h-[206px] sm:h-[306px] left-[-40%] lg:left-0 absolute" alt="" />
                        <h1 className="text-[18px] sm:text-[24px]">✅ Expert Digital Marketers</h1>
                        <div className="mx-auto w-full md:w-[600px] relative mt-[150px]">
                            <p className="text-[14px] sm:text-[18px] poppins_thin text-black">Skilled professionals crafting winning <br /> marketing strategies</p>
                        </div>
                        <img src={plus} className="w-[206px] sm:w-[306px] h-[206px] sm:h-[306px] right-[-40%] lg:right-0 absolute" alt="" />
                    </div>
                </div>

                {/* Second Section */}
                <div className="w-full poppins_thin flex flex-col sm:flex-row justify-center mt-[75px]">
                    <div className="flex flex-col relative xl:absolute xl:top-[700px] 2xl:right-[-10px] 4xl:right-[109px] justify-center w-full text-center md:w-[754px] head">
                        <img src={plus} className="w-[206px] sm:w-[306px] h-[206px] sm:h-[306px] left-[-40%] lg:left-0 absolute" alt="" />
                        <h1 className="text-[18px] sm:text-[24px]">✅ Data-Driven Strategies</h1>
                        <div className="mx-auto w-full md:w-[600px] relative mt-[150px]">
                            <p className="text-[14px] sm:text-[17px] instrument text-black">Skilled professionals crafting winning <br /> marketing strategies</p>
                        </div>
                        <img src={plus} className="w-[206px] sm:w-[306px] h-[206px] sm:h-[306px]  right-[-40%] lg:right-0 absolute" alt="" />
                    </div>
                </div>

                {/* Third Section */}
                <div className="w-full poppins_thin flex flex-col sm:flex-row justify-center mt-[75px]">
                    <div className="flex flex-col relative xl:absolute xl:top-[850px]  2xl:left-[40px] 4xl:left-[160px] justify-center w-full text-center md:w-[754px] head">
                        <img src={plus} className="w-[206px] sm:w-[306px] h-[206px] sm:h-[306px] left-[-40%] lg:left-0 absolute" alt="" />
                        <h1 className="text-[18px] sm:text-[24px]">✅ Customized Growth Plans</h1>
                        <div className="mx-auto w-full md:w-[600px] relative mt-[150px]">
                            <p className="text-[14px] sm:text-[17px] instrument text-black">Skilled professionals crafting winning <br /> marketing strategies</p>
                        </div>
                        <img src={plus} className="w-[206px] sm:w-[306px] h-[206px] sm:h-[306px] right-[-40%] lg:right-0 absolute" alt="" />
                    </div>
                </div>

                {/* Fourth Section */}
                <div className="w-full poppins_thin flex flex-col sm:flex-row justify-center mt-[75px]">
                    <div className="flex flex-col relative xl:absolute xl:top-[1215px] xl:left-[485px] 4xl:top-[1215px] 4xl:left-[606px] justify-center w-full text-center md:w-[754px] head">
                        <img src={plus} className="w-[206px] sm:w-[306px] h-[206px] sm:h-[306px] left-[-40%] lg:left-0 absolute" alt="" />
                        <h1 className="text-[18px] sm:text-[24px]">✅ Proven Results Guaranteed</h1>
                        <div className="mx-auto w-full md:w-[600px] relative mt-[150px]">
                            <p className="text-[14px] sm:text-[18px] poppins_thin text-black">Skilled professionals crafting winning <br /> marketing strategies</p>
                        </div>
                        <img src={plus} className="w-[206px] sm:w-[306px] h-[206px] sm:h-[306px] right-[-40%] lg:right-0 absolute" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Whychoose;
