#!/bin/bash

# $1 = App ID
# $2 = Code Push Environment
# $3 - Git branch
# $4 - iOS/Android
_ENV=${ENV:-dev}
echo "Using project_$_ENV.ts"
cp ./.env/project_$_ENV.ts ./common/project.ts
