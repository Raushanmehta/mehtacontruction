import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: 1,
    navTitle: "Digital Planning Access",
    headline:
      "Before you apply, make sure you meet the following certification requirements:",
    subheading: "Eligibility requirements",
    items: [
      { text: "Complete the four course training modules" },
      {
        text: "3 years of on-the-job experience in construction projects or built environment projects",
        subtext: "Must be within the past 10 years",
      },
    ],
    actionBtnText: "Not Eligible? View Other Certifications",
  },
  {
    step: 2,
    navTitle: "Material & Labor Tracking",
    headline: "Fill out and submit your application online:",
    subheading: "Application requirements",
    items: [
      { text: "Provide detailed project experience and role descriptions" },
      { text: "Submit training course completion proofs and documentation" },
    ],
    actionBtnText: "Application Guide",
  },
  {
    step: 3,
    navTitle: "Live Site Updates",
    headline: "Review fees and schedule your proctored session:",
    subheading: "Payment & Scheduling",
    items: [
      { text: "Pay exam fees securely via card or organizational voucher" },
      { text: "Choose in-person test center or online proctored exam date" },
    ],
    actionBtnText: "View Exam Locations",
  },
  {
    step: 4,
    navTitle: "Smart Project Control",
    headline: "Prepare thoroughly with official reference guides:",
    subheading: "Exam day preparation",
    items: [
      { text: "Review the PMI-CP exam content outline and blueprint" },
      { text: "Take practice tests to benchmark your readiness" },
    ],
    actionBtnText: "Exam Prep Resources",
  },
  {
    step: 5,
    navTitle: "Digital Handover Care",
    headline: "Prepare thoroughly with official reference guides:",
    subheading: "Exam day preparation",
    items: [
      { text: "Review the PMI-CP exam content outline and blueprint" },
      { text: "Take practice tests to benchmark your readiness" },
    ],
    actionBtnText: "Exam Prep Resources",
  },
];

export default function ProcessSection() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => api.off("select", handleSelect);
  }, [api]);

  return (
    <div className="w-full font-sans antialiased">
      <div className="bg-white">
        <div className="mx-auto max-w-[1365px] px-5 pt-14 pb-0 sm:px-8">
          {/* Heading */}
        <div className=" mb-6 lg:mb-8">
          <p className="mb-2 text-sm uppercase tracking-[3px] text-[#FF6118]">
           Our Process
          </p>

          <h2 className="text-2xl uppercase font-normal text-black md:text-5xl" style={{ fontFamily: "Anton, sans-serif" }}>
           Buil with Technology and Innovation
          </h2>
        </div>

          {/* Stepper Navigation */}
          <div className="grid grid-cols-5 gap-0 ">
            {steps.map((item, index) => {
              const isActive = current === index;
              return (
                <Button
                  type="button"
                  variant="ghost"
                  size="lg"
                  key={item.step}
                  onClick={() => api?.scrollTo(index)}
                  className={`relative h-auto w-full justify-start rounded-none border-0 px-4 pt-3 pb-6 text-left transition-all ${
                    isActive
                      ? " bg-gradient-to-b from-white to-[#FF6118] "
                      : ""
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold ${
                        isActive
                          ? "bg-[#000000] text-white"
                          : "border border-[#FF6118] text-[#333333]"
                      }`}
                    >
                      {item.step}
                    </span>
                    <span
                      className={`text-sm font-semibold leading-snug ${
                        isActive ? "text-[#000000]" : "text-[#555555]"
                      }`}
                    >
                      {item.navTitle}
                    </span>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Carousel Body Section */}
      <div className="w-full bg-gradient-to-b from-[#FF6118] to-white">
        <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-8">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {steps.map((item) => (
                <CarouselItem key={item.step}>
                  <div className="min-h-[280px] flex flex-col justify-between">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold text-[#000000] max-w-3xl leading-snug">
                      {item.headline}
                    </h2>

                    <div className="space-y-4 pt-2">
                      <h3 className="text-base font-bold text-[#000000]">
                        {item.subheading}
                      </h3>

                      <ul className="space-y-3">
                        {item.items.map((bullet, idx) => (
                          <li key={idx} className="text-sm text-[#333333]">
                            <div className="flex items-start gap-2">
                              <span className="font-bold text-xs mt-0.5">•</span>
                              <span>{bullet.text}</span>
                            </div>
                            {bullet.subtext && (
                              <p className="text-xs text-[#666666] ml-3.5 mt-1">
                                {bullet.subtext}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Actions Bar */}
                  <div className="flex items-center justify-between pt-12">
                    <div className="flex items-center gap-6">
                      <Button
                        render={<a href="#faqs" />}
                        variant="link"
                        size="sm"
                        className="h-auto gap-1.5 px-0 text-sm font-semibold text-[#000000] hover:underline"
                      >
                        View FAQs <ArrowRight className="w-3.5 h-3.5" />
                      </Button>

                      <Button type="button" variant="cta" size="lg" className="h-auto rounded-full px-6 py-2.5 text-sm">
                        {item.actionBtnText}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Shadcn Arrow Controls */}
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        onClick={() => api?.scrollPrev()}
                        disabled={!api?.canScrollPrev()}
                        aria-label="Previous step"
                        variant="ghost"
                        size="icon-lg"
                        className="text-[#999999] hover:text-[#FF6118]"
                      >
                        <ArrowLeft className="w-6 h-6" />
                      </Button>
                      <Button
                        type="button"
                        onClick={() => api?.scrollNext()}
                        disabled={!api?.canScrollNext()}
                        aria-label="Next step"
                        variant="ghost"
                        size="icon-lg"
                        className="text-[#000000] hover:text-[#FF6118]"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}