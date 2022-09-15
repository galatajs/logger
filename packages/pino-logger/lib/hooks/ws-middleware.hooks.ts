import { GlobalMiddleware, NextFunction, Socket } from "@istanbul/ws";
import { DestinationStream, LoggerOptions } from "pino";
import { createPinoLogger } from "./pino.hooks";

export const createPinoWsMiddleware = <
  T extends LoggerOptions | DestinationStream
>(
  options: T
): GlobalMiddleware => {
  return (socket: Socket, next: NextFunction) => {
    socket.data.logger = createPinoLogger<T>(options);
    next();
  };
};
