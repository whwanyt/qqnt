import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import commonjsExternals from "vite-plugin-commonjs-externals";

export default defineConfig({
  plugins: [
    dts(),
    commonjsExternals({
      externals: ["path", /^electron(\/.+)?$/],
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "@qqnt/tookit",
      fileName: "index",
    },
  },
});
