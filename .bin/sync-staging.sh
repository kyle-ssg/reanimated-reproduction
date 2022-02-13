VERSION=$(node ./.bin/./get-version.js)
SOURCE=master
TARGET=mobile/staging/$VERSION

#This ensures that a staging/$VERSION exists whenever master is pushed to, so that native versions can be patched
git checkout -b $TARGET && git merge $SOURCE | echo "Branch already exists."
git push HEAD:$TARGET --no-verify --force -o ci.skip
