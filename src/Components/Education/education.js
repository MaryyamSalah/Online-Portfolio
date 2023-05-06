import React from "react";

export default function Education() {
 
  return (
    <>
    
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://codequotient.com/blog/wp-content/uploads/2020/12/6-Reasons-Why-Having-a-Professional-Coder-Certification-Is-Crucial.jpg')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                    Some of my  Certificates.
                    </h1>
                    <p className="mt-4 text-lg text-rose-900 font-bold shadow-lg">
                    I have successfully completed the following certifications:
                    </p>
                  </div>
                </div>

              </div>
          </div>
         
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-zinc-800 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className=" p-3 text-center inline-flex items-center justify-center w-32 h-32 mb-5 shadow-lg rounded-full bg-white ">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiEQsYM7nXbWFIOcHhTFGaUy5J971qvbH5A3wXkOFrgK-CVAzMI6byl2a9F44MNNTqpg&usqp=CAU" alt="img" />
                    </div>
                    <h6 className="text-xl font-semibold">Bachelor Degree in Software engineering</h6>
                    <h5 className="py-5 text-xl">1-Nov-2015 to 20-Jun-2019</h5>
                    <p className="mt-2 mb-4 text-white">
                    Programming, Logic Design, Computer Organization, Computer Architecture, and Object Oriented Programming & GUI. Software Requirements and Analysis, Database Systems, Web Design, Data Structures and Algorithms, Compiling Techniques. Computer Graphics, Data Communications, Mobile Programming and Applications, Image Processing, Computer Networks, Artificial Intelligence, Software Project Management.
                    </p>
                    
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className=" p-3 text-center inline-flex items-center justify-center w-32 h-32 mb-5 shadow-lg rounded-full bg-white ">
                     <img src="https://global-uploads.webflow.com/63ce921b1a2c847a9792d321/644928973654c33fea4f1ad5_Nav%20Logo.png" alt="img2" />
                    </div>
                    <h6 className="text-xl font-semibold">Front-end web development</h6>
                    <h5 className="py-5 text-xl">15-Sep 2022 to 30-Jan-2023</h5>
                    <p className="mt-2 mb-8 text-gray-600">
                    Re:Coded Immersive bootcamps are highly competitive, with a 5% acceptance rate. Completing a 4.5-month immersive web development bootcamp, with 300+ hours of curricula and project-based learning Technologies: HTML, CSS, JavaScript, and React Working with various development teams to create products across industries.
                    </p>
                    <a
                href="https://www.credential.net/74d23f14-4769-428d-bca7-daf92a5d4163"
                className=" btn bg-rose-900  shadow-lg rounded-lg   text-white px-6 py-3 hover:bg-rose-700 hover:text-black "
              >

                View my certificate
              </a>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-zinc-800 w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className=" p-3 text-center inline-flex items-center justify-center w-32 h-32 mb-5 shadow-lg rounded-full bg-white ">
                     <img src="https://thekurdishproject.org/wp-content/uploads/2015/07/RwangaLogo.png" alt="img2"/>
                    </div>
                    <h6 className="text-xl font-semibold">Mobile Application development</h6>
                    <h5 className="py-5 text-xl">21-Dec 2021 to 1-Mar-2022</h5>
                    <p className="mt-2 mb-4 text-white">
                    WeCode is an intensive training Bootcamp project implemented by Rwanga Foundation to remotely train youth in KRI with software development skills and provide adequate technical and soft skills.Technical Skills (Flutter , Dart , GitHub , Figma and Firebase). Soft Skills (Communications, Teamwork, job hunting, Interview skills, … ).
                    </p>
                    
                  </div>
                </div>
              </div>

          
               
           </div>
          
          </div>
        </section>
      </main>

    </>
  );
}