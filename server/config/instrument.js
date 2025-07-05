// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://0c7003d1a8e6f51e39de5522d352def1@o4509611418320896.ingest.us.sentry.io/4509611425136640",
  integrations: [nodeProfilingIntegration(), Sentry.mongoIntegration()],

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
