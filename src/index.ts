import { app } from '@azure/functions';

app.setup({
    enableHttpStream: true,
});

require('./functions/status');
