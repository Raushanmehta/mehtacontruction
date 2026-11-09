import Breadcrumb from "@/components/common/Breadrumb";

export default function PricingPage() {  

    return (
        <main>
              <Breadcrumb title="Pricing" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
        </main>
    );
}