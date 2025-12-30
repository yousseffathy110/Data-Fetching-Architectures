import { Card } from "./ui/card";
import { Product } from "@/app/types/types";
import { cn } from "@/lib/utils";

const sharedStyle = "text-center text-base cepitalize";

export default function ProductCard({ data }: { data: Product }) {
  return (
    <Card className="p-3 flex flex-col gap-2 items-center">
      <p className={cn(sharedStyle)}>
        <span className="text-green-800">ID:</span> <strong>{data?.id}</strong>
      </p>
      <p className={cn(sharedStyle, "text-lg")}>
        Title: <i>{data?.title}</i>
      </p>
      <p className={cn(sharedStyle)}>
        <span className="text-teal-700">Price: </span>{" "}
        <strong>{data?.price}</strong>
      </p>
    </Card>
  );
}
