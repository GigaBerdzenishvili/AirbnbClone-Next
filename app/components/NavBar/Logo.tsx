"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className="logo cursor-pointer"
      height="100"
      width="100"
      alt="Logo"
      src="/images/logo.png"
    />
  );
};

export default Logo;
