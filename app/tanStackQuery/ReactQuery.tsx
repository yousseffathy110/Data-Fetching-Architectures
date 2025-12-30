"use client";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

import { Loader } from "lucide-react";
import { GetAllProducts } from "./api/getProducts";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createProduct } from "./api/createProduct";
import { CreateProductPayload } from "../types/types";

export default function ReactQuery() {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [addproduct, setAddProduct] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const [title, setTitle] = useState<string | "">("");
  const [id, setId] = useState<number | "">("");

  const queryClient = useQueryClient();

  const { data, isLoading, error } = GetAllProducts({
    url: "/products",
    staleTime: 4000,
    enabled,
  });

  const mutation = useMutation({
    mutationFn: (product: CreateProductPayload) => {
      return createProduct({ url: "/products", data: product });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const resetForm = () => {
    setId("");
    setPrice(0);
    setTitle("");
  };

  const onCreateProduct = () => {
    if (addproduct) {
      mutation.mutate({
        id: Number(id),
        price: Number(price),
        title: String(title),
      });
    }
    resetForm();
    setAddProduct(!addproduct);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <div className="flex gap-4 flex-wrap justify-center">
        <Button onClick={() => setEnabled(true)}>List All Products</Button>
        <Button onClick={onCreateProduct} disabled={mutation.isPending}>
          {addproduct ? "Add Product" : "Create Product"}
          {mutation.isPending && <Loader className="animate-spin" />}
        </Button>
        <Button>Delete Product</Button>
      </div>

      {addproduct && (
        <div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-1">
              <Label htmlFor="product-id" className="text-base">
                Enter Product ID
              </Label>
              <Input
                id="product-id"
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value === "" ? "" : Number(e.target.value))}
              ></Input>
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="product-price" className="text-base">
                Enter Product Price
              </Label>
              <Input
                id="product-price"
                type="number"
                min={0}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              ></Input>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <Label htmlFor="product-title" className="text-base">
              Enter Product Title
            </Label>
            <Input
              id="product-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></Input>
          </div>
        </div>
      )}

      {error && <p>{error.message}</p>}

      {isLoading ? (
        <Loader className="animate-spin" />
      ) : (
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.map((product) => {
            return (
              <ProductCard key={product.id + "SHAgdfy484h8"} data={product} />
            );
          })}
        </div>
      )}
    </div>
  );
}
