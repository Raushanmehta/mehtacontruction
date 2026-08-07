import heroVideo from "@/page/home/section/video.mp4";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(90vh-64px)] w-full overflow-hidden">
      <video
        src={heroVideo}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default HeroSection;