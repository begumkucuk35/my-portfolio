"use client"

import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Bunu ekleyerek hydration hatasını engelliyoruz
  }, []);

  if (!mounted) {
    return <>{children}</>; // İlk başta boş render edip sonra güncelliyoruz
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
