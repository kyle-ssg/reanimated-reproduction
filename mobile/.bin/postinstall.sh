#!/bin/bash
if [ -z "$APPCENTER_BUILD_ID" ]
then
    echo "APPCENTER_BUILD_ID not defined"
    cd ./ios && arch -x86_64 pod install --repo-update && cd ..
else
    echo "APPCENTER_BUILD_ID is defined"
fi
