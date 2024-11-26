import * as z from "zod";

export const TeamSchema = z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string().nullable().optional(),
  isAdmin: z.boolean().optional(),
  isApproved: z.boolean().optional(),
  image: z.string().nullable().optional(),
  location: z.string().nullable().optional(),
  username: z.string().optional(),
  hashedPassword: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});