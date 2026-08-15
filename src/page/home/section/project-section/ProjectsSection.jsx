
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectCard from "./ProjectSectionCard";
import Slider from "react-slick";
import ProjectSectionCard from "./ProjectSectionCard";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
    title: "Builder Floors & Duplex Unit",
    location: "South Extension Part 2, South Delhi",
    plotArea: "212 sq.yds.",
    builtArea: "11250 sq.ft.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
    title: "Villa",
    location: "Sushant Lok 1, Gurugram",
    plotArea: "160 sq.yds.",
    builtArea: "4200 sq.ft.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    status: "In Progress",
    title: "Builder Floors",
    location: "Safdarjung Enclave, New Delhi",
    plotArea: "160 sq.yds.",
    builtArea: "7500 sq.ft.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
    title: "Luxury Residence",
    location: "Vasant Vihar, New Delhi",
    plotArea: "250 sq.yds.",
    builtArea: "6500 sq.ft.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    status: "In Progress",
    title: "Modern Villa",
    location: "Gurugram, Haryana",
    plotArea: "300 sq.yds.",
    builtArea: "8200 sq.ft.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    status: "Completed",
    title: "Premium Duplex",
    location: "Greater Kailash, New Delhi",
    plotArea: "200 sq.yds.",
    builtArea: "5800 sq.ft.",
  },
];



const ProjectsSection = () => {

  const settings = {
  dots: true,
  infinite: projects.length > 5,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  cssEase: "ease-in-out",

  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: "20px",
      },
    },
  ],
};
  return (
    <section className="bg-[#f8f9f7] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Recent Projects
          </h2>

          <p className="max-w-4xl mx-auto mt-4 text-gray-500 text-sm font-semibold">
            Explore our latest completed homes built with precision and care
          </p>
        </div>

        {/* Slider */}
        <div className="project-slider">
          {/* <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.title} className="px-2">
                <ProjectSectionCard project={project} />
              </div>
            ))}
          </Slider> */}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;