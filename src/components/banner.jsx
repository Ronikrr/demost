import React from 'react'
import boy1 from '../assets/banner/Group_4.png'
import boy2 from '../assets/banner/Group_5.png'
import image_1 from '../assets/imag/rb_115959.png'
import image_2 from '../assets/imag/rb_115959_1.png'
const Banner = () => {

  return (
      <section
          className="banner relative pt-[100px] lg:pt-[200px] min-h-screen bg-[url('https://uithemez.com/i/artech/home6_modernAgency/assets/img/boxes.png')] bg-cover bg-center ">
          <div className="absolute w-[15%] bottom-[-32px] left-[50px]">
              <img src={boy2} className='w-[70%]' alt="" />
          </div>
          <div className="absolute top-[190px] w-[20%]  left-[70px]">
              <img src={image_1} className='w-full' alt="" />
              <div className="text-[30px] w-[40%] absolute top-[100px] right-[76px]">
                  kya kar <br /> rahe ho..
              </div>
          </div>
          <div className="absolute top-[105px] w-[35%]  right-[-50px] ">
              <img src={image_2} className='w-full' alt="" />
              <div className="text-[30px] text-center w-[50%] absolute top-[196px] right-[150px]">
                  kuch nahi <br />
                  digital agency dundh <br />
                  raha hu.!
              </div>
          </div>
          <div className="container px-[15px] mx-auto 2xl:w-[1320px]">
              <div className="relative flex items-center justify-center w-9/12 mx-auto title ">
                  <h1 className="relative text-[60px] lg:text-[300px] w-full lg:w-10/12  uppercase flex flex-wrap gap-10 xl:gap-[100px]" >
                      <div className="rotate-[-15deg] cursor-pointer relative h-[350px] group "> b
                          <div className="absolute w-[200px] duration-1000 h-[50px] shadow-xl bg-white group-hover:opacity-100  opacity-0 rotate-[30deg] bottom-[12px] left-[-80px] rounded-xl text-[30px] capitalize  text-center ">boost</div>
                      </div>
                      <div className="rotate-[15deg] cursor-pointer  relative h-[350px] group">  b
                          <div className="absolute w-[200px] duration-1000 h-[50px] shadow-xl bg-white group-hover:opacity-100  opacity-0 rotate-[-50deg] top-[75px] left-[-75px] text-[30px] capitalize text-center "><p>build</p></div>
                      </div>
                      <div className="rotate-[-5deg] cursor-pointer text-[#ef4523] relative h-[350px] group">  d
                          <div className="absolute w-[200px] duration-1000 h-[50px] shadow-xl bg-white group-hover:opacity-100  opacity-0 rotate-[-5deg] bottom-[-12px] left-[0px] text-[30px] capitalize text-center ">dominate</div>
                      </div>
                  </h1>

              </div>
          </div>
          <div className="container px-auto lg:px-0 z-20 relative 2xl:w-[1320px] mx-auto ">
              <h1 className='text-[80px] text-center lg:text-[170px] capitalize ' ><span className='text-[#ef4523]' >delivers</span> results!"</h1>
          </div>

          <div className="absolute bottom-[-190px] right-[-50px]">
              <img src={boy1} className='w-[70%]' alt="" />

          </div>

      </section>

  )
}

export default Banner