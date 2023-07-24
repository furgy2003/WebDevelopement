import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="ths-logo" width={50} height={50} />
    </Link>
  );
}
