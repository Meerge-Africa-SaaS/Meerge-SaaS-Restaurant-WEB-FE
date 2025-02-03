import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ClassNames } from "@emotion/react";

interface Testimonial {
  content: string;
  name: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "I can say my business has found an easy-to-use product with Meerge solution. The process of getting my staff to learn how it works was pretty simple.",
    name: "Akani",
    role: "Business Owner",
  },
  {
    content:
      "At first, we needed to understand how Meerge was going to help us with operations before getting onboard. I believe we made a good decision too.",
    name: "Olayemi",
    role: "Restaurant Manager",
  },
  {
    content:
      "We started talking with the Customer team and it didn't take long for us to conclude on using Meerge to manage some of our routine business activities.",
    name: "Chef Janet",
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  return (
    <div className="relative">
    <Card
      className={`h-auto bg-white text-black hover:shadow-lg transition-shadow ${
        index === 1 ? "lg:absolute top-20 text-center" : "text-center"
      }`}
    >
      <CardContent className="p-6 flex flex-col justify-between gap-10 h-full">
        <p className="text-gray-700 mb-6 italic">
          &quot;{testimonial.content}&quot;
        </p>
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          {testimonial.role && (
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          )}
        </div>
      </CardContent>
    </Card>
    </div>
    
  );
};

const TestimonialsSection = () => {
  return (
    <section className="section z-20 relative container mx-auto px-6 py-16">
      <h2 className="text-center font-medium mb-16 w-full mt-20 text-3xl md:text-4xl ">
        Here&apos;s what{" "}
        <span className="font-bold md:inline block">our trusted partners</span>{" "}
        <br />
        <span className="block">say about us</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
