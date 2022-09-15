import { DestinationStream, LoggerOptions, Logger } from "pino";

export interface PinoRequest {
  logger: Logger<LoggerOptions | DestinationStream>;
}
