import * as z from "zod";

export const OrderSchema = z.object({
  id: z.string().optional(),
  customerName: z
    .string()
    .min(2, {
      message: "Customer name must be at least 2 characters long",
    }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters long",
  }),
  orderNumber: z.string().optional(),
  totalAmount: z.coerce.number({
    message: "Total amount must be a positive number",
  }),
  date: z.string().optional().or(z.date({
    message: "Date must be a valid date",
  })),
});

export const DeleteOrderSchema = z.object({
  id: z.string(),
});