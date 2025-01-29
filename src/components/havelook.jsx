import React from 'react'
import img from '../assets/howto/Asset 3@4x 4.png'
import img1 from '../assets/howto/Asset 9@4x 1.png'
import img2 from '../assets/howto/BPH@4x 3.png'
import img3 from '../assets/howto/Group 450.png'
import img4 from '../assets/howto/scc 1.png'
const Exportservice = () => {
    const data = [
        { id: 1, title: "Social Media Optimization", subtitle: "Boost engagement & visibility with expert social media strategies." },
        { id: 2, title: "Digital Marketing Campaigns", subtitle: "Drive results with targeted, highimpact marketing campaigns." },
        { id: 3, title: "SEO & Content Marketing", subtitle: "Rank higher, attract traffic & convert leads with powerful content." },
        { id: 4, title: "PPC Advertising", subtitle: "Maximize ROI with data-driven, high-converting paid ads." },
        { id: 5, title: "Brand Strategy & Consulting", subtitle: "Build a strong brand identity & long-term business growth." }
    ]
    const images = [
        { id: 1, src: img },
        { id: 2, src: img2 },
        { id: 3, src: img4 },
        { id: 4, src: img1 },
        { id: 5, src: img3 }
    ]
    return (
        <section className="banner relative  pt-[0px] pb-[50px] h-full lg:pb-[50px] lg:pt-0 w-full ">

            <div className="container mx-auto mt-[50px]">
                <div className="flex flex-col justify-center text-center head">
                    <h1 className="text-[20px] sm:text-[50px] goblin_one_regular">Have a Look</h1>
                    <div className="mx-auto w-full md:w-[800px] relative mb-[50px]">
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] left-[10%]  z-50"></div>
                        <p className="text-[20px] sm:text-[25px] poppins_thin text-[#ef4523]">“We’re Working with”</p>
                        <div className="absolute hidden md:block bg-black w-[170px] h-[1px] top-[50%] right-[10%] z-50"></div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center w-full ">
                    <div className="w-full py-[25px]  mx-auto flex flex-wrap space-y-[50px] lg:space-y-0 justify-between items-start text-center my-[20px] mx-auto  rounded-[20px]  space-x-[10px] ">
                        {images.map((data, index) => (
                            <div className="w-full h-[100px] lg:w-2/12 " key={index} >
                                <img src={data.src} className='object-contain w-full h-full aspect-video' alt="" />
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Exportservice