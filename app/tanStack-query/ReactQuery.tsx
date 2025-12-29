import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { GetProducts } from "./getProducts";

export default function ReactQuery() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => GetProducts({ url: "/products" }),
  });

  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <div className="flex gap-4">
        <Button size={"lg"}>Create Product</Button>
        <Button size={"lg"}>Delete Product</Button>
      </div>

      {isLoading ? (
        <Loader className="animate-spin" />
      ) : (
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((product) => {
            return (
              <ProductCard key={product.id + "SHAgdfy484h8"} data={product} />
            );
          })}
        </div>
      )}
    </div>
  );
}
