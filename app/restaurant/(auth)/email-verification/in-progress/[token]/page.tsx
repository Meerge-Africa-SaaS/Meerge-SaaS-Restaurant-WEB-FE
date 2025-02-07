"use client";
import Logo from "@/components/ui/logo";
import { useRouter } from "next/navigation";

const TokenPage = ({ params }: { params: { token: string } }) => {
  const router = useRouter();
  const { token } = params; 

  
  const verifyToken = async () => {
    console.log("Verifying token:", token);
    await new Promise((resolve) => setTimeout(resolve, 1500)); 
    router.replace("/restaurant/email-verification/done"); 
  };

  verifyToken();

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl">
      <div>
        <div className="w-full max-w-md flex flex-col items-center text-center space-y-6 mx-auto mb-10">
          <Logo />
        </div>
      </div>
      <div className="flex items-center justify-center bg-white flex-col">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mt-10 "></div>
        <h1 className="font-bold ">Verifying your email...</h1>
      </div>
    </div>
  );
};

export default TokenPage;
