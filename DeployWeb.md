Deploy web
==================================
*Prerequesite*

```
npm i ssg-frontend-cli -g
ssg-frontend {myproject} {com.solidstategroup.myproject}
```

---------------

# Initialise git
```
git init
git remote add origin https://git.solidstategroup.com/kyle/test-deployment.git
git add .
git commit -m "Initial"
git push -u origin master
```

# Set your flynn cluster
```
#lists your flynn clusters
flynn cluster
flynn cluster default mycluster
```

# Create an app
```
flynn create myapp --remote prod
flynn create myapp-dev --remote dev
```

# Push to app
```$ git push dev```

# Set env environment variable
This determines which project.js file is deployed, this will default to project_dev.js.


