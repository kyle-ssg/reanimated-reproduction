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

<img src="http://image.prntscr.com/image/81147f28c68c413cb9ce9774b639396e.png"/>
