import { NotFound } from "ts-http-status-codes";

export const notFoundMiddleware = (req: any, res: any) => {
  res.status(NotFound).json({ success: false, msg: "Route does not exits" });
};
