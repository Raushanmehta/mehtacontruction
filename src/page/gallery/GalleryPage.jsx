import Breadcrumb from "@/components/common/Breadrumb";

export default function GalleryPage() {  

    return (
        <main>
              <Breadcrumb title="Gallery" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />
        </main>
    );
}