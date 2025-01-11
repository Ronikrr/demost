import React from "react";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import Logo from "../assets/logo/logo.png";
import { BsEnvelope } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="capitalize shadow-lg footer poppins_thin ">
            <div className="container mx-auto">
                <div className="pt-[60px] flex flex-wrap border-t w-full border-[#f6f6f6] gap-[30px] ">
                    <div className="lg:p-[10px] mb-[30px] w-full flex flex-col lg:flex-row items-center gap-[30px]">
                        <div className="flex flex-col w-full lg:w-4/12 gap-[30px] ">
                            <Link className="w-full">
                                <img src={Logo} className="h-[51px] w-[191px]" alt="" />
                            </Link>
                            <Link href="" className="w-full flex items-center gap-[15px]">
                                <div className="w-[30px] h-[30px] border-2 rounded-full border-black flex items-center justify-center">
                                    <FaPhoneAlt />
                                </div>
                                <p className="text-[22px] font-medium " >9727168583</p>
                            </Link>
                            <Link href="" className="w-full flex items-center gap-[15px]">
                                <div className="w-[30px] h-[30px] border-2 rounded-full border-black flex items-center justify-center">
                                    <BsEnvelope />
                                </div>
                                <p className="text-[22px] font-medium " >info.dominname.com</p>
                            </Link>
                        </div>
                        <div className="flex flex-col w-full lg:w-2/12 ">
                            <h4 className="mb-[20px] text-[22px]">Quick Link</h4>
                            <div className="flex flex-col w-full">
                                <Link href="" className="pb-[15px]" >home</Link>
                                <Link href="" className="pb-[15px]" >about</Link>
                                <Link href="" className="pb-[15px]" >service</Link>
                                <Link href="" className="pb-[15px]" >blog</Link>
                            </div>
                        </div>
                        <div className="flex flex-col w-full lg:w-2/12 ">
                            <h4 className="mb-[20px] text-[22px]">support us</h4>
                            <div className="flex flex-col w-full">
                                <Link href="" className="pb-[15px]" >contact us</Link>
                                <Link href="" className="pb-[15px]" >Terms & Conditions</Link>
                                <Link href="" className="pb-[15px]" >Career</Link>
                                <Link href="" className="pb-[15px]" >Help</Link>
                            </div>
                        </div>
                        <div className="flex flex-col w-full lg:w-4/12 ">
                            <h4 className="mb-[20px] text-[15px] lg:text-[22px]">Subscribe Our Newsletter</h4>
                            <div className="flex w-full  items-center gap-3 mb-[20px] flex-row">
                                <input type="text" className="px-4 py-2 rounded-xl border w-6/12 lg:w-7/12 border-[#ef4523] bg-[#f7f7f7]" />
                                <button class="bg-[#ef4523] text-[#f7f7f7] border border-[#000000] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                    <span class="bg-[#000000] shadow-[#000000] absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                    subscribe
                                </button>
                            </div>
                            <div className="flex items-center justify-center gap-4 ">
                                <Link href="" className="flex items-center ">
                                    <div className="w-[30px] h-[30px] border-2 rounded-full border-black flex items-center justify-center">
                                        <FaPinterestP />
                                    </div>

                                </Link>
                                <Link href="" className="flex items-center ">
                                    <div className="w-[30px] h-[30px] border-2 rounded-full border-black flex items-center justify-center">
                                        <FaXTwitter />
                                    </div>

                                </Link>
                                <Link href="" className="flex items-center ">
                                    <div className="w-[30px] h-[30px] border-2 rounded-full border-black flex items-center justify-center">
                                        <FaFacebookF />
                                    </div>

                                </Link>
                                <Link href="" className="flex items-center ">
                                    <div className="w-[30px] h-[30px] border-2 rounded-full border-black flex items-center justify-center">
                                        <FaInstagram />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=" text-center w-full border-t border-[#f6f6f6] py-[50px]">
                        <p>Copyright © 2024 All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;