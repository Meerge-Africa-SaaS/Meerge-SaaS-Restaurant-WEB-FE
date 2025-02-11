import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    title: "Point of sale",
    description:
      "Enable card and mobile transactions by processing payments with our POS system that helps you track sales at the restaurants and over the checkout counter.",
    icon: "/assets/archers-icon.svg",
    bgColor: "bg-[#86cdeb]",
  },
  {
    title: "Custom site",
    description:
      "Create a unique link where information about your restaurant, such as menu variety, and cuisine types can be seen when they visit you.",
    icon: "/assets/desktop-icon.svg",
    bgColor: "bg-[#EBDED6]",
  },
  {
    title: "Ops-Control",
    description:
      "Manage all in-person and online orders procurements and inventory, and staff itinerary all in one place, making your restaurant operations smoother and more organized for you.",
    icon: "/assets/ops-control-icon.svg",
    bgColor: "bg-[#C8E6FF]",
  },
  {
    title: "Mobile App",
    description:
      "Plug in to our mobile app channel that allows customers to place orders online, make reservations, and access your restaurant offerings conveniently from their smartphones anywhere.",
    icon: "/assets/mobile-app-icon.svg",
    bgColor: "bg-[#D1A753]",
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <Card
      className={`${feature.bgColor} border-none shadow-lg hover:shadow-xl transition-shadow max-w-[500px] p-5 `}
    >
      <CardContent className="p-6 space-y-4 m-auto w-fit sm:p-1">
        <div className="max-w-xl h-72 relative mb-4 sm:h-32">
          <Image
            src={feature.icon}
            alt={feature.title}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-xl sm:text-xl font-bold my-2">{feature.title}</h3>
          <p >{feature.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="px-6 container mx-auto mt-10">
      <div
        className="section mx-auto container rounded-lg py-16 relative bg-no-repeat bg-cover p-6"
        style={{
          backgroundImage: "url('/assets/chef-chopping-tomatoes.png')",
          backgroundPosition: "center top",
        }}
      >
        {/* Overlay */}
        <div className="bg-black bg-opacity-50 h-full w-full top-0 right-0 absolute z-10 rounded-2xl" />

        {/* Content */}
        <div className="z-20 relative container mx-auto px-4">
          <span className="text-white font-semibold text-xl block mb-10 bg-[#E15D25] w-fit py-3 px-3 rounded-lg my-5">
            Features
          </span>
          <h2 className="text-white lg:text-3xl md:text-xl font-bold lg:mb-12 sm:mb-5">
            Maximize your restaurant&apos;s  <br className="my-6"/>
            <span className="text-[#E15D25]">revenue</span> with our streamlined <br className="mb-6"/>
            operations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
