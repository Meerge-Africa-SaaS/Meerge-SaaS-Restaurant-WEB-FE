"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const CTABanner = () => {
  const routeToMemoForm = () => {
    window.open("/restaurant/memoForm", "_blank");
  };

  return (
    <section
      className="section container w-full py-12"
      style={{
        backgroundImage: "url('/assets/bar-man.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
      }}
    >
      <div className="py-10 px-8">
        <h2 className="text-2xl md:text-3xl text-white font-semibold">
          Managing your restaurant has <br className="mb-4" />
          never been more effortless.
        </h2>

        <div className="md:w-fit mt-8 bg-primary p-4 md:p-8 rounded-lg space-y-4">
          <p className="text-white text-lg">
            You&apos;re just one click away from getting <br />
            started.
          </p>

          <Button
            variant="secondary"
            className="mt-5 flex items-center gap-2 px-8 py-2 text-white hover:bg-secondary/50 transition-colors bg-[#FF4101] w-fit"
            onClick={routeToMemoForm}
          >
            Request Demo
            <MessageSquare className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
