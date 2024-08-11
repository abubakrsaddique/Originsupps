"use client";

import { usePathname } from "next/navigation";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { loadingAtom } from "@/src/app/store";

export const useLoading = () => {
  const pathname = usePathname();
  const [, setLoading] = useAtom(loadingAtom);
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }

    previousPathname.current = pathname;
  }, [pathname, setLoading]);
};
