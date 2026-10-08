# Dutility backend

This repository contains the Azure Functions API for Dutility. It uses the Node.js v4 programming model and deploys to Azure Functions Flex Consumption through `azd` and Bicep.

## Boundaries

- Keep HTTP functions under `src/functions/` and register them from `src/index.ts`.
- Keep routes explicit and stable. The project removes Azure Functions' default `/api` prefix.
- Read the application version from `package.json`; do not duplicate it in function source.
- Never commit `local.settings.json`, Azure credentials, connection strings, function keys, or third-party API keys.
- Never expose secrets through `EXPO_PUBLIC_*` variables.
- Do not add conversion endpoints until their input limits, output format, failure behavior, retention policy, and processing engine are defined.
- Do not embed Azure function keys in the Expo app. Public mobile endpoints require application-level authentication and rate limiting when sensitive or costly behavior is added.
- Prefer managed identity for Azure resources.

## Long-running work

HTTP responses from Azure Functions are limited in duration. File conversions that may exceed the HTTP response window must use an asynchronous job contract backed by Blob Storage and Queue Storage, with separate status and result endpoints.

Native conversion binaries such as LibreOffice or Poppler require an execution environment that explicitly supports those system dependencies. Do not assume they are available in the standard Functions runtime.

## Local development

```powershell
Copy-Item local.settings.example.json local.settings.json
npm install
npm run build
npm run storage
npm start
```

Run `npm run storage` in a separate terminal. Azurite provides the local Blob, Queue, and Table storage endpoints used by the Functions host and future conversion jobs.

## Quality gates

Run before declaring backend work complete:

```powershell
npm run check
```

For changes to Azure infrastructure, also validate the Bicep deployment and inspect the `azd` environment before provisioning.
