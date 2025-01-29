import React from 'react'

const Exportservice = () => {
    return (
        <section className="banner relative  py-[50px] h-full md:h-[125vh] lg:py-[100px] w-full ">
            <div className="absolute w-full h-[100vh] -z-10">
                <img src="https://uithemez.com/i/artech/home6_modernAgency/assets/img/boxes.png" className="w-full h-full rotate-6" alt="" />
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col justify-center text-center head">
                    <h1 className="text-[20px] sm:text-[50px] goblin_one_regular">Our Expert Services</h1>
                    <div className="mx-auto w-full md:w-[800px] relative mb-[75px]">
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] left-[-20%] z-50"></div>
                        <p className="text-[20px] sm:text-[25px] poppins_thin text-[#ef4523]">“We help brands grow with customized marketing strategies.”</p>
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] right-[-20%] z-50"></div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Exportservice