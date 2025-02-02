import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

const CTABanner = () => {
  const routeToMemoForm = () => {
    window.open("/restaurant/memoForm", "_blank");
  };
  return (
    <section
      className="section container w-full"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgb(35 37 41 / 53%), rgb(35 37 41 / 53%)), url('/assets/bar-man.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
      }}
    >
      <div className="py-10 px-8">
        <h2 className="text-2xl md:text-3xl text-white font-semibold">
          Managing your restaurant has never been more effortless.
        </h2>

        <div className="w-full md:w-fit mt-8 bg-primary p-4 md:p-8 rounded-lg space-y-4">
          <p className="text-white text-lg">
            You&apos;re just one click away from getting started.
          </p>

          <Button
            asChild
            variant="secondary"
            className="mt-5 flex items-center gap-2 px-8 py-2 text-white hover:bg-secondary/50 transition-colors bg-[#FF4101] w-fit"
            onClick={routeToMemoForm}
          >Request Demo
            {/* <Link href="https://forms.gle/PVNCmsyiQgdUC7KG9">
              Request Demo
              <MessageSquare className="ml-2 h-4 w-4" />
            </Link> */}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
