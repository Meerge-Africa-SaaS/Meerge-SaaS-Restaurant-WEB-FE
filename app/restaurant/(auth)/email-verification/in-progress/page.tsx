"use client";

import Logo from "@/components/ui/logo";
import { extractVerifyToken } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const TokenPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Extract the last part of the URL as the token
  const pathSegments = pathname.split("/");
  const token = pathSegments[pathSegments.length - 1]; // Get the last part

  useEffect(() => {
    if (token) {
      console.log("Token:", token);
      extractVerifyToken(token);

      setTimeout(() => {
        router.replace("/restaurant/email-verification/done");
      }, 1500); // Small delay for UX
    } else {
      setLoading(false);
      router.replace("/restaurant/email-verification/failed");
    }
  }, [token, router]);

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-white h-fit">
      <Logo />
      {loading && (
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mt-10"></div>
      )}
      <h1 className="font-bold ml-10 text-center">Verifying your mail...</h1>
    </div>
  );
};

export default TokenPage;
