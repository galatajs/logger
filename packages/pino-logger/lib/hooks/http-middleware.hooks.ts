import { createPinoLogger } from "./pino.hooks";
import { NextFunction, Request, Response } from "@istanbul/http";
import { DestinationStream, LoggerOptions } from "pino";

export const createPinoHttpMiddleware = <
  T extends LoggerOptions | DestinationStream
>(
  options: T
): ((req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction) => {
    req.logger = createPinoLogger<T>(options);
    next();
  };
};
