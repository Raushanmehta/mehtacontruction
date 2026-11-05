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
import ProjectCard from "@/components/cards/ProjectCard";


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

export default function ProjectSection() {
  const autoplay = React.useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  return (
    <section className="relative bg-white py-14 sm:py-16 lg:py-14  md:px-16">
      <div className="relative mx-auto max-w-[1350px] px-6">

        {/* Heading */}
        <div className="text-center mb-6 lg:mb-8">
          <p className="mb-2 text-sm uppercase tracking-[3px] text-[#FF6118]">
           Our Project
          </p>

          <h2 className="text-2xl uppercase font-normal text-black md:text-5xl" style={{ fontFamily: "Anton, sans-serif" }}>
           We Deliver Excellence in Every Project
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-md  text-gray-800">
           Projects that reflect our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            plugins={[autoplay]}
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
                  <ProjectCard project={project} />
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