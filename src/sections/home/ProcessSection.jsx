import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
      <div className="bg-white border-b border-[#e5e5e5]">
        <div className="mx-auto max-w-[1365px] px-5 pt-14 pb-0 sm:px-8">
          <h1 className="text-4xl font-bold text-[#1a0b3b] tracking-tight mb-12">
             Build With Technologies.
          </h1>

          {/* Stepper Navigation */}
          <div className="grid grid-cols-5 gap-0 ">
            {steps.map((item, index) => {
              const isActive = current === index;
              return (
                <button
                  key={item.step}
                  onClick={() => api?.scrollTo(index)}
                  className={`relative text-left pt-3 pb-6 px-4 transition-all border-t-2 ${
                    isActive
                      ? "border-[#1a0b3b] bg-gradient-to-b from-white to-[#FFF4EB]"
                      : "border-transparent border-l border-[#e5e5e5] first:border-l-0"
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold ${
                        isActive
                          ? "bg-[#1a0b3b] text-white"
                          : "border border-[#767676] text-[#333333]"
                      }`}
                    >
                      {item.step}
                    </span>
                    <span
                      className={`text-sm font-semibold leading-snug ${
                        isActive ? "text-[#1a0b3b]" : "text-[#555555]"
                      }`}
                    >
                      {item.navTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Carousel Body Section */}
      <div className="w-full bg-gradient-to-b from-[#FFF4EB] to-white">
        <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-8">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {steps.map((item) => (
                <CarouselItem key={item.step}>
                  <div className="min-h-[280px] flex flex-col justify-between">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-semibold text-[#1a0b3b] max-w-3xl leading-snug">
                      {item.headline}
                    </h2>

                    <div className="space-y-4 pt-2">
                      <h3 className="text-base font-bold text-[#1a0b3b]">
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
                      <a
                        href="#faqs"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a0b3b] hover:underline"
                      >
                        View FAQs <ArrowRight className="w-3.5 h-3.5" />
                      </a>

                      <button className="inline-flex items-center gap-2 border border-[#1a0b3b] text-[#1a0b3b] rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-[#1a0b3b] hover:text-white transition-colors">
                        {item.actionBtnText}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Shadcn Arrow Controls */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => api?.scrollPrev()}
                        disabled={!api?.canScrollPrev()}
                        aria-label="Previous step"
                        className="text-[#999999] hover:text-[#1a0b3b] disabled:opacity-40 disabled:pointer-events-none transition-colors"
                      >
                        <ArrowLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => api?.scrollNext()}
                        disabled={!api?.canScrollNext()}
                        aria-label="Next step"
                        className="text-[#1a0b3b] hover:text-[#000] disabled:opacity-40 disabled:pointer-events-none transition-colors"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </button>
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