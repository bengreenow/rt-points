import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "~/server/db/drizzle";
import { events } from "~/server/db/schema/event";

const paramsSchema = z.object({
  id: z.string(),
});

export default defineEventHandler(async (e) => {
  const { id } = await getValidatedRouterParams(e, paramsSchema.parse);

  const event = await db.query.events.findFirst({
    where: (events, { eq }) => eq(events.id, id),
  });

  return event;
  // const event = await db.select().from(events).where(eq(events.id, id )).
});
