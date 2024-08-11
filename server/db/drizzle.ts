import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as eventSchema from "./schema/event";

const config = useRuntimeConfig();
const sql = neon(config.pgUrl);

export const db = drizzle(sql, { schema: { ...eventSchema } });
