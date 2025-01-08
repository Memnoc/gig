/** INFO: taking into consideration most common build tools and stacks as well as
 * as well as OS cross compatibility
 **/
import { GitIgnoreTemplate } from "../../types/types";

export const ruby: GitIgnoreTemplate = {
  id: Date.now(),
  name: "Node.js",
  description: "Node.js projects with npm/yarn/pnpm",
  content: `
# Ruby/Rails specific
*.gem
*.rbc
/.config
/coverage/
/InstalledFiles
/pkg/
/spec/reports/
/spec/examples.txt
/test/tmp/
/test/version_tmp/
/tmp/
.dat*
.repl_history
build/
*.bridgesupport
.rvmrc

# Rails
/.bundle/
/vendor/bundle
/lib/bundler/man/
.env*
!.env.example
/db/*.sqlite3
/db/*.sqlite3-journal
/db/*.sqlite3-[0-9]*
/public/system
/coverage/
/spec/tmp
*.orig
rerun.txt
pickle-email-*.html
.byebug_history
.env
config/initializers/secret_token.rb
config/master.key
config/credentials/*.key
storage/
public/assets
.rakeTasks

# RVM/rbenv/asdf
.ruby-version
.ruby-gemset
.rbenv-vars
.rvmrc
.tool-versions

# Dependency directories
/node_modules
/yarn-error.log
yarn-debug.log*
.yarn-integrity
/vendor/bundle/
/vendor/ruby/

# Logs and databases
*.log
*.sql
*.sqlite
*.sqlite3
/log/*
!/log/.keep
/tmp/*
!/tmp/.keep

# Documentation cache and generated files
/.yardoc/
/_yardoc/
/doc/
/rdoc/

# Environment & Secrets
.env
.env.*
!.env.example
*.pem
config/master.key
config/credentials.yml.enc
config/database.yml
config/secrets.yml

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
.generators
.rakeTasks

# Testing
/spec/tmp
/spec/examples.txt
/spec/reports/
/test/tmp/
/test/version_tmp/
coverage/
.rspec
capybara-*.html
.rspec_status

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

# Caches
/.sass-cache
/public/assets
.eslintcache
.stylelintcache
.cache/

# Server
.pid
*.pid
*.pid.lock
    `.trim(),
};
