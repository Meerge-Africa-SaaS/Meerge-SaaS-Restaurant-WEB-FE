import { Button } from "@/components/ui/button";
import FileDropzone from "@/components/ui/file-dropzone";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useZodForm } from "@/lib/hooks/form";
import { UnregisteredBusinessSchema } from "@/lib/schema/authentication";
import { useOnboardingStepTwo } from "@/services/auth";
import React, { FC, useState } from "react";

interface iProps {
  goBack: () => void;
}

const UnregisteredBusinessDocUpload: FC<iProps> = ({ goBack }) => {
  const [resData, setResData] = useState(null);
  const unregisteredBusinessForm = useZodForm({
    schema: UnregisteredBusinessSchema,
  });
  const {
    onboardingStepTwoError,
    onboardingStepTwoIsLoading,
    onboardingStepTwoPayload,
  } = useOnboardingStepTwo((res: any) => {
    console.log(res);
    setResData(res);
  });

  const handleSubmit = unregisteredBusinessForm.handleSubmit((data) => {
    console.log("Submitted Data:", data);
    onboardingStepTwoPayload(data); 
  });

  return (
    <Form {...unregisteredBusinessForm}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          control={unregisteredBusinessForm.control}
          name="business_premise_license"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="required">Premises License</FormLabel>
              <FormControl>
                <FileDropzone
                  {...field}
                  onChange={(file) => field.onChange(file)}
                />
              </FormControl>
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
            disabled={!unregisteredBusinessForm.formState.isValid || onboardingStepTwoIsLoading}
          >
            {onboardingStepTwoIsLoading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UnregisteredBusinessDocUpload;
