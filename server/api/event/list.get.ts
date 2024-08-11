import { db } from "~/server/db/drizzle";

export default defineEventHandler(async (e) => {
  const event = await db.query.events.findMany();

  return event;
});
