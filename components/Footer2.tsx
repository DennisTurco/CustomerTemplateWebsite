import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
      <div> 
          <section className="max-w-[1200px] mx-auto px-4">
              <div className="flex flex-col md:grid md:grid-cols-3 py-5 gap-6">
                  
                  {/* Colonna 1 */}
                  <div className="py-8 px-4 w-full">
                      <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                          <img src="./images/logo.png" alt="logo" className="max-w-[50px]" />
                          Fusa & Caffè
                      </h1>
                      <p>
                          adjdhasgjhd asgyjkdasjhdga agshdga aisdhjkas asjkdjkashdjk lasaskd asmndasnmd
                          asdnasbdnbasvndb ajsm,dnasbndm jsdalsdkj al;sdasdipfqiew asdkfhassk. {" "}
                      </p>
                      <br/>
                      <div className="flex items-center gap-3">
                          <FaLocationArrow />
                          <p> Parma </p>
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                          <FaMobileAlt />
                          <p> +39 1234567890 </p>
                      </div>

                      {/* Social Icons */}
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

                  {/* Colonne Link */}
                  <div className="flex flex-col sm:flex-row md:col-span-2 gap-6">
                      <div className="w-full sm:w-1/3 px-4">
                          <h1 className="text-xl font-bold mb-3">Link Importanti</h1>
                          <ul className="flex flex-col gap-3">
                              <li className="cursor-pointer"> Home </li>
                              <li className="cursor-pointer"> Progetti </li>
                              <li className="cursor-pointer"> Menu </li>
                              <li className="cursor-pointer"> Contattaci </li>
                          </ul>
                      </div>

                      <div className="w-full sm:w-1/3 px-4">
                          <h1 className="text-xl font-bold mb-3">Links</h1>
                          <ul className="flex flex-col gap-3">
                              <li className="cursor-pointer"> Home </li>
                              <li className="cursor-pointer"> Progetti </li>
                              <li className="cursor-pointer"> Menu </li>
                              <li className="cursor-pointer"> Contattaci </li>
                          </ul>
                      </div>

                      <div className="w-full sm:w-1/3 px-4">
                          <h1 className="text-xl font-bold mb-3">Links</h1>
                          <ul className="flex flex-col gap-3">
                              <li className="cursor-pointer"> Home </li>
                              <li className="cursor-pointer"> Progetti </li>
                              <li className="cursor-pointer"> Menu </li>
                              <li className="cursor-pointer"> Contattaci </li>
                          </ul>
                      </div>
                  </div>

              </div>

              <div className="text-center py-10 border-t-2 border-gray-300/50">
                  copyright
              </div>

          </section>
      </div>
  );
}

export default Footer;