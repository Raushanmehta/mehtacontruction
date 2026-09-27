/* ------------------------------------------------------------------ */
/*  Photo shape                                                        */
/*  A 516 × 472 box with the top-left corner stepped in. Each point is */
/*  [x, y, cornerRadius]; corners are rounded automatically, both      */
/*  convex and concave.                                                */
/* ------------------------------------------------------------------ */
const W = 516;
const H = 472;

const SHAPE = [
  [96, 0, 42], //    top-left (upper part)
  [516, 0, 42], //   top-right
  [516, 472, 42], // bottom-right
  [0, 472, 42], //   bottom-left
  [0, 194, 22], //   left step, outer corner
  [96, 194, 34], //  left step, inner corner
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

const PHOTO_PATH = roundedPath(SHAPE);

/* ------------------------------------------------------------------ */
/*  Trusted-by logos                                                   */
/* ------------------------------------------------------------------ */
const GoogleCloud = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[19px] w-[19px]">
    <defs>
      <clipPath id="agency-gcloud-clip">
        <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z" />
      </clipPath>
    </defs>
    <g clipPath="url(#agency-gcloud-clip)">
      <rect width="12" height="12" fill="#ea4335" />
      <rect x="12" width="12" height="12" fill="#4285f4" />
      <rect y="12" width="12" height="12" fill="#fbbc05" />
      <rect x="12" y="12" width="12" height="12" fill="#34a853" />
    </g>
  </svg>
);

const Webflow = () => (
  <svg viewBox="3 1 15.4 12.3" aria-hidden="true" className="h-3 w-[15px]">
    <path
      fill="#111"
      d="M15.4 1.6s-1.7 5.3-1.8 5.7c0-.4-.9-5.7-.9-5.7-1.9 0-3 1.3-3.5 2.8 0 0-1.5 3.7-1.6 4 0-.3-.3-3.9-.3-3.9C7.3 3.3 5.8 1.6 3.3 1.6L5 12.9s1.8 0 2.9 0c1.6 0 2.3-1.7 2.3-1.7l.9-2.3 1 4.2c1.7 0 2.9 0 2.9 0z"
    />
  </svg>
);

const Figma = () => (
  <svg viewBox="0 0 38 57" aria-hidden="true" className="h-4 w-[10.7px]">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe" />
    <path
      d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
      fill="#0acf83"
    />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262" />
    <path
      d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
      fill="#f24e1e"
    />
    <path
      d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
      fill="#a259ff"
    />
  </svg>
);

const Aws = () => (
  <svg viewBox="0 0 36 22" aria-hidden="true" className="h-[22px] w-7">
    <text
      x="18"
      y="11"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="700"
      fontSize="13"
      fill="#252f3e"
    >
      aws
    </text>
    <path
      d="M5 15.2c7.5 4.2 18.5 4.2 26 0M27.2 13.4l4.2 1.6-1.3 4.2"
      stroke="#ff9900"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CHIP = "inline-flex h-7 items-center rounded-full";
const CHIP_WHITE = `${CHIP} bg-white shadow-[0_1px_6px_rgba(16,24,40,0.07)]`;

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export default function AboutSection() {
  return (
    <section className="relative bg-white py-14 sm:py-16 lg:py-14  md:px-16">
        <style>{`@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap");`}</style>

        {/* Soft blue wash: strongest bottom-left, fading out towards the photo */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(237,243,252,0)_0%,#edf3fc_100%)] [-webkit-mask-image:linear-gradient(to_right,#000_25%,transparent_55%)] [mask-image:linear-gradient(to_right,#000_25%,transparent_55%)]" />

        <div className="mx-auto grid max-w-5xl items-start gap-12   lg:grid-cols-[508fr_516fr] lg:gap-0 max-w-[1350px] px-6">
          {/* ---------------- Copy ---------------- */}
          <div className="pt-0.5">
            <span className="inline-flex h-8 text-sm uppercase tracking-[3px]  items-center rounded-lg bg-black px-4  text-white">
             About US
      
            </span>

            <h1 className="mt-7 leading-[1.475] text-[#181818]  text-2xl font-bold text-slate-800 md:text-4xl">
              A{" "}
              <span className="bg-[linear-gradient(90deg,#1a6be0_0%,#1359bd_60%,#04275f_100%)] bg-clip-text text-transparent">
                Digital Creative
                <br className="hidden lg:block" /> Agency
              </span>{" "}
              from Denmark
            </h1>

            <p className=" relative mx-auto  max-w-[1350px] px-6 text-sm leading-6 text-[#6b6d72]">
              Deploy, manage and troubleshoot cloud-native applications
              <br className="hidden lg:block" /> at scale without overwhelming
              your engineers with the
              <br className="hidden lg:block" /> complexity of Kubernetes.
            </p>

            <div className="mt-7 flex flex-wrap gap-[18px]">
              <a
                href="#demo"
                className="inline-flex h-11 items-center rounded-xl bg-[linear-gradient(90deg,#0565ea,#0d55b8)] px-[26px] text-sm font-medium text-white shadow-[0_4px_10px_-4px_rgba(5,102,234,0.35)] transition-[filter,transform] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0565ea] active:translate-y-px"
              >
                Book a demo
              </a>
              <a
                href="#platform"
                className="inline-flex h-11 items-center rounded-xl bg-white px-[26px] text-sm font-medium text-[#4a4d54] shadow-[0_2px_12px_rgba(16,24,40,0.06)] transition-shadow hover:shadow-[0_4px_16px_rgba(16,24,40,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0565ea]"
              >
                Watch our platform
              </a>
            </div>

            <p className="mt-[45px] text-[13px] font-semibold leading-5 text-[#5c5f66]">
              Trusted by
            </p>

            <ul
              aria-label="Trusted by"
              className="mt-[18px] flex flex-wrap items-center gap-3"
            >
              <li className={`${CHIP_WHITE} gap-1.5 px-3`}>
                <GoogleCloud />
                <span className="text-[12px] font-medium text-[#5f6368]">
                  Google Cloud
                </span>
              </li>
              <li className={`${CHIP_WHITE} gap-1.5 px-2.5`}>
                <Webflow />
                <span className="text-[11px] font-bold text-[#1c1c3a]">
                  Webflow
                </span>
              </li>
              <li className={`${CHIP_WHITE} gap-2 px-2.5`}>
                <Figma />
                <span className="text-[12px] font-medium text-[#4a4d54]">
                  Figma
                </span>
              </li>
              <li className={`${CHIP} bg-white/30 px-3.5`}>
                <Aws />
                <span className="sr-only">Amazon Web Services</span>
              </li>
            </ul>
          </div>

          {/* ---------------- Photo ---------------- */}
          <div className="relative aspect-[516/472] w-full">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              role="img"
              className="absolute inset-0 h-full w-full"
            >
              <title>
                Four smiling colleagues gathered around a laptop in a studio
              </title>
              <defs>
                <clipPath id="agency-photo-clip">
                  <path d={PHOTO_PATH} />
                </clipPath>
              </defs>
              <image
                href="https://kurativz.com/images/about-company.jpg"
                width={W}
                height={H}
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#agency-photo-clip)"
              />
            </svg>
          </div>
        </div>

    </section>
  );
}
