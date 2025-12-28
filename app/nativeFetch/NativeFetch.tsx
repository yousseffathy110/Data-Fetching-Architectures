"use client";
import { Button } from "@/components/ui/button";
import CustomTable from "@/components/CustomTable";
import { useState, useRef, useEffect } from "react";
import { Status, returnedData } from "../types/types";
import { handleFetch } from "./fetcher";

export default function NativeFetch() {
  const [result, setResult] = useState<returnedData>([]);
  const [status, setStatus] = useState<Status>("ideal");
  const [error, setError] = useState<string>("");
  const abortRef = useRef<AbortController | null>(null);

  const onFetch = () => {
    handleFetch({
      abortRef,
      setStatus,
      setError,
      setResult,
      url: "/products",
    });
  };

  useEffect(() => {
    const controller = abortRef.current;
    return () => controller?.abort();
  }, []);

  const handleReset = () => {
    abortRef.current?.abort();
    setResult([]);
    setStatus("ideal");
    setError("");
  };

  return (
    <div className="w-full flex items-center flex-col gap-4 p-5">
      <div className="flex gap-5">
        <Button
          onClick={onFetch}
          loading={status === "loading"}
          className="text-lg"
          size="lg"
          disabled={status === "loading" || result.length > 0}
        >
          Fetch Data
        </Button>
        <Button onClick={handleReset} className="text-lg" size="lg">
          Clear
        </Button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {result.length > 0 && <CustomTable result={result} />}
    </div>
  );
}
