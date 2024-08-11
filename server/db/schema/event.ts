import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, numeric } from "drizzle-orm/pg-core";

export const events = pgTable("event", {
  id: text("id").primaryKey(),

  score: numeric("score").array().notNull(),
  name: text("name").notNull(),
});
