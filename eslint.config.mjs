import nextConfig from "eslint-config-next";
import nextTypeScriptConfig from "eslint-config-next/typescript";

export default [
  {
    ignores: [
      ".next/**",
      ".next-dev/**",
      "node_modules/**",
      "out/**",
      "scripts/**",
      "tests/**",
      "*.config.js",
      "*.config.mjs",
      "next-env.d.ts",
    ],
  },
  ...nextConfig,
  ...nextTypeScriptConfig,
  {
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/refs": "warn",
      "react-hooks/purity": "warn",
    },
  },
];
