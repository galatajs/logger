import pino, { DestinationStream, LoggerOptions, Logger } from "pino";
import { PinoLoggerAppCreator } from "../app/app";

export const createPinoLogger: PinoLoggerAppCreator = <
  T extends LoggerOptions | DestinationStream
>(
  options: T
): Logger<T> => {
  const instance = pino<T>(options);
  return instance;
};
