import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "@/public/assets/svgs";
import React from "react";

interface DineInTabProps {
  name: string;
  placeholder: string;
  options: string[];
  orderNo: string;
  showOrderNoDropDown: boolean;
}

const OrderTabHeader: React.FC<DineInTabProps> = ({
  name,
  placeholder,
  options,
  orderNo,
  showOrderNoDropDown,
}) => {
  return (
    <div className="p-4 flex items-center gap-4 justify-between px-5">
      {/* Back Button & Heading */}
      <div>
        <div className="flex items-center gap-3">
          <ArrowLeft />
          <h1 className="text-xl font-semibold">Dine-In Order</h1>
        </div>
        <span className="text-gray-500 text-xs">
          Select options for your preferred item
        </span>
      </div>

      {/* Select Dropdown */}
      {showOrderNoDropDown ? (
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Label htmlFor={name} className="whitespace-nowrap">
            Table No.:
          </Label>
          <Select>
            <SelectTrigger
              id={name}
              className="w-auto h-8 rounded-lg border border-gray-300 px-3"
              aria-label="Select table number"
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : (
        ""
      )}

      {/* Order Number */}
      <p className="text-gray-700 font-medium">
        Order No.: {orderNo || "0255"}
      </p>
    </div>
  );
};

export default OrderTabHeader;
