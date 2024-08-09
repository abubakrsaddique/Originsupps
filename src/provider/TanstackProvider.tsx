"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { Provider } from "jotai";

const queryClient = new QueryClient();

interface TanstackProviderProps {
  children: ReactNode;
}

export default function TanstackProvider({ children }: TanstackProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>{children}</Provider>
    </QueryClientProvider>
  );
}
