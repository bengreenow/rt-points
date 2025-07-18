import {
  defineEventHandler,
  readValidatedBody,
  getValidatedRouterParams,
} from "h3";
import { z } from "zod";
import { db } from "~/server/db/drizzle";
import { events } from "~/server/db/schema/event";

const bodySchema = z.object({
  name: z.string(),
  amount: z.number(),
});

export default defineEventHandler(async (e) => {
  const body = await readValidatedBody(e, bodySchema.parse);

  const uuid = crypto.randomUUID();

  const result = await db.insert(events).values({
    id: uuid,
    name: body.name,
    score: new Array(body.amount).fill(0),
  });

  return result;
});
