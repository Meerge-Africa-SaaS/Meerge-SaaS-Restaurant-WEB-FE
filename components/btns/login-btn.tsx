import React, { FC } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
interface LoginProps {
  isScrolled: boolean;
}

const LoginBtn: FC<LoginProps> = ({ isScrolled }) => {
    const router = useRouter()
    function routeToLogin(){
        router.replace("/restaurant/login")
    }
  return (
    <Button
      onClick={routeToLogin}
      className={`px-8 py-2 ${
        isScrolled
          ? "bg-[#FF4101] text-white hover:bg-[#0E2254] transition-colors"
          : "bg-white text-black hover:bg-[#FF4101] transition-colors"
      }`}
    >
      Login
    </Button>
  );
};

export default LoginBtn;
