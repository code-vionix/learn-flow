import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ellipsis } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";

const invoices = [
  {
    date: "21 Sep, 2021 at 2:14 AM",
    paymentStatus: "Completed",
    totalAmount: "American Express",
    paymentMethod: "visa",
  },
  {
    date: "21 Sep, 2021 at 2:14 AM",
    paymentStatus: "Pending",
    totalAmount: "American Express",
    paymentMethod: "PayPal",
  },
  {
    date: "21 Sep, 2021 at 2:14 AM",
    paymentStatus: "Canceled",
    totalAmount: "American Express",
    paymentMethod: "visa",
  },
  {
    date: "21 Sep, 2021 at 2:14 AM",
    paymentStatus: "Completed",
    totalAmount: "American Express",
    paymentMethod: "Mastercard",
  },
  {
    date: "21 Sep, 2021 at 2:14 AM",
    paymentStatus: "Completed",
    totalAmount: "American Express",
    paymentMethod: "PayPal",
  },
  {
    date: "21 Sep, 2021 at 2:14 AM",
    paymentStatus: "Pending",
    totalAmount: "American Express",
    paymentMethod: "visa",
  },
];

export default function WithdrawHistory() {
  return (
    <Card className="w-full p-0 bg-white">
      <h1 className="p-4 text-gray-900 font-medium">Withdraw History</h1>
      <Table>
        <TableHeader className="bg-gray-50 p-5">
          <TableRow>
            <TableHead className="w-[200px] pl-5">Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="px-3">
          {invoices.map((invoice, i) => (
            <TableRow
              className="border-t-0 border-b-0 hover:shadow-md text-sm py-1 h-12 text-gray-700"
              key={i}
            >
              <TableCell className="font-sm pl-5 border-none hover:shadow-sm ">
                {invoice.date}
              </TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell> {invoice.totalAmount}</TableCell>
              <TableCell
                className={`text-right ${
                  invoice.paymentStatus === "Pending"
                    ? "text-warning-500"
                    : invoice.paymentStatus === "Canceled"
                    ? "text-red-500"
                    : "text-success-500"
                } `}
              >
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="flex items-center justify-center">
                <DropdownMenu className="focus:border-none active:border-none">
                  <DropdownMenuTrigger
                    disabled={invoice.paymentStatus !== "Pending"}
                    className={`${
                      invoice.paymentStatus !== "Pending"
                        ? "text-gray-200"
                        : "text-gray-900"
                    }`}
                  >
                    <Ellipsis className="cursor-pointer" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Cancel Withdraw</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
