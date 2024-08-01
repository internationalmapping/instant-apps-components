import stencil from 'unplugin-stencil/vite';
import { defineConfig } from 'vitest/config';

const isCI = process.env.CI === 'true';

export default defineConfig({
  test: {
    environment: 'jsdom',
    browser: {
      enabled: true,
      provider: 'playwright',
      headless: isCI ? true : false,
      name: 'chromium',
    },
  },
  plugins: [stencil()],
});
