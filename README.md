# Semantic version bump task 
for Azure DevOps Pipelines

Wraps well know [node-semver](https://github.com/npm/node-semver) library `inc()` function, allowing easy version bumping during Azure builds or releases.

### Usage
Version will be read from the environment variable named as the "Version variable name" parameter. 
So variable with this name must be already defined.

Incremented version will go back to the same variable, and can be used in any subsequent build step.
