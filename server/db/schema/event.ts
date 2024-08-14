import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  numeric,
  integer,
} from "drizzle-orm/pg-core";

export const events = pgTable("event", {
  id: text("id").primaryKey(),

  score: integer("score").array().notNull(),
  name: text("name").notNull(),
});
