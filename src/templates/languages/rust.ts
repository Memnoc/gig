/** INFO: taking into consideration most common build tools and stacks as well as
 * as well as OS cross compatibility
 **/
import { GitIgnoreTemplate } from "../../types/types";

export const rust: GitIgnoreTemplate = {
  id: Date.now(),
  name: "Node.js",
  description: "Node.js projects with npm/yarn/pnpm",
  content: `
# Rust specific
/target/
**/*.rs.bk
*.pdb
Cargo.lock

# Debug
*.dSYM/
*.su
*.idb
*.pdb

# IDE
.idea/
.vscode/*
!.vscode/extensions.json
!.vscode/launch.json
!.vscode/tasks.json
*.swp
*.swo
.project
.settings/

# Environment & Secrets
.env
.env.*
!.env.example
*.pem
config.toml
credentials.json
secrets/

# Build and Dependencies
debug/
release/
build/
target/
build-debug/
build-release/
*.rlib
*.rmeta
*.dll
*.dylib
*.so
*.a

# Tests and Coverage
coverage/
tarpaulin-report.*
lcov.info

# Documentation
/target/doc/
/doc/
book/

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

# Misc
*.bk
*.log
tmp/
temp/
.cache/
flamegraph.svg
perf.*
    `.trim(),
};