import "dotenv/config";
import type { Config } from "drizzle-kit";
export default {
  schema: "./server/db/schema",
  out: "./server/db/migrations",
  dialect: "postgresql",

  dbCredentials: {
    url: process.env.NUXT_PG_URL!,
  },
} satisfies Config;
