# Dutility backend

Azure Functions v4 API for Dutility. The project currently exposes one public status endpoint and is the foundation for future conversion jobs.

## Requirements

- Node.js 24
- Azure Functions Core Tools 4
- Azure Developer CLI (`azd`) for provisioning and deployment
- Azurite when Blob, Queue, or Table storage is used locally

## Local setup

```powershell
Copy-Item local.settings.example.json local.settings.json
npm install
npm run build
npm run storage
npm start
```

Run `npm run storage` in one terminal and `npm start` in another. The local API listens on `http://localhost:7071` by default.

## API

### `GET /status`

Returns the service status and the version declared in `package.json`.

```json
{
  "status": "ok",
  "version": "1.0.0"
}
```

This endpoint is intentionally anonymous, contains no sensitive information, and sends `Cache-Control: no-store`.

## Quality checks

```powershell
npm run check
```

## Deployment

The included Bicep provisions an Azure Functions Flex Consumption app on Node.js 24, managed storage access, Application Insights, and optional virtual networking.

Review the selected Azure subscription, region, resource names, networking choice, and expected cost before provisioning:

```powershell
azd env list
azd up
```

Do not put credentials in source control or in client-visible Expo environment variables. Azure app settings or managed identities must hold production secrets.
