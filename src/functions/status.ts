import { app, type HttpResponseInit } from "@azure/functions";
import packageJson from "../../package.json";

export function statusHandler(): HttpResponseInit {
  return {
    status: 200,
    headers: {
      "cache-control": "no-store",
    },
    jsonBody: {
      status: "okk",
      version: packageJson.version,
    },
  };
}

app.http("status", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "status",
  handler: statusHandler,
});
