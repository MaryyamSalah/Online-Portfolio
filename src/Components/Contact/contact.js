import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary px-5 py-56" id="contact">
      
      <div className="text-center md:w-[60%] mx-auto text-white">
    
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-cyan-700 pb-2">
          Contact Me
        </h2>
        <p className="text-blue-500">
          I am currently open for a fulltime Junior Frontend Web Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>
       
       
        <p className="py-2">
          <span className="font-bold">Email:</span> maryyamsalah20@gmail.com
        </p>
        <p className="pt-2 pb-8">
          <span className="font-bold">Phone:</span> +964 750 747 9285
        </p>
        <a className ="btn bg-accent  border-2 border-blue-900 text-white px-6 py-3  hover:bg-transparent" href="mailto:maryyamsalah20@gmail.com">Send me Email</a>
      </div>
    </section>
  );
};

export default Contact;