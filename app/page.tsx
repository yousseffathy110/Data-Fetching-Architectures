"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQuery from "./tanStack-query/ReactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function page() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ReactQuery />
    </QueryClientProvider>
  );
}
