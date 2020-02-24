#!/bin/bash

if [[ -z "$APPCENTER_BUILD_ID" ]]
then
    cd ./ios && pod install && cd ..
else
    if [[ -n "$APPCENTER_XCODE_PROJECT" ]]
    then
        cd ./ios && pod install --repo-update && cd ..
    fi
fi
