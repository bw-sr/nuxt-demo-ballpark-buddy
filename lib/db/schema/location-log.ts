import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { locations } from "./location";

export const locationLogs = sqliteTable("locationLogs", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  startedAt: int().notNull(),
  endedAt: int().notNull(),
  lat: real().notNull(),
  long: real().notNull(),
  userId: int().notNull().references(() => user.id),
  locationId: int().notNull().references(() => locations.id, { onDelete: "cascade" }),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
