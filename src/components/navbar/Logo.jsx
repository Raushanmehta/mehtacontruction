import { Link } from "react-router-dom";


export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <img
        src="https://mehtaconstructions.com/wp-content/uploads/2018/02/tata-1.png"
        alt="Mehta Construction"
        className="h-20 w-auto"
      />
    </Link>
  );
}