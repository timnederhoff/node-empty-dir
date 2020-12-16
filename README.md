# Empty-dir

With empty dir command you ensure 2 things:
1. there is a directory present specified by the path
2. the directory specified by the path is empty

If the directory is not present, it will be created (recursively). 
If the directory is present but not empty, it will be emptied.
Uses [fs-extra](https://www.npmjs.com/package/fs-extra)

## Usage
For example, make sure the target test reports/results directory is created, and is also empty:
```
$ empty-dir test-results && ng e2e
```
or as a npm script:
```
{
  "scripts": {
    "e2e": "empty-dir test-results && ng e2e"
    ...
  }
}
```

## TODO
* write tests
