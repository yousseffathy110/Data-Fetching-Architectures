import { RefObject, Dispatch, SetStateAction } from "react";

type Status = "ideal" | "loading" | "error" | "success";

type Product = {
  id: number;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
  image: string;
  category: string;
  description: string;
};

type returnedData = Product[];

type fetchProps = {
  abortRef: RefObject<AbortController | null>;
  setStatus: Dispatch<SetStateAction<Status>>;
  setError: Dispatch<SetStateAction<string>>;
  setResult: Dispatch<SetStateAction<returnedData>>;
  url: string;
};

type CreateProductPayload = {
  title: string;
  price: number;
  id: number;
};

export type { Status, returnedData, fetchProps, CreateProductPayload, Product };
