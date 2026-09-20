import PageTopSection from "@/components/common/PageTopSection";
import AboutSection from "@/sections/home/AboutSection";

export default function AboutPage() {
  return (
    <main>
       <PageTopSection title="About Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
       <AboutSection/>
    </main>
  )
}