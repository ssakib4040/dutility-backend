import assert from 'node:assert/strict';
import { test } from 'node:test';

import packageJson from '../../package.json';
import { statusHandler } from '../src/functions/status';

test('statusHandler reports the project version', () => {
    const response = statusHandler();

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
