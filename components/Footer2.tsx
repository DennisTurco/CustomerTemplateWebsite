import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocantionArrow,
    FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../public/images/logo.png";

const Footer2 = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-950"> 
            <section className="max-w-[1200px] mx-auto">
            <div className=" grid md:grid-cols-3 py-5">
                <div className=" py-8 px-4 ">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                        <img src={footerLogo.src} alt="logo" className="max-w-[50px]" />
                        COFFE
                    </h1>
                    <p className="">
                        adjdhasgjhd asgyjkdasjhdga agshdga aisdhjkas asjkdjkashdjk lasaskd asmndasnmd
                        asdnasbdnbasvndb ajsm,dnasbndm jsdalsdkj al;sdasdipfqiew asdkfhassk. {" "}
                    </p>
                    <br/>
                    <div className="flex items-center gap-3">
                        <FaLocantionArrow />
                        <p> Parma </p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <FaMobileAlt />
                        <p> +39 1234567890 </p>
                    </div>

                    {/* SOcial Handler */}
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#" className="text-3xl">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-3xl">
                            <FaFacebook />
                        </a>
                        <a href="#" className="text-3xl">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
                    <div className="">
                        <div className="py-8 px-4 ">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left test-justify mb-3">
                                Link Importanti
                            </h1>
                            <ul className={`flex flex-col gap-3`}>
                                <li className="cursor-pointer"> Home </li>
                                <li className="cursor-pointer"> Progetti </li>
                                <li className="cursor-pointer"> Menu </li>
                                <li className="cursor-pointer"> Contattaci </li>
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        <div className="py-8 px-4 ">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                Links
                            </h1>
                            <ul className="flex flex-col gap-3">
                                <li className="cursor-pointer"> Home </li>
                                <li className="cursor-pointer"> Progetti </li>
                                <li className="cursor-pointer"> Menu </li>
                                <li className="cursor-pointer"> Contattaci </li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="py-8 px-4 ">
                            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                Links
                            </h1>
                            {/* <ul className="list-disc list-inside">*/}
                            <ul className="flex flex-col gap-3">
                                <li className="cursor-pointer"> Home </li>
                                <li className="cursor-pointer"> Progetti </li>
                                <li className="cursor-pointer"> Menu </li>
                                <li className="cursor-pointer"> Contattaci </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center py-10 border-t-2 border-gray-300/50">
                copyright
            </div>

            </section>
        </div>
    )
}

export default Footer2