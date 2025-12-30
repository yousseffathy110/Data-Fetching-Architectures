import { CreateProductPayload } from "../../types/types";

export const createProduct = async ({
  url,
  data,
}: {
  url: string;
  data: CreateProductPayload;
}): Promise<CreateProductPayload> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) console.error("Failed to create product");
  const product = await res.json();
  return product;
};
