import { Button } from "@/components/ui/button";
import AnimatedArrowIcon from "@/components/icons/AnimatedArrowIcon";

function HireButton({ text = "Contact us", className, ...props }) {
  return (
    <Button
      type="button"
      variant="cta"
      size="cta"
      className={className}
      {...props}
    >
      {text}
      <AnimatedArrowIcon />
    </Button>
  );
}

export { HireButton };
export default HireButton;
