"use client";
import CustomTable from "@/components/CustomTable";

import { fetcher } from "./fetcher";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NativeFetch() {
  const [result, setResult] = useState([]);

  const handleFetch = async () => {
    const result = await fetcher({ url: "/products", method: "GET" });
    console.log(result);
    setResult(result);
  };
  return (
    <div className="w-full flex items-center flex-col gap-4 p-5">
      <Button onClick={handleFetch} className="self-center text-lg">
        Fetch Data
      </Button>
      <CustomTable result={result} />
    </div>
  );
}
