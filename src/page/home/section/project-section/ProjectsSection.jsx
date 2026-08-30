"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

export default function ProjectsSection() {
  const autoplay = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="bg-[#f8f9f7] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">

        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-2xl font-bold text-slate-800 md:text-3xl">
            Recent Projects
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-sm font-semibold text-gray-500">
            Explore our latest completed homes built with precision and care
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-8 sm:px-10">
          <Carousel
            plugins={[autoplay.current]}
            opts={{
              align: "start",
              loop: true,
              direction: "ltr",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem
                  key={project.title}
                  className="
                    pl-4
                    basis-full
                    sm:basis-1/2
                    lg:basis-1/3
                    xl:basis-1/4
                  "
                >
                  <ProjectSectionCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}