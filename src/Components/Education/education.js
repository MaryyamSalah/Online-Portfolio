import React from "react";

const Education = () => {
  const post = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuiEQsYM7nXbWFIOcHhTFGaUy5J971qvbH5A3wXkOFrgK-CVAzMI6byl2a9F44MNNTqpg&usqp=CAU",
      title: "Bachelor Degree in Software engineering",
      date:"1-Nov-2015 to 20-Jun-2019",
      learn: "fundamental of programming ,computer network , data security , web programming , java progarmming language,copmuter control system , data structure , image processing and many more. ",
      url: "NA",
    },
    {
      img: "https://www.re-coded.com/ReCoded-Logo-Black.png.webp",
      title: "Front-end web development",
      date:"15-Sep 2022 to 30-Jan-2023",
      learn:"HTML , CSS , React js , React redux , tailwind css, testing with jest , UX/UI Design ,firebase.",
      url: "https://www.credential.net/74d23f14-4769-428d-bca7-daf92a5d4163",
    },

    {
      img: "https://www.headwayjobs.com/images/rwanga.png",
      title: "Mobile Application development",
      date:"21-Dec 2021 to 1-Mar-2022",
      learn:"Flutter , Dart , Github , Figma and firebase.",
      url: "na",
    },
  ];

  return (
    <section className="bg-secondery text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[170px] border-cyan-700 pb-2">
            Education
          </h2>

          <p className="pb-5">Some of my  Certificates.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.title} />
              <h3 className="py-5 text-2xl font-bold">{item.title}</h3>

              <h5 className="py-5 text-xl">{item.date}</h5>
              <h6 className="py-5 text-xl mb-8">{item.learn}</h6>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-blue-900 text-white px-6 py-3 hover:bg-transparent"
              >

                View my certificate
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;