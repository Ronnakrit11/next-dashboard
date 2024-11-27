"use server"
import { actionClient } from "@/lib/safe-action"
import { revalidatePath } from "next/cache"
import { db } from "../db"
import { DeleteOrderSchema, OrderSchema } from "@/types/orders-schema"

export const addOrder = actionClient
  .schema(OrderSchema)
  .action(
    async ({ parsedInput: {customerName, address, totalAmount } }) => {
      await db.orders.create({
        data: {
          customerName: customerName,
          address: address,
          totalAmount: totalAmount,
        }})
    revalidatePath("/", "layout")
    return {success: `Order has been created successfully`}
  })

export const deleteOrder = actionClient
  .schema(DeleteOrderSchema)
  .action(
    async ({ parsedInput: { id } }) => {
      await db.orders.delete({
        where: {id: id}
        })
    revalidatePath("/", "layout")
    return
  })