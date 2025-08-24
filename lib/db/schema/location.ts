import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";

export const locations = sqliteTable("locations", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text(),
  lat: real().notNull(),
  long: real().notNull(),
  userId: int().notNull().references(() => user.id),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$onUpdate(() => Date.now()),
});
