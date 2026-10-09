import { app, type HttpResponseInit } from '@azure/functions';

import { createStatusResponse } from './status-response';

export function statusHandler(): HttpResponseInit {
  return createStatusResponse();
}

app.http("status", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "status",
  handler: statusHandler,
});
