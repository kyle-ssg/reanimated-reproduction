#!/bin/bash

if [[ !$APPCENTER_BUILD_ID ]]
then
    cd ./ios && pod install && cd ..
else
    if [[ $APPCENTER_XCODE_PROJECT ]]
    then
        cd ./ios && pod install --repo-update && cd ..
    fi
fi
