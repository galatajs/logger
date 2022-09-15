
## !! Not ready for production, experimental

<p align="center">
<br>
<img src="https://avatars.githubusercontent.com/u/108695351?s=200&v=4" width="128" height="128">
</p>
<h3 align="center">@istanbul/pino-logger</h3>
<p align="center">
  Pino Logger package of <code>istanbul</code> framework. 
</p>

### What Is It?

It allows you to logging on Istanbul Framework using the Pino package.

Features:
- Use pino the way you want
- Use pino in http middleware
- Use pino in websocket middleware
- Use pino in istanbul module
- Use pino in hook

### Installation

Note: This package is 1st degree dependent on ``istanbul`` to work. Please take a look at [`@istanbul/app`](https://www.npmjs.com/package/@istanbul/app) first if you haven't. 

```sh
npm install @istanbul/pino-logger pino
```

> or with yarn
>
> ```sh
> yarn add @istanbul/pino-logger pino
> ```

### Usage Options

#### With module

With this option, import the pino module provided by `istanbuljs` in your main module, then inject and use it in a module provider of your choice.

import:

```ts
import { createPinoModule } from "@istanbul/pino-logger";
import { createModule, Module } from "@istanbul/app";
import { DemoProvider } from "./demo.provider"

const mainModule : Module = createModule("main", {
  imports: [createPinoModule()],
  providers: [DemoProvider]
})
```

inject:

```ts
import { OnModuleInstalled } from "@istanbul/app";
import { PinoService } from "@istanbul/pino-logger";

export class DemoProvider implements OnModuleInstalled {
  pinoService: PinoService;

  constructor(params: {pinoService: PinoService}) {
    this.pinoService = params.pinoService;
  }

  async onModuleInstalled = () => {
    this.pinoService.info("Hello World");
  }
}
```

#### With Http Middleware

With this option, you can use the pino logger in the http middleware.

import:

```ts
import { createApp } from "@istanbul/app";
import { createHttpServer } from "@istanbul/http";
import { createPinoHttpMiddleware } from "@istanbul/pino-logger";

const app = createApp();
const server = createHttpServer();
server.use(createPinoHttpMiddleware());
const app.register(server);
```

use:

```ts
import { createRouter, Request, Response } from "@istanbul/http";

const router = createRouter({prefix: "api"})
router.get("/", (req : Request, res : Response) => {
  const msg : string = "Hello World"
  req.logger.info(msg);
  res.send(msg);
})
```

#### With Websocket Middleware

With this option, you can use the pino logger in the websocket middleware.

import and use:

```ts
import { createApp } from "@istanbul/app";
import { createWsApp, Socket, Request, Response } from "@istanbul/ws";
import { createPinoWsMiddleware } from "@istanbul/pino-logger";

const app = createApp();
const ws = createWsApp();
ws.use(createPinoWsMiddleware());
const app.register(ws);

ws.listen("hello-world", (socket : Socket, req : Request, res : Response) => {
  socket.data.logger.info("Hello World");
  next();
})
```

#### With Hook

With this option, you can use the pino logger in the hook.

import and use:

```ts
import { createPinoLogger } from "@istanbul/pino-logger";

const logger = createPinoLogger();
logger.info("Hello World");
```