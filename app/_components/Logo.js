import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="relative min-h-16 min-w-36 lg:h-22 lg:w-44 transition-all">
      <Link href="/">
        <Image
          src="/logo-transparent.png"
          alt="Cultre BOAT Logo"
          fill
          className="object-contain"
        />
      </Link>
    </div>
  );
}

export default Logo;
