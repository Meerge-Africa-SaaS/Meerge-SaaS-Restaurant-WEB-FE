import React from "react";
import { Button } from "../ui/button";

interface OrderBtnProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const OrderBtn: React.FC<OrderBtnProps> = ({ text, icon, onClick }) => {
  return (
    <Button
      variant="ghost"
      className="flex items-center gap-2 bg-[#0E2254] text-white px-3 py-2 text-sm md:text-base w-full sm:w-auto hover:bg-[#0e2254dc] hover:text-white"
      onClick={onClick}
    >
      <span>{text}</span>
      {icon && (
        <div className="bg-[#FF4101] p-2 rounded-full flex justify-center items-center w-7 h-7">
          {icon}
        </div>
      )}
    </Button>
  );
};

export default OrderBtn;
