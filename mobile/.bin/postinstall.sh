#!/bin/bash

if [[ -z "$APPCENTER_ACCESS_TOKEN" ]]
then
    cd ./ios && pod install && cd ..
else
    if [[ -n "$APPCENTER_XCODE_PROJECT" ]]
    then
        cd ./ios && pod install && cd ..
    fi
fi
