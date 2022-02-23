#!/bin/bash
if [ -z "$APPCENTER_BUILD_ID" ]&&[ -z "$CI" ]
then
    echo "APPCENTER_BUILD_ID and CI not defined"
    cd ../ && npm i && cd ./mobile
    cd ./ios && arch -x86_64 pod install --repo-update && cd ..
else
    echo "APPCENTER_BUILD_ID is defined"
fi
