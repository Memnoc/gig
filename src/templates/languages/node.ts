/* INFO: the template I usually use */

import { GitIgnoreTemplate } from "../../types//types";

export const node: GitIgnoreTemplate = {
  id: Date.now(),
  name: "Node.js",
  description: "Node.js projects with npm/yarn/pnpm",
  content: `
# Dependencies
node_modules/
.pnp
.pnp.js

# Build output
dist/
build/

# Environment variables
.env
.env.local
.env.*.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories
.idea/
.vscode/
*.swp
*.swo

# Operating System
.DS_Store
Thumbs.db
    `.trim(),
};
