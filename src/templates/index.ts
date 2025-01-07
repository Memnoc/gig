export interface GitIgnoreTemplate {
  id: number;
  name: string;
  description: string;
  content: string;
}

type TemplateKey = "node" | "python" | "typescript" | "go" | "ruby";

export const templates = new Map<TemplateKey, GitIgnoreTemplate>([
  [
    "node",
    {
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
    },
  ],
  // more templates later
]);

export function getTemplates(key: TemplateKey): GitIgnoreTemplate | undefined {
  return templates.get(key);
}

export function listTemplates(): GitIgnoreTemplate[] {
  return Array.from(templates.values());
}
