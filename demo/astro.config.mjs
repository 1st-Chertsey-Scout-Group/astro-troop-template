// @ts-check
import { defineConfig } from 'astro/config';

import { basecampIntegrations } from "basecamp";

// https://astro.build/config
export default defineConfig({
  integrations: [...basecampIntegrations()]
});