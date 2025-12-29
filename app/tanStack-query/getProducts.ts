export const GetProducts = async ({ url }: { url: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`);
  if (!res.ok) console.error("Failed to fetch data");
  const products = await res.json();
  return products;
};
