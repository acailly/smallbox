const http = require("http");
const url = require("url");
const { parse } = require("querystring");

function applyCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, POST, GET, PUT, DELETE"
  );
}

function showCurrentView(applicationController, interfaceParams, res) {
  const viewName = applicationController.getCurrentViewName();
  const view = require(`${interfaceParams.rootDir}/${viewName}`);
  const body = view(applicationController, interfaceParams);

  const data = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Interface Http</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
    </head>
    <body>
      ${body} 
    </body>
    </html>
  `;

  res.setHeader("Content-type", "text/html");
  res.end(data);
}

// From https://itnext.io/how-to-handle-the-post-request-body-in-node-js-without-using-a-framework-cd2038b93190
function collectRequestData(request, callback) {
  const FORM_URLENCODED = "application/x-www-form-urlencoded";
  if (request.headers["content-type"] === FORM_URLENCODED) {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      callback(parse(body));
    });
  } else {
    callback(null);
  }
}

function createHttpServer(applicationController, interfaceParams) {
  http
    .createServer(async function (req, res) {
      console.log(`Interface/Http ${req.method} ${req.url}`);

      try {
        if (req.method === "OPTIONS") {
          res.statusCode = 204;
          applyCors(res);
          res.end();
          return;
        }

        const parsedUrl = url.parse(req.url);

        applyCors(res);

        // TODO ACY Quand doit on utiliser les queryParams ?
        // const searchParams = new URLSearchParams(parsedUrl.query);
        // const params = {};
        // for (const key of searchParams.keys()) {
        //   params[key] = searchParams.get(key);
        // }

        if (req.method === "GET") {
          showCurrentView(applicationController, interfaceParams, res);
        } else if (req.method === "POST") {
          collectRequestData(req, (result) => {
            const bodyParams = new URLSearchParams(result);
            const actionParams = {};
            for (const key of bodyParams.keys()) {
              actionParams[key] = bodyParams.get(key);
            }

            const actionName = decodeURIComponent(parsedUrl.pathname);
            applicationController.executeAction(actionName, actionParams);

            showCurrentView(applicationController, interfaceParams, res);
          });
        }
      } catch (e) {
        console.error(`Interface/Http ${req.method} ${req.url}`, e);
        res.statusCode = 500;
        res.setHeader("Content-type", "text/plain");
        res.end(e.stack);
        return;
      }
    })
    .listen(interfaceParams.port);
}

module.exports = createHttpServer;
