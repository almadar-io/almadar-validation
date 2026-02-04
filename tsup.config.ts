import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts', 'error-codes.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  treeshake: true,
});
