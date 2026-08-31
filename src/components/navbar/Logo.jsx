import { Link } from "react-router-dom";


export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <img
        src="/image/mehta-contruction-logo-blue.png"
        alt="Mehta Construction"
        className="h-16 w-auto"
      />
    </Link>
  );
}