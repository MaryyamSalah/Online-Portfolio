import React from "react";

const Contact = () => {
  return (
    <section className="bg-zinc-800 px-5 py-24" id="contact">
       
      <div className="text-center md:w-[60%] mx-auto text-white">
    
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-rose-700 pb-2">
          Contact Me
        </h2>
        <p className="text-white mb-12">
          I am currently open for a fulltime Junior Frontend Web Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>
        <div className="relative flex flex-col min-w-0 break-words py-8 px-12 bg-gray-200 w-full mb-8 shadow-lg rounded-lg">
        <div className="relative w-full mb-3 mt-8 text-start">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3 text-start">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3 text-start">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <a
                        className="btn bg-rose-900 shadow-lg rounded-lg   text-white px-6 py-3 hover:bg-rose-700 hover:text-black"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        href="mailto:maryyamsalah20@gmail.com"
                      >
                        Send Message
                      </a>
                    </div>
       </div>
       </div>
    </section>
  );
};

export default Contact;