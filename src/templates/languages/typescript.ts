/** INFO: taking into consideration most common build tools and stacks as well as
 * as well as OS cross compatibility
 **/
import { GitIgnoreTemplate } from "../../types//types";

export const typescript: GitIgnoreTemplate = {
  id: Date.now(),
  name: "TypeScript",
  key: "typescript",
  description: "TypeScript projects with Vite",
  content: `
# Dependencies
node_modules/
.pnpm-store/
.npm/
package-lock.json
yarn.lock
pnpm-lock.yaml

# Build outputs
dist/
build/
out/
.output/
*.tsbuildinfo

# Vite specific
.vite/
.rollup.cache/

# TypeScript
*.tsbuildinfo
*.js.map
*.d.ts.map

# Environment & Secrets
.env
.env.*
!.env.example
*.pem
.npmrc
.yarnrc
.pnpmrc
*.key
*.cert
credentials.json
config.json

# IDE & Editor
.vscode/*
!.vscode/extensions.json
!.vscode/launch.json
!.vscode/tasks.json
.idea/
*.swp
*.swo
.DS_Store
.history/
*.sublime-workspace
*.sublime-project
.project
.settings/
.classpath
.factorypath

# Testing
coverage/
.nyc_output/
junit.xml
test-results/
cypress/videos/
cypress/screenshots/
*.lcov
.coverage
htmlcov/

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
.pnpm-debug.log*

# Cache & Temporary files
.cache/
.temp/
.tmp/
tmp/
temp/
.eslintcache
.stylelintcache
.prettiercache
*.tgz
.turbo

# OS specific
## macOS
.DS_Store
.AppleDouble
.LSOverride
Icon
._*
.Spotlight-V100
.Trashes

## Windows
Thumbs.db
ehthumbs.db
Desktop.ini
$RECYCLE.BIN/
*.cab
*.msi
*.msm
*.msp
*.lnk

## Linux
*~
.fuse_hidden*
.directory
.Trash-*
.nfs*

# Miscellaneous
.vercel
.netlify
.serverless/
.webpack/
*.bak
*.orig
.git-rewrite/
    `.trim(),
};
