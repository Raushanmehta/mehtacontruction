import Breadcrumb from "@/components/common/Breadrumb";

export default function CareerPage() {

    return (
       <main>
          <Breadcrumb title="Careers" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]} />
       </main>
    );
}