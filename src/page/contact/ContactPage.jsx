import Breadcrumb from "@/components/common/Breadrumb";

export default function ContactPage() {
  return (
    <main>
         <Breadcrumb title="Contact Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
    </main>
  )
}