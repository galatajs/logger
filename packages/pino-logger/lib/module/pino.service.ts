import { createPinoLogger } from "../hooks/pino.hooks";
import { PinoEnum } from "./pino.enum";
import { DestinationStream, Logger, LoggerOptions } from "pino";

export class PinoService<T extends LoggerOptions | DestinationStream> {
  logger: Logger<T>;

  constructor(params: { [PinoEnum.Options]: T }) {
    this.logger = createPinoLogger<T>(params[PinoEnum.Options]);
  }
}
