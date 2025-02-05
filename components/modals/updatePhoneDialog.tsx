import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import Modal from "@/components/ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useZodForm } from "@/lib/hooks/form";
import { UpdatePhoneSchema } from "@/lib/schema/updateInfo";

const UpdatePhoneDialog = () => {
  const [open, setOpen] = useState(false);

  const form = useZodForm({
    schema: UpdatePhoneSchema,
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      form.reset();
      setOpen(false);
    } catch (error) {
      console.error("Failed to update phone:", error);
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        <Modal
          id="update-profile-phone"
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          isOpen={open}
        >
          <Modal.Header>
            <h2 className="text-lg font-semibold">Update Phone Number</h2>
          </Modal.Header>
          <Modal.Body>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your phone number" 
                      {...field} 
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
          </Modal.Body>
          <Modal.Footer>
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                className="border border-gray-300 text-gray-600 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={form.formState.isSubmitting} 
                className="bg-[#0E2254] text-white hover:bg-[#0e2254e3]"
              >
                Update
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </form>
    </Form>
  );
};

export default UpdatePhoneDialog;
