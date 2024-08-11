"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useEffect } from "react";
import { Provider, useAtom } from "jotai";
import { loadingAtom } from "@/src/app/store";
import LoadingPage from "@/src/components/loadingpage/Loading";
import { useLoading } from "@/src/hook/useLoading";

const queryClient = new QueryClient();

interface TanstackProviderProps {
  children: ReactNode;
}

const TanstackProvider = ({ children }: TanstackProviderProps) => {
  const [loading] = useAtom(loadingAtom);
  useLoading();

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <QueryClientProvider client={queryClient}>
          <Provider>{children}</Provider>
        </QueryClientProvider>
      )}
    </>
  );
};

export default TanstackProvider;
