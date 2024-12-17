import React from 'react'
import fav from '../assets/fav.png'
const Banner = () => {
  return (
      <section
          className="banner relative pt-[100px] lg:pt-[200px] min-h-screen bg-[url('https://uithemez.com/i/artech/home6_modernAgency/assets/img/boxes.png')] bg-cover bg-center">
          <div className="container px-[15px] mx-auto 2xl:w-[1320px]">
              <div className="title relative ">
                  <h1 className="relative text-[60px] lg:text-[200px] uppercase flex flex-wrap" >
                      <div className=""> Modern </div>
                      <div className="ms-auto">  Agency  </div>
                  </h1>
                  <img src="https://uithemez.com/i/artech/home6_modernAgency/assets/img/ltr_a.png" className='absolute top-[-6%] right-[3%]  h-[50%]  ' alt="" />
                  <div className="absolute w-[220px] mt-0 h-[220px] block z-[20] lg:mt-[-30px] left-0 lg:left-[5%] bottom-[-205px] lg:bottom-0">
                      <div className="circle absolute left-0 rounded-full text-[#000] text-[30px] uppercase font-medium">
                          <svg class="textcircle" viewBox="0 0 500 500">
                              <defs>
                                  <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                                  </path>
                              </defs>
                              <text>
                                  <textPath href="#textcircle" textLength="900"> the creative proccess artechwatch </textPath>
                              </text>
                          </svg>
                      </div>
                      <img src={fav} className=" image_icon absolute left-[50%] top-[50%] h-[35px] w-[35px] object-contain"  alt="" />
                  </div>
                  <img src="https://uithemez.com/i/artech/home6_modernAgency/assets/img/vec10.png" className='absolute top-[20%] left-[16%]'  alt="" />
              </div>
              <div className="content mt-[50px] ">
                  <div className="flex flex-col lg:flex-row ">
                      <div className="w-full lg:w-4/12 px-0 lg:px-[15px] ">
                          <div className="img h-[380px] mt-[50px]">
                              <img src="https://uithemez.com/i/artech/home6_modernAgency/assets/img/head1.jpg" className='w-full h-full object-cover block max-w-full max-h-full' alt="" />
                          </div>
                      </div>
                      <div className="w-full lg:w-3/12 ml-[8.3%] px-0 lg:px-[15px]">
                          <div className="info mt-[2rem] lg:mt-[3rem] lg:mt-0">
                              <div className="text-[20px] text-[#777] leading-[1.4]">
                                  Proin consequat, velit sit amet laoreet phar lorem ex mattis purusid tincidunt metus . 
                              </div>
                              <h6 className='flex items-center text-[20px] text-[#151515] mt-[30px]' >
                                  <img src="https://uithemez.com/i/artech/home6_modernAgency/assets/img/vec2.svg" className='me-[15px] max-w-full max-h-full' alt="" />
                                  <span className='inline-block text-[#151515] ' >
                                      Special Materials <br />
                                      To Make Good <br />
                                      Artech 2024 
                                  </span>
                              </h6>
                          </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-0 lg:px-[15px]">
                          <div className="mt-[30px] lg:mt-[-140px] h-[350px]">
                              <img src="https://uithemez.com/i/artech/home6_modernAgency/assets/img/head2.jpg" className='w-full h-full object-cover block max-w-full max-h-full' alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <img src="https://uithemez.com/i/artech/home6_modernAgency/assets/img/header_shapes.png" className='absolute right-[3%] bottom-[3%] w-[90%] object-contain'  alt="" />
      </section>

  )
}

export default Banner