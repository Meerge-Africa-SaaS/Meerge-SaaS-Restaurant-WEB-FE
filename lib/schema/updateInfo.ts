import { z } from "zod";

export const UpdateEmailSchema = z.object({
  email: z.string().email("Invalid email format"),
});

export const UpdatePhoneSchema = z.object({
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .regex(/^\+?\d+$/, "Invalid phone number format"),
});
