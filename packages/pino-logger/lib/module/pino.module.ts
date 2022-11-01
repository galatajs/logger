import { createModule, Module } from "@galatajs/app";
import { DestinationStream, LoggerOptions } from "pino";
import { PinoEnum } from "./pino.enum";
import { PinoService } from "./pino.service";

export const createPinoModule = <T extends LoggerOptions | DestinationStream>(
  options: T
): Module => {
  return createModule(PinoEnum.Module, {
    global: true,
    providers: [
      {
        name: PinoEnum.Options,
        value: options,
      },
      PinoService<T>,
    ],
    exports: [PinoService<T>],
  });
};
