import React from 'react'

const Aboutsectoion = () => {
    return (
        <section
            className="banner relative pt-[75px] pb-[75px] md:pt-[118px] md:pb-[100px]   ">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center text-center head">
                    <h1 className='text-[30px] lg:text-[50px] goblin_one_regular' >About BBD (Who We Are)</h1>
                    <div className="  mx-auto w-full md:w-[600px]  relative mb-[75px] ">
                        <div className="absolute hidden md:block bg-black w-[153px] h-[2px] top-[50%] left-[-150px] z-50">
                        </div>
                        <p className='text-[30px] instrument text-[#ef4523]' >"Your Trusted Digital Growth Partner"</p>
                        <div className="absolute hidden md:block bg-black w-[153px] h-[2px] top-[50%] right-[-150px] z-50">
                        </div>
                    </div>
                    <p className='font-medium text-[24px] instrument'>
                        BBD (BadeBazarkaDigital) offers cutting-edge digital marketing and social media optimization solutions to drive your business growth.</p>
                </div>
            </div>
        </section>
    )
}

export default Aboutsectoion