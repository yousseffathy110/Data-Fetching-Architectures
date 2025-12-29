import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex gap-5 w-full h-screen justify-center items-center">
      <Link href="/nativeFetch">
        <Button size={"lg"} className="text-lg">
          Native Fetch
        </Button>
      </Link>
      <Link href="/tanStackQuery">
        <Button size={"lg"} className="text-lg">
          TanStack Query
        </Button>
      </Link>
    </div>
  );
}
