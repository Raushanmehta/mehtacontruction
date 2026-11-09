import Breadcrumb from "@/components/common/Breadrumb";

export default function TeamPage() {  

    return (
        <main>
              <Breadcrumb title="Team" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]} />
        </main>
    );
}