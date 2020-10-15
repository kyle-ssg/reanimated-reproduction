#!/bin/bash
# $1 = AppCenter ID
# $2 = Code Push Environment
# $3 - Git branch
# $4 - iOS/Android
# $5 - Code Push ID
# $6 - Target (required for iOS only)
# 0 = "="
# 1 = ">"
# 2 = "<"
# i.e. vercomp 2.1 2.2 == "<"

vercomp () {
    if [[ $1 == $2 ]]
    then
        return 0
    fi
    local IFS=.
    local i ver1=($1) ver2=($2)
    # fill empty fields in ver1 with zeros
    for ((i=${#ver1[@]}; i<${#ver2[@]}; i++))
    do
        ver1[i]=0
    done
    for ((i=0; i<${#ver1[@]}; i++))
    do
        if [[ -z ${ver2[i]} ]]
        then
            # fill empty fields in ver2 with zeros
            ver2[i]=0
        fi
        if ((10#${ver1[i]} > 10#${ver2[i]}))
        then
            return 1
        fi
        if ((10#${ver1[i]} < 10#${ver2[i]}))
        then
            return 2
        fi
    done
    return 0
}

ios_target=$6
export ios_target

# Checkout last commit to compare the last version number
commitSHA=$(appcenter build branches list -a $1 | grep -A8 -E "Branch: +$3" | grep -E -m 1 'Commit SHA: +' | awk '{split($0,a,": "); print a[2]}' | sed 's/^ *//g')
git reset --hard HEAD
git checkout $commitSHA
if [[ $4 == "ios" ]]
then
    lastVersion=$(awk "/\/\* Pods-appcenter-staging.release.xcconfig \*\/;/,0" ios/mobile.xcodeproj/project.pbxproj | grep "MARKETING_VERSION" | head -1 | awk '{split($0,a,"= "); print a[2]}' | sed 's/;$//')
else
    # - // Use this Android alternative and tweak "awk 'NR == 2'" when overriding versionName via product flavors
    # - currentVersion=$(grep 'versionName' android/app/build.gradle | awk 'NR == 2' | grep -o '".*"' | tr -d '"')
    lastVersion=$(grep 'versionName' android/app/build.gradle | grep -o '".*"' | tr -d '"')
fi
git checkout $3
npm run env_script
if [[ $4 == "ios" ]]
then
    currentVersion=$(awk "/\/\* Pods-appcenter-staging.release.xcconfig \*\/;/,0" ios/mobile.xcodeproj/project.pbxproj | grep "MARKETING_VERSION" | head -1 | awk '{split($0,a,"= "); print a[2]}' | sed 's/;$//')
else
    # - // Use this Android alternative and tweak "awk 'NR == 2'" when overriding versionName via product flavors
    # - currentVersion=$(grep 'versionName' android/app/build.gradle | awk 'NR == 2' | grep -o '".*"' | tr -d '"')
    currentVersion=$(grep 'versionName' android/app/build.gradle | grep -o '".*"' | tr -d '"')
fi
echo "Last version: ${lastVersion:-N/A}. Current version: $currentVersion"
vercomp $lastVersion $currentVersion
if [[ $? == 2 ]]
then
    echo "Queueing new native build ($currentVersion) on AppCenter"
    appcenter build queue -a $1 -b $3
else
    echo "Code-pushing new bundle to $2 environment on AppCenter"
    if [[ $4 == "ios" ]]
    then
        appcenter codepush release-react -a $5 -d $2 --disable-duplicate-release-error -t $currentVersion
    else
        # - // Use this Android alternative when overriding versionName via product flavors
        # - appcenter codepush release-react -a $5 --target-binary-version $currentVersion -d $2 --disable-duplicate-release-error
        appcenter codepush release-react -a $5 -d $2 --disable-duplicate-release-error
    fi
fi
