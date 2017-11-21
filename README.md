# Empty-dir

With empty dir command you ensure 2 things:
1. there is a directory present specified by the path
2. the directory specified by the path is empty

If the directory is not present, it will be created (recursively). 
If the directory is present but not empty, it will be emptied.
Uses [fs-extra](https://www.npmjs.com/package/fs-extra)

## TODO
* write tests