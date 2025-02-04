import React, { FC } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
interface actionbtnprops {
  text?: string;
  onClick?: () => void;
}

const ActionBtn: FC<actionbtnprops> = ({ text, onClick }) => {
  const router = useRouter();
  const routeToMemoForm = () => {
    window.open("/restaurant/memoForm", "_blank");
  };
  return (
    <Button
      onClick={text === "Contact us" ? routeToMemoForm : onClick}
      className="rounded-lg bg-[#0E2254] text-lg font-bold"
    >
      {text}
    </Button>
  );
};

export default ActionBtn;
