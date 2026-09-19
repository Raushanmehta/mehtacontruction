import PageTopSection from "@/components/common/PageTopSection";

export default function AboutPage() {
  return (
    <main>
       <PageTopSection title="About Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
    </main>
  )
}