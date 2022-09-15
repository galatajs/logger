import { PinoRequest } from "./middleware.types";

declare module "@istanbul/http" {
  interface Http1Request extends PinoRequest {}
  interface Http2Request extends PinoRequest {}
}
