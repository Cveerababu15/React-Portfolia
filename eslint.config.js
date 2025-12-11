import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["dist/"],
  },
  pluginJs.configs.recommended,
  {
    ...pluginReactConfig,
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ...pluginReactConfig.languageOptions,
      globals: {
        ...globals.browser,
      },
    },
    settings: {
        react: {
            version: "detect"
        }
    }
  },
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": "warn",
      "no-unused-vars": ["error", { "varsIgnorePattern": "^[A-Z_]" }],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    },
  },
];