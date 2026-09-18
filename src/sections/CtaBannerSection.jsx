
import { ArrowRight, Play } from 'lucide-react';

export default function CtaBannerSection() {
  return (
    <section className="relative w-full min-h-[320px] md:min-h-[320px] flex items-center overflow-hidden py-10 md:py-10 px-6 md:px-16">
     
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" // <-- APNI BACKGROUND IMAGE KA PATH YAHA LAGEGA
          alt="Office Desk Background"
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            // Background image miss hone par light gradient fallback dikhega
            e.currentTarget.style.display = 'none';
          }}
        />
       
        {/* Soft Light Blue Overlay (Left to Right Fade) */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/95 via-sky-20/85 " />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1250px] mx-auto w-full">
        <div className="max-w-xl space-y-6">
         
          {/* Pill Badge */}
          <div className="inline-block px-3.5 py-1 bg-blue-100/80 text-blue-600 rounded-full text-[11px] md:text-xs font-semibold tracking-wider uppercase">
            Let's Grow Together
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-black text-[#031535] leading-[1.15] tracking-tight">
            Ready to Grow Your Business with{' '}
            <span className="text-blue-600">Digital Marketing?</span>
          </h2>

          {/* Subtitle / Description */}
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-lg">
            Get a customized strategy, expert guidance, and result-driven solutions to take your brand to the next level.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
           
            {/* Primary Blue Button */}
            <a
              href="/consultation"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white font-medium text-xs md:text-sm px-6 py-3.5 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 group"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Play Video Trigger */}
            <button
              type="button"
              onClick={() => alert('Video Player Modal Open')}
              className="inline-flex items-center gap-3 text-[#031535] hover:text-blue-600 font-bold text-xs md:text-sm transition-colors group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Watch Our Video</span>
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}