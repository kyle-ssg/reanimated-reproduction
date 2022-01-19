#!/bin/bash
if [ -z "$APPCENTER_ACCESS_TOKEN" ]
then
    echo "$APPCENTER_ACCESS_TOKEN not defined"
    cd ./ios && arch -x86_64 pod install --repo-update && cd ..
else
    echo "$APPCENTER_ACCESS_TOKEN is defined"
fi
