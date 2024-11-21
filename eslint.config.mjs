import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "react-hooks": pluginReactHooks
    },
    rules: {
      "react-hooks/rules-of-hooks": "error", // Hooks 규칙 강제
      "react-hooks/exhaustive-deps": "warn", // useEffect 의존성 배열 체크
      "react/react-in-jsx-scope": "off",
    },
  }
];