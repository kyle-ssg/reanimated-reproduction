#!/bin/bash

# $1 = Code Push Environment
_ENV=${ENV:-dev}
echo "Using project_$_ENV.js"
cp ../.env/project_$_ENV.js ../common/project.js

if [ $1 = 'Production' ]; then
    read -p "Are you sure? " -n 2 -r
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        appcenter codepush release-react -a Solid-State-Group/Hero-Wellbeing-iOS -d Production --disable-duplicate-release-error --plist-file ./ios/mobile/Info.plist
        appcenter codepush release-react -a Solid-State-Group/Hero-Wellbeing-Android -d Production --disable-duplicate-release-error
    fi
    exit 1
elif [ $1 = 'Staging' ]; then
    appcenter codepush release-react -a Solid-State-Group/Hero-Wellbeing-iOS -d Staging --disable-duplicate-release-error --plist-file ./ios/mobile/Info-Staging.plist
    appcenter codepush release-react -a Solid-State-Group/Hero-Wellbeing-Android -d Staging --disable-duplicate-release-error
fi
