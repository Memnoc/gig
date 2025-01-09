/** INFO: taking into consideration most common build tools and stacks as well as
 * as well as OS cross compatibility
 **/
import { GitIgnoreTemplate } from "../../types/types";

export const kotlin: GitIgnoreTemplate = {
  id: Date.now(),
  name: "Kotlin",
  key: "kotlin",
  description: "Kotlin projects with Gradle",
  content: `
# Kotlin
*.class
*.log
*.ctxt
.mtj.tmp/
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar
hs_err_pid*
replay_pid*

# Gradle
.gradle/
build/
gradle-app.setting
!gradle-wrapper.jar
!gradle-wrapper.properties
.gradletasknamecache

# Maven
target/
pom.xml.tag
pom.xml.releaseBackup
pom.xml.versionsBackup
pom.xml.next
release.properties
dependency-reduced-pom.xml

# Build
out/
build/
bin/
.kotlintest/
kotlin-js-store/

# IDE
.idea/
*.iml
*.iws
*.ipr
.idea_modules/
.vscode/*
!.vscode/extensions.json
!.vscode/launch.json
!.vscode/tasks.json

# Android Studio
*.apk
*.ap_
*.dex
*.class
bin/
gen/
local.properties
.classpath
.project
proguard/
*.iws
*.iml
.idea/workspace.xml
.idea/tasks.xml
.idea/gradle.xml
.idea/dictionaries
.idea/libraries
.gradle/
build/
captures/
.externalNativeBuild
.cxx/

# Environment & Secrets
.env
.env.*
!.env.example
*.pem
*.jks
*.keystore
*.p12
*.key
secrets.properties

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

# Testing
.testresult/
test-output/
reports/
jacoco.exec

# Logs
*.log
logs/
    `.trim(),
};
