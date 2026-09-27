import PageTopSection from "@/components/common/PageTopSection";
import AboutPageSection from "@/page/about/AboutPageSection";

export default function AboutPage() {
  return (
    <main>
       <PageTopSection title="About Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
       <AboutPageSection/>
    </main>
  )
}