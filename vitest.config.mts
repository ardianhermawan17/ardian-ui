import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['./scripts/testing-setup.ts'],
    environment: 'jsdom',
    include: ['**/*.test.?(c|m)[jt]s?(x)'],
    retry: 1,
  },
});
