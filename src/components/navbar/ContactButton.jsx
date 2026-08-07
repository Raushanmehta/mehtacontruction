import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HireButton() {
  return (
    <Button
      className="rounded-full bg-sky-100 text-sky-700 hover:bg-sky-200 px-6 h-10"
    >
      Contact Us
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}