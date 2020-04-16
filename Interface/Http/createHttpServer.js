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

function showView(viewRef, applicationController, interfaceParams, res) {
  const view = applicationController.createViewFromViewRef(viewRef);

  const viewName = view.name;
  const htmlView = require(`${interfaceParams.rootDir}/${viewName}`);
  const body = htmlView(view, applicationController, interfaceParams);

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
      const parsedBody = parse(body);
      const parsedBodyAsObject = JSON.parse(JSON.stringify(parsedBody));
      callback(parsedBodyAsObject);
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

        if (req.method === "GET") {
          const viewName = decodeURIComponent(parsedUrl.pathname.substring(1));
          if(viewName){
            const searchParams = new URLSearchParams(parsedUrl.query);
            const viewParams = {};
            for (const key of searchParams.keys()) {
              viewParams[key] = searchParams.get(key);
            }
            const nextViewRef = {
              name: viewName,
              params: viewParams
            }
            showView(nextViewRef, applicationController, interfaceParams, res);
          }
          else{
            const nextViewRef = applicationController.executeStartAction();

            // TODO ACY Rediriger vers GET/ viewName?viewParams
            showView(nextViewRef, applicationController, interfaceParams, res);
          }          
        } else if (req.method === "POST") {
          collectRequestData(req, (actionParams) => {
            const actionName = decodeURIComponent(parsedUrl.pathname);
            const nextViewRef = applicationController.executeAction(
              actionName,
              actionParams
            );

            // TODO ACY Rediriger vers GET/ viewName?viewParams
            showView(nextViewRef, applicationController, interfaceParams, res);
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
