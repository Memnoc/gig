/** INFO: taking into consideration most common build tools and stacks as well as
 * as well as OS cross compatibility
 **/
import { GitIgnoreTemplate } from "../../types/types";

export const go: GitIgnoreTemplate = {
  id: Date.now(),
  name: "Go",
  key: "go",
  description: "Node.js projects with npm/yarn/pnpm",
  content: `
# Binaries and build outputs
*.exe
*.exe~
*.dll
*.so
*.dylib
*.test
*.out
bin/
dist/

# Go specific
*.o
*.a
_obj
_test
_testmain.go
cmd/*/debug
*.test
/vendor/
/go.work

# Test binary, built with 'go test -c'
*.test
*.prof
/coverage.*
/cover.*
*.coverage
*.coverprofile

# Environment & Secrets
*.env
.env*
!.env.example
*.pem
config.yaml
config.yml
credentials.json
secrets/
.netrc

# IDE & Editor
.idea/
.vscode/*
!.vscode/extensions.json
!.vscode/launch.json
!.vscode/tasks.json
*.swp
*.swo
*~
.project
.settings/
*.sublime-workspace
*.sublime-project

# Debug
debug/
debug.test
*.debug
__debug_bin
__debug_bin.*

# Temporary files
tmp/
temp/
.tmp/
*.tmp
*.bak
*.log
.DS_Store

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

# Project specific
api/generated/
.air.toml
swagger.*
*.pb.go
*.gen.go
.golangci.yaml
.goreleaser.yaml

# Cache directories
.cache/
    `.trim(),
};
