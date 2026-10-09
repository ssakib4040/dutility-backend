import assert from 'node:assert/strict';
import { test } from 'node:test';

import packageJson from '../package.json';
import { mobileStatusHandler } from '../src/functions/mobile-status';

test('mobileStatusHandler reports the project version', () => {
  const response = mobileStatusHandler();

  assert.equal(response.status, 200);
  assert.equal(
    (response.headers as Record<string, string>)['cache-control'],
    'no-store',
  );
  assert.deepEqual(response.jsonBody, {
    status: 'ok',
    version: packageJson.version,
  });
});
