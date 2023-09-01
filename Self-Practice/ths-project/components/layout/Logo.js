// react-next
import Link from "next/link";

// components
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/img/company/ths-logo.png"
        alt="ths-logo"
        width={50}
        height={50}
      />
    </Link>
  );
}
