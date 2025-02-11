import { Button } from "@/components/ui/button";
import FileDropzone from "@/components/ui/file-dropzone";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useZodForm } from "@/lib/hooks/form";
import { RegisteredBusinessSchema } from "@/lib/schema/authentication";
import { useOnboardingStepTwo } from "@/services/auth";
import React, { FC, useState } from "react";

interface iProps {
  goBack: () => void;
}

const RegisteredBusinessDocUpload: FC<iProps> = ({ goBack }) => {
  const [resData, setResData] = useState(null);

  const registeredBusinessForm = useZodForm({
    schema: RegisteredBusinessSchema,
  });

  const {
    onboardingStepTwoError,
    onboardingStepTwoIsLoading,
    onboardingStepTwoPayload,
  } = useOnboardingStepTwo((res: any) => {
    console.log(res);
    setResData(res);
  });

  const handleSubmit = registeredBusinessForm.handleSubmit((data) => {
    console.log("Submitted Data:", data);
    onboardingStepTwoPayload(data); 
  });

  return (
    <Form {...registeredBusinessForm}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          control={registeredBusinessForm.control}
          name="business_registration_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="required">
                CAC Registration Number
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter registration number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={registeredBusinessForm.control}
          name="business_document"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="required">Business Document</FormLabel>
              <FormControl>
                <FileDropzone {...field} onChange={(file) => field.onChange(file)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={registeredBusinessForm.control}
          name="business_premise_license"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="required">Premises License</FormLabel>
              <FormControl>
                <FileDropzone {...field} onChange={(file) => field.onChange(file)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Show API error if exists */}
        {onboardingStepTwoError && (
            //@ts-ignore
          <p className="text-red-500 text-sm">{onboardingStepTwoError.message}</p>
        )}

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={goBack}>
            Previous
          </Button>
          <Button
            type="submit"
            className="px-4 py-2 bg-[#0E2254] text-white rounded"
            disabled={!registeredBusinessForm.formState.isValid || onboardingStepTwoIsLoading}
          >
            {onboardingStepTwoIsLoading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default RegisteredBusinessDocUpload;
