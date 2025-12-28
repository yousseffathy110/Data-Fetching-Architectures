type Status = "ideal" | "loading" | "error" | "success";

type returnedData = {
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
}[];

type fetchProps = {
  abortRef: RefObject<AbortController | null>;
  setStatus: Dispatch<SetStateAction<Status>>;
  setError: Dispatch<SetStateAction<string>>;
  setResult: Dispatch<SetStateAction<returnedData>>;
  url: string;
};

export { Status, returnedData, fetchProps };
