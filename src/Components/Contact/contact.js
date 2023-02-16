import React from "react";

const Contact = () => {
  return (
    <section className="bg-primary px-5 py-56" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-cyan-700 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> maryyamsalah20@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +964 750 747 9285
        </p>
      </div>
    </section>
  );
};

export default Contact;