import Breadcrumb from "@/components/common/Breadrumb";

export default function ServicesPage() {  

    return (
        <main>
              <Breadcrumb title="Services" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        </main>
    );
}