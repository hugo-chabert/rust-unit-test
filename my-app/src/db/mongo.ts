import { MONGO_URL } from "$env/static/private";
import mongoose from "mongoose";

export default class Database {
  public async connect() {
    mongoose.connect(MONGO_URL);
  }
}
