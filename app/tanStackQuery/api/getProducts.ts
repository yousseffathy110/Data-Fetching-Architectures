import { useQuery } from "@tanstack/react-query";
import { returnedData } from "../../types/types";

export const GetAllProducts = ({
  url,
  staleTime,
  enabled = true,
}: {
  url: string;
  staleTime?: number;
  enabled?: boolean;
}) => {
  return useQuery<returnedData>({
    queryKey: ["products"],
    queryFn: () => GetProducts({ url }),
    staleTime: staleTime ?? 1000 * 60 * 1, // 1 minute
    enabled,
  });
};

const GetProducts = async ({
  url,
}: {
  url: string;
}): Promise<returnedData> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`);
  if (!res.ok) console.error("Failed to fetch data");
  const products = await res.json();
  return products;
};
