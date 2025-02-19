"use client"

import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // To fix hydration error
  }, []);

  if (!mounted) {
    return <>{children}</>; 
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
