import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { returnedData } from "@/app/types/types";

export default function CustomTable({ result }: { result: returnedData }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>price</TableHead>
          <TableHead>rating</TableHead>
          <TableHead className="text-right">Title</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {result.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.rating?.rate}</TableCell>
              <TableCell className="text-right">{item.title}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
