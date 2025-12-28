import { fetchProps } from "../types/types";

const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL || "";

export const handleFetch = async ({
  abortRef,
  setStatus,
  setError,
  setResult,
  url,
}: fetchProps) => {
  abortRef.current?.abort();

  const abortcontroller = new AbortController();
  abortRef.current = abortcontroller;

  try {
    setStatus("loading");
    setError("");

    const res = await fetch(`${baseUrl}${url}`, {
      signal: abortcontroller.signal,
    });

    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();

    setResult(data);
    setStatus("success");
  } catch (err) {
    if ((err as Error).name === "AbortError") return; // ignore abort errors
    setError((err as Error).message);
    setStatus("error");
  }
};
