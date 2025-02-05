import OrderBtn from "@/components/btns/orderbtn";
import Navbar from "@/components/ui/navbar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AllOrderData } from "@/lib/utils/data";
import {
  DineinIcon,
  TakeOutIcon,
  ReservationIcon,
  DeliveryIcon,
  SquareIcon,
} from "@/public/assets/svgs";
import Image from "next/image";
import React from "react";

const OrderPage = () => {
  return (
    <div>
      <div className="bg-white m-10 rounded-lg shadow">
        <div className="flex flex-col md:flex-row items-center p-5 rounded-lg gap-5 md:gap-10">
          <h1 className="text-2xl md:text-3xl font-semibold text-black text-center md:text-left">
            All Orders
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5">
            <OrderBtn text="Dine-in" icon={<DineinIcon />} />
            <OrderBtn text="Take-out" icon={<TakeOutIcon />} />
            <OrderBtn text="Reservation" icon={<ReservationIcon />} />
            <OrderBtn text="Delivery" icon={<DeliveryIcon />} />
          </div>
        </div>
        <Table className="border border-gray-300">
          <TableHeader>
            <TableRow className="bg-[#87868626] border-b border-gray-300 text-black font-bold">
              <TableHead className="border border-gray-300">
                <SquareIcon />
              </TableHead>
              <TableHead className="border border-gray-300  text-black font-bold">
                S/No.
              </TableHead>
              <TableHead className="border border-gray-300  text-black font-bold">
                Image
              </TableHead>
              <TableHead className="border border-gray-300  text-black font-bold">
                Date
              </TableHead>
              <TableHead className="border border-gray-300  text-black font-bold">
                Menu Item
              </TableHead>
              <TableHead className="border border-gray-300  text-black font-bold">
                Order Type
              </TableHead>
              <TableHead className="border border-gray-300  text-black font-bold">
                Qty
              </TableHead>
              <TableHead className="border border-gray-300  text-black font-bold">
                Amount
              </TableHead>
              <TableHead className="border border-gray-300  text-black font-bold">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {AllOrderData.map((order, index) => (
              <TableRow key={order.id} className="border border-gray-300">
                <TableCell className="border border-gray-300">
                  <SquareIcon />
                </TableCell>
                <TableCell className="border border-gray-300">
                  {index + 1}
                </TableCell>
                <TableCell className="border border-gray-300">
                  <Image
                    src={order.image}
                    alt={`${order.dish} picture`}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover rounded-md"
                  />
                </TableCell>
                <TableCell className="border border-gray-300">
                  {"20/02/2025"}
                </TableCell>
                <TableCell className="border border-gray-300">
                  {order.dish}
                </TableCell>
                <TableCell className="border border-gray-300">
                  {order.orderType}
                </TableCell>
                <TableCell className="border border-gray-300">
                  {order.quantity}
                </TableCell>
                <TableCell className="border border-gray-300">
                  {order.Total}
                </TableCell>
                <TableCell className=" flex items-center gap-2">
                  <span
                    className={`
      w-3 h-3 rounded-full 
      ${order.status === "New" ? "bg-[#166AE3]" : ""}
      ${order.status === "Pending" ? "bg-[#FFA000]" : ""}
      ${order.status === "Completed" ? "bg-[#0D9F00]" : ""}
    `}
                  ></span>
                  <span
                    className={`
      font-medium 
      ${order.status === "New" ? "text-[#166AE3]" : ""}
      ${order.status === "Pending" ? "text-[#FFA000]" : ""}
      ${order.status === "Completed" ? "text-[#0D9F00]" : ""}
    `}
                  >
                    {order.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrderPage;
