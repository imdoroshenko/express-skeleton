Expressjs skeleton app
=======================

# Install & run

#### Manual installation & run

Clone source code
```shell
$ git clone git@github.com:imdoroshenko/express-skeleton.git my_app --depth=1
$ cd my_app
$ git fetch --unshallow
```
Set remotes
```shell
$ git remote rename origin skeleton
$ git remote add origin  git@github.com:me/my_app.git
$ git config remote.skeleton.tagopt --no-tags
```

Install dependencies
```shell
node-skeleton$ npm install
```

Run application
```shell
node-skeleton$ npm start
```

Update skeleton
```shell
git fetch skeleton
git checkout -b skeleton_vX.X.X
git merge skeleton/master
```


# Test

 All files with test code must be placed in ./test/ folder. You must put integration tests in ```./test/integration/``` and unit
 tests in ```./test/unit/```.

 Run tests manually
 ```shell
 node-skeleton$ npm test
 ```

# Versions
  Use Semantic Versioning for version numbers.

  Tags for new version must be created only in master branch.

  To create new version you need switch to master branch and use following commands.

  For patch update
  ```shell
    $ npm version patch -m "message"
    $ git push --follow-tags origin master
  ```

  For minor update
  ```shell
    $ npm version minor -m "message"
    $ git push --follow-tags origin master
  ```

  For major update
  ```shell
    $ npm version major -m "message"
    $ git push --follow-tags origin master
  ```

  For additional details visit following links
  - http://semver.org/
  - https://docs.npmjs.com/cli/version
