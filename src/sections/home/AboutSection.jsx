

/* ------------------------------------------------------------------ */
/*  Hero image shape                                                   */
/*  A 960 × 384 box with a notch at the bottom-left, a raised tab at   */
/*  the top-right and a cut-out at the bottom-right (where the stats   */
/*  card sits). Each point is [x, y, cornerRadius]; corners are        */
/*  rounded automatically, both convex and concave.                    */
/* ------------------------------------------------------------------ */
const W = 960;
const H = 384;

const SHAPE = [
  [0, 52, 20], //     top-left
  [836, 52, 20], //   where the top edge meets the tab
  [836, 0, 24], //    tab, top-left
  [960, 0, 24], //    tab, top-right
  [960, 280, 24], //  tab, bottom-right
  [746, 280, 24], //  where the stats card begins
  [746, 384, 32], //  bottom-right
  [70, 384, 28], //   bottom-left
  [70, 184, 20], //   inner corner of the left notch
  [0, 184, 20], //    left notch, top
];

const roundedPath = (pts) => {
  const n = pts.length;
  return (
    pts
      .map(([x, y, r], i) => {
        const [px, py] = pts[(i - 1 + n) % n];
        const [nx, ny] = pts[(i + 1) % n];
        const l1 = Math.hypot(x - px, y - py);
        const l2 = Math.hypot(nx - x, ny - y);
        const u1 = [(x - px) / l1, (y - py) / l1];
        const u2 = [(nx - x) / l2, (ny - y) / l2];
        const a = [x - u1[0] * r, y - u1[1] * r];
        const b = [x + u2[0] * r, y + u2[1] * r];
        const sweep = u1[0] * u2[1] - u1[1] * u2[0] > 0 ? 1 : 0;
        return `${i === 0 ? "M" : "L"}${a[0]} ${a[1]}A${r} ${r} 0 0 ${sweep} ${b[0]} ${b[1]}`;
      })
      .join("") + "Z"
  );
};

const HERO_PATH = roundedPath(SHAPE);

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */
const RED = "text-[#fb2c36]";

const Asterisk = () => (
  <svg
    viewBox="0 0 12 12"
    aria-hidden="true"
    className="h-[clamp(9px,1.5cqw,14px)] w-[clamp(9px,1.5cqw,14px)]"
  >
    <path
      d="M6 1v10M1 6h10M2.5 2.5l7 7M9.5 2.5l-7 7"
      stroke="#fb2c36"
      strokeWidth="1.4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const SocialLink = ({ label, href = "#", children }) => (
  <a
    href={href}
    aria-label={label}
    className="grid h-[clamp(12px,2.3cqw,22px)] w-[clamp(12px,2.3cqw,22px)] place-items-center rounded-[5px] border border-[#e5e7eb] bg-white/60 p-[8%] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006699]"
  >
    {children}
  </a>
);

const Facebook = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
    <rect width="24" height="24" rx="5" fill="#0037c1" />
    <path
      fill="#fff"
      d="M13.5 22v-8h2.6l.4-3.1h-3V9c0-.9.3-1.5 1.6-1.5h1.6V4.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8V14h2.5v8z"
    />
  </svg>
);

const Instagram = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
    <defs>
      <linearGradient id="hero-ig-grad" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#fdc830" />
        <stop offset=".5" stopColor="#f3245e" />
        <stop offset="1" stopColor="#8a3ab9" />
      </linearGradient>
    </defs>
    <rect
      x="2.5"
      y="2.5"
      width="19"
      height="19"
      rx="5.5"
      fill="none"
      stroke="url(#hero-ig-grad)"
      strokeWidth="2.4"
    />
    <circle
      cx="12"
      cy="12"
      r="4.3"
      fill="none"
      stroke="url(#hero-ig-grad)"
      strokeWidth="2.4"
    />
    <circle cx="17.6" cy="6.4" r="1.4" fill="url(#hero-ig-grad)" />
  </svg>
);

const LinkedIn = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
    <rect width="24" height="24" rx="4" fill="#006699" />
    <rect x="5.4" y="9.5" width="2.8" height="8.6" fill="#fff" />
    <circle cx="6.8" cy="6.5" r="1.7" fill="#fff" />
    <path
      fill="#fff"
      d="M10.6 9.5h2.7v1.2c.5-.9 1.6-1.4 2.8-1.4 2.4 0 3.1 1.6 3.1 3.7v5.1h-2.8v-4.4c0-1-.2-1.8-1.3-1.8-1.1 0-1.6.8-1.6 1.9v4.3h-2.9z"
    />
  </svg>
);

const YouTube = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full">
    <rect x="1" y="4.5" width="22" height="15" rx="4.5" fill="#ff0000" />
    <path fill="#fff" d="M9.8 8.8l5.6 3.2-5.6 3.2z" />
  </svg>
);

