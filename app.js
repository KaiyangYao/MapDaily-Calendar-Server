const express = require("express");
const requestProxy = require("express-request-proxy");

const app = express();

app.get(
  "/calendar",
  requestProxy({
    url: "https://webapps.macalester.edu/eventscalendar/events/ical/",
    transforms: [
      {
        name: "customer header",
        headers: {
          "x-frame-options": "",
          "Access-Control-Allow-Origin": "*"
        },
      },
    ],
  })
);

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080");
});
