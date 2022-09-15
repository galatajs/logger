import { DestinationStream, Logger, LoggerOptions } from "pino";

export type PinoLoggerAppCreator = <
  T extends LoggerOptions | DestinationStream
>(
  options: T
) => Logger<T>;
