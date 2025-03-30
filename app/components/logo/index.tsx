"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logoSrc = theme === "dark" ? "/logo/logo-white.svg" : "/logo/logo-dark.svg";

  return <Image src={logoSrc} alt="Logo" width={50} height={50} priority />;
}
