import type { DateSchemaDefinition } from "mongoose";

interface Users {
  username: string;
  password: string;
  createdAt: date;
  updatedAt: date;
}