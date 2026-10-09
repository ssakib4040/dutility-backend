import { app, type HttpResponseInit } from '@azure/functions';

import { createStatusResponse } from './status-response';

export function mobileStatusHandler(): HttpResponseInit {
  return createStatusResponse();
}

app.http('mobile-status', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'mobile/status',
  handler: mobileStatusHandler,
});
