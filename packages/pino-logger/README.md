
## !! Not ready for production, experimental

<p align="center">
<br>
<img src="https://avatars.githubusercontent.com/u/108695351?s=200&v=4" width="128" height="128">
</p>
<h3 align="center">@galatajs/pino-logger</h3>
<p align="center">
  Pino Logger package of <code>galatajs</code> framework. 
</p>

### What Is It?

It allows you to logging on GalataJS Framework using the Pino package.

Features:
- Use pino the way you want
- Use pino in http middleware
- Use pino in websocket middleware
- Use pino in galatajs module
- Use pino in hook

### Installation

Note: This package is 1st degree dependent on ``galatajs`` to work. Please take a look at [`@galatajs/app`](https://www.npmjs.com/package/@galatajs/app) first if you haven't. 

```sh
npm install @galatajs/pino-logger pino
```

> or with yarn
>
> ```sh
> yarn add @galatajs/pino-logger pino
> ```

### Usage Options

#### With module

With this option, import the pino module provided by `galatajsjs` in your main module, then inject and use it in a module provider of your choice.

import:

```ts
import { createPinoModule } from "@galatajs/pino-logger";
import { createModule, Module } from "@galatajs/app";
import { DemoProvider } from "./demo.provider"

const mainModule : Module = createModule("main", {
  imports: [createPinoModule()],
  providers: [DemoProvider]
})
```

inject:

```ts
import { OnModuleInstalled } from "@galatajs/app";
import { PinoService } from "@galatajs/pino-logger";

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
import { createApp } from "@galatajs/app";
import { createHttpServer } from "@galatajs/http";
import { createPinoHttpMiddleware } from "@galatajs/pino-logger";

const app = createApp();
const server = createHttpServer();
server.use(createPinoHttpMiddleware());
const app.register(server);
```

use:

```ts
import { createRouter, Request, Response } from "@galatajs/http";

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
import { createApp } from "@galatajs/app";
import { createWsApp, Socket, Request, Response } from "@galatajs/ws";
import { createPinoWsMiddleware } from "@galatajs/pino-logger";

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
import { createPinoLogger } from "@galatajs/pino-logger";

const logger = createPinoLogger();
logger.info("Hello World");
```