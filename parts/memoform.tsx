"use client";

import * as React from "react";
import { useZodForm } from "@/lib/hooks/form";
import { MemoFormSchema } from "@/lib/zod/forms/signup";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import Logo from "@/components/ui/logo";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const featureOptions = [
  "POS",
  "Customized Site",
  "Mobile App",
  "Integration",
  "Stock Manager",
  "Operations-Control",
];
const sessionTimes = ["9am-11am", "12pm-2pm", "3pm-5pm", "6pm-8pm"];
const availableDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const heardAboutOptions = [
  "Word of Mouth",
  "Pitch",
  "Google",
  "Blog",
  "Facebook",
  "Instagram",
  "WhatsApp",
  "X",
];

const MemoFormScreen = () => {
  const form = useZodForm({ schema: MemoFormSchema });

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data);
  });
  const sessionType = form.watch("demoSessionType");

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <Logo />
      <h1 className="text-3xl font-bold text-center">Book A Demo Session</h1>
      <p className="text-[#FF4101] text-lg text-center">
        See what our solution can do for your business.
      </p>

      <Form {...form}>
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Full Name */}
          <FormField
            name="fullname"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="required">Full Name</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-2xl"
                    {...field}
                    placeholder="Enter Your Full Name"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Email Address */}
          <FormField
            name="emailAddress"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="required">Email</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-2xl"
                    type="email"
                    {...field}
                    placeholder="Enter Your Email"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormField
            name="phoneNumber"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="required">Phone Number</FormLabel>
                <FormControl>
                  <PhoneInput value={field.value} onChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Restaurant Details */}
          <FormField
            name="restaurantName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="required">Food Business Name</FormLabel>
                <FormControl>
                  <Input
                    className="rounded-2xl"
                    {...field}
                    placeholder="Enter Business Name"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="restaurantAddress"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="required">
                  Food Business Address
                </FormLabel>
                <FormControl>
                  <Input
                    className="rounded-2xl"
                    {...field}
                    placeholder="Enter Business Address"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Position */}
          <FormField
            name="position"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex space-x-5"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="owner" />
                      <FormLabel className="font-normal">Owner</FormLabel>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="staff" />
                      <FormLabel className="font-normal">Staff</FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          {/* Features Selection */}
          <FormField
            name="features"
            control={form.control}
            render={() => (
              <FormItem>
                <FormLabel className="required">
                  What features would you want to use?
                </FormLabel>
                <div className="grid grid-cols-2 gap-2">
                  {featureOptions.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Checkbox
                        id={feature}
                        value={feature}
                        onCheckedChange={(checked: any) => {
                          const currentValues =
                            form.getValues("features") || [];
                          //@ts-ignore
                          form.setValue(
                            "features",
                            //@ts-ignore
                            checked
                              ? [...currentValues, feature]
                              : currentValues.filter((f) => f !== feature)
                          );
                        }}
                      />
                      <label htmlFor={feature} className="text-sm">
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              </FormItem>
            )}
          />

          {/* Demo Session Type */}
          <FormField
            name="demoSessionType"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <Label className="block font-semibold">
                  How would you want your demo session?
                </Label>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-10 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="online" />
                    <span>Online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="physical" />
                    <span>Physical</span>
                  </div>
                </RadioGroup>
              </FormItem>
            )}
          />

          {sessionType === "physical" && (
            <FormItem>
              <Label>
                Nearest Bus-Stop
              </Label>
              <Input value={"lagos"} />

            </FormItem>
          )}

          {/* Availability Selections */}
          {[
            {
              name: "timeAvailable",
              options: sessionTimes,
              placeholder: "Time Available",
            },
            {
              name: "daysAvailable",
              options: availableDays,
              placeholder: "Select Days",
            },
            {
              name: "heardAboutUs",
              options: heardAboutOptions,
              placeholder: "How did you hear about us?",
            },
          ].map(({ name, options, placeholder }) => (
            <FormField
              key={name}
              //@ts-ignore
              name={name}
              control={form.control}
              render={() => (
                <FormItem>
                  <Select>
                    <SelectTrigger
                      id={name}
                      className="mt-2 w-full h-12 rounded-xl"
                    >
                      <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem key={option} value={option.toLowerCase()}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          ))}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#0E2254] text-white py-2 rounded-md hover:bg-[#0e2254f6] hover:text-[#FF4101] mt-5"
          >
            Request Demo
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default MemoFormScreen;
