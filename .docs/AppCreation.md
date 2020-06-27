The following guide tells you exactly how to get apps on beta and web deployed.

#Prerequesite
This will clone the boilerplate and setup the bundle id appropriately / add to git.

```
npm i ssg-frontend-cli -g
ssg-frontend {myproject} {com.solidstategroup.myproject}
git init
git remote add origin {REPO_URL}
git add .
git commit -m "Initial"
git push -u origin master
```

# Create Web

## Step 1 create project in ssg gitlab and push
The urls will be created per branch by zeit, check the pipelines.