const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function AboutSection() {
  return (
    <section className="relative bg-white py-14 sm:py-16 lg:py-14  md:px-16">
     

      {/* Inter (swap for your own font loading if you prefer) */}
      <style>{`@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");`}</style>

       <div className="relative mx-auto max-w-[1350px] px-6">
        {/* ---------------- Hero visual ---------------- */}
        <div className="relative aspect-[960/384] w-full [container-type:inline-size]">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            role="img"
            className="absolute inset-0 h-full w-full"
          >
            <title>Modern glass building rising into a cloudy blue sky</title>
            <defs>
              <clipPath id="hero-shape-clip">
                <path d={HERO_PATH} />
              </clipPath>
            </defs>
            <image
              href="https://i.pinimg.com/736x/5a/18/f1/5a18f1348e43ffbf1088e05c125c0bf1.jpg"
              width={W}
              height={H}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#hero-shape-clip)"
            />
          </svg>

          {/* Top band: label + socials (sits above the image, left of the tab) */}
          <div className="absolute left-0 top-0 flex h-[13.54%] w-[84.6%] items-center justify-between pl-[0.6%]">
            <div className="flex items-center gap-[0.9cqw]">
              <Asterisk />
              <span className="text-[length:clamp(7px,1.15cqw,11px)] font-semibold uppercase tracking-wide text-[#6a7282]">
                Who I am
              </span>
            </div>

            <div className="flex items-center gap-[2.08cqw]">
              <SocialLink label="Facebook">
                <Facebook />
              </SocialLink>
              <SocialLink label="Instagram">
                <Instagram />
              </SocialLink>
              <SocialLink label="LinkedIn">
                <LinkedIn />
              </SocialLink>
              <SocialLink label="YouTube">
                <YouTube />
              </SocialLink>
            </div>
          </div>

          {/* Stats card (fills the bottom-right cut-out) */}
          <div className="absolute bottom-0 right-0 h-[27.08%] w-[22.5%] pl-[2.9cqw] pt-[3cqw]">
            <p className="whitespace-nowrap text-[length:clamp(12px,2.92cqw,28px)] font-normal leading-[1.25] tracking-[-0.01em]">
              <span className={RED}>100+</span>{" "}
              <span className="uppercase text-[#4a5565]">Brands</span>
            </p>
            <p className="mt-[0.6cqw] whitespace-nowrap text-[length:clamp(7px,1.25cqw,12px)] leading-[1.35] text-[#6a7282]">
              <span className={`font-bold ${RED}`}>30%</span> higher engagement
            </p>
          </div>
        </div>

        {/* ---------------- Quick facts ---------------- */}
        <div className="mt-3 flex items-center gap-2.5 text-xs leading-4 text-[#6a7282]">
          <span>
            <b className={`font-bold ${RED}`}>10+</b> years of experience
          </span>
          <span aria-hidden="true" className="h-3 w-px bg-[#d1d5dc]" />
          <span>
            <b className={`font-bold ${RED}`}>3 million</b> words
          </span>
        </div>

        {/* ---------------- Copy + profile ---------------- */}
        <div className="mt-5 grid gap-x-12 gap-y-8 md:grid-cols-[632fr_280fr]">
          <div>
            <h1
              id="hero-title"
              className="text-[30px] font-semibold leading-[1.13] tracking-[-0.02em] text-[#101828] sm:text-[34px] lg:text-[39px]"
            >
              Crafting Words That Make a Difference.
            </h1>

            <div className="mt-5 grid gap-x-[26px] gap-y-4 text-justify text-[12px] leading-[22px] text-[#6a7282] sm:grid-cols-2">
              <p>
                My journey began as a passionate writer and evolved into a
                strategic copywriting career. I specialize in transforming ideas
                into compelling content that helps brands grow.
              </p>
              <p>
                Every brand has a story, and I specialize in telling yours with
                clarity and impact. By blending creativity with strategy, I
                write content that resonates with audiences.
              </p>
            </div>
          </div>

          <aside className="flex flex-col md:items-end md:text-right">
            <p className={`text-[18px] font-semibold uppercase leading-6 tracking-[0.05em] ${RED}`}>
              Sangvi
            </p>
            <p className="mt-2.5 text-[10px] leading-4 text-[#6a7282]">
              Copywriter | Content Strategist
            </p>

            <p className="mt-6 text-[12px] font-medium leading-5 tracking-[-0.01em] text-[#364153]">
              Ready to transform your brand&rsquo;s message into results?
            </p>

            <a
              href="#contact"
              className="group mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-[#171717] px-5 py-3.5 text-[12px] font-bold uppercase leading-4 tracking-tight text-white shadow-[0_8px_16px_-4px_rgba(0,0,0,0.45)] transition-colors hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717]"
            >
              Let&rsquo;s collaborate
              <ArrowRight />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
