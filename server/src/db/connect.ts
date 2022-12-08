import mongoose from "mongoose";
mongoose.set("strictQuery", false);

export const connectDB = (url: any) => {
  return mongoose.connect(url);
};
