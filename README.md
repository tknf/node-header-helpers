# @tknf/node-header-helpers
## Get Started

### Install
```bash
yarn add @tknf/node-header-helpers
# or
npm install --save @tknf/node-header-helpers
```

### Use on express
```js
import express from "express";
import { getContentTypeHeader, TextHtml } from "@tknf/node-header-helpers";

const app = express();

app.get("/", async (req, res) => {
  res.set(getContentTypeHeader(), TextHtml());
  return res.status(200).send(`<body>Hello world!</body>`);
});
```