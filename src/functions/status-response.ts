import type { HttpResponseInit } from '@azure/functions';
import packageJson from '../../package.json';

export function createStatusResponse(): HttpResponseInit {
  return {
    status: 200,
    headers: {
      'cache-control': 'no-store',
    },
    jsonBody: {
      status: 'ok',
      version: packageJson.version,
    },
  };
}
