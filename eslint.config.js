// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  pluginJs.configs.recommended, // Recommended JS rules
  ...tsEslint.configs.recommended, // Recommended TS rules (includes base recommended for TS files)
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Apply these rules to these file types
    // Configuration common to all files
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsEslint.parser, // Use TypeScript parser
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
        // It's good practice to specify your tsconfig.json for type-aware linting
        // project: './tsconfig.json', // Uncomment and adjust if you need type-aware rules
      },
      globals: {
        ...globals.browser, // Browser globals (e.g., window, document)
        ...globals.node, // Node.js globals (e.g., process, require)
      },
    },
    settings: {
      react: {
        version: "detect", // Auto-detect React version
      },
    },
    plugins: {
      react: pluginReactConfig,
      "jsx-a11y": pluginJsxA11y.configs.recommended,
      "@typescript-eslint": tsEslint.plugin, // Add TypeScript ESLint plugin
    },
    rules: {
      // Your custom rules here. Note the change in how rules are referenced.
      // For plugin rules, you'll generally use "plugin-name/rule-name"
      // Example: 'react/react-in-jsx-scope': 'off', // Not needed with React 17+ JSX transform
      "react/jsx-uses-react": "off", // No need to import React in JSX with new transform
      "react/react-in-jsx-scope": "off", // No need to import React in JSX with new transform
      "react/prop-types": "off", // Usually turned off when using TypeScript for prop validation
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Allow unused vars starting with _
      // ... more rules
    },
  },
);
