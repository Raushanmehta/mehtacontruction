import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HireButton() {
  return (
    <Button
      className="rounded-full bg-[#0081CD]/10 text-black hover:bg-[#0081CD] px-6 h-10"
    >
      Contact Us
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}