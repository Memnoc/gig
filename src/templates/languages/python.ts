/** INFO: taking into consideration most common build tools and stacks as well as
 * as well as OS cross compatibility
 **/
import { GitIgnoreTemplate } from "../../types/types";

export const python: GitIgnoreTemplate = {
  id: Date.now(),
  name: "Node.js",
  description: "Node.js projects with npm/yarn/pnpm",
  content: `
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
.python-version

# Virtual Environments
.env/
.venv/
env/
venv/
ENV/
pythonenv*
.tox/

# Distribution / packaging
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# Unit test / coverage
htmlcov/
.tox/
.nox/
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
*.py,cover
.hypothesis/
.pytest_cache/
cover/
.ruff_cache/
junit-*.xml

# IPython/Jupyter
.ipynb_checkpoints
*.ipynb
profile_default/
ipython_config.py

# Environment & Secrets
.env
.env.*
!.env.example
*.pem
config.yaml
config.yml
credentials.json
secrets/

# IDE & Editor
.idea/
.vscode/*
!.vscode/extensions.json
!.vscode/launch.json
!.vscode/tasks.json
*.swp
*.swo
.project
.pydevproject
.settings/
*.sublime-workspace
*.sublime-project

# Logs and databases
*.log
*.sqlite
*.sqlite3
*.db
celerybeat-schedule
celerybeat.pid

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

# Tools and frameworks
.scrapy/
.serverless/
.elasticbeanstalk/
.chalice/
.mypy_cache/
.pyre/
.pytype/
.ruff_cache/
.dmypy.json
dmypy.json

# Documentation
/site
docs/_build/
    `.trim(),
};
