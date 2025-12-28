type fetcherParams = {
  url: string;
  params?: RequestInit;
};

const fetcher = async ({ url, params }: fetcherParams) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`${baseUrl}${url}`, params);

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};
export { fetcher };
