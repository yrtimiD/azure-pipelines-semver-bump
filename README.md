# Semantic Version Bump 
Azure DevOps Pipelines task for Builds and Releases

Bumps (increments) version saved in an environment variable.

Wraps well known [node-semver](https://github.com/npm/node-semver) library `inc()` function.

### Usage
* Define and populate variable which will hold a version
* Add a task to your pipeline
* Put the name of your version variable into "Version variable name" field
* Select desired "Increment level"
* Optionally: change "pre id" prefix

Version value is read from the configured environment variable, incremented accordingly and written back to the same variable.

![Configuration](screenshots/screenshot1.png)
